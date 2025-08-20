import React from 'react'
import NewsEventsSection from '../NewsEventsSection'
import Research from './Research'
import Header from '../../components/Header'
import Footer from '../../components/footer'

const ResearchPage = () => {
  return (
    <div>
        <Header />
        <Research />
        <NewsEventsSection />
        <Footer />
    </div>
  )
}

export default ResearchPage