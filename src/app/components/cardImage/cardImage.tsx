import React from 'react'
import Image from 'next/image';
import './cardImage.css';
import Link from 'next/link';

const CardImage = (props: { title: string, text: string, topic: string, img: string, url?: string }) => {

  return (
    <div className="cardContainer">
      <Link href={`/portfolio/${props.text.toLowerCase()}`} legacyBehavior>
        <div className="overlay">
          <span className="text">{props.title}</span>
          <span className="topic">{props.topic}</span>
        </div>
      </Link>
      <Image
        alt=""
        src={props.img}
        className="img-responsive"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '664' }}
      />
    </div>
  );

}

export default CardImage
