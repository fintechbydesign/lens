import React from 'react';

// This functional component takes two props (I should just be using proptypes but
// I can't be bothered to install it for this isolated project)
// 1. An array of lines of text
// 2. an boolean if its the top (true) or center speechbubble (false)

function SpeechBubble(props) {
    return <div className="speechBubble">
                <img src={props.top ? "/boxes/topchatbox.svg" : "/boxes/centerchatbox.svg"}/>
                <div className="speechbubble_text">
                    {props.text.map(text => <p>{text}</p>)}
                </div>
            </div>
}

export default SpeechBubble