import React from 'react';
import './Page1.css';

function Page1 (props) {
  return (
    <div name ='page1' className='flexFixedSize flexContainerRow Page1_container'>
      <img src='/girl.jpg' alt='a cartoon girl' />
      <div className='speechBubble Page1_speechBubble'>
        <h2>
          This is you, you've just left school, have no previous experience and are looking to get your first job.
        </h2>
      </div>
    </div>
  );
}

export default Page1;