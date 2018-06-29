import React from 'react';
import './Page0.css';
import SpeechBubble from "../components/Speechbubble";

//Home
function Page0 (props) {
  return (
    <div name ='page0' className='fullPage flexFixedSize flexContainerColumn'>
        <SpeechBubble top={false} text={[
            "Hello Human!",
            "Do you know what personal data makes up your digital identity? Want to use personal data to find a job?",
            "Click next"
        ]}/>
    </div>
  );
}

export default Page0;