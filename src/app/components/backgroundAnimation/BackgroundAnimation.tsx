import React from 'react'
import './backgroundAnimation.css';
import Particles from 'react-particles';
import type { Container, Engine } from "tsparticles-engine";

const BackgroundAnimation = (props: { id: string, particlesInit: (engine: Engine) => Promise<void>, particlesLoaded: (container?: Container | undefined) => Promise<void> }) => {

  return (
    <div className="backgroundAnimation">
      <Particles
        id={props.id}
        init={props.particlesInit}
        loaded={props.particlesLoaded}
        options={{
          fullScreen: false,
          background: {
            color: {
              value: "#212529",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 2 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  )
}

export default BackgroundAnimation;
