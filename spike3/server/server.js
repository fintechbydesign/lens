const express = require('express');
const http = require('http');
const io = require('socket.io');
const path = require('path');
var serialPort = require("serialport");


if (process.argv.length != 3) {
    //console.log("usage: \"node app.js <serial_port>\"");
    console.log("usage: "+ process.argv[2]);
    process.exit(0);
}

const config = {
  port: 3000
};

const app = express();
const httpServer = http.createServer(app);
const socketsOptions = {
  serveClient: false
};
const socketsServer = io(httpServer, socketsOptions);

const webRoot = path.resolve(__dirname, '../client/build');
app.use("/", express.static(webRoot));



//initialize serial connection with a single byte parser
const ByteLength = serialPort.parsers.ByteLength;
var serialConnection = new serialPort(process.argv[2], {
    baudRate: 9600
});
const parser = serialConnection.pipe(new ByteLength({length: 8}));

serialConnection.open(function () {
  console.log('open');

  serialConnection.on('data', function(data) {
    var buff = new Buffer(data);
    console.log('data received: ' + buff.toString('utf8'));
    socketsServer.emit('event', buff.toString('utf8'));
  });
});



//error handling
serialConnection.on("error", function () {
    console.error("Can't establish serial connection with " + process.argv[2]);
    process.exit(1);
});

/*
let num = 0;
const sendMessage = () => {
  socketsServer.emit('event', 'button 1 clicked')
}
*/

httpServer.listen(config.port, () => console.log(`Server listening on port ${config.port}`));

//sendMessage(); 

/* how to let the clients know of an event
  const theEvent = {};
  socketsServer.emit('event', theEvent);
 */


