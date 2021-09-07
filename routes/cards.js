const cardsRouter = require('express').Router();
const {
  getCards, createCard, deleteCardById, likeCard, unlikeCard,
} = require('../controllers/cards');

cardsRouter.get('/cards', getCards); // returns all cards
cardsRouter.post('/cards', createCard); // creates a new card
cardsRouter.delete('/cards/:cardId', deleteCardById); // deletes a card by id
cardsRouter.put('/cards/:cardId/likes', likeCard); // like a card
cardsRouter.delete('/cards/:cardId/likes', unlikeCard); // unlike a card

module.exports = cardsRouter;
