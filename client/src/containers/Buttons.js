import React, { Component } from 'react';
import Button from '../components/Button';
import Spacer from '../components/Spacer';

/*
 Coordination between buttons
 */

const buttonKeys = [1,2,3,4,5,6,7,8,9];

const methods = [
  'buttonSelected',
  'reset'
];

const initialState = Object.freeze({
  enable: ['dummy', true, true, true, true, true, true, true, true, true],
  on: ['dummy', false, false, false, false, false, false, false, false, false]
});

class Buttons extends Component {

  constructor (props) {
    super(props);
    this.state = {...initialState};
    methods.forEach(method => this[method] = this[method].bind(this));
  }

  buttonSelected (index) {
    const newOn = [...this.state.on];
    newOn[index] = !newOn[index];
    this.setState({
      ...this.state,
      on: newOn
    });
  }

  reset () {
    this.props.reset();
    this.setState({...initialState});
  }

  render() {
    const buttons = buttonKeys.map(key => {
      const props = {
        colour: 'red',
        enable: this.state.enable[key],
        key,
        on: this.state.on[key],
        selected: this.buttonSelected,
        text:key
      };
      return (<Button {...props} />);
    });

    return (
      <div className='flexFixSize flexContainerColumn'>
        {buttons}
        <Spacer style={{'marginTop':'75px'}}/>
        <Button key='r' enable='true' text='r' on='true' colour='red' selected={this.reset}/>
      </div>
    );
  }
}

export default Buttons;
