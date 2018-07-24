import React from 'react';
import './Page8.css';
import SpeechBubble from "../components/Speechbubble";
import Result from "../components/Result";

function Page8 (props) {
  const text = props.jobGotten ? [
    `Hard luck ${props.name}, something in your data`,
    "told me you weren't right for this role.",
    "Here's why I didn't think you were a suitable candidate."
  ] : [
    `Good work ${props.name}, I like what your data`,
    "says about you. Here's why I thought you were the",
    "perfect candidate."
  ];
  const results = props.results.map((resultProps) => {
        const mergedProps = {
            ...resultProps,
        };
        return (<Result {...mergedProps} />)
    });
    return (
        <div name ='page8' className='flexFixedSize flexContainerColumn fullPage' id="page8">
          <SpeechBubble top={true} text={text} class={"three-line-top"}/>
            {results}
        </div>
    );
}

export default Page8;
