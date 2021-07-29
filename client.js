const net = require('net');

const constants = require('./constants');

const connect = function () {
  const conn = net.createConnection({
    host: constants.IP,
    port: constants.PORT
});

  conn.on('connect', () => {
    console.log(`Successfully connected to game server`);
  });

  conn.on('connect', () => { conn.write( `Name: TGO` )});
  
  conn.on("error", (err) => {
    console.log(err);
  })
  // conn.on('connect', () => { conn.write(`Move: up`); });

  // conn.on('connect', () => { setTimeout(() => { conn.write(`Move: up`)}, 50)});

  conn.setEncoding("utf8");

  return conn;
}

module.exports = {connect};

