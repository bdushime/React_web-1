import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import { QuickLinks } from './components/Quicklinks'
import Footer from './components/footer'
import CampusLife from './components/CampusLife'

function App() {

  return (
  <div className="font-sans min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <QuickLinks />
        <CampusLife />
        <Footer />
      </main>
    </div>
  )
}

export default App
