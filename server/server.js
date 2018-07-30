const express = require('express');
const http = require('http');
const io = require('socket.io');
const readLine = require('readline');
const path = require('path');
const serialPort = require("serialport");

const config = {
  port: 1971
};

const socketsOptions = {
  serveClient: false
};

// receive Serial port data
const receiveData = (socketsServer, data) => {
  const key = new Buffer(data).toString('utf8');
  console.log('data received: ' + key);
  if (key === 'uc: Got hangup signal') {
    console.log('arduino disconnection detected, reconnecting...');
    initSerialPort(socketsServer);
  } else {
    socketsServer.emit('buttonPress', {key});
  }
}

// initialize serial connection with a single byte parser
const initSerialPort = (socketsServer ) => {
  const device = process.argv[2];
  const serialConnection = new serialPort(device, {
    baudRate: 9600
  });
  // const parser = serialConnection.pipe(new serialPort.parsers.ByteLength({length: 8}));

  serialConnection.open(function () {
    console.log('open');
    serialConnection.on('data', receiveData.bind(null, socketsServer));
  });
  serialConnection.on("error", function () {
    console.error("Can't establish serial connection with " + process.argv[2]);
    process.exit(1);
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




