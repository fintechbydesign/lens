import React from 'react';
import Datasource from '../components/Datasource';

const datasourceProperties = [
  {
    actionDescription: 'Do 10,000 steps per day',
    actionShows: 'You\'re active and healthy',
    iconSrc: '/fitbit.png',
  },
  {
    actionDescription: 'Visit a lot of points of interest',
    actionShows: 'You\'re familiar with the area',
    iconSrc: '/fitbit.png',
  },
  {
    actionDescription: 'Get 8 hours sleep a night',
    actionShows: 'You\'re well rested and have energy',
    iconSrc: '/fitbit.png',
  },
  {
    actionDescription: 'Liked 20 videos and disliked 53 videos',
    actionShows: 'You\'re more likely to share negative views',
    iconSrc: '/youtube.png',
  },
  {
    actionDescription: 'Subscribe to Music, News and Food channels',
    actionShows: 'You have a broad range of interests',
    iconSrc: '/youtube.png',
  },
  {
    actionDescription: 'Comment on 3 of every 10 videos you watch',
    actionShows: 'Your\'re comfortable sharing your opinion',
    iconSrc: '/youtube.png',
  },
  {
    actionDescription: 'Started books on History, Art and Bibliographies',
    actionShows: 'You have a broad range of interests',
    iconSrc: '/amazon.png',
  },
  {
    actionDescription: 'Only buy items on your saved list at the end of the month',
    actionShows: 'You\'re not an impulsive spender',
    iconSrc: '/amazon.png',
  },
  {
    actionDescription: 'Give feedback often about your purchases',
    actionShows: 'You\'re interested in the benefit of others',
    iconSrc: '/amazon.png',
  }
];

function Page2 (props) {
  const datasources = datasourceProperties.map((datasourceProps, index) => {
    const mergedProps = {
      ...datasourceProps,
      selected: props.buttons.on[index+1]
    };
    return (<Datasource {...mergedProps} />)
  });
  return (
    <div name ='page2' className='flexFixedSize flexContainerColumn'>
      {datasources}
    </div>
  );
}

export default Page2;