"use client"
import LateralBar from '@/app/components/lateralBar/lateralBar'
import Aboutme from '@/app/aboutme/aboutme'
import Formations from '@/app/formations/formations'
import Header from '@/app/header/header'
import PortfolioSection from '@/app/portfolioSection/portfolioSection'
import Skills from '@/app/skills/skills'
import useMobile from '@/app/hooks/useMobile.hook'
import Experiences from '@/app/experiences/experiences'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import CursorProvider from "./providers/CursorProvider";
import Cursor from '@/app/components/cursor/Cursor'

export default function Home() {
  const isMobile = useMobile();
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <main>
      <CursorProvider>
        <Cursor />
        {!isMobile && <LateralBar></LateralBar>}
        <Header></Header>
        <Aboutme></Aboutme>
        <Skills></Skills>
        <PortfolioSection></PortfolioSection>
        <Experiences></Experiences>
        <Formations></Formations>
      </CursorProvider>
    </main>
  )
}
