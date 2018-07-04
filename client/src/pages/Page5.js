import React from 'react';
import './Page5.css';
import Datasource from '../components/Datasource';
import SpeechBubble from "../components/Speechbubble";

function Page5 (props) {
    const datasources = props.datasourceProperties.map((datasourceProps, index) => {
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
