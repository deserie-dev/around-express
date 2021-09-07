const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  owner: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  likes: {
    required: true,
    type: [mongoose.Schema.Types.ObjectId],
    default: [],
  },
  link: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return /^(http:\/\/|https:\/\/)(www.)?[a-zA-Z0-9-._~:/?%#[\]@!$&'()*+,;=]+#?$/igm.test(v);
      },
      message: 'Please enter a valid link',
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('card', cardSchema);
