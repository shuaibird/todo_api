var User = require('./userModel')

exports.params = (req, res, next, id) => {
  User.findById(id)
    .then(user => {
      if(!user) {
        next(new Error('No user with that id'))
      } else {
        req.user = user
        next()
      }
    }, err => next(err))
}

exports.get = (req, res, next) => {
  User.find({})
    .then(users => res.json(users), err => next(err))
}

exports.getOne = (req, res, next) => {
  var user = req.user
  res.json(user)
}

exports.put = (req, res, next) => {
  var user = req.user
  var update = req.body

  Object.assign(user, update)

  user.save((err, saved) => {
    if(err)
      next(err)
    else
      res.json(saved)
  })
}

exports.post = (req, res, next) => {
  var newuser = req.body

  User.create(newuser)
    .then(user => res.json(user), err => next(err))
}

exports.delete = (req, res, next) => {
  req.user.remove((err, removed) => {
    if(err)
      next(err)
    else
      res.json(removed)
  })
}
