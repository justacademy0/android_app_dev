import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import Curriculum from './pages/Curriculum'
import About from './pages/About'


function App() {
  

  return (
    <div>
      <Navbar/>
      <Hero/>
      <Curriculum/>
      <About/>
    </div>
    
  )
}

export default App
