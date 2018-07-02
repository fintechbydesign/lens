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
import {saveJourney, getStatsFromJourneys} from "../data/stats";
import {jobGotten, getPersonaFromIndex} from "../data/PersonaInfo";

const TOTAL_PAGES = 12;
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
  // Resets the interaction, shouldNotSave is a boolean that determines if the journey should not be saved on
  // reset. This stops the journey being saved twice: Once before the Visualisation shows, once when the site loops
  // IMPORTANT: This boolean is a double negative, as it makes it much easier to use the method on the button, as
  // !undefined evaluates to true
  reset (shouldNotSave) {
    console.log('reset');
    const { journey } = this.state;
    if (!shouldNotSave && Object.keys(journey).length > 0) {
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
    // If the saveButtons pageState is set, the button layout is saved into the journey
    journey[nextPageName] = {
      start: Date.now(),
      buttons: pageStates[currentPage].saveButtons ? this.state.buttons.on : []
    };
    scroller.scrollTo(nextPageName, slowScrollOptions);

    // Save Interaction when it reaches the Data Visualisation
    if (nextPage === TOTAL_PAGES - 1){
      saveJourney(journey) // Save the journey, so the data for the current journey is considered in the Data Vis
    }
    // Set the persona when the page is reached
    if (nextPage === 3 /* Persona loading screen */) {
      // Find out which button was pressed
      let chosenButton = 0;
      // This implies if there are multiple personas chosen the last one is taken
      for (let i = 0; i < this.state.buttons.on.length; i++) {
        if (this.state.buttons.on[i])
          chosenButton = i - 1; // Buttons are 1 indexed
      }
      this.setState({
        persona: getPersonaFromIndex(chosenButton)
      })
    }

    // Set the persona when the page is reached
    if (nextPage === 6 /* Data source loading screen */) {
      // TODO There needs to be some logic here that finds out which of the 18 choices where taken
      let choices = [];
      this.setState({
        jobGotten: jobGotten(choices),
        choices: choices
      })
    }

    // Reset Interaction when it "loops"
    if (nextPage === 0){
      this.reset(true) // Reset but don't save the journey
    }else {
      this.setState({
        ...this.state,
        currentPage: nextPage,
        buttons: {
          ...this.state.buttons,
          on: initialState.buttons.on,
          enable: [...pageStates[nextPage].buttonEnablement]
        },
        data: getStatsFromJourneys(),
      });
    }


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
          <Pages buttons={this.state.buttons} data={this.state.data} persona={this.state.persona}
                 choices={this.state.choices} jobGotten={this.state.jobGotten}/>
          {this.renderInstruction()}
          {this.renderSubmit()}
        </div>
      </div>
    );
  }
}

export default App;
