const Card = require('../models/card');

const getCards = (req, res) => {
  Card.find({})
    .then((cards) => res.send({ data: cards }))
    .catch(() => res.status(500).send({ message: 'Unable to find cards' }));
};

const createCard = (req, res) => {
  const { name, link } = req.body;
  console.log(req.user._id); // _id will become accessible
  Card.create({ name, link })
    .then((card) => res.send({ data: card }))
    .catch(() => res.status(500).send({ message: 'Unable to create card' }));
};

const deleteCardById = (req, res) => {
  Card.findByIdAndRemove(req.user._id)
    .then((card) => res.send({ data: card }))
    .catch(() => res.status(500).send({ message: 'Unable to delete card' }));
};

module.exports = { getCards, createCard, deleteCardById };

// A controller is a function responsible for interacting with the model.

// The controllers file describes the logic of request processing
