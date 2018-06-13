import React from 'react';
import './Page5.css';
import BarChart from '../components/BarChart'

const chartProperties = {
  title: "Chosen Options",
  data: [10,20,30,40,10],
  width: 500,
  height: 500,
  chartSeries : [
    {
      field: 'Percent',
      name: 'Frequency'
    }
  ],
  x : d => d.Label,
  xScale : 'ordinal',
  xLabel : "Letter",
  yLabel : "Frequency",
  yTicks : [10, "%"],
};

function Page5 (props) {
  return (
    <div name ='page5' className='flexFixedSize flexContainerColumn fullPage'>
      <BarChart data={chartProperties.data} size={[chartProperties.width,chartProperties.height]} />
    </div>
  );
}

export default Page5;
