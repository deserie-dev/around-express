const cardsRouter = require('express').Router();
const fs = require('fs').promises;
const path = require('path');

const dataPath = path.join(__dirname, '..','data','cards.json')

cardsRouter.get('/', (req, res) => {
   return fs.readFile(dataPath, { encoding: 'utf8' })
   .then(data => JSON.parse(data))
   .then(cards => res.status(200).send(cards))
   .catch(err => res.status(400).send(err))
});

module.exports = cardsRouter;




// const express = require('express');
// const cardsRouter = express.Router();
// const fs = require('fs');

// cardsRouter.get('/', (req, res) => {
//   fs.readFile('./data/cards.json', {encoding: 'utf8'})
//     .then((data) => {
//       res.status(200).send(JSON.parse(data));
//     });
// });

// module.exports = cardsRouter;