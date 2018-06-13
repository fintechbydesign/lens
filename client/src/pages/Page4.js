import React from 'react';
import Poll from '../components/Poll';
import './Page4.css';

const pollProperties = [
  {
    pollDescription: 'Option A',
    pollShows: 'More Info about Action A',
  },
  {
    pollDescription: 'Option B',
    pollShows: 'More Info about Action B',
  },
  {
    pollDescription: 'Option A',
    pollShows: 'More Info about Action C',
  },
  {
    pollDescription: 'Option A',
    pollShows: 'More Info about Action D',
  }
];

function Page4 (props) {
  const poll = pollProperties.map((pollProps, index) => {
    const mergedProps = {
      ...pollProps,
      selected: props.buttons.on[index+1]
    };
    return (<Poll {...mergedProps} />)
  });
  return (
    <div name ='page4' className='flexFixedSize flexContainerColumn fullPage'>
      {poll}
    </div>
  );
}

export default Page4;
