import React from 'react';
import './Page11.css';
import BarChart from '../components/BarChart'
import SpeechBubble from "../components/Speechbubble";

const chart1Properties = {
  title: "Chosen Options",
  width: 900,
  height: 450,
  barWidth : 25,
  x : (d) => d.Gotten,
  y : (d) => d.Frequency,
  xScale : 'ordinal',
  xLabel : "Letter",
  yLabel : "Frequency",
  yTicks : [10, "%"],
  fill : "black",
  margin : {top: 20, right: 20, bottom: 30, left: 40}
};
const chart2Properties = {
    title: "Chosen Options",
    width: 900,
    height: 550,
    barWidth : 70,
    x : (d) => d.Choice,
    y : (d) => d.Frequency,
    xScale : 'ordinal',
    xLabel : "Letter",
    yLabel : "Frequency",
    yTicks : [],
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
        fill={chart1Properties.fill}
        title= {chart1Properties.title}
        data= {props.data[1]}
        width= {chart1Properties.width}
        margin = {chart1Properties.margin}
        height= {chart1Properties.height}
        chartSeries = {chart1Properties.chartSeries}
        x= {chart1Properties.x}
        y= {chart1Properties.y}
        xLabel= {chart1Properties.xLabel}
        xScale= {chart1Properties.xScale}
        yTicks= {chart1Properties.yTicks}
        yLabel = {chart1Properties.yLabel}
        barWidth = {chart1Properties.barWidth}/>
    <BarChart
        fill={chart2Properties.fill}
        title= {chart2Properties.title}
        data= {props.data[0]}
        width= {chart2Properties.width}
        margin = {chart2Properties.margin}
        height= {chart2Properties.height}
        chartSeries = {chart2Properties.chartSeries}
        x= {chart2Properties.x}
        y= {chart2Properties.y}
        xLabel= {chart2Properties.xLabel}
        xScale= {chart2Properties.xScale}
        yTicks= {chart2Properties.yTicks}
        yLabel = {chart2Properties.yLabel}
        barWidth = {chart2Properties.barWidth}/>
    </div>
  );
}

export default Page11;
