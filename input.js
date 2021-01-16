const { COMMAND } = require("./constants");
let connection;

const setupInput = function(conn) {
  const stdin = process.stdin; //take input from user
  connection = conn; // using connection
  const handleUserInput = function (data) {
    // if (data === "w") {
    //   conn.write('Move: up');
    // } else if (data === "s") {
    //   conn.write('Move: down');
    // } else if (data === "a") {
    //   conn.write('Move: left');
    // } else if (data === "d") {
    //   conn.write("Move: right");
    // } else if (data === "q") {
    //   conn.write("Say: I am gonna save you!");
    // } else if (data === "z") {
    //   conn.write("Say: how's going?");
    // } else if (data === "c") {
    //   conn.write("Say: Covid-19 will gone");
    // } else if (data === "l") {
    //   conn.write("Say: Don't forgot to eat")
    // } else if (data === "1") {
    //   conn.write("Say: ");//clear the canned message
    // }
    conn.write(COMMAND[data]); //callback
    if (data === '\u0003') {
      process.exit();
    }///ctril c  call
  }
  stdin.setRawMode(true); //change mode into input bring to the raw mode
  stdin.setEncoding('utf8'); //stander input
  stdin.resume();
  stdin.on("data",handleUserInput); //any data user enter , whenrer data coming in, will  handle it // data is an argument  //click event is in browser 
  return stdin;
}

module.exports = { setupInput };


  // conn.on('connect', () => {
  //   console.log('Successfully connected to game server');
  //   conn.write('Name: BBH');
  //   conn.write("Move: down");
  //   conn.write("Move: right");
  //   conn.write('Move: up');
  //   conn.write('Move: up');
  // })