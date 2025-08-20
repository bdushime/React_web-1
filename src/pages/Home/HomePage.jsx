import React from 'react'
import Header from '../../components/Header'
import Hero from './Hero'
import QuickLinks from './Quicklinks'
import AboutSection from './AboutSection'
import CampusLife from './CampusLife'
import Footer from '../../components/footer'
import Calendar from './Calendar'
import { ProgramsSection } from '../Admission/ProgramSection'
import { CTASection } from './CTASection'

const HomePage = () => {
  return (
    <div className="font-sans min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        {/* <QuickLinks /> */}

        <AboutSection />
        {/* <Academics /> */}
        <ProgramsSection />
          <Calendar />

        <CampusLife />
        <CTASection   />
        <Footer />
      </main>
    </div >
  )
}

export default HomePage