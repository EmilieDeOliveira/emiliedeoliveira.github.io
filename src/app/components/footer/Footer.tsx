import BackgroundAnimation from '@/app/components/backgroundAnimation/BackgroundAnimation'
import React, { useCallback } from 'react'
import './footer.css';
import { loadFull } from 'tsparticles';
import { Container, Engine } from 'tsparticles-engine';

const Footer = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
  }, []);
  return (
    <div className='footer'>
      {/* <BackgroundAnimation id={"footerParticle"} particlesInit={particlesInit} particlesLoaded={particlesLoaded}></BackgroundAnimation> */}
      <div className='footerText'>
        <div>© Emilie De Oliveira | 2023. Tous droits réservés.</div>
      </div>
    </div>
  )
}

export default Footer
