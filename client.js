const net = require('net');
const {IP, PORT} = require("./constants")
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

  conn.on("connect", () => {
    // setTimeout(()=> {
    //   conn.write("Move: left")
    // },600)

    // setTimeout(()=> {
    //   conn.write("Move: left")
    // },900)
    
    conn.write("Name: LUK")
  })

  
  // interpet incoming data as text
  conn.setEncoding('utf-8');

  return conn;

};

console.log("Connecting...");
module.exports = {connect};