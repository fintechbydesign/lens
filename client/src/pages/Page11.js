import React from 'react';
import './Page11.css';
import BarChart from '../components/BarChart'
import SpeechBubble from "../components/Speechbubble";

const chartProperties = {
  title: "Chosen Options",
  width: 900,
  height: 450,
  barWidth : 25,
  x : (d) => d.Letter,
  y : (d) => d.Frequency,
  xScale : 'ordinal',
  xLabel : "Letter",
  yLabel : "Frequency",
  yTicks : [10, "%"],
  fill : "black",
  margin : {top: 20, right: 20, bottom: 30, left: 40}
};

function Page11 (props) {
  return (
    <div name ='page11' className='flexFixedSize flexContainerColumn fullPage'>
      <SpeechBubble top={true} text={[
          "Look how the other humans responded!"
      ]} class={"one-line-top"}/>
      <BarChart
          fill={chartProperties.fill}
          title= {chartProperties.title}
          data= {props.data}
          width= {chartProperties.width}
          margin = {chartProperties.margin}
          height= {chartProperties.height}
          chartSeries = {chartProperties.chartSeries}
          x= {chartProperties.x}
          y= {chartProperties.y}
          xLabel= {chartProperties.xLabel}
          xScale= {chartProperties.xScale}
          yTicks= {chartProperties.yTicks}
          yLabel = {chartProperties.yLabel}
          barWidth = {chartProperties.barWidth}/>
    </div>
  );
}

export default Page11;
