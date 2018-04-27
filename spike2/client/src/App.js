import React, { Component } from 'react';
import { MessageList } from 'react-chat-elements';
import '../node_modules/react-chat-elements/dist/main.css';

// const { MessageList } = ReactChatElements;

const messages = [
  'first test message',
  'second test message',
  'third test message'
];

const convertToMessageItem = (message) => ({
  position: 'right',
  text: message,
  type: 'text'
});

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      messages
    }
  }

  render() {
    const messageListProps = {
      dataSource: this.state.messages.map(convertToMessageItem)
    };
    return (
      <div>
        <MessageList {...messageListProps} />
      </div>
    );
  }
}

export default App;
