var mongoose = require('mongoose')

var categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  }
})

var categoryModel = mongoose.model('category', categorySchema)

module.exports = categoryModel
