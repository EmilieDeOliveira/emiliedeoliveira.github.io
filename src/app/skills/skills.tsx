import React from 'react'
import './skills.css';
import Title from '@/app/components/title/title';
import Subtitle from '@/app/components/subtitle/subtitle';
import { Col, Container, ProgressBar, Row } from 'react-bootstrap';
import data from './skills.json';
const frontEndData = data['front-end'];
const backEndData = data['back-end'];
const bdd = data['bdd'];

const Skills = () => {
  return (
    <section id='skills'>
      <Container>
        <Row>
          <Col xs={12}>
            <Title text={"Compétences"}></Title>
          </Col>
        </Row>
        <Row>
          <Col sm>
            <div className='skillSection'>
              <Subtitle text={"Front-end"}></Subtitle>
              {frontEndData.map((data, i) => (
                <div key={i} className='skillsData'>
                  <div className='skillsTitle'>{data.title}</div>
                  <ProgressBar aria-label={data.title} role="progressbar" now={data.percent} label={`${data.percent}%`} className='progressbar' />
                </div>
              ))}
            </div>
          </Col>
          <Col sm>
            <div className='skillSection'>

              <Subtitle text={"Back-end"}></Subtitle>
              {backEndData.map((data, i) => (
                <div key={i} className='skillsData'>
                  <div className='skillsTitle'>{data.title}</div>
                  <ProgressBar aria-label={data.title} role="progressbar" now={data.percent} label={`${data.percent}%`} className='progressbar' />
                </div>
              ))}
            </div>
            <div className='skillSection'>
              <Subtitle text={"Base de donnée"}></Subtitle>
              {bdd.map((data, i) => (
                <div key={i} className='skillsData'>
                  <div className='skillsTitle'>{data.title}</div>
                  <ProgressBar aria-label={data.title} role="progressbar" now={data.percent} label={`${data.percent}%`} className='progressbar' />
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Skills;
