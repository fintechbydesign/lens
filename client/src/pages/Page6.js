import React from 'react';
import Datasource from '../components/Datasource';

const datasourceProperties = [
  {
    actionDescription: 'Facebook',
    options: {
      1: "likes",
      2: "comments",
      3: "posts",
    },
    iconSrc: '/logos/facebook.svg',
  },
  {
    actionDescription: 'YouTube',
    options: {
      1: "watch list",
      2: "subscription",
      3: "comments",
    },
    iconSrc: '/logos/youtube.svg',
  },
  {
    actionDescription: 'Fitbit',
    options: {
      1: "heart rate",
      2: "steps",
      3: "sleep",
    },
    iconSrc: '/logos/fitbit.svg',
  },
  {
    actionDescription: 'Instagram',
      options: {
          1: "following",
          2: "posts",
          3: "hashtags",
      },
      iconSrc: '/logos/instagram.svg',
  },
  {
    actionDescription: 'Amazon',
      options: {
          1: "purchases",
          2: "reviews",
          3: "delivery history",
      },
      iconSrc: '/logos/amazon.svg',
  },
  {
    actionDescription: 'Uber',
      options: {
          1: "location",
          2: "your rating",
          3: "tips",
      },
      iconSrc: '/logos/fitbit.svg',
  },
];

function Page6 (props) {
  const datasources = datasourceProperties.map((datasourceProps, index) => {
    const mergedProps = {
      ...datasourceProps,
      selected: props.buttons.on[index+1]
    };
    return (<Datasource {...mergedProps} />)
  });
  return (
    <div name ='page6' className='flexFixedSize flexContainerColumn'>
      {datasources}
    </div>
  );
}

export default Page6;
