import React from 'react'
import './portfolioSection.css';
import Title from '@/app/components/title/title';
import { Container, Row, Col } from 'react-bootstrap';
import CardImage from '@/app/components/cardImage/cardImage';


const PortfolioSection = () => {
  return (
    <section id='portfolioSection'>
      <Container>
        <Row>
          <Col xs={12}>
            <Title text={"MES REALISATIONS"}></Title>
          </Col>
        </Row>
        <Row xxl={3} xl={2} lg={2} md={1} sm={1} xs={1}>
          <Col>
            <CardImage title='Portfolio' text='portfolio' topic='NextJS, Typescript, Bootstrap' url='https://emiliedeoliveira.fr/' img="/assets/images/portfolioSection/portfolio.webp"></CardImage>
          </Col>
          <Col>
            <CardImage title='Platinium' text='Platinium' topic='NextJS, NestJS, Mobx' img={'/assets/images/portfolioSection/platinium.webp'}></CardImage>
          </Col>
          <Col>
            <CardImage title='Gobeyond Studio' text='gobeyondstudio' url="https://studio.gobeyondpartners.com/" topic='NextJS, Typescript, Lottie, Bootstrap' img={'/assets/images/portfolioSection/gobeyondpartners.webp'}></CardImage>
          </Col>
          <Col>
            <CardImage title='Les potions de Litha' text='LesPotionsDeLitha' topic='ReactJS, NodeJS, Stripe, Photoshop' img={'/assets/images/lespotionsdelitha/lespotionsdelitha.webp'}></CardImage>
          </Col>
          <Col>
            <CardImage title='Carte grise Carcassonne' text='CarteGriseCarcassonne' url="https://www.instagram.com/p/CGzYl7iHlTG/?img_index=1" topic='ReactJs, Photoshop' img={'/assets/images/portfolioSection/cgc.webp'}></CardImage>
          </Col>
          <Col>
            <CardImage title='Tourmalet App' text='TourmaletApp' topic='Angular, Ionic, NodeJs' img={'/assets/images/portfolioSection/cgx.webp'}></CardImage>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default PortfolioSection;
