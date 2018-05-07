const eventFunctionMap = new Map();

let enabled = false;

function addKeyboardListener (key, fn) {
  eventFunctionMap.set(key, fn);
}

function removeKeyboardListener (key) {
  eventFunctionMap.delete(key);
}

function processKeyUp (event) {
  if (eventFunctionMap.has(event.key)) {
    eventFunctionMap.get(event.key)();
  }
}

function enableClientKeyboard () {
  if (!enabled) {
    window.addEventListener('keyup', processKeyUp);
    enabled = true;
  }
}

function disableClientKeyboard () {
  if (enabled) {
    window.removeEventListener('keyup', processKeyUp);
    enabled = false;
  }
}


export {
  enableClientKeyboard,
  disableClientKeyboard,
  addKeyboardListener,
  removeKeyboardListener
};