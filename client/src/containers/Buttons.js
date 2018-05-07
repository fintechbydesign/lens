/*
 Aggregate and space buttons
*/

import React, { Component } from 'react';
import Button from '../components/Button';
import Spacer from '../components/Spacer';

const buttonKeys = [1,2,3,4,5,6,7,8,9];

class Buttons extends Component {

  render() {
    const buttons = buttonKeys.map(key => {
      const props = {
        colour: 'red',
        enable: this.props.buttons.enable[key],
        key,
        on: this.props.buttons.on[key],
        selected: this.props.buttonSelected,
        text:key
      };
      return (<Button {...props} />);
    });

    return (
      <div className='flexFixSize flexContainerColumn'>
        {buttons}
        <Spacer style={{'marginTop':'75px'}}/>
        <Button key='r' enable='true' text='r' on='true' colour='red' selected={this.props.reset}/>
      </div>
    );
  }
}

export default Buttons;
