const mongoose = require('mongoose');

const User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlegnth: 1,
  },
  name: {
    type: String,
    required: true,
    minlegnth: 1,
  },
});

module.exports = { User };
