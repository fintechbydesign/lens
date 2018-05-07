import React from 'react';
import Spacer from '../components/Spacer'

function Page (props) {
  const name = `page${props.index}`;
  return (
    <div>
      <h1 name ={name}>{name}</h1>
      <Spacer style={{'marginTop':'500px'}}/>
    </div>
  );
}

export default Page;