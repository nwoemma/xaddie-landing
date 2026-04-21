import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/core/Navbar'
import Hero from './components/core/Hero'
import Features from './components/pages/Features'
import HowItWorks from './components/pages/HowItWorks'
import Security from './components/pages/Security'
import Product from './components/pages/Product'
import Footer from './components/core/Footer'
import CTA from './components/pages/CTA';
import DownloadApp from './components/pages/Download';
import Contact from './components/pages/Contact';
import './App.css'
import './index.css'


function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Security />
      {/* <About /> */}
    </>
  );
}



function App() {

  return (
    <div className="min-h-screen bg-[#080D1A]">
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/features" element={<Features/>}/>
            <Route path='/howitworks' element={<HowItWorks/>}/>
            <Route path='/security' element={<Security/>}/>
            <Route path='/products' element= {<Product/>}/>
            <Route path='/download' element= {<DownloadApp/>}/>
            <Route path='/cta' element= {<CTA/>}/>
            <Route path='/contact' element={<Contact />} />
          </Routes>
        <Footer />
      </Router>
    </div>
  )
}
export default App;