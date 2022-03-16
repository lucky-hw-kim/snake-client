const net = require('net');

//establishes a connection with the game server

const connect = function () {
  const conn = net.createConnection({
    host: '10.0.2.15',
    port: 50541
  });

  conn.on("data", (data) => {
    console.log('Server says: ', data);
  })

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  })

  conn.on("connect",() => {
    conn.write("Name: LUK")
  })

  // interpet incoming data as text
  conn.setEncoding('utf-8');

  return conn;
};

console.log("Connecting...");
connect();

module.exports = {connect};