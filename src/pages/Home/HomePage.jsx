import React from 'react'
import Header from '../../components/Header'
import Hero from './Hero'
import QuickLinks from './Quicklinks'
import AboutSection from './AboutSection'
import Academics from './Academics'
import CampusLife from './CampusLife'
import Footer from '../../components/footer'

const HomePage = () => {
  return (
    <div className="font-sans min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <QuickLinks />

        <AboutSection />
        <Academics />

        <CampusLife />
        <Footer />
      </main>
    </div >
  )
}

export default HomePage