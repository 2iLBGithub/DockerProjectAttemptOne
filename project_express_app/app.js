const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch'); // Ensure you have node-fetch installed
const app = express();
const port = 3001; 
app.use(cors({ origin: 'http://localhost:3000' }));

app.get('/', (req, res) => {
  res.send('Oi from Express!');
});

app.get('/message', (req, res) => {
  res.json({message: 'Hello there from Express!'});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.get('/fetch-deck', async (req, res) => {
  const response = fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
  const data = await response.json();
  res.json(data);
})

app.get('/draw-deck/:deckId', async (req, res) => {
  const deckId = req.params.deckId;
  const response = await fetch('https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1')
  const data = await response.json();
  res.json(data);
})