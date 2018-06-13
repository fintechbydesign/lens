import React from 'react';
import './Poll.css'

function Poll (props) {
  const actionDescription = `I agree with: ${props.pollDescription}`;
  const actionShows = `This shows: ${props.pollShows}`;
  const classes = props.selected ?
      'flexContainerRow Poll_container Poll_selected' :
      'flexContainerRow Poll_container';
  const selected = props.selected ?
      (<img src='/Check_mark.svg' alt='Poll selected' width='75' height='30'/>) :
      null;
  return (
      <div className={classes}>
        <div className='flexDynamicSize'>
          <div>
            {actionDescription}
          </div>
          <div>
            {actionShows}
          </div>
        </div>
        {selected}
      </div>
  );
}

export default Poll;
