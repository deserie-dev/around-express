const express = require('express');
const path = require('path');
const router = require('./routes.js');

const usersRouter = require("./routes/users.js");
const cardsRouter = require("./routes/cards.js");

const { PORT = 3000 } = process.env;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
