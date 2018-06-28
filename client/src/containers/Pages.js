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
          <Page0 /> {/* Home */}
          <Page1 /> {/* Intro */}
          <Page2 buttons={this.props.buttons}/> {/* Persona Choosing */}
          <Page3 /> {/* Persona Loading Screen */}
          <Page4 /> {/* Job Found TODO: This screen needs props for name,job,salary and hours or just the name and the rest can be loaded dynamically*/}
          <Page5  buttons={this.props.buttons}/> {/* Data source choosing */}
          <Page6 /> {/* Data source loading */}
          <Page7 /> {/* Results Screen */}
          <Page8 /> {/* Detailed Results Screen */}
          <Page9 /> {/* Poll Intro */}
          <Page10 buttons={this.props.buttons}/> {/* Poll */}
          <Page11 data={this.props.data} /> {/* Data Viz */}
          <Page12 /> {/* Goodbye */}
        </div>
    );
  }
}

export default Pages;
