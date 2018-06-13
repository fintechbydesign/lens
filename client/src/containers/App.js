/*
 Overall coordination between components
 */

import React, { Component } from 'react';
import { addKeyboardListener } from '../hardware/keyboard';
import Buttons from './Buttons';
import ButtonInstruction from '../components/ButtonInstruction';
import { listenForArduino } from '../hardware/arduino';
import Pages from './Pages';
import { scroller } from 'react-scroll';
import SubmitButton from '../components/SubmitButton';
import {
  fastScrollOptions,
  initialState,
  methods,
  pageStates,
  slowScrollOptions } from './AppConstants';
import {saveJourney} from "../data/stats";

const TOTAL_PAGES = 5;
class App extends Component {

  constructor (props) {
    super(props);
    this.state = { ...initialState };
    methods.forEach(method => this[method] = this[method].bind(this));
    addKeyboardListener( 'b', this.toggleButtons);
  }

  componentDidMount() {
    const keyToFunctionMap = {
      b: this.toggleButtons,
      s: this.nextPage,
      r: this.reset
    };
    for (let index = 1; index < 10; index++) {
      keyToFunctionMap[String(index)] = this.buttonSelected.bind(this, index);
    }
    listenForArduino(keyToFunctionMap);
  }

  buttonSelected (index) {
    if (this.state.buttons.enable[index]) {
      const newOn = [...this.state.buttons.on];
      newOn[index] = !newOn[index];
      this.setState({
        ...this.state,
        buttons: {
          ...this.state.buttons,
          on: newOn
        }
      });
    }
  }

  reset () {
    console.log('reset');
    const { journey } = this.state;
    if (Object.keys(journey).length > 0) {
      saveJourney(journey);
    }
    scroller.scrollTo('page0', fastScrollOptions);
    this.setState({
      ...initialState,
      journey: {},
      showButtons: this.state.showButtons
    });
  }

  nextPage () {
    const { currentPage, journey } = this.state;
    const nextPage = currentPage === TOTAL_PAGES ? 0 : currentPage + 1;
    const nextPageName = `page${nextPage}`;
    // If the journey is at the Poll page, the option
    journey[nextPageName] = {
      start: Date.now()
    };
    scroller.scrollTo(nextPageName, slowScrollOptions);
    this.setState({
      ...this.state,
      currentPage: nextPage,
      buttons: {
        ...this.state.buttons,
        enable: [...pageStates[nextPage].buttonEnablement]
      }
    });
  }

  toggleButtons () {
    this.setState( {
      ...this.state,
      showButtons: !this.state.showButtons
    });
  }

  renderButtons () {
    if (!this.state.showButtons) {
      return null;
    }
    const props = {
      buttons: this.state.buttons,
      buttonSelected: this.buttonSelected,
      reset: this.reset
    };
    return (<Buttons {...props} />);
  }

  renderInstruction () {
    const props = {
      text: pageStates[this.state.currentPage].instruction
    };
    return (<ButtonInstruction {...props} />);
  }

  renderSubmit () {
    if (!this.state.showButtons) {
      return null;
    }
    const props = {
      text: '(s)ubmit button',
      onClick: this.nextPage
    };
    return (<SubmitButton {...props} />);
  }

  render() {
    return (
      <div className='container flexContainerRow'>
        {this.renderButtons()}
        <div className='flexDynamicSize container flexContainerColumn'>
          <Pages buttons={this.state.buttons} />
          {this.renderInstruction()}
          {this.renderSubmit()}
        </div>
      </div>
    );
  }
}

export default App;
