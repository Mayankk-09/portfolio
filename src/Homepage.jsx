import React from 'react'
import Navbar from './components/Navbar'
import Introduction from './components/Introduction'
import Skills from './components/Skills'
import Education from './components/Education'
const Homepage = () => {
  return (
    <div>
      <div className="min-h-screen w-full bg-scroll bg-no-repeat bg-cover bg-center bg-[url('https://d.newsweek.com/en/full/1386171/universe-big-bang.jpg')]">
      <div className='bg-black/50 w-full min-h-screen'>
      <Navbar></Navbar>
      <Introduction></Introduction>
      </div></div>
      <Skills></Skills>
      <Education></Education>
    </div>
  )
}

export default Homepage
