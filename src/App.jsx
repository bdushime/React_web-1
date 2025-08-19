import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import { QuickLinks } from './components/Quicklinks'
import { ResearchSection } from './components/Research'
import { NewsEventsSection } from './components/NewsEventsSection'
import { ProgramsSection } from './components/ProgramSection'
import AdmissionRequirements from './components/AdmissionRequirement'

function App() {

  return (
  <div className="font-sans min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        {/* <QuickLinks /> */}
        <ResearchSection />
        <ProgramsSection />
        <NewsEventsSection />
        <AdmissionRequirements />
      </main>
    </div>
  )
}

export default App
