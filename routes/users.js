const usersRouter = require('express').Router();
const {
  getUsers, getUserById, createUser, updateProfile, updateAvatar,
} = require('../controllers/users');

usersRouter.get('/users', getUsers); // returns all users
usersRouter.get('/users/:id', getUserById); // returns a user by id
usersRouter.post('/users', createUser); // creates a new user
usersRouter.patch('/users/me', updateProfile); // update profile
usersRouter.patch('/users/me/avatar', updateAvatar); // update avatar

module.exports = usersRouter;
