import io from 'socket.io-client';
import { enableClientKeyboard } from "./keyboard";

function listenForArduino (keyToFunctionMap) {
  const socket = io('http://localhost:1971');  // TODO - remove explicit port
  socket.on('connect_error', enableClientKeyboard);
  socket.on('buttonPress', event => {
    const key = event.key;
    if (keyToFunctionMap[key]) {
      keyToFunctionMap[key]();
    } else {
      console.log(`buttonpress event with key '${key}' with no mapped function`);
    }
  });
}

export {
  listenForArduino
}