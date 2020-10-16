const promisify = require('util').promisify
const Elm = require('./dist/main.js').Elm
const elm = Elm.Main.init()

function main(args){
  const input = parseInt(args[0])
  elm.ports.get.send(input)
  return elm
}

module.exports = main
