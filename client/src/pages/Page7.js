import React from 'react';
import './Page7.css';
import SpeechBubble from "../components/Speechbubble";


function Page7 (props) {
    return (
        <div name ='page7' className='flexFixedSize flexContainerRow fullPage' id="page7">
            <SpeechBubble top={false} text={[
                props.jobGotten ? "You got the Job!" : "You didn't get the job.",
                "Find out why by clicking next."
            ]} class={"two-line-center"}/>
        </div>
    );
}

export default Page7;
