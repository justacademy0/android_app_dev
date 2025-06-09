import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import Curriculum from './pages/Curriculum'
import About from './pages/About'
import Contact from './pages/Contact'


function App() {
  

  return (
    <div>
      <Navbar/>
      <Hero/>
      <Curriculum/>
      <About/>
      <Contact/>
    </div>
    
  )
}

export default App
