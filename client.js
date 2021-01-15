const net = require('net');
const connect = function() {
  const conn = net.createConnection({ 
    // host: '10.0.2.15',
    host: 'localhost',
    port: 50541
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
  });
  conn.on('connect', () => {
    conn.write( "Move: up");   
  });
  conn.on('connect', () => {
    conn.write( "Move: down");   
  });
  conn.on('connect', () => {
    conn.write( "Move: left");   
  });
  conn.on('connect', () => {
    conn.write( "Move: right");   
  });
 
 
  return conn;
}
module.exports = connect;

