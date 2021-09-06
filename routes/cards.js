const cardsRouter = require('express').Router();
const { getCards, createCard, deleteCardById } = require('../controllers/cards');

cardsRouter.get('/cards', getCards); // returns all cards
cardsRouter.post('/cards', createCard); // creates a new card
cardsRouter.delete('/cards/:cardId', deleteCardById); // deletes a card by id

module.exports = cardsRouter;
