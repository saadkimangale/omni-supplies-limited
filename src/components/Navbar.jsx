import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import "./Navbar.css";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Prevent body scroll when mobile menu is open
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'auto';
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling animation
    });
  };

  // Handle link click - closes menu and scrolls to top
  const handleLinkClick = () => {
    closeMobileMenu();
    scrollToTop();
  };

  // Check if link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className='navbar-logo' onClick={scrollToTop}>
        <h1>OMNI<span>.</span></h1>
        <p>supplies limited</p>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button className='menu-toggle' onClick={toggleMobileMenu} aria-label="Toggle menu">
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Navigation Links */}
      <div className={`nav-links-container ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul className='nav-list'>
          <li>
            <Link 
              to="/" 
              onClick={handleLinkClick}
              className={isActive('/') ? 'active-link' : ''}
            >
              <span className="link-text">Home</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              onClick={handleLinkClick}
              className={isActive('/about') ? 'active-link' : ''}
            >
              <span className="link-text">About Us</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/services" 
              onClick={handleLinkClick}
              className={isActive('/services') ? 'active-link' : ''}
            >
              <span className="link-text">Services</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              onClick={handleLinkClick}
              className={isActive('/contact') ? 'active-link' : ''}
            >
              <span className="link-text">Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;