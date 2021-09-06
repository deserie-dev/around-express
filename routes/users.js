const usersRouter = require('express').Router();
const { getUsers, getUserById, createUser } = require('../controllers/users');

usersRouter.get('/users', getUsers); // returns all users
usersRouter.get('/users/:id', getUserById); // returns a user by id
usersRouter.post('/users', createUser); // creates a new user

module.exports = usersRouter;
