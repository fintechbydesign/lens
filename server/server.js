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

// set up http and ws server
const app = express();
const httpServer = http.createServer(app);
const socketsServer = io(httpServer, socketsOptions);

// serve client files
const webRoot = path.resolve(__dirname, '../client/build');
app.use("/", express.static(webRoot));

// set up for console input
// const stream = process.stdin;
// readLine.emitKeypressEvents(stream);
// if (stream.isTTY) {
//   stream.setRawMode(true);
// }
// stream.on('keypress', (str, key) => {
//   const { ctrl, name } = key;
//   if (ctrl && name === 'c') {
//     console.log('Closing server');
//     process.exit();
//   } else {
//     console.log(`keypress: ${name}`);
//     socketsServer.emit('buttonPress', {key: name});
//   }
// });
//initialize serial connection with a single byte parser
const ByteLength = serialPort.parsers.ByteLength;
let serialConnection = new serialPort(process.argv[2], {
  baudRate: 9600
});
const parser = serialConnection.pipe(new ByteLength({length: 8}));

serialConnection.open(function () {
  console.log('open');

  serialConnection.on('data', function(data) {
    let buff = new Buffer(data);
    console.log('data received: ' + buff.toString('utf8'));
    socketsServer.emit('buttonPress', {key: buff.toString('utf8')});
  });
});



//error handling
serialConnection.on("error", function () {
  console.error("Can't establish serial connection with " + process.argv[2]);
  process.exit(1);
});

// start server
httpServer.listen(config.port, () => {
  console.log('\x1Bc');
  console.log(`Server listening on port ${config.port}`);
});



