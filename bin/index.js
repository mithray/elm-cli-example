const main = require('../index.js')
const c = require('ansi-colors')

const args = process.argv.slice(2,)

function colorType(variable){
  const type = typeof variable
  var res = ""
  switch(type){
    case "number":
      res = c.magenta(variable)
      break
    case "function":
      res = c.cyan(variable)
      break
    case "string":
      res = c.yellow(variable)
      break
    case "boolean":
      res = c.red(variable)
      break
    default:
      res = variable
  }
  return res
}

function formatOutput(input, output){
  inputType = typeof input
  outputType = typeof output
  input = colorType(input)
  output = colorType(output)
  return ""
    + c.bold(
      input
    )
    + c.dim(
      " : <" + inputType + ">"
    )
    + c.green.bold(
      " → "
    )
    + c.bold(
      output
    )
    + c.dim(
      " : <" + outputType + ">"
    )
}

const elm = main(args)
elm.ports.put.subscribe(output=>{
  const input = parseInt(args[0])
  console.log(formatOutput(input,output))
})
