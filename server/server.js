var express = require('express')
var app = express()
var api = require('./api/api')
var err = require('./middleware/err')
var config = require('./config/config')

require('mongoose').connect(config.db.url)

require('./middleware/appMiddleware')(app)

app.use('/api', api)

app.use(err())

module.exports = app
