import React from 'react';
import './Poll.css'

function Poll (props) {
  const classes = props.selected ?
      'flexContainerRow Poll_container Poll_selected' :
      'flexContainerRow Poll_container';
  return (
      <div className={classes}>
      <div className={props.selected ? "poll_button_selected" : "poll_button"}><p>&#60;</p></div>
        <div className='flexDynamicSize'>
          <div className="heading poll_choice">
            {props.pollChoice}
          </div>
          <div className="text poll_description">
            {props.pollDescription.map(text => <p>{text}</p>)}
          </div>
        </div>
      </div>
  );
}

export default Poll;
