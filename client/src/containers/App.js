import React, { Component } from 'react';
import { addKeyboardListener } from '../hardware/keyboard';
import Buttons from './Buttons';
import ButtonInstruction from '../components/ButtonInstruction';
import { listenForArduino } from '../hardware/arduino';
import Pages from './Pages';
import { scroller } from 'react-scroll';
import SubmitButton from '../components/SubmitButton';

const methods = Object.freeze([
  'nextPage',
  'reset',
  'toggleButtons'
]);

const scrollOptions = Object.freeze({
  containerId: 'pages',
  duration: 1000,
  smooth: 'easeInOutCubic'
});

const initialState = Object.freeze({
  currentPage: 0,
  showButtons: false
});

/*
 Overall coordination between components
 */
class App extends Component {

  constructor (props) {
    super(props);
    this.state = { ...initialState };
    methods.forEach(method => this[method] = this[method].bind(this));
    addKeyboardListener( 'b', this.toggleButtons);
  }

  componentDidMount() {
    listenForArduino({
      b: this.toggleButtons,
      s: this.nextPage,
      r: this.reset
    });
  }

  reset () {
    console.log('reset');
    this.setState({
      ...initialState,
      showButtons: this.state.showButtons
    });
  }

  nextPage () {
    const nextPage = this.state.currentPage === 3 ? 0 : this.state.currentPage + 1;
    scroller.scrollTo(`page${nextPage}`, scrollOptions);
    this.setState({
      ...this.state,
      currentPage: nextPage
    });
  }

  toggleButtons () {
    this.setState( {
      ...this.state,
      showButtons: !this.state.showButtons
    });
  }

  render() {
    const buttons = this.state.showButtons ? (<Buttons reset={this.reset} />) : null;
    const submit = this.state.showButtons ? <SubmitButton text='(s)ubmit button' onClick={this.nextPage} /> : null;

    return (
      <div className='container flexContainerRow'>
        {buttons}
        <div className='flexDynamicSize container flexContainerColumn'>
          <Pages />
          <ButtonInstruction text='Button Instruction goes here' />
          {submit}
        </div>
      </div>
    );
  }
}

export default App;
