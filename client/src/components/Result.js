// The Results screen is basically a Datasource screen with the stuff already highlighted

import React from 'react';
import './Result.css'

// This "if" is gonna be refactored when I load in the content dynamically from the actual results TODO

function Result (props) {
    if(props.active){
        return (
            <div className="flexContainerRow result_container result_active">
              <div className={"result_button_selected"}><p>&#60;</p></div>
                <div className='flexDynamicSize result_text'>
                    <img src={props.iconSrc}  alt='datasource icon' className='result_image' />
                    <div className={props.active ? "heading result_name_active" : "heading result_name"}>
                        {props.actionDescription}
                    </div>
                    <div className="results_options text">
                        {[1,2,3].map((i) => <div>
                            <p className={props.options[i].active ? "result_option_active" : "result_option"}>{i}</p>
                            <p className={props.options[i].active ? "result_active" : "result_inactive"}>{props.options[i].text}</p>
                        </div>)}
                    </div>
                </div>
            </div>);
    }
    else{
        return (
            <div className="flexContainerRow result_container result_inactive">
              <div className={"result_button"}><p>&#60;</p></div>
                <div className='flexDynamicSize'>
                    <img src={props.iconSrc}  alt='datasource icon' className='result_image' />
                    <div className="heading result_name">
                        {props.actionDescription}
                    </div>
                    <div className="results_options text">
                        <ul>
                            {[1,2,3].map((i) => <li><p className="source_option">{i}</p>{props.options[i].text}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Result;
