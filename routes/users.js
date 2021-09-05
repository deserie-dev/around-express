const usersRouter = require('express').Router();
const { getUsers, getUserById, createUser } = require('../controllers/users');

usersRouter.get('/', getUsers); // returns all users
usersRouter.get('/:id', getUserById); // returns a user by id
usersRouter.post('/', createUser); // creates a new user

module.exports = usersRouter;
