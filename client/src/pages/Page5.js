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
                "Use the green buttons to toggle the sources.",
                "Use the blue buttons to choose which data.",
                "Make sure you use both sets of buttons, then submit!"
            ]}/>
            {datasources}
        </div>
    );
}

export default Page5;
