import React from 'react';
import './Page4.css';
import SpeechBubble from "../components/Speechbubble";

function Page9 (props) {
    return (
        <div name ='page9' className='flexFixedSize flexContainerRow fullPage' id="page9">
            <SpeechBubble top={false} text={
                ["That was just a bit of fun to show you",
                 "how you could apply for a job in the",
                 "future. How do you feel about sharing",
                "your own personal digital data?"]
            } />
        </div>
    );
}

export default Page9;
