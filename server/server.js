const express = require('express');
const http = require('http');
const io = require('socket.io');
const readLine = require('readline');
const path = require('path');

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
const stream = process.stdin;
readLine.emitKeypressEvents(stream);
if (stream.isTTY) {
  stream.setRawMode(true);
}
stream.on('keypress', (str, key) => {
  const { ctrl, name } = key;
  if (ctrl && name === 'c') {
    console.log('Closing server');
    process.exit();
  } else {
    console.log(`keypress: ${name}`);
    socketsServer.emit('buttonPress', {key: name});
  }
});

// start server
httpServer.listen(config.port, () => {
  console.log('\x1Bc');
  console.log(`Server listening on port ${config.port}`);
  console.log('Available key presses: [1,2,3,4,5,6,7,8,9,s(ubmit),r(eset), b(uttons)]');
});




