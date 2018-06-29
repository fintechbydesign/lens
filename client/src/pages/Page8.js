import React from 'react';
import './Page8.css';
import SpeechBubble from "../components/Speechbubble";
import Result from "../components/Result";

// TODO: Get the results from the name and the choices chosen in the form shown here

const resultProperties = [
    {
        actionDescription: 'Facebook',
        options: {
            1: "likes",
            2: "comments",
            3: "posts",
        },
        iconSrc: '/logos/facebook.svg',
        active: false,
    },
    {
        actionDescription: 'YouTube',
        options: {
            1: {text: "You’ve watched 13 DIY videos this week, showcasing your natural curiosity.", active: true},
            2: {text: "You're not watching your subscriptions, highlighting a lack of engagement.", active: true},
            3: {text: "You actively interact with fellow users, demonstrating a willingness to help others", active: true},
        },
        iconSrc: '/logos/youtube.svg',
        active: true,
    },
    {
        actionDescription: 'Fitbit',
        options: {
            1: {text: "The consistency of your heart rate shows that you are a healthy individual", active: false},
            2: {text: "You’ve never reached your daily step count goal; it may be difficult to keep up in an active classroom.", active: false},
            3: {text: "You average 5 hours of sleep per night, meaning you will be too exhausted to teach.", active: true},
        },
        iconSrc: '/logos/fitbit.svg',
        active: true,
    },
    {
        actionDescription: 'Instagram',
        options: {
            1: "following",
            2: "posts",
            3: "hashtags",
        },
        iconSrc: '/logos/instagram.svg',
        active: false,
    },
    {
        actionDescription: 'Amazon',
        options: {
            1: "purchases",
            2: "reviews",
            3: "delivery history",
        },
        iconSrc: '/logos/amazon.svg',
        active: false,
    },
    {
        actionDescription: 'Uber',
        options: {
            1: {text: "You use Uber to travel to bars on weekdays, revealing you may have a drinking problem.", active: false},
            2: {text: "You’re only rated 3.41 stars, showing that you might not treat everyone respectfully", active: true},
            3: {text: "You’ve tipped the driver on all your trips this week, highlighting that you’re appreciative.", active: true},
        },
        iconSrc: '/logos/fitbit.svg',
        active: true,
    }
    ];


function Page8 (props) {

    const results = resultProperties.map((resultProps, index) => {
        const mergedProps = {
            ...resultProps,
        };
        return (<Result {...mergedProps} />)
    });
    return (
        <div name ='page8' className='flexFixedSize flexContainerRow fullPage' id="page8">
            <SpeechBubble top={false} text={[
                "Even though you thought you shared the right data, it",
                "wasn't enough to get the job.",
                "Below is the good and bad."
            ]}/>

        </div>
    );
}

export default Page8;
