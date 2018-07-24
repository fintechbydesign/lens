import React from 'react';
import Poll from '../components/Poll';
import './Page10.css';
import SpeechBubble from "../components/Speechbubble";

const pollProperties = [
    {
        pollChoice: 'Strongly Agree',
        pollDescription: [
            "I would happily share all my",
            "personal digital data. For example,",
            "all of my Facebook, Amazon and",
            "Instagram data."],
    },
    {
        pollChoice: "Agree",
        pollDescription: [
            "I would share some of my personal",
            "digital data. For example, choosing",
            "to share only my Amazon reviews."
        ],

    },
    {
        pollChoice: "Neutral",
        pollDescription: [
            "I would share some of my personal",
            "digital data if I see a benefit."
        ],
    },
    {
        pollChoice: "Disagree",
        pollDescription: [
            "I would only ever share a very",
            "small amount of personal digital",
            "data."
        ],
    },
    {
        pollChoice: "Strongly Disagree",
        pollDescription: [
            "I would never not willingly share",
            "any of my personal digital data for",
            "any reason."
        ],
    },
    {
        pollChoice: "I don't know",
        pollDescription: [
            "I don't know if would share my",
            "personal digital data."
        ],
    }
];

function Page10 (props) {
    const poll = pollProperties.map((pollProps, index) => {
        const mergedProps = {
            ...pollProps,
            selected: props.buttons.on[index+1]
        };
        return (<Poll {...mergedProps} />)
    });
    return (
        <div name ='page10' className='flexFixedSize flexContainerColumn fullPage'>
            <SpeechBubble top={true} text={[
                "I would share my personal data to get a job",
                "prove my identity, or even apply for a",
                "mortgage (bots need houses, too).",
                "How do you feel about it?"
            ]}/>
            {poll}
        </div>
    );
}

export default Page10;
