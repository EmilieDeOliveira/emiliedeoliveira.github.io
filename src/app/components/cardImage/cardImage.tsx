import React from 'react'
import Image from 'next/image';
import './cardImage.css';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

const CardImage = (props: { text: string, topic: string, img: StaticImport }) => {
  return (
    <div className="cardContainer">
      <div className="overlay">
        <span className="text">{props.text}</span>
        <span className="topic">{props.topic}</span>
      </div>
      <Image
        alt=""
        src={props.img}
        className="img-responsive"
      />
    </div>
  );

}

export default CardImage
