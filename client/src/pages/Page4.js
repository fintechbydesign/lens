import React from 'react';
import './Page4.css';
import SpeechBubble from "../components/Speechbubble";

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
            <SpeechBubble top={false} text={[
                `I've found the perfect job for ${props.name}!`,
                props.job,
                `${props.salary} salary`,
                `${props.hours} hours/week`
            ]}/>
        </div>
    );
}

export default Page4;
