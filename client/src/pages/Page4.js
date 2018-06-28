import React from 'react';
import './Page4.css';

// Job found

Page4.defaultProps = {
    name: "Jeff",
    job: "Highschool Teacher",
    salary: "22,000",
    hours: "38",
};

function Page4 (props) {
    return (
        <div name ='page4' className='flexFixedSize flexContainerRow fullPage' id="page4">
            <div className='speechBubble Page1_speechBubble'>
                <p>
                    I've found the perfect job for {props.name}!<br/>
                    {props.job}<br/>
                    {props.salary} salary<br/>
                    {props.hours} hours/week
                </p>
            </div>
        </div>
    );
}

export default Page4;
