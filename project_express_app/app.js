const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch'); 
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
  const response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
  const data = await response.json();
  res.json(data);
})

// app.get('/draw-deck/:deckId', async (req, res) => {
//   const deckId = req.params.deckId;
//   const response = await fetch('https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1')
//   const data = await response.json();
//   res.json(data);
// })

app.get('/draw-deck/:deckId', async (req, res) => {
  const deckId = req.params.deckId;
    const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
    const data = await response.json();
    res.json(data);
});

// LONE QUEEN CONTENT

app.get('/fetch-lone-queen-deck', async (req, res) => {
    const response = await fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?cards=AS,2S,3S,4S,5S,6S,7S,8S,9S,0S,JS,KS,QS,AD,2D,3D,4D,5D,6D,7D,8D,9D,0D,JD,KD,AC,2C,3C,4C,5C,6C,7C,8C,9C,0C,JC,KC,AH,2H,3H,4H,5H,6H,7H,8H,9H,0H,JH,KH');
    const data = await response.json();
    res.json(data);
});
