import React from 'react';
import './Persona.css'

// This is quite similar to the general Datasource component, but has different props and styling

function Persona (props) {
    const classes = props.selected ?
        'flexContainerRow persona_container persona_selected' :
        'flexContainerRow persona_container';
    const selected = props.selected ?
        (<img src='/Check_mark.svg' alt='persona selected' width='75' height='30'/>) :
        null;
    return (
        <div className={classes}>
            <img src={props.avatarSrc}  alt='datasource icon' className='persona_image' />
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
            {selected}
        </div>
    );
}


export default Persona;