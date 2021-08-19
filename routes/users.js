const userRouter = require('express').Router();
const fs = require('fs').promises;
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data', 'users.json');

// JSON list of all users
userRouter.get('/', (req, res) => {
  fs.readFile(dataPath, { encoding: 'utf8' })
    .then((data) => JSON.parse(data))
    .then((users) => res.status(200).send(users))
    .catch((err) => res.status(404).send(err));
});

// JSON of a user with an ID passed after /users.
userRouter.get('/:id', (req, res) => {
  fs.readFile(dataPath, { encoding: 'utf8' })
    .then((data) => JSON.parse(data))
    .then((users) => users.find((user) => user._id === req.params.id))

    .then((user) => {
      if (user) {
        return res.status(200).send(user);
      }
      return res.status(404).send({ message: 'User ID not found' });
    })
    .catch((err) => res.status(404).send(err));
});

module.exports = userRouter;
