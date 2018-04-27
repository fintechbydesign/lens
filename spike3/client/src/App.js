import io from 'socket.io-client';
import React, { Component } from 'react';

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      messages: ['hello', 'another msg']
    }
    this.eventReceived = this.eventReceived.bind(this);
  }

  componentDidMount () {
    const socket = io();
    socket.on('event', this.eventReceived);
  }

  eventReceived (event) {
    this.setState({
      ...this.state,
      messages: [...this.state.messages, event.message]
    });
  }

  render() {
    const msgs = this.state.messages.map(message => (<div>{message}</div>));
    return (
      <div>
        {msgs}
      </div>
    );
  }
}

export default App;
