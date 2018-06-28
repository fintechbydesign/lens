import React from 'react';
import './Page1.css';

// Intro
function Page1 (props) {
  return (
    <div name ='page1' className='fullPage flexFixedSize flexContainerRow Page1_container'>
      <div className='speechBubble Page1_speechBubble'>
        <h2>
            Did you know...
        </h2>
      </div>
    </div>
  );
}

export default Page1;