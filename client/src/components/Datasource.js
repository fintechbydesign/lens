import React from 'react';
import './Datasource.css'

function Datasource (props) {
  const classes = props.selected ?
    'flexContainerRow Datasource_container Datasource_selected' :
    'flexContainerRow Datasource_container';
  return (
    <div className={classes}>
        <div className={props.selected ? "data_button_selected" : "data_button"}><p>&#60;</p></div>
        <div className="flexDynamicSize Datasource_text">
            <div className="source_name heading">
                {props.actionDescription} <img src={props.iconSrc} height='51px' alt='datasource icon' className='Datasource_image' />
            </div>
            <div className="source_options text">
                <ul>
                    <li>{props.options['1']}</li>
                    <li>{props.options['2']}</li>
                    <li className="last">{props.options['3']}</li>
                </ul>
            </div>

        </div>
    </div>
  );
}

export default Datasource;
