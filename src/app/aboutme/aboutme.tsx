import React from 'react'
import './aboutme.css';
import Title from '@/app/components/title/title';
import profil from './profil.jpg';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';

const Aboutme = () => {
  return (
    <section id='aboutme'>
      <Container>
        <Row>
          <Col xs={12}>
            <Title text={"A propos de moi"}></Title>
          </Col>
        </Row>
        <Row >
          <Col sm className='aboutmeProfil'>
            <Image className='profil' src={profil} alt="profil"></Image>
          </Col>
          <Col sm className='aboutmeText'>
            <p>Titulaire d’une Licence informatique en développement web et mobile, je justifie de
              3 ans d’expérience de développeur fullstack. J’ai réalisé 6 projets, me
              perfectionnant en ReactJs pour le front ainsi que NodeJs et NestJs pour le back.
              Mes différents environnements de travail (Freelance puis en entreprise), m’ont permis
              d’apprendre à être très autonome tout en aimant travailler en équipe.</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Aboutme;
