const { connect } = require('./client.js');
const { setupInput } = require('./input.js');


console.log("Connecting ...");
let connObj = connect();
setupInput(connObj);
