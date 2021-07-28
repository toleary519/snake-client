const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '10.0.2.15',
    port: '50541',
  });

  conn.on('connect', () => {
    console.log(`Successfully connected to game server`);
  });


  // conn.on('connect', () => { conn.write(`Move: up`); });

  // conn.on('connect', () => { setTimeout(() => { conn.write(`Move: up`)}, 50)});

  conn.on('connect', () => { conn.write( `Name: TGO` )});


  conn.setEncoding("utf8");

  return conn;
}

connect();

