const IP = "localhost";
const PORT = 50541;
const movementCommands = {
  'w': 'Move up',
  'a': 'Move left',
  's': 'Move down',
  'd': 'Move right',
  'q': 'Say: Done for 2day',
  'h': 'Say: Hi everyone',
  'i': 'Say: Im the best'
};

module.exports = {
  IP,
  PORT,
  movementCommands,
};