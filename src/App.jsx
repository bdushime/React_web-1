import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import QuickLinks from './components/Quicklinks'
import Academics from './components/Academics'

function App() {

  return (
  <div className="font-sans min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <QuickLinks />
        <Academics />
      </main>
    </div>
  )
}

export default App;
