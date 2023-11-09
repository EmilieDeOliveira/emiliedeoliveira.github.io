import React from 'react'
import './title.css'
const Title = (props: { text: string }) => {
  return (
    <div className='title' data-aos="fade-right">
      <p >{props.text}</p>
      <div id="borderBottom"></div>
    </div>
  )
}

export default Title;
