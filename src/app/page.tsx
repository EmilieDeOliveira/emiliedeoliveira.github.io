"use client"
import LateralBar from '@/app/components/lateralBar/lateralBar'
import Aboutme from '@/app/aboutme/aboutme'
import Formations from '@/app/formations/formations'
import Header from '@/app/header/header'
import PortfolioSection from '@/app/PortfolioSection/PortfolioSection'
import Skills from '@/app/skills/skills'
import useMobile from '@/app/hooks/useMobile.hook'

export default function Home() {
  const isMobile = useMobile();

  return (
    <main>
      {!isMobile && <LateralBar></LateralBar>}
      <Header></Header>
      <Aboutme></Aboutme>
      <Skills></Skills>
      <PortfolioSection></PortfolioSection>
      <Formations></Formations>
    </main>
  )
}
