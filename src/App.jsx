import React from 'react'
import './global.css'

import Navbar from './components/reusable/navbar/Navbar'
import Banner from './components/homePage/banner/Banner';
import Team from './components/homePage/team/Team';
import Workflow from './components/homePage/workflow/Workflow';
import CaseStudies from './components/homePage/caseStudy/CaseStudies';
import Services from './components/homePage/ourservices/Services';
import Newsletter from './components/homePage/newsletter/Newsletter';

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Team />
      <Services/>
      <Workflow />
      <CaseStudies />
      <Newsletter/>
    </div>
  )
}

export default App
