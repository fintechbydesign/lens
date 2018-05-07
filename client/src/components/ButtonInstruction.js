import React from 'react';
import './ButtonInstruction.css';

function ButtonInstruction (props) {
  return (
    <div className='flexFixedSize ButtonInstruction'>{props.text}</div>
  );
}

export default ButtonInstruction;