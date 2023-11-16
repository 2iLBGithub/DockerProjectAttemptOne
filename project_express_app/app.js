const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001; 
app.use(cors({ origin: 'http://localhost:3000' }));

app.get('/', (req, res) => {
  res.send('Oi from Express!');
});

app.get('/message', (req, res) => {
  res.json({message: 'Bonjour from Express!'});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});