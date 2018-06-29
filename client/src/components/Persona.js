import React from 'react';
import './Persona.css'

// This is quite similar to the general Datasource component, but has different props and styling

function Persona (props) {
    const classes = props.selected ?
        'flexContainerRow persona_container persona_selected' :
        'flexContainerRow persona_container';
    return (
        <div className={classes}>
            <div className={props.selected ? "button_selected" : "button"}><p>&#60;</p></div>
            <img src={props.avatarSrc}  alt='persona icon' className='persona_image' />
            <div className='flexDynamicSize persona_text'>
                <div className="heading">
                    {props.nameAge}
                </div>
                <p className="text">
                    {props.location}
                </p>
                <p className="text">
                    {props.currentJob}
                </p>
                <p className="text">
                    {props.description}
                </p>
            </div>
        </div>
    );
}


export default Persona;