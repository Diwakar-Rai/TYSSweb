import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/reusable/navbar/Navbar'
import Footer from './components/homePage/Footer/Footer';
import TyssRoutes from './routes/TyssRoutes';
import FooterBottom from './components/homePage/Footer/FooterBottom';
import MultiLevelNav from './components/newNavbar/MultiLevelNav';
import NewFooterBottom from './components/newFooter/NewFooterBottom';
import NewFooterTop from "./components/newFooter/NewFooterTop";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        {/* <MultiLevelNav/> */}
        <TyssRoutes/>
        {/* <Footer /> */}
        {/* <FooterBottom/> */}
        <NewFooterTop/>
        <NewFooterBottom/>
      </Router>
    </div>
  );
}

export default App
