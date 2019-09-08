const {MongoClient} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser: true, useUnifiedTopology: true}, (err, client)=>{
  const msg = (err)? 'Unabale to connect to Server' : 'Connected to Server';
  console.log(msg);
  const db = client.db('TodoApp');

db.collection('Users').find({location: 'Durango'}).toArray().then((docs)=>{
  console.log('Users');
  console.log(JSON.stringify(docs, undefined, 2));
}, (err)=>{
  console.log(`Unable to fetch Todos ${err}`);
});

});