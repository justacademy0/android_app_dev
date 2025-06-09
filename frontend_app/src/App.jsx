import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import Curriculum from './pages/Curriculum'
import About from './pages/About'
import Contact from './pages/Contact'
import WhatWeGive from './components/WhatWeGive'


function App() {
  

  return (
    <div className="scroll-smooth">
      <Navbar/>
      <Hero/>
      <Curriculum/>
      <WhatWeGive/>
      <About/>
      <Contact/>
    </div>
    
  )
}

export default App
