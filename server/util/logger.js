require('colors')

var config = require('../config/config')

var noOperation = () => {}

var consoleLog = config.logging ? console.log.bind(console) : noop

var logger = {
  log: () => {
    var args = Array.prototype.slice.call(arguments).map(argument => {
      var arg

      if (typeof argument === 'object') {
        var arg = JSON.stringify(arg, null, 2)
      } else {
        arg = String(argument)
      }

      return arg.magenta
    })

    consoleLog.apply(console, args)
  }
}

module.exports = logger
