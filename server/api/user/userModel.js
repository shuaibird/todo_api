var mongoose = require('mongoose')
var bcrypt = require('bcrypt')

var userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})

userSchema.pre('save', function(next) {
  if (!this.isModified('password'))
    return next()
  this.password = this.encryptPassword(this.password)
  next()
})

useSchema.methods = {
  authenticate: function(plainTextPassword) {
    return bcrypt.compareSync(plainTextPassword, this.password)
  },
  encryptPassword: function(plainTextPassword) {
    if (!plainTextPassword) {
      return ''
    } else {
      var salt = bcrypt.genSaltSync(10)
      return bcrypt.hashSync(plainTextPassword, salt)
    }
  }
}

var userModel = mongoose.model('user', userSchema)

module.exports = userModel
