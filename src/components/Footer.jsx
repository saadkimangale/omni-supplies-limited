// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaArrowRight,
  FaHardHat,
  FaTruck,
  FaIndustry,
  FaSeedling
} from 'react-icons/fa';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        
        {/* Main Footer Content */}
        <div className="footer-main">
          
          {/* Company Info */}
          <div className="footer-col company-info">
            <div className="footer-logo">
              <h2>OMNI</h2>
              <p>supplies limited</p>
            </div>
            <p className="company-desc">
              Your trusted partner in industrial equipment supply across mining, 
              construction, and industrial sectors in East Africa.
            </p>
            
            {/* Social Links */}
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaLinkedinIn />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/equipment">Equipment Catalog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div className="footer-col">
            <h3>Industries</h3>
            <ul className="footer-links">
              <li><Link to="/mining"><FaHardHat className="link-icon" /> Mining</Link></li>
              <li><Link to="/construction"><FaTruck className="link-icon" /> Construction</Link></li>
              <li><Link to="/industrial"><FaIndustry className="link-icon" /> Industrial</Link></li>
              <li><Link to="/agriculture"><FaSeedling className="link-icon" /> Agriculture</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-col">
            <h3>Contact Us</h3>
            <ul className="contact-info">
              <li>
                <FaMapMarkerAlt className="contact-icon" />
                <span>Tegeta Wazo, Dar es saalam Tanzania</span>
              </li>
              <li>
                <FaPhone className="contact-icon" />
                <span>+254 712 292 918 </span>
              </li>
              <li>
                <FaEnvelope className="contact-icon" />
                <span>info@omnisupplies.co.tz</span>
              </li>
              <li>
                <FaClock className="contact-icon" />
                <span>Mon - Sat: 8:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="footer-newsletter">
          <div className="newsletter-content">
            <h3>Stay Updated</h3>
            <p>Get the latest equipment deals and industry news</p>
          </div>
          <form className="newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="newsletter-input"
              required
            />
            <button type="submit" className="newsletter-btn">
              Subscribe <FaArrowRight />
            </button>
          </form>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="copyright">
            &copy; {currentYear} Omni Supplies Limited. All rights reserved.
          </div>
          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;