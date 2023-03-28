import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/reusable/navbar/Navbar'
import Footer from './components/homePage/Footer/Footer';
import TyssRoutes from './routes/TyssRoutes';
import FooterBottom from './components/homePage/Footer/FooterBottom';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <TyssRoutes/>
        <Footer />
        <FooterBottom/>
      </Router>
    </div>
  );
}

export default App
