const net = require('net');

//establishes a connection with the game server

const connect = function () {
  const conn = net.createConnection({
    host: '10.0.2.15',
    port: 50541
  });

  conn.on("connect", (data) => {
    console.log('Server says: ', data);
  })

  // interpet incoming data as text
  conn.setEncoding('utf-8');

  return conn;
};

console.log("Connecting...");
connect();

module.exports = {connect};