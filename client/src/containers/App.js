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
import {jobGotten, getPersonaFromIndex, convertToChoices} from "../data/PersonaInfo";

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

  // This method determines what happens when the buttons 1-9 are pressed, there are two cases for this:
  // Datasource case:
  //  When the user is selecting the datasources the buttons have to work differently then in the rest of the screens
  //  This is because the buttons work slightly differently on that screen. The first button press enables the overall
  //  datasource, the second button press selects the sub datasources. So the state where the datasources are kept
  //  has to be changed to the last selected button.
  // Anywhere else case:
  // Sets the buttons.on array in the state
  buttonSelected (index) {
    if(this.state.buttons.enable[0] === "data"){
      // If the User hits 1-6, set the lastSelected button to active
      let newState = this.state.dataSource;
        if(index < 7){
          // Reset all the sub datasources
          if(this.state.buttons.on[index]){
              newState[index - 1].options[1].active = false;
              newState[index - 1].options[2].active = false;
              newState[index - 1].options[3].active = false;
              this.last = null;
          }else{
              this.last = index;
          }

        }
      // If the User hits 7-9 set the sub datasources from the lastSelected button
        else{
          if(this.last){
            newState[this.last - 1].options[index - 6].active = !newState[this.last - 1].options[index - 6].active;
          }
        }
    }
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
    // This is for loading screens to block the submit button
    // The submit button should also be blocked when nothing is selected for the personas or poll
    if(this.block ||
        (pageStates[currentPage].block && !this.state.buttons.on.slice(1,10).some((b) => b))){
        return;
    }
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
      let chosenButton = 1;
      // This implies if there are multiple personas chosen the last one is taken
      for (let i = 1; i < this.state.buttons.on.length; i++) {
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
      let choices = this.state.choices;
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

    // If the next page is a loading screen "wait" 3 seconds and call this method again
    // The submit button needs to be blocked here
      if(pageStates[nextPage].loadingScreen){
        this.block = true;
        setTimeout(() => {
          this.block = false;
          this.nextPage();
        }, 3000)
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
                 choices={convertToChoices(this.state.persona,this.state.dataSource)} jobGotten={this.state.jobGotten}
                 properties={this.state.dataSource}/>
          {this.renderInstruction()}
          {this.renderSubmit()}
        </div>
      </div>
    );
  }
}

export default App;
