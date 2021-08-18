const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('cards', (req, res) => {
  fs.readFile('./data/cards.json', {encoding: 'utf8'})
    .then((data) => {
      res.status(200).send(JSON.parse(data));
    });
});

module.exports = router;