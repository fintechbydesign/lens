import React from 'react';
import './Page3.css';
import Persona from "../components/Persona";

// Screen 3: Persona choosing

const personaProperties = [
    {
        nameAge: 'Jeff, 23',
        location: 'Edinburgh, Scotland',
        currentJob: 'Philosophy Graduate',
        description: "Is looking for a job in Education",
        avatarSrc: '/personas/jeff.svg',
    },
    {
        nameAge: 'Mary, 19',
        location: 'London, England',
        currentJob: 'Unemployed',
        description: "Is looking for a job in retail",
        avatarSrc: '/personas/mary.svg',
    },
    {
        nameAge: 'Julie, 53',
        location: 'Boston, MA',
        currentJob: 'Unemployed',
        description: "Is looking for an office Job",
        avatarSrc: '/personas/julie.svg',
    },
    {
        nameAge: 'Wang, 48',
        location: 'Hong Kong, China',
        currentJob: 'Finance Analyst',
        description: "Is looking for a better job position",
        avatarSrc: '/personas/wang.svg',
    },
    {
        nameAge: 'Ana, 34',
        location: 'Lisbon, Portugal',
        currentJob: 'Marketing Assistant',
        description: "Is looking for a better job position",
        avatarSrc: '/personas/ana.svg',
    },
    {
        nameAge: 'Martin, 41',
        location: 'Berlin, Germany',
        currentJob: 'Personal Trainer\n',
        description: "Is looking for a move in his career",
        avatarSrc: '/personas/martin.svg',
    },
];

function Page3 (props) {
    const personas = personaProperties.map((personaProps, index) => {
        const mergedProps = {
            ...personaProps,
            selected: props.buttons.on[index+1]
        };
        return (<Persona {...mergedProps} />)
    });
    return (
        <div name ='page3' className='fullPage flexFixedSize flexContainerColumn' id="page3">
            {personas}
        </div>
    );
}

export default Page3;
