import io from 'socket.io-client';
import React, { Component } from 'react';
import BigButton from './BigButton';
import SmallButton from './SmallButton';
import Spacer from './Spacer';
import './App.css';

const methods = [
  'eventReceived'
];

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      events: ['page1']
    };
    methods.forEach((method) => {
      this[method] = this[method].bind(this);
    });
  }

  componentDidMount () {
    const socket = io();
    socket.on('event', this.eventReceived);
  }

  eventReceived (event) {
    this.setState({
      ...this.state,
      events: [...this.state.events, event]
    });
  }

  render() {
    const events = this.state.events.map(event => (<div>{event}</div>));
    const buttonGroup = (
      <div className='flexContainerColumn'>
        <Spacer style={{'margin-top':'75px'}}/>
        <SmallButton colour='red'/>
        <SmallButton colour='green'/>
        <SmallButton colour='blue'/>
      </div>
    );
    return (
      <div id='left-buttons-container' className='container flexContainerRow'>
        <div id='left-buttons-area' className='flexFixSize flexContainerColumn'>
          {buttonGroup}
          {buttonGroup}
          {buttonGroup}
        </div>
        <div className='flexContainerColumn flexDynamicSize'>
          <div id='chat-outside-edge' className='border container flexDynamicSize'>
            <div id='chat-inside-edge' className='border container flexContainerColumn'>
              {events}
            </div>
          </div>
          <div id='bottom-buttons-area' className='flexFixSize flexContainerRow'>
            <BigButton text='OK'/>
            <BigButton text='Cancel'/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
