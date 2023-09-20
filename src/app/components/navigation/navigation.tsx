"use client"
import React, { useEffect, useState } from 'react'
import "./navigation.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import useMobile from '@/app/hooks/useMobile.hook';
import cv from './Emilie_DeOliveira_cv.pdf';

const Navigation = () => {
  const [scroll, setScroll] = useState(false);
  const isMobile = useMobile();

  const changeColor = () => {
    if (window.scrollY >= 66) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }
  useEffect(() => {
    changeColor();
    window.addEventListener("scroll", changeColor);
  });

  return (
    <Navbar id='navbar' collapseOnSelect expand="lg" className={isMobile ? "bg-body-tertiary notTransparent" : scroll ? "bg-body-tertiary notTransparent" : "transparent"} fixed="top" >
      <Container>
        <Navbar.Brand href={"/"}>ED</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="#aboutme" >A propos de moi</Nav.Link>
            <Nav.Link href="#skills">Compétences</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#formations">Formations</Nav.Link>
            <a href={"/Emilie_DeOliveira_cv.pdf"} download><Button
            >Télécharger mon CV <FileDownloadIcon fontSize="small" sx={{ color: 'white' }} />
            </Button></a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation;
