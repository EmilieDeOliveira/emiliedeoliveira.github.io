import React from 'react'
import './experiences.css';
import Title from '@/app/components/title/title';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Typography from '@mui/material/Typography';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';


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
            }} position="alternate">
              <TimelineItem>
                <TimelineOppositeContent sx={{ py: '50px', px: 2 }}>


                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector sx={{ height: '50px', backgroundColor: '#E83151' }} />
                  <TimelineDot sx={{ width: "50px", height: '50px', backgroundColor: '#E83151' }} />
                  <TimelineConnector sx={{ height: '50px', backgroundColor: '#E83151' }} />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '50px', px: 2 }}>
                  <Typography fontSize={16}>Février 2022 - Décembre 2022</Typography>
                  <Typography variant="h6" component="span" fontSize={24}
                    fontWeight={800}>
                    Développeuse Fullstack
                  </Typography>
                  <Typography>J&apos;ai travaillé chez Koji, une agence web basé à Paris en full remote.
                    <br />J&apos;ai d&apos;abord développé un site vitrine, <Link className="pink" href="/portfolio/gobeyondstudio" target="_blank">Gobeyond Studio</Link>, avec <span id='pink'>NextJs</span> à partir des maquettes du client.
                    <br />Nous avons ensuite, avec un développeur back, concu et développé <Link className="pink" href="/portfolio/platinium" target="_blank">Platinium</Link>.
                    Une application mobile et un dashboard pour une agence de nettoyage, permettant de suivre le temps de travail des employés grace au scan d&apos;un QRcode au début et à la fin du travail.
                    <br />Nous avons utilisé <span id='pink'>Nextjs</span> et <span id='pink'>Mobx</span> pour le front et <span id='pink'>NestJs</span> pour le back.
                  </Typography>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineOppositeContent sx={{ py: '50px', px: 2 }}>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector sx={{ height: '50px', backgroundColor: '#E83151' }} />
                  <TimelineDot sx={{ width: "50px", height: '50px', backgroundColor: '#E83151' }} />
                  <TimelineConnector sx={{ height: '50px', backgroundColor: '#E83151' }} />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '50px', px: 2 }}>
                  <Typography fontSize={16}>Octobre 2021 - Decembre 2021</Typography>

                  <Typography variant="h6" component="span" fontSize={24}
                    fontWeight={800}>
                    Labsoft
                  </Typography>
                  <Typography>Pour le client final Airbus, j&apos;ai travaillé sur une web App permettant de suivre l&apos;avance-retard sur la chaîne de montage des avions. Utilisation de ReactJs.</Typography>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineOppositeContent sx={{ py: '50px', px: 2 }}>


                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector sx={{ height: '50px', backgroundColor: '#E83151' }} />
                  <TimelineDot sx={{ width: "50px", height: '50px', backgroundColor: '#E83151' }} />
                  <TimelineConnector sx={{ height: '50px', backgroundColor: '#E83151' }} />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '50px', px: 2 }}>
                  <Typography fontSize={16}>Octobre 2020 - Octobre 2021</Typography>

                  <Typography variant="h6" component="span" fontSize={24}
                    fontWeight={800}>
                    Freelance
                  </Typography>
                  <Typography>Durant 1 an, j&apos;ai travaillé en tant que freelance sur deux projets.
                    <br /> Le premier, un site vitrine pour une agence de carte grise:  <Link className="pink" href="/portfolio/cartegrisecarcassonne" target="_blank">cartegriseCarcassonne.fr</Link> . J&apos;ai du réaliser les maquettes avec le client, la conception et le developpement.
                    <br /> J&apos;ai ensuite travaillé sur un site e-commerce, Les potions de Litha, pour le quel j&apos;ai utilisé <span className="pink">ReactJs</span> pour le front, ainsi que <span className="pink">Redux</span> et <span className="pink">Stripe</span> pour le moyen de paiement, <span className="pink">NodeJs</span> pour la partie Back et <span className="pink">MySql</span> pour la base de données.
                    <br /> Pour ces deux projets j&apos;ai utilisé <span className="pink">Photoshop</span> pour créer les maquettes.
                    <br /> J&apos;ai mis en production ces deux projets à l&apos;aide de putty, pm2 et Filezilla.</Typography>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineOppositeContent sx={{ py: '50px', px: 2 }}>


                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector sx={{ height: '50px', backgroundColor: '#E83151' }} />
                  <TimelineDot sx={{ width: "50px", height: '50px', backgroundColor: '#E83151' }} />
                  <TimelineConnector sx={{ height: '50px', backgroundColor: '#E83151' }} />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '50px', px: 2 }}>
                  <Typography fontSize={16}>Juillet 2018 - Septembre 2019</Typography>

                  <Typography variant="h6" component="span" fontSize={24}
                    fontWeight={800}>
                    CGx Montain
                  </Typography>
                  <Typography>Dans le cadre de mon alternance pour obtenir ma licence DReAM, j&apos;ai travaillé chez CGx Moutain. Cette entreprise, qui concoie et développe des solutions pour les stations de ski, m&apos;a confié
                    le développement d&apos;une <Link className="pink" href="/portfolio/tourmaletapp" target="_blank">web app</Link> pour une station: Tourmalet. Celle-ci permet au employer de suivre les prévisions sur notamment les ouvertures et fermetures des pistes, la météo, les damages prévus...<br />
                    J&apos;ai réalisé l&apos;application avec <span className="pink">Angular 7</span> et <span className="pink">Ionic</span> pour la partie Front et <span className="pink">NodeJs</span> avec express ainsi que <span className="pink">Swagger</span> pour la partie Back.</Typography>
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
