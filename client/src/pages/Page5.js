import React from 'react';
import './Page5.css';
import BarChart from '../components/BarChart'

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

function Page5 (props) {
  return (
    <div name ='page5' className='flexFixedSize flexContainerColumn fullPage'>
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
      {/*<BarChart data={chartProperties.data}*/}
                {/*size={[chartProperties.width,chartProperties.height]*/}
                {/*} />*/}
    </div>
  );
}

export default Page5;
