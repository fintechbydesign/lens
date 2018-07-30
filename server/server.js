const express = require('express');
const http = require('http');
const io = require('socket.io');
const readLine = require('readline');
const path = require('path');
const serialPort = require("serialport");

let failedReconnects = 0;

const config = {
  port: 1971
};

const socketsOptions = {
  serveClient: false
};

const reconnectSerialPort = (socketsServer, msg) => {
  console.error(msg);
  setTimeout(() => {
    console.log('Reconnecting...');
    initSerialPort(socketsServer)
  }, 250 );
};

// initialize serial connection with a single byte parser
const initSerialPort = (socketsServer ) => {
  const device = process.argv[2];
  const serialConnection = new serialPort(device, {
    baudRate: 9600
  });
  // const parser = serialConnection.pipe(new serialPort.parsers.ByteLength({length: 8}));

  serialConnection.open(function () {
    console.log('open');
    failedReconnects = 0;
    serialConnection.on('data', (data) => {
      const key = new Buffer(data).toString('utf8');
      console.log('data received: ' + key);
      socketsServer.emit('buttonPress', {key});
    });
  });
  serialConnection.on("close", () => {
    reconnectSerialPort(socketsServer, "Serial connection hang up");
  });
  serialConnection.on("error", (error) => {
    failedReconnects = failedReconnects + 1;
    if (failedReconnects < 120) {
      reconnectSerialPort(socketsServer, `Can't establish serial connection with ${process.argv[2]}: error: ${error}`);
    } else {
      console.error('Failed to reconnect after 30 seconds, exiting');
      process.exit(1);
    }
  });
};

// set up http and ws server
const app = express();
const httpServer = http.createServer(app);
const socketsServer = io(httpServer, socketsOptions);

// serve client files
const webRoot = path.resolve(__dirname, '../client/build');
app.use("/", express.static(webRoot));

// start serial port listening
initSerialPort(socketsServer);

// start server
httpServer.listen(config.port, () => {
  console.log('\x1Bc');
  console.log(`Server listening on port ${config.port}`);
});




