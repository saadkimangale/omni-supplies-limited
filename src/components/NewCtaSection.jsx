import React from 'react';
import { Link } from 'react-router-dom';
import './NewCtaSection.css';

function NewCtaSection() {
  return (
    <section className="contact-trigger">
      <div className="contact-wrapper">
        
        {/* Industry badges - completely different from hero */}
        <div className="industry-badge-row">
          <span className="industry-badge">
            <i>⚙️</i> Mining
          </span>
          <span className="industry-badge">
            <i>🏗️</i> Construction
          </span>
          <span className="industry-badge">
            <i>🏭</i> Industrial
          </span>
        </div>

        {/* Headline - different styling */}
        <h2 className="contact-headline">
          Need the right equipment for your <strong>next project?</strong>
        </h2>
        
        <p className="contact-description">
          Get expert advice and competitive quotes from our industry specialists.
        </p>

        {/* Stats pills - different from hero's counters */}
        <div className="quick-stats">
          <div className="stat-pill">
            <span className="stat-pill-number">500+</span>
            <span className="stat-pill-label">Projects</span>
          </div>
          <div className="stat-pill">
            <span className="stat-pill-number">24/7</span>
            <span className="stat-pill-label">Support</span>
          </div>
          <div className="stat-pill">
            <span className="stat-pill-number">50+</span>
            <span className="stat-pill-label">Brands</span>
          </div>
        </div>

        {/* Action buttons - DIFFERENT CLASS NAMES from hero */}
        <div className="action-group">
          <Link to="/contact" className="action-link action-link-main">
            GET A QUOTE <span>→</span>
          </Link>
          
          <Link to="/services" className="action-link action-link-alt">
            BROWSE EQUIPMENT <span>→</span>
          </Link>
        </div>

        {/* Contact options grid - NEW element not in hero */}
        <div className="contact-options-grid">
          <a href="tel:+254700000000" className="contact-option-card">
            <div className="option-icon">📞</div>
            <div className="option-text">
              <div className="label">Call us now</div>
              <div className="value">+254 700 000 000</div>
            </div>
          </a>
          
          <a href="mailto:sales@omnisupplies.co.ke" className="contact-option-card">
            <div className="option-icon">✉️</div>
            <div className="option-text">
              <div className="label">Email us</div>
              <div className="value">sales@omnisupplies.co.ke</div>
            </div>
          </a>
          
          <div className="contact-option-card">
            <div className="option-icon">⏰</div>
            <div className="option-text">
              <div className="label">Response time</div>
              <div className="value">&lt; 2 hours</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default NewCtaSection;