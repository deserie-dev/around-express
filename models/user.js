const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return /^(http:\/\/|https:\/\/)(www.)?[a-zA-Z0-9-._~:/?%#[\]@!$&'()*+,;=]+#?$/igm.test(v);
      },
      message: 'Please enter a valid link',
    },
  },
});

module.exports = mongoose.model('user', userSchema);

// https://mongoosejs.com/docs/validation.html#custom-validators
