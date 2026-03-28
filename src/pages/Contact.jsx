import React, { useState } from 'react';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaClock,
  FaUser,
  FaBuilding,
  FaHardHat,
  FaTruckMoving,
  FaIndustry,
  FaSeedling,
  FaPaperPlane,
  FaWhatsapp,
  FaHeadset,
  FaArrowRight,
  FaCheckCircle,
  FaFilePdf,
  FaDownload
} from 'react-icons/fa';
import './Contact.css';
import profilePDF from '../assets/profile.pdf'; // Import the PDF file

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    equipment: '',
    message: '',
    timeline: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (send to email, API, etc.)
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  const handleDownloadBrochure = () => {
    setIsDownloading(true);
    
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = profilePDF;
    link.download = 'Omni-Supplies-Profile.pdf'; // Download with this filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Track download (optional)
    console.log('Brochure downloaded');
    
    setTimeout(() => setIsDownloading(false), 1000);
  };

  return (
    <div className="contact-page">
      
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-overlay">
          <div className="contact-hero-content">
            <h1 className="contact-hero-title">
              Get In <span>Touch</span>
            </h1>
            <p className="contact-hero-subtitle">
              Have questions about equipment? Need a quote? Our team is ready to help.
            </p>
            
            {/* Quick Contact Stats */}
            <div className="contact-hero-stats">
              <div className="contact-stat">
                <FaHeadset className="stat-icon" />
                <div className="stat-text">
                  <span className="stat-label">24/7 Support</span>
                  <span className="stat-value">Always Available</span>
                </div>
              </div>
              <div className="contact-stat">
                <FaClock className="stat-icon" />
                <div className="stat-text">
                  <span className="stat-label">Response Time</span>
                  <span className="stat-value">&lt; 2 Hours</span>
                </div>
              </div>
              <div className="contact-stat">
                <FaCheckCircle className="stat-icon" />
                <div className="stat-text">
                  <span className="stat-label">Quote Turnaround</span>
                  <span className="stat-value">24-48 Hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-main">
        <div className="contact-container">
          
          <div className="contact-grid">
            
            {/* Contact Information */}
            <div className="contact-info">
              <h2>Contact Information</h2>
              <p className="info-subtitle">
                Reach out through any of these channels. Our team typically responds within 2 hours.
              </p>

              {/* Info Cards */}
              <div className="info-cards">
                <div className="info-card">
                  <div className="info-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="info-details">
                    <h3>Visit Us</h3>
                    <p>Tegeta Wazo</p>
                    <p>Dar es Salaam, Tanzania</p>
                    <p className="info-note">Warehouse visits by appointment</p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon">
                    <FaPhone />
                  </div>
                  <div className="info-details">
                    <h3>Call Us</h3>
                    <p><strong>Sales:</strong> +255 628 678 589</p>
                    <p><strong>Support:</strong> +255 717 354 594</p>
                    <p><strong>Emergency:</strong> +255 712 292 918</p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon">
                    <FaEnvelope />
                  </div>
                  <div className="info-details">
                    <h3>Email Us</h3>
                    <p><strong>Sales:</strong> sales1@omnisupplies.co.tz | sales2@omnisupplies.co.tz</p>
                    <p><strong>Support:</strong> info@omnisupplies.co.tz</p>
                    <p><strong>General:</strong> info@omnisupplies.co.tz</p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon">
                    <FaClock />
                  </div>
                  <div className="info-details">
                    <h3>Working Hours</h3>
                    <p><strong>Monday - Friday:</strong> 8:00 AM - 6:00 PM</p>
                    <p><strong>Saturday:</strong> 9:00 AM - 2:00 PM</p>
                    <p><strong>Sunday:</strong> Closed (Emergency Support Available)</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <a 
                href="https://wa.me/255628678589?text=Hello%20Omni%20Supplies%2C%20I%20need%20equipment%20information" 
                className="whatsapp-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
                <span>Chat on WhatsApp</span>
                <FaArrowRight className="arrow" />
              </a>

              {/* Download Brochure */}
              <div className="brochure-download">
                <h3>Download Our Brochure</h3>
                <p>Get our complete equipment catalog and company profile</p>
                <button 
                  className="download-btn"
                  onClick={handleDownloadBrochure}
                  disabled={isDownloading}
                >
                  <FaFilePdf />
                  {isDownloading ? 'Preparing Download...' : 'Download PDF (5.2 MB)'}
                  <FaDownload />
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <h2>Send Us a Message</h2>
              <p className="form-subtitle">
                Tell us about your equipment needs and we'll get back to you promptly.
              </p>

              <form onSubmit={handleSubmit} className="contact-form">
                
                {/* Name & Email */}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">
                      <FaUser /> Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      <FaEnvelope /> Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                {/* Phone & Company */}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">
                      <FaPhone /> Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+255 700 000 000"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="company">
                      <FaBuilding /> Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company Ltd"
                    />
                  </div>
                </div>

                {/* Industry Selection */}
                <div className="form-group">
                  <label htmlFor="industry">
                    <FaHardHat /> Industry Sector *
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select your industry</option>
                    <option value="mining">Mining</option>
                    <option value="construction">Construction</option>
                    <option value="industrial">Industrial</option>
                    <option value="agriculture">Agriculture</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Equipment Interest */}
                <div className="form-group">
                  <label htmlFor="equipment">
                    <FaTruckMoving /> Equipment Interested In
                  </label>
                  <input
                    type="text"
                    id="equipment"
                    name="equipment"
                    value={formData.equipment}
                    onChange={handleChange}
                    placeholder="e.g., Excavators, Generators, Crushers"
                  />
                </div>

                {/* Timeline */}
                <div className="form-group">
                  <label htmlFor="timeline">When do you need the equipment?</label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                  >
                    <option value="">Select timeline</option>
                    <option value="immediate">Immediate (within 1 week)</option>
                    <option value="soon">Soon (1-4 weeks)</option>
                    <option value="planning">Planning (1-3 months)</option>
                    <option value="future">Future (3+ months)</option>
                  </select>
                </div>

                {/* Message */}
                <div className="form-group">
                  <label htmlFor="message">Message / Requirements *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your project, equipment needs, and any specific requirements..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button type="submit" className="submit-btn">
                  <FaPaperPlane /> Send Message
                </button>

                {/* Success Message */}
                {formSubmitted && (
                  <div className="form-success">
                    <FaCheckCircle />
                    Thank you! Your message has been sent. We'll respond within 24 hours.
                  </div>
                )}

                <p className="form-note">
                  * Required fields. Your information is secure and will not be shared.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Updated with your Tegeta Wazo location */}
      <section className="map-section">
        <div className="map-container">
          <div className="map-header">
            <h2>Our Location</h2>
            <p>Visit our headquarters in Tegeta Wazo, Dar es Salaam, Tanzania</p>
          </div>
          
          <div className="map-wrapper">
            <div className="map-placeholder">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15851.342876918403!2d39.156630825825545!3d-6.667269910850705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sTegeta%20wazo%2C%20Dar%20es%20salaam!5e0!3m2!1sen!2stz!4v1774481734841!5m2!1sen!2stz"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Omni Supplies Location - Tegeta Wazo, Dar es Salaam"
              ></iframe>
            </div>
          </div>

          {/* Location Cards - Updated for Dar es Salaam */}
          <div className="location-cards">
            <div className="location-card">
              <FaBuilding className="location-icon" />
              <h3>Head Office</h3>
              <p>Tegeta Wazo</p>
              <p>Dar es Salaam, Tanzania</p>
              <p>P.O. Box 12345</p>
            </div>
            <div className="location-card">
              <FaTruckMoving className="location-icon" />
              <h3>Warehouse</h3>
              <p>Kigamboni Industrial Area</p>
              <p>Dar es Salaam, Tanzania</p>
            </div>
            <div className="location-card">
              <FaIndustry className="location-icon" />
              <h3>Service Center</h3>
              <p>Ubungo, Dar es Salaam</p>
              <p>Along Morogoro Road</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="contact-container">
          <div className="section-header">
            <span className="section-tag">FAQ</span>
            <h2>Frequently Asked Questions</h2>
            <p className="section-description">
              Quick answers to common questions about our equipment and services
            </p>
          </div>

          <div className="faq-grid">
            <div className="faq-item">
              <h3>What equipment brands do you supply?</h3>
              <p>We are authorized dealers for Caterpillar, Komatsu, Volvo, Liebherr, JCB, Hitachi, and many other leading manufacturers. We also supply quality aftermarket parts.</p>
            </div>

            <div className="faq-item">
              <h3>Do you offer rental equipment?</h3>
              <p>Yes, we offer flexible rental options for most equipment categories, from short-term projects to long-term contracts.</p>
            </div>

            <div className="faq-item">
              <h3>What are your payment terms?</h3>
              <p>We offer various payment options including outright purchase, lease-to-own, and rental with option to purchase. Financing options are available.</p>
            </div>

            <div className="faq-item">
              <h3>Do you provide after-sales support?</h3>
              <p>Absolutely. All equipment comes with warranty, operator training, and access to our 24/7 technical support team.</p>
            </div>

            <div className="faq-item">
              <h3>How long does delivery take?</h3>
              <p>Delivery times vary by equipment type and location. In-stock items can be delivered within 2-5 days within Dar es Salaam. Special orders typically take 2-4 weeks.</p>
            </div>

            <div className="faq-item">
              <h3>Do you service all equipment brands?</h3>
              <p>Yes, our certified technicians can service and repair equipment from all major brands, regardless of where you purchased it.</p>
            </div>

            <div className="faq-item">
              <h3>What documentation do I need for a quote?</h3>
              <p>Just provide your project details, equipment requirements, and delivery location. Our team will prepare a comprehensive quote.</p>
            </div>

            <div className="faq-item">
              <h3>Do you offer training for operators?</h3>
              <p>Yes, we provide comprehensive operator training and safety briefings with every equipment purchase or rental.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Support CTA */}
      <section className="emergency-support">
        <div className="emergency-content">
          <FaHeadset className="emergency-icon" />
          <h2>Need Emergency Support?</h2>
          <p>Our 24/7 emergency team is ready to assist with urgent equipment issues</p>
          <div className="emergency-buttons">
            <a href="tel:+255712292918" className="emergency-btn emergency-call">
              <FaPhone /> +255 712 292 918
            </a>
            <a href="https://wa.me/255712292918" className="emergency-btn emergency-wa">
              <FaWhatsapp /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;