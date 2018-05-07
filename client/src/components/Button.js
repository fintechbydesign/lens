import React from 'react';
import { addKeyboardListener, removeKeyboardListener } from "../hardware/keyboard";

function Button (props) {
  // mouse
  const selected = props.enable ? props.selected.bind(null, props.text): null;

  // keyboard
  if (props.enable) {
    addKeyboardListener(String(props.text), selected);
  } else {
    removeKeyboardListener(String(props.text));
  }

  // visual
  const fill = props.on ? props.colour : 'white';

  //render
  return (
    <svg width='50' height='50' className={props.className} onClick={selected}>
      <circle cx='25' cy='25' r='20' stroke='black' strokeWidth='3' fill={fill}/>
      <text x='25' y='30'>{props.text}</text>
    </svg>
  );
}

export default Button;