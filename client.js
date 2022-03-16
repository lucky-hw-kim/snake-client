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

  conn.on("connect", () => {
    // setTimeout(()=> {
    //   conn.write("Move: left")
    // },600)

    // setTimeout(()=> {
    //   conn.write("Move: left")
    // },900)

    // setTimeout(()=> {
    //   conn.write("Move: down")
    // },1000)

    // setTimeout(()=> {
    //   conn.write("Move: right")
    // },1200)

    // setInterval(() => {
    //   conn.write("Move: down")
    //   conn.write("Move: right")
    // },300)
    
    conn.write("Name: LUK")
  })


  // interpet incoming data as text
  conn.setEncoding('utf-8');

  return conn;
};

console.log("Connecting...");
connect();

module.exports = {connect};