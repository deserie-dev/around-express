const userRouter = require('express').Router();
const fs = require('fs').promises;
const path = require('path');

const dataPath = path.join(__dirname, '..','data','users.json')

userRouter.get('/', (req, res) => {
   fs.readFile(dataPath, { encoding: 'utf8' })
   .then(data => JSON.parse(data))
   .then(users => res.status(200).send(users))
   .catch(err => res.status(400).send(err))
});

userRouter.get('/:id', (req, res) => {
  fs.readFile(dataPath, { encoding: 'utf8' })
  .then(data => JSON.parse(data))
  .then(users => users.find(user => user._id === req.params.id))

  .then(user =>  {
    if (user) {
      return res.status(200).send(user)
    }
    return res.status(404).send({ "message": "User ID not found" })
  })
  .catch(err => res.status(400).send(err))
});

module.exports = userRouter;

// const express = require('express');
// const usersRouter = express.Router();
// const fs = require('fs');

// usersRouter.get('/', (req, res) => {
//   fs.readFile('./data/users.json', {encoding: 'utf8'})
//     .then((data) => {
//       res.status(200).send(JSON.parse(data));
//     });
// });

// usersRouter.get('/:_id', (req, res) => {
//   fs.readFile('./data/users.json', {encoding: 'utf8'})
//     .then((data) => {
//       const parsedData = JSON.parse(data);
//       const user = parsedData.find(user => user._id === req.params._id);

//       if (user) {
//         return res.status(200).send(user);
//       }
//       return res.status(404).send({ 'message': 'User ID no found' });
//     })
// });


// module.exports = usersRouter;

