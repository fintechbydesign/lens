import React, { Component } from 'react';
import Page0 from '../pages/Page0';
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';
import Page3 from '../pages/Page3';
import Page4 from '../pages/Page4';
import Page5 from '../pages/Page5';
import Page6 from '../pages/Page6';
import Page7 from '../pages/Page7';
import Page8 from '../pages/Page8';
import Page9 from '../pages/Page9';
import Page10 from '../pages/Page10';
import Page11 from '../pages/Page11';
import Page12 from '../pages/Page12';
import './Pages.css';

/*
 Page selection
 */
class Pages extends Component {
  render() {
    return (
        <div id='pages' className='flexDynamicSize flexContainerColumn Pages'>
          <Page0 />
          <Page1 />
          <Page2 />
          <Page3 />
          <Page4 />
          <Page5 />
          <Page6 buttons={this.props.buttons}/>
          <Page7 />
          <Page8 />
          <Page9 />
          <Page10 buttons={this.props.buttons}/>
          <Page11 data={this.props.data} />
          <Page12 />
        </div>
    );
  }
}

export default Pages;
