import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Introduction from './components/Introduction'
import Homepage from './Homepage'

const Work = () => <h1 className="text-center mt-10 text-2xl">My Work</h1>
const Contact = () => <h1 className="text-center mt-10 text-2xl">Contact Me</h1>

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
