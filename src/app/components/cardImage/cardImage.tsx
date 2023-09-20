import React from 'react'
import Image from 'next/image';
import './cardImage.css';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Link from 'next/link';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
const CardImage = (props: { text: string, topic: string, img: StaticImport, url?: string }) => {
  return (
    <div className="cardContainer">
      <div className="overlay">
        <span className="text">{props.text}{props.url && <Link href={props.url} target="_blank"><OpenInNewIcon fontSize="medium" sx={{ color: 'white', paddingLeft: "4px" }} /></Link>}</span>
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
