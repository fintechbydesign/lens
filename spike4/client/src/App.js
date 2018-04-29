import io from 'socket.io-client';
import React, { Component } from 'react';
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
    return (
      <div className='border container'>
        <div className='border container flexContainer'>
          {events}
        </div>
      </div>
    );
  }
}

export default App;
