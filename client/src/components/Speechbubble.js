import React from 'react';
import "./Speechbubble.css"
// This functional component takes two props (I should just be using proptypes but
// I can't be bothered to install it for this isolated project)
// 1. An array of lines of text
// 2. A boolean if its the top (true) or center speechbubble (false)
// 3. An optional class attribute if there needs to be a specific offset for the text. The css class should define these
// dimensions: top, right and line-height.
// The easiest way is to define a class for 1,2,3 and 4 line speech bubbles TODO

function SpeechBubble(props) {
    // That double ternary though..
    const textClass = props.class ? [props.class,"text"].join(" ") : props.top? "text_top text" : "text_center text";

    return <div className={props.top? "top" : "center"}>
        <img className={props.top? "logo_top" : "logo_center"} src="logos/logo.png" alt='lens icon'/>
        <img className={props.top? "box_top" : "box_center"} src={props.top ? "/boxes/topchatbox.svg" : "/boxes/centerchatbox.svg"}/>
        <div className={textClass}>
            {props.text.map(text => <p>{text}</p>)}
        </div>
    </div>
}

export default SpeechBubble