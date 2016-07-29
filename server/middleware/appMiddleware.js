var morgan = require('morgan')
var bodyParser = require('body-parser')

module.exports = app => {
  app.use(morgan('dev'))
  app.use(bodyParser.urlencoded({extended: true}))
  app.use(bodyParser.json())
}
