import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Banner from './components/banner/Banner'
import Working from './components/banner/Working'
import About from './components/page/About'
import Contact from './components/page/Contact'
import Services from './components/page/Services'
import HomePage from './components/HomePage'
import Error from './components/page/Error'
import Request from './components/page/Request';
import database from './components/page/database';
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/request" element={<Request />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App