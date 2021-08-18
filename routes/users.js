const express = require("express");
const router = express.Router();
const fs = require('fs');

router.get('/', (req, res) => {
  fs.readFile('./data/users.json', {encoding: 'utf8'})
    .then((data) => {
      res.status(200).send(JSON.parse(data));
    });
});

router.get('/:_id', (req, res) {
  fs.readFile('./data/users.json', {encoding: 'utf8'})
    .then((data) => {
      const parsedData = JSON.parse(data);
      const user = parsedData.find(user => user._id === req.params._id);

      if (user) {
        return res.status(200).send(user);
      }
      return res.status(404).send({ 'message': 'User ID no found' });
    })
});


module.exports = router;

