import React from 'react';
import Poll from '../components/Poll';
import './Page10.css';
import SpeechBubble from "../components/Speechbubble";

const pollProperties = [
    {
        pollChoice: 'Definitely',
        pollDescription: [
            "I would share all my personal data.",
            "For example, all of my Facebook and",
            "Instagram data."],
    },
    {
        pollChoice: "Maybe",
        pollDescription: [
            "I would share some of my personal",
            "data. For example, only my Facebook",
            "posts and Instagram hashtags."
        ],

    },
    {
        pollChoice: "Indifferent",
        pollDescription: [
            "I don’t know what sharing personal",
            "data has to do with getting a job",
            "or proving my identity."
        ],
    },
    {
        pollChoice: "No",
        pollDescription: [
            "I would not share any of my",
            "personal data"
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
                "Would you be willing to share your personal data",
                "to get a job, prove your identity, or with other",
                "services and systems?"
            ]}/>
            {poll}
        </div>
    );
}

export default Page10;
