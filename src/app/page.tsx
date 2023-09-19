"use client"
import LateralBar from '@/app/components/lateralBar/lateralBar'
import Navigation from '@/app/components/navigation/navigation'
import Footer from '@/app/components/footer/footer'
import Aboutme from '@/app/pages/aboutme/aboutme'
import Formations from '@/app/pages/formations/formations'
import Header from '@/app/pages/header/header'
import Portfolio from '@/app/pages/portfolio/portfolio'
import Skills from '@/app/pages/skills/skills'
import useMobile from '@/app/hooks/useMobile.hook'

export default function Home() {
  const isMobile = useMobile();

  return (
    <main>
      {!isMobile && <LateralBar></LateralBar>}
      <Navigation></Navigation>
      <Header></Header>
      <Aboutme></Aboutme>
      <Skills></Skills>
      <Portfolio></Portfolio>
      {/* <Formations></Formations> */}
      <Footer></Footer>
    </main>
  )
}
