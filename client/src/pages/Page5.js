import React from 'react';
import './Page5.css';
import Datasource from '../components/Datasource';
import SpeechBubble from "../components/Speechbubble";

const datasourceProperties = [
    {
        actionDescription: 'Facebook',
        options: {
            1: "likes",
            2: "comments",
            3: "posts",
        },
        iconSrc: '/logos/facebook.svg',
    },
    {
        actionDescription: 'YouTube',
        options: {
            1: "watch list",
            2: "subscription",
            3: "comments",
        },
        iconSrc: '/logos/youtube.svg',
    },
    {
        actionDescription: 'Fitbit',
        options: {
            1: "heart rate",
            2: "steps",
            3: "sleep",
        },
        iconSrc: '/logos/fitbit.svg',
    },
    {
        actionDescription: 'Instagram',
        options: {
            1: "following",
            2: "posts",
            3: "hashtags",
        },
        iconSrc: '/logos/instagram.svg',
    },
    {
        actionDescription: 'Amazon',
        options: {
            1: "purchases",
            2: "reviews",
            3: "delivery history",
        },
        iconSrc: '/logos/amazon.svg',
    },
    {
        actionDescription: 'Uber',
        options: {
            1: "location",
            2: "your rating",
            3: "tips",
        },
        iconSrc: '/logos/fitbit.svg',
    },
];

function Page5 (props) {
    const datasources = datasourceProperties.map((datasourceProps, index) => {
        const mergedProps = {
            ...datasourceProps,
            selected: props.buttons.on[index+1]
        };
        return (<Datasource {...mergedProps} />)
    });
    return (
        <div name ='page5' className='flexFixedSize flexContainerColumn fullPage' id="page5">
            <SpeechBubble top={true} text={[
                "Which data do you want to use to apply for the job?",
                "Use the buttons on the left to toggle the data sources.",
                "Use the buttons below to toggle individual sets.",
                "Once you’re happy, submit your application!"
            ]}/>
            {datasources}
        </div>
    );
}

export default Page5;
