import React from 'react';
import './Page11.css';
import BarChart from '../components/BarChart'
import SpeechBubble from "../components/Speechbubble";

const chart1Properties = {
  title: "Chosen Options",
  width: 500,
  height: 550,
  barWidth : 70,
  x : (d) => d.Gotten,
  y : (d) => d.Frequency,
  xScale : 'ordinal',
  xLabel : "Job Gotten",
  yLabel : "Frequency",
  yTicks : [10, "%"],
  fill : "black",
  margin : {top: 80, right: 20, bottom: 30, left: 40},
}
;
const chart2Properties = {
    title: "Chosen Options",
    width: 900,
    height: 550,
    barWidth : 70,
    x : (d) => d.Choice,
    y : (d) => d.Frequency,
    xScale : 'ordinal',
    xLabel : "Choice",
    yLabel : "Frequency",
    yTicks : [10,"%"],
    fill : "black",
    margin : {top: 80, right: 20, bottom: 50, left: 40},
};

function Page11 (props) {
  return (
    <div name ='page11' className='flexFixedSize flexContainerColumn fullPage'>
      <SpeechBubble top={true} text={[
          "Look how the other humans responded!",
          "Check out how many got the job and how humans",
          "feel about sharing personal digital data",
          "Your results are marked in blue."
      ]}/>
    <div className="heading centered">Did they get the job?</div>
    <BarChart
        {...chart1Properties} data={props.data[1]} jobGotten={props.jobGotten} />
    <div className="heading centered">Would you share your data?</div>
    <BarChart
        {...chart2Properties} data={props.data[0]} pollChoice={props.pollChoice}/>
    </div>
  );
}

export default Page11;
