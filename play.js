const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    // host: '10.0.2.15',
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('data', (data) => {
		console.log('Server says: ', data);
		});
  return conn;
}

console.log('Connecting ...');
connect();

// const net = require('net');
// const conn = net.createConnection({ 
//   host: 'localhost', // change to IP address of computer or ngrok host if tunneling
//   port: 3000 // or change to the ngrok port if tunneling
// });

// conn.setEncoding('utf8'); // interpret data as text
// conn.on('connect', () => {
//   conn.write('Hello from client!');
// });
// conn.on('data', (data) => {
//   console.log('Server says: ', data);
// });