import React, { Component } from 'react';
import Page0 from '../pages/Page0';
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';
import Page3 from '../pages/Page3';
import Page4 from '../pages/Page4';
import Page5 from '../pages/Page5';
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
          <Page2 buttons={this.props.buttons} />
          <Page3 />
          <Page4 buttons={this.props.buttons} />
          <Page5 data={this.props.data}/>
        </div>
    );
  }
}

export default Pages;
