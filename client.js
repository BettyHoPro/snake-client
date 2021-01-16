const { IP, PORT } = require('./constants');
const net = require('net');

const abc = function() {
  const conn = net.createConnection({ 
    // host: '10.0.2.15',
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  process.stdin.setEncoding('utf-8');
  
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: BBH');
    // conn.write("Move: down");
    // conn.write("Move: right");
    // conn.write('Move: up');
    // conn.write('Move: up');
  })
  return conn;
}
module.exports = { cat: abc };///ob
//module.exports = 
