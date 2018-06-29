// The Results screen is basically a Datasource screen with the stuff already highlighted

import React from 'react';
import './Result.css'

// This "if" is gonna be refactored when I load in the content dynamically from the actual results TODO

function Result (props) {
    if(props.active){
        return (
            <div className="flexContainerRow result_container result_active">
                <div className='flexDynamicSize'>
                    <div className="heading">
                        {props.actionDescription} <img src={props.iconSrc} width='100' height='40' alt='datasource icon' className='result_image' />
                    </div>
                    <div className="results_options">
                        <ul>
                            <li className={!props.options['1'].active ? "result_inactive" : ""}>{props.options['1'].text}</li>
                            <li className={!props.options['2'].active ? "result_inactive" : ""}>{props.options['2'].text}</li>
                            <li className={!props.options['3'].active ? "result_inactive" : ""}>{props.options['3'].text}</li>
                        </ul>
                    </div>
                </div>
            </div>);
    }
    else{
        return (
            <div className="flexContainerRow result_container result_inactive">
                <div className='flexDynamicSize'>
                    <div className="heading">
                        {props.actionDescription} <img src={props.iconSrc} width='100' height='40' alt='datasource icon' className='result_image' />
                    </div>
                    <div className="results_options">
                        <ul>
                            <li >{props.options['1']}</li>
                            <li >{props.options['2']}</li>
                            <li >{props.options['3']}</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Result;