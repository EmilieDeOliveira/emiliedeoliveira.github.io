"use client";
import React, { useEffect, useState } from 'react';
import "./navigation2.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import useMobile from '@/app/hooks/useMobile.hook';
import { usePathname } from 'next/navigation'
import useActiveSection from '@/app/hooks/useActiveSection.hook';

const Navigation2 = () => {
  const activeSection = useActiveSection();

  const [scroll, setScroll] = useState(false);
  const [currentSection, setCurrentSection] = useState<string | null>(null);
  const isMobile = useMobile();
  const pathname = usePathname()

  const changeColor = () => {
    if (typeof window !== "object") return;

    if (window.scrollY >= 66) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }
  const sections = ['#header', '#aboutme', '#skills', '#portfolioSection', '#experiences', '#formations'];

  // const handleScroll = () => {
  //   const scrollPosition = window.scrollY + 100;
  //   console.log("scroll", scrollPosition);


  //   const cSection = sections.find(section => {
  //     const element = document.querySelector(section);

  //     if (element) {
  //       const { top, height } = element.getBoundingClientRect();
  //       console.log("top", top);
  //       return top == 0;
  //     }
  //     return false;
  //   }) || null;
  //   console.log(cSection);

  //   setCurrentSection(cSection);
  // };

  useEffect(() => {
    changeColor();
    window.addEventListener("scroll", changeColor);
    // window.addEventListener('scroll', handleScroll);

    // return () => {
    //   window.removeEventListener('scroll', handleScroll);
    // };
  });

  return (
    <Navbar id='navbar' collapseOnSelect expand="lg" className={isMobile || pathname != "/" ? " notTransparent" : scroll ? "notTransparent" : "transparent"} fixed="top" >
      <Container>
        <Navbar.Brand className="logo" href={"/"}>ED</Navbar.Brand>
        <Navbar.Toggle label='button' />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="/#aboutme" className={activeSection === 'aboutme' ? 'active' : ''}>A propos de moi</Nav.Link>
            <Nav.Link href="/#skills" className={activeSection === 'skills' ? 'active' : ''}>Compétences</Nav.Link>
            <Nav.Link href="/#portfolioSection" className={activeSection === 'portfolioSection' ? 'active' : ''}>Portfolio</Nav.Link>
            <Nav.Link href="/#experiences" className={activeSection === 'experiences' ? 'active' : ''}>Experiences</Nav.Link>
            <Nav.Link href="/#formations" className={activeSection === 'formations' ? 'active' : ''}>Formations</Nav.Link>
            <a href={"/DeOliveira_Emilie_Cv.pdf"} download><Button
            >Télécharger mon CV <FileDownloadIcon fontSize="small" sx={{ color: 'white' }} />
            </Button></a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation2;
