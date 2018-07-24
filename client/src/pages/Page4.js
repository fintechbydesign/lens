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
        <div name ='page4' className='flexFixedSize flexContainerColumn fullPage' id="page4">
            <SpeechBubble top={true} text={[
                `Nice to meet you ${props.name}.`,
                "I think I've found the perfect job for you!",
                "Check it out."
            ]} class={"three-line-top"}/>
            <div className={"jobDescription"}>
                <p className={"heading"}>{props.job}</p>
                <div className={"text"}>
                    <p className>{props.description}</p>
                    <p className>{props.salary} salary</p>
                    <p className>{props.hours} hours/week</p>
                </div>
            </div>
        </div>
    );
}

export default Page4;
