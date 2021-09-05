const User = require('../models/user');

const getUsers = (req, res) => {
  User.find({})
    .then((users) => res.send({ data: users }))
    .catch(() => res.status(500).send({ message: 'Unable to find users' }));
};

const getUserById = (req, res) => {
  User.findById(req.params.id)
    .then((user) => res.send({ data: user }))
    .catch(() => res.status(500).send({ message: 'Unable to find user' }));
};

const createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(400).send({ message: 'Invalid data' });
      } else if (err.name === 'CastError') {
        res.status(404).send({ message: 'Invalid request' });
      } else {
        res.status(500).send({ message: 'Error occured on the server' });
      }
    });
};

// const createUser = (req, res) => {
//   const { name, about, avatar } = req.body;
//   User.create({ name, about, avatar })
//     // .then((user) => res.status(200).send(user))
//     .then((user) => res.send({ data: user }))
//     .catch(() => res.status(500).send({ message: 'Unable to create user' }));
// };

module.exports = { getUsers, getUserById, createUser };
