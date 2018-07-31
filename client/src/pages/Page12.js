import React from 'react';
import './Page12.css';
import SpeechBubble from "../components/Speechbubble";

function Page12 (props) {
    return (
        <div name ='page12' className='flexFixedSize flexContainerRow fullPage' id="page12">
           <SpeechBubble top={false} text ={["I get lonely sometimes, so thanks for",
           "chatting with me! Don't forget the power",
               "of your personal digital data. Goodbye"]} class={"three-line-center"}/>
        </div>
    );
}

export default Page12;
