import React from 'react';
import './Page12.css';
import SpeechBubble from "../components/Speechbubble";

function Page12 (props) {
    return (
        <div name ='page12' className='flexFixedSize flexContainerRow fullPage' id="page12">
           <SpeechBubble top={false} text ={["Goodbye!"]}/>
        </div>
    );
}

export default Page12;
