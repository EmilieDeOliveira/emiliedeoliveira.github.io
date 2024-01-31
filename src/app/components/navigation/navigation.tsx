"use client";
import React, { useEffect, useState } from 'react';
import "./navigation.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import useMobile from '@/app/hooks/useMobile.hook';
import { usePathname } from 'next/navigation'
import useActiveSection from '@/app/hooks/useActiveSection.hook';
import Link from 'next/link';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Navigation = () => {
  const activeSection = useActiveSection();

  const [scroll, setScroll] = useState(false);
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

  useEffect(() => {
    changeColor();
    window.addEventListener("scroll", changeColor);
  });

  return (
    <Navbar variant="dark" id='navbar' collapseOnSelect expand="lg" className={isMobile || pathname != "/" ? " notTransparent" : scroll ? "notTransparent" : "transparent"} fixed="top" >
      <Container>
        <Navbar.Brand className="logo" href={"/"}>ED</Navbar.Brand>
        <Navbar.Toggle label='button' aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="/#aboutme" className={activeSection === 'aboutme' ? 'active' : ''}>A propos de moi</Nav.Link>
            <Nav.Link href="/#skills" className={activeSection === 'skills' ? 'active' : ''}>Compétences</Nav.Link>
            <Nav.Link href="/#portfolioSection" className={activeSection === 'portfolioSection' ? 'active' : ''}>Portfolio</Nav.Link>
            <Nav.Link href="/#experiences" className={activeSection === 'experiences' ? 'active' : ''}>Experiences</Nav.Link>
            <Nav.Link href="/#formations" className={activeSection === 'formations' ? 'active' : ''}>Formations</Nav.Link>
            {isMobile && <div className='liens'>
              <div><Link aria-label='Linkedin lien' target="_blank" href={'https://www.linkedin.com/in/emilie-de-oliveira-82915014b/'}><LinkedInIcon focusable={true} fontSize="large" sx={{ color: '#BCBEC0' }} /></Link></div>
              <div><Link aria-label='Github lien' target="_blank" href={'https://github.com/EmilieDeOliveira'}><GitHubIcon fontSize="large" sx={{ color: '#BCBEC0' }} /></Link></div>
              <div><Link aria-label='Instagram lien' target="_blank" href={'https://www.instagram.com/deoliveira.dev/'}><InstagramIcon fontSize="large" sx={{ color: '#BCBEC0' }} /></Link></div>
              <div><Link aria-label='Mail lien' target="_blank" href={'mailto:emilie.laura.deoliveira@gmail.com'}><EmailIcon fontSize="large" sx={{ color: '#BCBEC0' }} /></Link></div>
            </div>}
            <a href={"/DeOliveira_Emilie_czv.pdf"} download><Button
            >Télécharger mon CV <FileDownloadIcon fontSize="small" sx={{ color: 'white' }} />
            </Button></a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation;
