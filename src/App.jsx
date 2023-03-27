import React from 'react'
import './global.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/reusable/navbar/Navbar'
import Footer from './components/homePage/Footer/Footer';
import TyssRoutes from './routes/TyssRoutes';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <TyssRoutes/>
        <Footer />
      </Router>
    </div>
  );
}

export default App
