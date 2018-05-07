import React from 'react';
import './Datasource.css'

function Datasource (props) {
  const actionDescription = `You: ${props.actionDescription}`;
  const actionShows = `This shows: ${props.actionShows}`;
  const classes = props.selected ?
    'flexContainerRow Datasource_container Datasource_selected' :
    'flexContainerRow Datasource_container';
  const selected = props.selected ?
    (<img src='/Check_mark.svg' alt='datasource selected' width='75' height='30'/>) :
    null;
  return (
    <div className={classes}>
      <img src={props.iconSrc} width='100' height='40' alt='datasource icon' className='Datasource_image' />
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

export default Datasource;