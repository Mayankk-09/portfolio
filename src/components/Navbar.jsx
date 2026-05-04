import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-transparent text-white shadow-md">
      <div className="text-2xl font-bold">
        <h1>Mayank Khanna</h1>
      </div>
      <div className="text-xl font-semibold hidden md:block">
        PORTFOLIO
      </div>
      <div className="flex space-x-6">
        <Link to="/" className="hover:text-blue-400">Home</Link>
        <Link to="/work" className="hover:text-blue-400">My Work</Link>
        <Link to="/contact" className="hover:text-blue-400">Contact Me</Link>
      </div>
    </nav>
  )
}

export default Navbar
