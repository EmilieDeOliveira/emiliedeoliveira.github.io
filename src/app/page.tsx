"use client"
import LateralBar from '@/app/components/LateralBar/LateralBar'
import Navigation from '@/app/components/Navigation/Navigation'
import Footer from '@/app/components/footer/Footer'
import Aboutme from '@/app/pages/aboutme/aboutme'
import Formations from '@/app/pages/formations/formations'
import Header from '@/app/pages/header/header'
import Portfolio from '@/app/pages/portfolio/portfolio'
import Skills from '@/app/pages/skills/skills'

export default function Home() {
  return (
    <main>
      <LateralBar></LateralBar>
      <Navigation></Navigation>
      <Header></Header>
      <Aboutme></Aboutme>
      <Skills></Skills>
      <Portfolio></Portfolio>
      <Formations></Formations>
      <Footer></Footer>
    </main>
  )
}
