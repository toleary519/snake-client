
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = function () {
  process.stdin.on('data', (key) => {
    if (key === './u003') {
      process.exit();
    } else {
    process.stdout.write(key);
  }
})};

module.exports = setupInput;