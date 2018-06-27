import React from 'react';
import './Datasource.css'

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
            <img src={props.avatarSrc} width='100' height='40' alt='datasource icon' className='persona_image' />
            <div className='flexDynamicSize'>
                <div>
                    {props.nameAge}
                </div>
                <div>
                    {props.location}
                </div>
                <div>
                    {props.currentJob}
                </div>
                <div>
                    {props.description}
                </div>
            </div>
            {selected}
        </div>
    );
}


export default Persona;