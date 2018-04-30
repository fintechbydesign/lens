import React from 'react';

function BigButton (props) {
  return (
    <svg width='100' height='50' onClick={props.onClick}>
      <rect width='100' height='50' rx='25' ry='25' stroke='black' fill='black'/>
      <rect x='2' y='2' width='96' height='46' rx='23' ry='23' stroke='black' fill='white'/>
      <text x='50' y='30' style={{'textAnchor': 'middle', 'fontFamily': 'arial'}}>{props.text}</text>
    </svg>
  );
}

export default BigButton;