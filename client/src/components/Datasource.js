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
            <img src={props.iconSrc} alt='datasource icon' className='Datasource_image' />
            <div className="source_name heading">
                {props.actionDescription}
            </div>
            <div className="source_options text">
                <ul>
                    {[1,2,3].map((i) => <li><p className="source_option">{i}</p>{props.options[i]}</li>)}
                </ul>
            </div>

        </div>
    </div>
  );
}

export default Datasource;
