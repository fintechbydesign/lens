import React from 'react';
import './SubmitButton.css';
import {addKeyboardListener} from "../hardware/keyboard";

function SubmitButton (props) {
  addKeyboardListener('s', props.onClick);
  return (
    <svg width='200' height='50' onClick={props.onClick} className='flexFixedSize SubmitButton'>
      <rect width='200' height='50' rx='25' ry='25' stroke='black' fill='black'/>
      <rect x='2' y='2' width='196' height='46' rx='23' ry='23' stroke='black' fill='red'/>
      <text x='100' y='30'>{props.text}</text>
    </svg>
  );
}

export default SubmitButton;