import React from 'react';
import './Page0.css';
import SpeechBubble from "../components/Speechbubble";

//Home
function Page0 (props) {
  return (
      <div name ='page0' className='fullPage flexFixedSize flexContainerColumn'>
        <SpeechBubble top={false} text={[
          "Hello Human!",
          "I'm Lens, nice to meet you. I can help",
          "you build your digital identity.",
          "Click Next to find out more.",
        ]}/>
      </div>
  );
}

export default Page0;
