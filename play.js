const { connect } = require('./client.js');
const net = require("net");

console.log("Connecting ...");
connObj = connect();

connObj.write("Move: up");

setInterval(() => {
  connObj.write("Move: up");
}, 100);
