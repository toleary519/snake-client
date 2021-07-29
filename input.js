// Stores the active TCP connection object.
const conn = require('./client')

let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = function () {
  console.log("im inside handle:")
  process.stdin.on('data', (key) => {
    console.log("im inside process", key)
    if (key === '\u0003') {
      console.log("inside exit")
      process.exit();
    } else if (key === 'w') {
      connection.write('Move: up');
    } else if (key === 's') {
      connection.write('Move: down');
    } else if (key === 'd') {
      connection.write('Move: right');
    } else if (key === 'a') {
      connection.write('Move: left');
    }
  }
)};

module.exports = {setupInput, handleUserInput};