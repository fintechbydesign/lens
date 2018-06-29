import React from 'react';
import './Poll.css'

function Poll (props) {
  const classes = props.selected ?
      'flexContainerRow Poll_container Poll_selected' :
      'flexContainerRow Poll_container';
  const selected = props.selected ?
      (<img src='/Check_mark.svg' alt='Poll selected' width='75' height='30'/>) :
      null;
  return (
      <div className={classes}>
        <div className='flexDynamicSize'>
          <div className="heading poll_choice">
            {props.pollChoice}
          </div>
          <div className="text poll_description">
            {props.pollDescription.map(text => <p>{text}</p>)}
          </div>
        </div>
        {selected}
      </div>
  );
}

export default Poll;
