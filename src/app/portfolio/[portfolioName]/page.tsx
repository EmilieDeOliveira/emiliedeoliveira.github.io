import React from 'react'
import './portfolio.css';
import { Project } from './project';
import { notFound } from "next/navigation";
import Title from '@/app/components/title/title';
// import { Container, Row, Col, Card } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';

export async function generateStaticParams() {
  return [
    { portfolioName: 'portfolio' },
    { portfolioName: 'platinium' },
    { portfolioName: 'gobeyondstudio' },
    { portfolioName: 'lespotionsdelitha' },
    { portfolioName: 'cartegrisecarcassonne' },
    { portfolioName: 'tourmaletapp' }
  ]
}

export default function Page({ params }: { params: { portfolioName: string } }) {
  const { portfolioName } = params;
  const project = Project.find(p => p.name === portfolioName);

  if (!project) {
    notFound();
  }

  let description = project.descr.split("\n");


  return (
    <div className="portfolio">
      <Title text={portfolioName.toUpperCase()}></Title>

      {/* <Container>
        <Row>
          <Col>
          </Col>
        </Row>

        <Row xs={2}>
          <Col>
            <Row>
              <Col>
                <div className="pt-3 pb-3">Réalisé le: <span>{project.date}</span></div>
              </Col>
              <Col>
                <div className="pt-3 pb-3 text-end">Techno utilisé: <span>{project.techno}</span></div>
              </Col>
            </Row>
            <Row>
              <Col>

                {description.map((string, i) => (
                  <p key={i}>{string}</p>
                ))}
                {project.url && <p>Lien :  <Link href={project.url} target="_blank">{project.url}</Link></p>}
              </Col>
            </Row>
          </Col>

          <Col>
            <Row xs={2}>
              {project.srcImg.map((img: string, i: number) =>
                <Col key={i}>
                  <Card>
                    <Card.Body>
                      <Image
                        src={img}
                        alt={""}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }} />
                    </Card.Body>
                  </Card>

                </Col>
              )}
            </Row>

          </Col>
        </Row>
      </Container> */}
    </div>

  );
}
