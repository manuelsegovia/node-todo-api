const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
let id ='5d71abbeef6c592887e61752';

Todo.find({
  _id: id
}).then((todos)=>{
  console.log('Todos', todos);
});