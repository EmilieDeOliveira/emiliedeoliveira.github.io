import React from 'react'
import './experiences.css';
import Title from '@/app/components/title/title';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { Container, Row, Col } from 'react-bootstrap';


const Experiences = () => {

  return (
    <section id='experiences'>
      <Container>
        <Row>
          <Col>
            <Title text={"Experiences"}></Title>
            <Timeline sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
            }}>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineConnector sx={{ height: '50px', color: '#E83151' }} />
                  <TimelineDot sx={{ width: "50px", height: '50px' }} />
                  <TimelineConnector sx={{ height: '50px' }} />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '50px', px: 2 }}>
                  <Typography fontSize={16}>Février 2022 - Décembre 2022</Typography>
                  <Typography variant="h6" component="span" fontSize={24}
                    fontWeight={800}>
                    Koji
                  </Typography>
                  <Typography>J'ai travaillé chez Koji, une agence web basé à Paris, sur 2 projets, Platinium et My Studio Factory, en tant que développeur Fullstack.</Typography>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineConnector sx={{ height: '50px' }} />
                  <TimelineDot sx={{ width: "50px", height: '50px' }} />
                  <TimelineConnector sx={{ height: '50px' }} />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '50px', px: 2 }}>
                  <Typography fontSize={16}>Octobre 2021 - Decembre 2021</Typography>

                  <Typography variant="h6" component="span" fontSize={24}
                    fontWeight={800}>
                    Labsoft
                  </Typography>
                  <Typography>Pour le client final Airbus, j'ai travaillé sur une web App permettant de suivre l'avance/retard sur la chaîne de montage des avions. Utilisation de ReactJs.</Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineConnector sx={{ height: '50px' }} />
                  <TimelineDot sx={{ width: "50px", height: '50px' }} />
                  <TimelineConnector sx={{ height: '50px' }} />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '50px', px: 2 }}>
                  <Typography fontSize={16}>Octobre 2020 - Octobre 2021</Typography>

                  <Typography variant="h6" component="span" fontSize={24}
                    fontWeight={800}>
                    Freelance
                  </Typography>
                  <Typography>Durant 1 an, j'ai travaillé en tant que freelance sur 2 projets.
                    <br /> Le premier, un site vitrine pour une agence de carte grise. J'ai pu réaliser les maquettes avec le client, la conception et le developpement.
                    <br /> J'ai ensuite travaillé sur un site e-commerce, Les potions de Litha, pour le quel j'ai utilisé ReactJs/NodeJs ainsi que Stripe pour le moyen de paiement.</Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineConnector sx={{ height: '50px' }} />
                  <TimelineDot sx={{ width: "50px", height: '50px' }} />
                  <TimelineConnector sx={{ height: '50px' }} />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '50px', px: 2 }}>
                  <Typography fontSize={16}>Juillet 2018 - Septembre 2019</Typography>

                  <Typography variant="h6" component="span" fontSize={24}
                    fontWeight={800}>
                    CGx Montain
                  </Typography>
                  <Typography>J'ai travaillé en alternance chez CGx Moutain pour ma licence professionnelle DReAM. Celle ci est concoie et développe des solutions popur les stations de ski.<br />
                    J'ai travaillé sur une web app pour une station, permettant au employer de suivre les prévisions sur notamment les ouverture et fermeture des piste, la météo, les damages prévus...</Typography>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Col>
        </Row>
      </Container>
    </section >
  )
}

export default Experiences;
