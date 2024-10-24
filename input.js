const { movementCommands } = require("./constants");

let connection;

const handleUserInput = function(key) {
  if (key === "\u0003") {
    process.exit();
  } else if (key === "w") {
    connection.write(movementCommands['w']);
  } else if (key === "a") {
    connection.write(movementCommands['a']);
  } else if (key === "s") {
    connection.write(movementCommands['s']);
  } else if (key === "d") {
    connection.write(movementCommands['d']);
  } else if (key === "i") {
    connection.write(movementCommands['i'])
  } else if (key === "q") {
    connection.write(movementCommands['q'])
  }
};

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setupInput };