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
                  <p>J'ai travaillé chez Koji, une agence web basé à Paris en full remote.
                    <br />J'ai d'abord développé un site vitrine, <Link id="pink" href="/portfolio/gobeyondstudio" target="_blank">Gobeyond Studio</Link>, avec <span id='pink'>NextJs</span> à partir des maquettes du client.
                    <br />Nous avons ensuite, avec un développeur back, concu et développé <Link id="pink" href="/portfolio/platinium" target="_blank">Platinium</Link>.
                    Une application mobile et un dashboard pour une agence de nettoyage, permettant de suivre le temps de travail des employés grace au scan d'un QRcode au début et à la fin du travail.
                    <br />Nous avons utilisé <span id='pink'>Nextjs</span> et <span id='pink'>Mobx</span> pour le front et <span id='pink'>NestJs</span> pour le back.
                  </p>
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
                  <p>Pour le client final Airbus, j'ai travaillé sur une web App permettant de suivre l'avance/retard sur la chaîne de montage des avions. Utilisation de ReactJs.</p>
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
                  <p>Durant 1 an, j'ai travaillé en tant que freelance sur deux projets.
                    <br /> Le premier, un site vitrine pour une agence de carte grise:  <Link id="pink" href="/portfolio/cartegrisecarcassonne" target="_blank">cartegriseCarcassonne.fr</Link> . J'ai du réaliser les maquettes avec le client, la conception et le developpement.
                    <br /> J'ai ensuite travaillé sur un site e-commerce, Les potions de Litha, pour le quel j'ai utilisé <span id="pink">ReactJs</span> pour le front, ainsi que <span id="pink">Redux</span> et <span id="pink">Stripe</span> pour le moyen de paiement, <span id="pink">NodeJs</span> pour la partie Back et <span id="pink">MySql</span> pour la base de données.
                    <br /> Pour ces deux projets j'ai utilisé <span id="pink">Photoshop</span> pour créer les maquettes.
                    <br /> J'ai mis en production ces deux projets à l'aide de putty, pm2 et Filezilla.</p>
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
                  <p>Dans le cadre de mon alternance pour obtenir ma licence DReAM, j'ai travaillé chez CGx Moutain. Cette entreprise, qui concoie et développe des solutions pour les stations de ski, m'a confié
                    le développement d'une <Link id="pink" href="/portfolio/tourmaletapp" target="_blank">web app</Link> pour une station: Tourmalet. Celle-ci permet au employer de suivre les prévisions sur notamment les ouvertures et fermetures des pistes, la météo, les damages prévus...<br />
                    J'ai réalisé l'application avec <span id="pink">Angular 7</span> et <span id="pink">Ionic</span> pour la partie Front et <span id="pink">NodeJs</span> avec express ainsi que <span id="pink">Swagger</span> pour la partie Back.</p>
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
