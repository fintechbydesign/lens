import React from 'react';
import BigButton from './BigButton';

function BottomButtons (props) {
  return (
    <div id='bottom-buttons-area' className='flexFixedSize flexContainerRow'>
      <BigButton text='Next' onClick={props.nextClick}/>
      <BigButton text='Submit'/>
    </div>
  );
}

export default BottomButtons;