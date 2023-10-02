import React from 'react'
import './portfolioSection.css';
import Title from '@/app/components/title/title';
import { Container, Row, Col } from 'react-bootstrap';
import CardImage from '@/app/components/cardImage/cardImage';


const PortfolioSection = () => {
  return (
    <div id='portfolioSection'>
      <Container>
        <Row>
          <Col xs={12}>
            <Title text={"Portfolio"}></Title>
          </Col>
        </Row>
        <Row md={3} sm={2} xs={1}>
          <Col>
            <CardImage title='Portfolio' text='portfolio' topic='NextJS, Typescript, Bootstrap' url='https://emiliedeoliveira.github.io/' img="/assets/images/portfolioSection/portfolio.png"></CardImage>
          </Col>
          <Col>
            <CardImage title='Platinium' text='Platinium' topic='NextJS, NestJS, Mobx' img={'/assets/images/portfolioSection/platinium.png'}></CardImage>
          </Col>
          <Col>
            <CardImage title='Gobeyond Studio' text='gobeyondstudio' url="https://studio.gobeyondpartners.com/" topic='NextJS, Typescript, Lottie, Bootstrap' img={'/assets/images/portfolioSection/gobeyondpartners.png'}></CardImage>
          </Col>
          <Col>
            <CardImage title='Les potions de Litha' text='LesPotionsDeLitha' topic='ReactJS, NodeJS, Stripe, Photoshop' img={'/assets/images/portfolioSection/platinium.png'}></CardImage>
          </Col>
          <Col>
            <CardImage title='Carte grise Carcassonne' text='CarteGriseCarcassonne' url="https://www.instagram.com/p/CGzYl7iHlTG/?img_index=1" topic='ReactJs, Photoshop' img={'/assets/images/portfolioSection/cgc.png'}></CardImage>
          </Col>
          <Col>
            <CardImage title='Tourmalet App' text='TourmaletApp' topic='Angular, Ionic, NodeJs' img={'/assets/images/portfolioSection/cgx.png'}></CardImage>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default PortfolioSection;
