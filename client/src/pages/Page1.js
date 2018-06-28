import React from 'react';
import './Page1.css';
import SpeechBubble from "../components/Speechbubble";

// Intro
function Page1 (props) {
  return (
    <div name ='page1' className='fullPage flexFixedSize flexContainerRow Page1_container'>
      <div className=''>
          <SpeechBubble top={false} text={[
              "Did you know...",
          ]}/>
      </div>
    </div>
  );
}

export default Page1;