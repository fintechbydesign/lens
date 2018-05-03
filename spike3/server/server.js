const express = require('express');
const http = require('http');
const io = require('socket.io');
const path = require('path');

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

let num = 0;
const sendMessage = () => {
  socketsServer.emit('event', 'button 1 clicked')
}

httpServer.listen(config.port, () => console.log(`Server listening on port ${config.port}`));

sendMessage();

/* how to let the clients know of an event
  const theEvent = {};
  socketsServer.emit('event', theEvent);
 */


