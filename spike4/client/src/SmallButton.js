import React from 'react';

function SmallButton (props) {
  return (
    <svg width='50' height='50'>
      <circle cx='25' cy='25' r='20' stroke='black' strokeWidth='3' fill={props.colour}/>
    </svg>
  );
}

export default SmallButton;