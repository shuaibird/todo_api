var express = require('express')
var app = express()
var api = require('./api/api')
var err = require('./middleware/err')

require('./middleware/appMiddleware')(app)

app.use('/api', api)

app.use(err())

module.exports = app
