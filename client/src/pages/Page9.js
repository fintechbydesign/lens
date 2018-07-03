import React from 'react';
import './Page4.css';
import SpeechBubble from "../components/Speechbubble";

function Page9 (props) {
    return (
        <div name ='page9' className='flexFixedSize flexContainerRow fullPage' id="page9">
            <SpeechBubble top={false} text={
                ["After all that hard work, have you",
                 "ever thought about sharing your own",
                 "personal data?"]
            } class={"three-line-center"}/>
        </div>
    );
}

export default Page9;
