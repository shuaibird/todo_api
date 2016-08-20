var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
})

var userModel = mongoose.model('user', userSchema)

module.exports = userModel
