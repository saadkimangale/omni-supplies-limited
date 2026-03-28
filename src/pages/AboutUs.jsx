import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaHardHat, 
  FaTruckMoving, 
  FaIndustry, 
  FaSeedling,
  FaShieldAlt,
  FaHandshake,
  FaClock,
  FaUsers,
  FaAward,
  FaChartLine,
  FaCheckCircle,
  FaArrowRight
} from 'react-icons/fa';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-page">
      
      {/* SPACER - This prevents content from hiding under fixed navbar */}
      <div className="page-spacer"></div>
      
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-overlay">
          <div className="about-hero-content">
            <h1 className="about-hero-title">
              Powering Industries Across <span>East Africa</span>
            </h1>
            <p className="about-hero-subtitle">
              For over 18 years, Omni Supplies has been the trusted equipment partner 
              for mining, construction, and industrial operations throughout the region.
            </p>
            
            {/* Stats Bar */}
            <div className="about-hero-stats">
              <div className="hero-stat-item">
                <div className="hero-stat-number">500+</div>
                <div className="hero-stat-label">Projects Completed</div>
              </div>
              <div className="hero-stat-item">
                <div className="hero-stat-number">150+</div>
                <div className="hero-stat-label">Team Members</div>
              </div>
              <div className="hero-stat-item">
                <div className="hero-stat-number">24/7</div>
                <div className="hero-stat-label">Support Available</div>
              </div>
              <div className="hero-stat-item">
                <div className="hero-stat-number">50+</div>
                <div className="hero-stat-label">Equipment Brands</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of your sections... */}
      
    </div>
  );
}

export default AboutUs;