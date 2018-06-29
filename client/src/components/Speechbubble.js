import React from 'react';
import "./Speechbubble.css"
// This functional component takes two props (I should just be using proptypes but
// I can't be bothered to install it for this isolated project)
// 1. An array of lines of text
// 2. an boolean if its the top (true) or center speechbubble (false)

function SpeechBubble(props) {
    return <div className="">
        <img className={props.top? "logo_top" : "logo_center"} src="logos/logo.png" alt='lens icon'/>
        <img className={props.top? "top" : "center"} src={props.top ? "/boxes/topchatbox.svg" : "/boxes/centerchatbox.svg"}/>
        <div className="text">
            {props.text.map(text => <p>{text}</p>)}
        </div>
    </div>
}

export default SpeechBubble