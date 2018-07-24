import React from 'react';
import './Page7.css';
import SpeechBubble from "../components/Speechbubble";


function Page7 (props) {
    return (
        <div name ='page7' className='flexFixedSize flexContainerRow fullPage' id="page7">
            <SpeechBubble top={false} text={
                props.jobGotten ? [`Sorry ${props.name}, you didn't`,
                    "get the job this time. Click Next to",
                "find out why I didn't think you were the perfect",
                "candidate"] :
                    [`Great news ${props.name}, you`,
                    "got the job! Click Next to find out",
                    "why I thought you were the",
                    "perfect candidate"]
            }/>
        </div>
    );
}

export default Page7;
