import React from 'react';
import './Page8.css';
import SpeechBubble from "../components/Speechbubble";
import Result from "../components/Result";

function Page8 (props) {
  const text = props.jobGotten ? [
    "You shared the right data and it",
    "was enough to get the job.",
    "Below is the good and bad."
  ] : [
    "Even though you thought you shared the right data, it",
    "wasn't enough to get the job.",
    "Below is the good and bad."
  ];

  const results = props.results.map((resultProps, index) => {
        const mergedProps = {
            ...resultProps,
        };
        return (<Result {...mergedProps} />)
    });
    return (
        <div name ='page8' className='flexFixedSize flexContainerColumn fullPage' id="page8">
          <SpeechBubble top={true} text={text}/>
            {results}
        </div>
    );
}

export default Page8;
