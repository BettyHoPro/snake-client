let connection;

const setupInput = function(conn) {
  const stdin = process.stdin; //take input from user
  connection = conn; // using connection
  const handleUserInput = function (data) {
    if (data === "w"){
      conn.write('Move: up');
    } else if (data === "s"){
      conn.write('Move: down');
    } else if (data === "a"){
      conn.write('Move: left');
    } else if (data === "d"){
      conn.write("Move: right");
    }
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