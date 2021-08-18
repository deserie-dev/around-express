//JSON list of all cards
const cardsRouter = require('express').Router();
const fs = require('fs').promises;
const path = require('path');

const dataPath = path.join(__dirname, '..','data','cards.json')

cardsRouter.get('/', (req, res) => {
   return fs.readFile(dataPath, { encoding: 'utf8' })
   .then(data => JSON.parse(data))
   .then(cards => res.status(200).send(cards))
   .catch(err => res.status(404).send(err))
});

module.exports = cardsRouter;