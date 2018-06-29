import React from 'react';
import './Datasource.css'

function Datasource (props) {
  const classes = props.selected ?
    'flexContainerRow Datasource_container Datasource_selected' :
    'flexContainerRow Datasource_container';
  const selected = props.selected ?
    (<img src='/Check_mark.svg' alt='datasource selected' width='75' height='30'/>) :
    null;
  return (
    <div className={classes}>
      <div className='flexDynamicSize'>
        <div className="source_name heading">
            {props.actionDescription} <img src={props.iconSrc} height='57.5px' alt='datasource icon' className='Datasource_image' />
        </div>
        <div className="source_options text">
            <ul>
                <li>{props.options['1']}</li>
                <li>{props.options['2']}</li>
                <li className="last">{props.options['3']}</li>
            </ul>
        </div>
      </div>
      {selected}
    </div>
  );
}

export default Datasource;