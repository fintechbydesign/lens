import React, { Component } from 'react';
import Page from '../pages/Page';
import './Pages.css';

/*
 Page selection
 */
class Pages extends Component {

  render() {
    return (
        <div id='pages' className='flexDynamicSize flexContainerColumn Pages'>
          <Page index='0' />
          <Page index='1' />
          <Page index='2' />
          <Page index='3' />
        </div>
    );
  }
}

export default Pages;
