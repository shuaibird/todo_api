var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/test')

var TodoSchema = new mongoose.Schema({
  name: String,
  completed: Boolean
})

var Todo = mongoose.model('puppies', TodoSchema)

Todo.create({
  name: `set life's goals`,
  completed: false
}).then(todo => console.log(todo))
