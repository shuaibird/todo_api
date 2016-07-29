var config = require('./server/config/config')
var app = require('./server/server')

var logger = require('./server/util/logger')
logger.log(process.env.NODE_ENV)

app.listen(config.port)
logger.log(`listening on http://localhost:${config.port}`)
