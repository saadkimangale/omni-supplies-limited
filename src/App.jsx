import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/AboutUs.jsx';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {


  return (
    <>
    <BrowserRouter>

    <Navbar />

    <Routes>
      <Route path ="/" element = {<Home/>} />
      <Route path ="/about" element = {<About/>} />
      <Route path ="/services" element = {<Services/>} />
      <Route path ="/contact" element = {<Contact/>} />
    </Routes>

    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
