// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');
// let obj = new ObjectID();
// console.log(obj);

MongoClient.connect(
  'mongodb://localhost:27017/TodoApp',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    if (err) {
      return console.log('Unable to connect to Mongo Server');
    }
    console.log('Connected to Mongo Server');
    const db = client.db('TodoApp');
    db.collection('Todos').insertOne(
      {
        text: 'Ship CYK by 11 pm',
        completed: false,
      },
      (err, result) => {
        const message = err
          ? `Unable to insert Todo ${err}`
          : JSON.stringify(result.ops);
        console.log(message);
      }
    );
    db.collection('Users').insertOne(
      {
        name: 'Marco',
        age: 42,
        location: 'Durango',
      },
      (err, result) => {
        const message = err
          ? `Unable to insert User ${err}`
          : JSON.stringify(result.ops);
        console.log(message);
      }
    );
    client.close();
  }
);
