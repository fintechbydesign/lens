import React from 'react';
import './Page1.css';
import SpeechBubble from "../components/Speechbubble";

// Intro
function Page1 (props) {
  return (
    <div name ='page1' className='fullPage flexFixedSize flexContainerRow Page1_container'>
      <div className='page1_text'>
          <SpeechBubble top={true} text={[
              "Did you know you already have a digital identity?",
              "Everything from your smartphone usage, to your social",
              "media activity, captures data about you...",
              "but how is it used?"
          ]}/>
          <div className="heading centered fiftyfive">
              What is a digital identity?
          </div>
          <div className="text centered fiftyfive">
              Digital data sources are already used to build your <br/>
              digital identity, painting a picture of who you are, <br/>
              what you like, and how likely you are to behave in a <br/>
              certain way. Some examples include:
          </div>
          <div className="icons">
              <div className="icon">
                  <svg className="logo" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                         viewBox="0 0 265 265" style={{"enable-background":"new 0 0 265 265;"}} xmlSpace="preserve">
                    <path className="st0" d="M247.2,3.7H17.9c-7.8,0-14.2,6.4-14.2,14.2v229.3c0,7.9,6.4,14.2,14.2,14.2h123.4v-99.8h-33.6v-38.9h33.6V94
                        c0-33.3,20.3-51.4,50-51.4c14.2,0,26.5,1.1,30,1.5v34.8h-20.6c-16.1,0-19.3,7.7-19.3,18.9v24.8h38.5l-5,38.9h-33.5v99.8H247
                        c7.9,0,14.2-6.4,14.2-14.2V17.9C261.3,10.1,254.9,3.7,247.2,3.7z"/>
                  </svg>
                  your <br/>
                  facebook <br/>
                  posts
              </div>
              <div className={"icon"}>
                  <svg className="logo" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                         viewBox="0 44 265 180" xmlSpace="preserve">
                    <path className="st0" d="M217.5,44.4H47.2c-24.1,0-43.6,19.5-43.6,43.6V179c0,24.1,19.5,43.6,43.6,43.6h170.3
                        c24.1,0,43.6-19.5,43.6-43.6V87.9C261.1,63.9,241.6,44.4,217.5,44.4z M143.3,153.3l-38.6,19.8V93.9l38.6,19.8l38.6,19.8L143.3,153.3
                        z"/>
                    </svg>
                  your <br/>
                  youtube <br/>
                  comments
              </div>
              <div className="icon">
                  <svg className="logo" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                         viewBox="0 0 265 265" style={{"enable-background":"new 0 0 265 265;"}} xmlSpace="preserve">
                    <path className="st0" d="M151.3,132.5c0,10.4-8.4,18.8-18.8,18.8c-10.4,0-18.8-8.4-18.8-18.8s8.4-18.8,18.8-18.8
                        S151.3,122.1,151.3,132.5z"/>
                    <path className="st0" d="M206.9,132.5c0,10.4-8.4,18.8-18.8,18.8s-18.8-8.4-18.8-18.8s8.4-18.8,18.8-18.8S206.9,122.1,206.9,132.5z"/>
                    <path className="st0" d="M262.6,132.5c0,10.4-8.4,18.8-18.8,18.8c-10.4,0-18.8-8.4-18.8-18.8s8.4-18.8,18.8-18.8
                        C254.1,113.6,262.6,122.1,262.6,132.5z"/>
                    <path className="st0" d="M95.7,132.5c0,10.4-8.4,18.8-18.8,18.8S58,142.9,58,132.5s8.4-18.8,18.8-18.8S95.7,122.1,95.7,132.5z"/>
                    <path className="st0" d="M151.3,243.8c0,10.4-8.4,18.8-18.8,18.8s-18.8-8.4-18.8-18.8c0-10.4,8.4-18.8,18.8-18.8
                        S151.3,233.4,151.3,243.8z"/>
                    <path className="st0" d="M151.3,21.2c0,10.4-8.4,18.8-18.8,18.8s-18.8-8.4-18.8-18.8s8.4-18.8,18.8-18.8S151.3,10.8,151.3,21.2z"/>
                    <path className="st0" d="M151.3,190.4c0,10.4-8.4,18.8-18.8,18.8s-18.8-8.4-18.8-18.8c0-10.4,8.4-18.8,18.8-18.8S151.3,180,151.3,190.4z
                        "/>
                    <path className="st0" d="M206.9,190.4c0,10.4-8.4,18.8-18.8,18.8c-10.4,0-18.8-8.4-18.8-18.8c0-10.4,8.4-18.8,18.8-18.8
                        C198.5,171.5,206.9,180,206.9,190.4z"/>
                    <path className="st0" d="M95.7,190.4c0,10.4-8.4,18.8-18.8,18.8S58,200.8,58,190.4c0-10.4,8.4-18.8,18.8-18.8S95.7,180,95.7,190.4z"/>
                    <path className="st0" d="M151.3,73.8c0,10.4-8.4,18.8-18.8,18.8s-18.8-8.4-18.8-18.8S122.1,55,132.5,55S151.3,63.4,151.3,73.8z"/>
                    <path className="st0" d="M206.9,73.8c0,10.4-8.4,18.8-18.8,18.8c-10.4,0-18.8-8.4-18.8-18.8S177.7,55,188.1,55
                        C198.5,55,206.9,63.4,206.9,73.8z"/>
                    <path className="st0" d="M95.7,73.8c0,10.4-8.4,18.8-18.8,18.8S58,84.2,58,73.8S66.4,55,76.8,55S95.7,63.4,95.7,73.8z"/>
                    <path className="st0" d="M40.1,132.5c0,10.4-8.4,18.8-18.8,18.8s-18.8-8.4-18.8-18.8s8.4-18.8,18.8-18.8S40.1,122.1,40.1,132.5z"/>
                    </svg>
                  your <br/>
                  fitbit <br/>
                  steps
              </div>
              <div className="icon">
                  <svg className="logo" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                       viewBox="0 0 265 265" style={{"enable-background":"new 0 0 265 265;"}} xmlSpace="preserve">
                      <g>
                          <g>
                              <path className="st0" d="M132.5,70C98.1,70,70,98.1,70,132.5s28,62.5,62.5,62.5s62.5-28,62.5-62.5S166.9,70,132.5,70z M132.5,186.1
                                c-29.6,0-53.6-24.1-53.6-53.6s24.1-53.6,53.6-53.6s53.6,24.1,53.6,53.6S162.1,186.1,132.5,186.1z"/>
                              <path className="st0" d="M174.4,4.6H90.6c-47.4,0-86,38.6-86,86v83.8c0,47.4,38.6,86,86,86h83.8c47.4,0,86-38.6,86-86V90.6
                                C260.4,43.2,221.8,4.6,174.4,4.6z M251.5,174.4c0,42.5-34.6,77.2-77.2,77.2H90.6c-42.5,0-77.2-34.6-77.2-77.2V90.6
                                c0-42.5,34.6-77.2,77.2-77.2h83.8c42.5,0,77.2,34.6,77.2,77.2C251.5,90.6,251.5,174.4,251.5,174.4z"/>
                              <path className="st0" d="M202.3,42.5c-11.1,0-20.2,9.1-20.2,20.2s9.1,20.2,20.2,20.2s20.2-9.1,20.2-20.2S213.5,42.5,202.3,42.5z
                                 M202.3,74.1c-6.3,0-11.4-5.1-11.4-11.4s5.1-11.4,11.4-11.4c6.3,0,11.4,5.1,11.4,11.4S208.6,74.1,202.3,74.1z"/>
                          </g>
                      </g>
                  </svg>
                  your <br/>
                  instagram <br/>
                  hashtags
              </div>
              <div className={"icon"}>
                  <svg version="1.1" className="logo"
                     id="svg1936" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 265 265"
                       style={{"enable-background":"new 0 0 265 265;"}} xmlSpace="preserve">
                <path id="path8" className="st0" d="M238.3,129.6c-28.7,21.1-70.2,32.4-106,32.4
                    c-50.2,0-95.3-18.6-129.5-49.4c-2.7-2.4-0.3-5.7,2.9-3.8c36.9,21.5,82.5,34.4,129.6,34.4c31.8,0,66.7-6.6,98.8-20.2
                    C239,120.8,243,126.1,238.3,129.6"/>
                <path id="path10" className="st0" d="M250.2,115.9c-3.7-4.7-24.2-2.2-33.5-1.1
                    c-2.8,0.3-3.2-2.1-0.7-3.9c16.4-11.5,43.3-8.2,46.4-4.3c3.1,3.9-0.8,30.8-16.2,43.7c-2.4,2-4.6,0.9-3.6-1.7
                    C246.1,140,253.9,120.6,250.2,115.9"/>
                </svg>
                  your <br/>
                  amazon <br/>
                  reviews
              </div>
              <div className="icon">
                  <svg version="1.1" className="logo" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	                viewBox="0 0 265 265" style={{"enable-background":"new 0 0 265 265;"}} xmlSpace="preserve">
                <path className="st0" d="M241.6,3.9H23.4c-10.8,0-19.5,8.7-19.5,19.5v218.2c0,10.8,8.7,19.5,19.5,19.5h218.2c10.8,0,19.5-8.7,19.5-19.5
                    V23.4C261.1,12.6,252.4,3.9,241.6,3.9z M137.7,210.3c-41.9,2.8-78.5-28.2-82.8-70h54.2V152c0,2.2,1.7,3.9,3.9,3.9h39
                    c2.2,0,3.9-1.7,3.9-3.9v-39c0-2.2-1.7-3.9-3.9-3.9h-39c-2.2,0-3.9,1.7-3.9,3.9v11.7H54.9c4-39.8,37.5-70.1,77.6-70.1
                    c42,0,76.5,33.3,77.9,75.3S179.6,207.5,137.7,210.3z"/>
                </svg>
                  your <br/>
                  uber <br/>
                  rating
              </div>
          </div>
          <div className="heading centered fiftyfive">
              How are organisations <br/>
              currently using your data?
          </div>
          <div className="text centered fiftyfive">
              Google collects data about your location, alongside<br/>
              others around you, to recognise traffic patterns.<br/><br/>
              The NHS collects your health data and shares it with<br/>
              other NHS organisations to improve the care and<br/>
              treatment of other patients.
          </div>
          <div className="heading centered fiftyfive">
              How is this relevant <br/> to me?
          </div>
          <div className="text centered">
              In the future, we see ownership of data shifting <br/>
              away from businesses into the hands of individuals, just  <br/>
              like you.<br/>
              <br/>
              With Lens, find out how you could take back control of <br/>
              your own data and use it to apply for a job.
          </div>
      </div>
    </div>
  );
}

export default Page1;
