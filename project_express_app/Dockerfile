# Build stage
FROM node:alpine as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install && npm run build

# Production stage
FROM node:alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --only=production
COPY . ./
EXPOSE 3001
CMD ["node", "app.js"]
