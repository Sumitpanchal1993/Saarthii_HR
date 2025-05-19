import React from 'react'
import "./Navbar.css"
import Logo from "../assets/react.svg"
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <>
    <nav>
      <div className="logo">
        <img src={Logo} alt="Logo" />
        <h1>Saarthii</h1>
      </div>
      <div className='nav-links'>
        <ul>
          <li><Link to="/">Home</Link></li> 
          <li><Link to="/about">About</Link></li>
          <li><Link to="/organisation">Services</Link></li>
          <li><Link to="/marketing">Marketing</Link></li>
          <li><Link to="/contact_us">Contact</Link></li>
        </ul>
      </div>
    </nav>
    </>
  )
}

export default Navbar