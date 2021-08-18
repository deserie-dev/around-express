const express = require('express');
const router = express.Router();
const path = require('path');

const usersRouter = require("./routes/users.js");
const cardsRouter = require("./routes/cards.js");

const { PORT = 3000 } = process.env;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

router.use('/cards', cardsRouter);
router.use('/users', usersRouter);


app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
