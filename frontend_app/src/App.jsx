import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import Curriculum from './pages/Curriculum'


function App() {
  

  return (
    <div>
      <Navbar/>
      <Hero/>
      <Curriculum/>
    </div>
    
  )
}

export default App
