var mongoose = require('mongoose')

var postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  text: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user'
  },
  category: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'category'
    }
  ]
})

var postModel = mongoose.model('post', postSchema)

module.exports = postModel
