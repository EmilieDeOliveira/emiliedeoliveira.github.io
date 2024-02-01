import React, { useCallback } from 'react'
import './header.css';
import BackgroundAnimation from '@/app/components/backgroundAnimation/backgroundAnimation';
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from 'tsparticles';

const Header = () => {
  const particlesHeaderInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesHeaderLoaded = useCallback(async (container: Container | undefined) => {
  }, []);
  return (
    <div className="header" id="header">
      <BackgroundAnimation id={"headerParticle"} particlesInit={particlesHeaderInit} particlesLoaded={particlesHeaderLoaded}></BackgroundAnimation>

      <div className='headerTitle'>
        <p>Hello! Je suis <span className='name'>Emilie De Oliveira !</span></p>
        <p className='devtitle'>Développeuse Fullstack</p>
      </div>
      <div className="scrollDiv">
        <section className="scrollSection">
          <span className="scroll-icon">
            <span className="scroll-icon__dot"></span>
          </span>
        </section>
      </div>
    </div>
  )
}

export default Header;
