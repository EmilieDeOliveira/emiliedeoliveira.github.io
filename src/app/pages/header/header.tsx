import React, { useCallback } from 'react'
import './header.css';
import BackgroundAnimation from '@/app/components/backgroundAnimation/BackgroundAnimation';
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from 'tsparticles';

const Header = () => {
  const particlesHeaderInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesHeaderLoaded = useCallback(async (container: Container | undefined) => {
    await console.log("container1");
  }, []);
  return (
    <div className="header">
      <BackgroundAnimation id={"headerParticle"} particlesInit={particlesHeaderInit} particlesLoaded={particlesHeaderLoaded}></BackgroundAnimation>

      <div className='headerTitle'>
        <div className='text-center'>Emilie De Oliveira</div>
        <div className='text-center'>Développeuse Fullstack</div>
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
