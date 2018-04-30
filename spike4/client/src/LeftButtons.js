import React from 'react';
import SmallButton from './SmallButton';
import Spacer from './Spacer';

function LeftButtons (props) {
  const buttonGroup = (
    <div className='flexContainerColumn'>
      <Spacer style={{'margin-top':'75px'}}/>
      <SmallButton colour='red'/>
      <SmallButton colour='green'/>
      <SmallButton colour='blue'/>
    </div>
  );
  return (
    <div id='left-buttons-area' className='flexFixSize flexContainerColumn'>
      {buttonGroup}
      {buttonGroup}
      {buttonGroup}
    </div>
  );
}

export default LeftButtons;