"use client"
import React from 'react'
import './portfolio.css';
import { Project } from './project';
import { notFound } from "next/navigation";
import Title from '@/app/components/title/title';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';

export default function Page({ params }: { params: { portfolioName: string } }) {
  const project = Project.find(p => p.name === params.portfolioName);

  if (!project) {
    notFound();
  }
  return (
    <div className="portfolio">
      <Container>
        <Row>
          <Col>
            <Title text={params.portfolioName.toUpperCase()}></Title>
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
                {project.url && <Link href={project.url} target="_blank">{project.url}</Link>}
                <div>{project.descr}</div>
              </Col>
            </Row>
          </Col>

          <Col>
            <Row xs={2}>
              {project.srcImg.map((img: string, i: number) =>
                <Col key={i}>
                  <Image
                    src={img}
                    alt={""}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto', margin: "50px" }} />
                </Col>
              )}
            </Row>

          </Col>
        </Row>
      </Container>
    </div>

  );
}
