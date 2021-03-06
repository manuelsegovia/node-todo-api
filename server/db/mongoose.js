const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
});

module.exports = { mongoose };

/*
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp',{useNewUrlParser: true, useFindAndModify: false});
*/
