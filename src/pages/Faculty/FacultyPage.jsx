import React from 'react'
import Header from '../../components/Header'
import HeroSection from './HeroSection'
import FacultyServices from './FacultyServices'
import ResourceCategories from './ResourceCategories'
import FacultyDirectory from './FacultyDirectory'
import QuickLinks from '../Home/Quicklinks'
import Footer from '../../components/footer'

const FacultyPage = () => {
  return (
    <>
    
    <Header />
    
    <div className="min-h-screen bg-white">
      <HeroSection />
      <FacultyServices />
      <ResourceCategories />
      <FacultyDirectory />
      <QuickLinks />
      <Footer />
    </div>
    </>
  )
}

export default FacultyPage