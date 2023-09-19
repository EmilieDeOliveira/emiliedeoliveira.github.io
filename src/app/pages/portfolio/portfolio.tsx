import React from 'react'
import './portfolio.css';
import Title from '@/app/components/title/title';
import { Container, Row, Col } from 'react-bootstrap';
import CardImage from '@/app/components/cardImage/cardImage';
import MSFImage from './monitor.png';

const Portfolio = () => {
  return (
    <div id='portfolio'>
      <Container>
        <Row>
          <Col xs={12}>
            <Title text={"Portfolio"}></Title>
          </Col>
        </Row>
        <Row md={3} sm={2} xs={1}>
          <Col>
            <CardImage text='Portfolio' topic='NextJS, Typescript, Bootstrap' img={MSFImage}></CardImage>
          </Col>
          <Col>
            <CardImage text='Platinium' topic='NextJS, NestJS, Mobx' img={MSFImage}></CardImage>
          </Col>
          <Col>
            <CardImage text='My Studio Factory' topic='NextJS, Typescript, Lottie, Bootstrap' img={MSFImage}></CardImage>
          </Col>
          <Col>
            <CardImage text='Les Potions De Litha' topic='ReactJS, NodeJS, Stripe, Photoshop' img={MSFImage}></CardImage>
          </Col>
          <Col>
            <CardImage text='CarteGriseCarcassonne' topic='ReactJs, Photoshop' img={MSFImage}></CardImage>
          </Col>
          <Col>
            <CardImage text='Tourmalet App' topic='Angular, Ionic, NodeJs' img={MSFImage}></CardImage>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Portfolio;
