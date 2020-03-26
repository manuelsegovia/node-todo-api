const { MongoClient, ObjectId } = require('mongodb');

MongoClient.connect(
  'mongodb://localhost:27017/TodoApp',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    const msg = err ? 'Unabale to connect to Server' : 'Connected to Server';
    console.log(msg);
    const db = client.db('TodoApp');

    db.collection('Users')
      .findOneAndUpdate(
        { name: 'Marco' },
        {
          $inc: {
            age: 55,
          },
        },
        {
          returnOriginal: false,
        }
      )
      .then(result => {
        console.log(result);
      });
  }
);
