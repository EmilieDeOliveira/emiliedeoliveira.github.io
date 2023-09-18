import React from 'react';
import './subtitle.css';

const Subtitle = (props: { text: string }) => {
  return (
    <div className='subtitle'>{props.text}</div>
  )
}

export default Subtitle;
