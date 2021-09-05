const cardsRouter = require('express').Router();
const { getCards, createCard, deleteCardById } = require('../controllers/cards');

cardsRouter.get('/', getCards); // returns all cards
cardsRouter.post('/', createCard); // creates a new card
cardsRouter.delete('/:id', deleteCardById); // deletes a card by id

module.exports = cardsRouter;
