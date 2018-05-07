import io from 'socket.io-client';
import React, { Component } from 'react';
import { Element, scroller } from 'react-scroll';
import BottomButtons from './BottomButtons';
import LeftButtons from './LeftButtons';
import Spacer from './Spacer';
import './App.css';

const methods = [
  'eventReceived',
  'scrollToNextPage',
  'toggleButtons'
];

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      currentPage: 'page1',
      events: [],
      pages: ['page1', 'page2', 'page3', 'page4'],
      showButtons: false
    };
    methods.forEach((method) => {
      this[method] = this[method].bind(this);
    });
  }

  componentDidMount () {
    const socket = io();
    socket.on('event', this.eventReceived);
    window.addEventListener('keyup', (event) => {
      if (event.key === 'b') {
        this.toggleButtons();
      }
    });
  }

  eventReceived (event) {
    this.setState({
      ...this.state,
      events: [...this.state.events, event]
    });
  }

  scrollToNextPage () {
    let nextPage;
    switch (this.state.currentPage) {
      case 'page1':
        nextPage = 'page2';
        break;
      case 'page2':
        nextPage = 'page3';
        break;
      case 'page3':
        nextPage = 'page4';
        break;
      default:
        nextPage = 'page1';
    }
    this.setState({
      ...this.state,
      currentPage: nextPage,
    });
    const scrollOptions = {
      containerId: 'chat-inside-edge',
      duration: 0,
      smooth: 'linear'
    };
    scroller.scrollTo(nextPage, scrollOptions);
  }

  toggleButtons () {
    this.setState({
      ...this.state,
      showButtons: !this.state.showButtons
    })
  }

  render() {
    const pages = this.state.pages.map(page => (
      <div>
        <Element name={page} />
        {page}
        <Spacer style={{'margin-top':'500px'}}/>
      </div>
    ));
    const leftButtons = this.state.showButtons ? (<LeftButtons />) : null;
    const bottomButtons = this.state.showButtons ? (<BottomButtons nextClick={this.scrollToNextPage} />) : null;
    return (
      <div id='left-buttons-container' className='container flexContainerRow'>
        {leftButtons}
        <div className='flexContainerColumn flexDynamicSize'>
          <div id='chat-outside-edge' className='border container flexContainerColumn flexDynamicSize'>
            <div id='chat-inside-edge' className='border container flexContainerColumn scrollable'>
              {pages}
            </div>
          </div>
          {bottomButtons}
        </div>
      </div>
    );
  }
}

export default App;
