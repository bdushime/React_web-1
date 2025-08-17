import React from 'react';
import FacultyDirectory from './FacultyDirectory';
import FacultyServices from './FacultyServices';
import Footer from './Footer';
import HeroSection from './HeroSection';
import QuickLinks from './QuickLinks';
import ResourceCategories from './ResourceCategories';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <FacultyServices />
      <ResourceCategories />
      <FacultyDirectory />
      <QuickLinks />
      <Footer />
    </div>
  );
}

export default App;