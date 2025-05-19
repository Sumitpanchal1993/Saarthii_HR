import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../assets/react.svg';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
        <h1>Saarthii</h1>
      </div>

      <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
          {/* <li><Link to="/organisation" onClick={toggleMenu}>Services</Link></li> */}
          <li><Link to="/marketing" onClick={toggleMenu}>Marketing</Link></li>
          <li><Link to="/contact_us" onClick={toggleMenu}>Contact</Link></li>
        </ul>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}

export default Navbar;
