import React from 'react';
import './Page3.css';

// Screen 4: Persona choosing loading screen


function Page3 (props) {
    return <div name ='page3' className='fullPage flexFixedSize flexContainerRow' id="page3">
        <div className='loading'>
            <img src={"/loading.gif"}/>
        </div>
    </div>
}

export default Page3;
