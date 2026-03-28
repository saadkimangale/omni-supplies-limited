import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaHardHat, 
  FaTruckMoving, 
  FaIndustry, 
  FaSeedling,
  FaWrench,
  FaHeadset,
  FaTruck,
  FaClipboardCheck,
  FaCog,
  FaShieldAlt,
  FaChartLine,
  FaArrowRight,
  FaCheckCircle,
  FaClock,
  FaUsers,
  FaHandshake,
  FaSearch,
  FaFileSignature,
  FaTools,
  FaRecycle
} from 'react-icons/fa';
import './Services.css';

function Services() {
  return (
    <div className="services-page">
      
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-overlay">
          <div className="services-hero-content">
            <h1 className="services-hero-title">
              Comprehensive <span>Equipment Solutions</span>
            </h1>
            <p className="services-hero-subtitle">
              From mining to construction, industrial to agriculture — we provide end-to-end 
              equipment services tailored to your specific industry needs.
            </p>
            
            {/* Quick Service Categories */}
            <div className="service-quick-cats">
              <Link to="#mining" className="quick-cat">
                <FaHardHat /> Mining
              </Link>
              <Link to="#construction" className="quick-cat">
                <FaTruckMoving /> Construction
              </Link>
              <Link to="#industrial" className="quick-cat">
                <FaIndustry /> Industrial
              </Link>
              <Link to="#agriculture" className="quick-cat">
                <FaSeedling /> Agriculture
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="services-section process-section">
        <div className="services-container">
          <div className="section-header">
            <span className="section-tag">OUR PROCESS</span>
            <h2>How We Work</h2>
            <p className="section-description">
              A streamlined approach to ensure you get the right equipment, right when you need it
            </p>
          </div>

          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">01</div>
              <div className="step-icon"><FaSearch /></div>
              <h3>Consultation</h3>
              <p>We assess your specific needs, site conditions, and operational requirements.</p>
            </div>

            <div className="process-step">
              <div className="step-number">02</div>
              <div className="step-icon"><FaClipboardCheck /></div>
              <h3>Equipment Selection</h3>
              <p>We recommend the right machinery from our extensive inventory or partners.</p>
            </div>

            <div className="process-step">
              <div className="step-number">03</div>
              <div className="step-icon"><FaFileSignature /></div>
              <h3>Quotation & Financing</h3>
              <p>Transparent pricing with flexible purchase, lease, or rental options.</p>
            </div>

            <div className="process-step">
              <div className="step-number">04</div>
              <div className="step-icon"><FaTruck /></div>
              <h3>Delivery & Setup</h3>
              <p>Safe transport, installation, and commissioning at your site.</p>
            </div>

            <div className="process-step">
              <div className="step-number">05</div>
              <div className="step-icon"><FaUsers /></div>
              <h3>Training</h3>
              <p>Operator and maintenance training for your team.</p>
            </div>

            <div className="process-step">
              <div className="step-number">06</div>
              <div className="step-icon"><FaHeadset /></div>
              <h3>Ongoing Support</h3>
              <p>24/7 technical support and preventive maintenance programs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mining Equipment Services */}
      <section id="mining" className="services-section mining-services">
        <div className="services-container">
          <div className="service-category-header">
            <div className="category-icon"><FaHardHat /></div>
            <h2>Mining Equipment Solutions</h2>
            <p>Complete equipment packages for surface and underground mining operations</p>
          </div>

          <div className="services-grid">
            {/* Surface Mining */}
            <div className="service-card">
              <h3>Surface Mining Equipment</h3>
              <ul className="service-features">
                <li><FaCheckCircle /> Hydraulic Excavators (20-100 ton)</li>
                <li><FaCheckCircle /> Wheel Loaders & Dozers</li>
                <li><FaCheckCircle /> Rigid Haul Trucks (40-200 ton)</li>
                <li><FaCheckCircle /> Rotary Blasthole Drills</li>
                <li><FaCheckCircle /> Motor Graders</li>
                <li><FaCheckCircle /> Water Trucks for Dust Control</li>
              </ul>
            </div>

            {/* Underground Mining */}
            <div className="service-card">
              <h3>Underground Mining</h3>
              <ul className="service-features">
                <li><FaCheckCircle /> Underground Loaders (LHD)</li>
                <li><FaCheckCircle /> Underground Trucks</li>
                <li><FaCheckCircle /> Jumbo Drills & Bolters</li>
                <li><FaCheckCircle /> Roof Bolters</li>
                <li><FaCheckCircle /> Ventilation Equipment</li>
                <li><FaCheckCircle /> Shotcrete Sprayers</li>
              </ul>
            </div>

            {/* Mineral Processing */}
            <div className="service-card">
              <h3>Mineral Processing</h3>
              <ul className="service-features">
                <li><FaCheckCircle /> Crushers (Jaw, Cone, Impact)</li>
                <li><FaCheckCircle /> Grinding Mills</li>
                <li><FaCheckCircle /> Screening Equipment</li>
                <li><FaCheckCircle /> Conveyor Systems</li>
                <li><FaCheckCircle /> Slurry Pumps</li>
                <li><FaCheckCircle /> Thickeners & Filters</li>
              </ul>
            </div>

            {/* Mine Support */}
            <div className="service-card">
              <h3>Mine Support Equipment</h3>
              <ul className="service-features">
                <li><FaCheckCircle /> Mine Safety Systems</li>
                <li><FaCheckCircle /> Personnel Carriers</li>
                <li><FaCheckCircle /> Fuel & Lube Trucks</li>
                <li><FaCheckCircle /> Mobile Lighting Towers</li>
                <li><FaCheckCircle /> Generator Sets</li>
                <li><FaCheckCircle /> Workshop Containers</li>
              </ul>
            </div>
          </div>

          <div className="service-cta">
            <Link to="/contact" className="service-btn">
              Get Mining Equipment Quote <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Construction Equipment Services */}
      <section id="construction" className="services-section construction-services">
        <div className="services-container">
          <div className="service-category-header">
            <div className="category-icon"><FaTruckMoving /></div>
            <h2>Construction Machinery</h2>
            <p>Heavy equipment for infrastructure, building, and civil engineering projects</p>
          </div>

          <div className="services-grid">
            {/* Earthmoving */}
            <div className="service-card">
              <h3>Earthmoving Equipment</h3>
              <ul className="service-features">
                <li><FaCheckCircle /> Excavators (Mini to Large)</li>
                <li><FaCheckCircle /> Bulldozers</li>
                <li><FaCheckCircle /> Motor Graders</li>
                <li><FaCheckCircle /> Wheel Loaders</li>
                <li><FaCheckCircle /> Backhoe Loaders</li>
                <li><FaCheckCircle /> Scrapers</li>
              </ul>
            </div>

            {/* Road Construction */}
            <div className="service-card">
              <h3>Road Construction</h3>
              <ul className="service-features">
                <li><FaCheckCircle /> Asphalt Pavers</li>
                <li><FaCheckCircle /> Compactors & Rollers</li>
                <li><FaCheckCircle /> Milling Machines</li>
                <li><FaCheckCircle /> Chip Spreaders</li>
                <li><FaCheckCircle /> Asphalt Plants</li>
                <li><FaCheckCircle /> Road Marking Machines</li>
              </ul>
            </div>

            {/* Material Handling */}
            <div className="service-card">
              <h3>Material Handling</h3>
              <ul className="service-features">
                <li><FaCheckCircle /> Mobile Cranes</li>
                <li><FaCheckCircle /> Tower Cranes</li>
                <li><FaCheckCircle /> Forklifts</li>
                <li><FaCheckCircle /> Telehandlers</li>
                <li><FaCheckCircle /> Aerial Work Platforms</li>
                <li><FaCheckCircle /> Material Lifts</li>
              </ul>
            </div>

            {/* Concrete Equipment */}
            <div className="service-card">
              <h3>Concrete Equipment</h3>
              <ul className="service-features">
                <li><FaCheckCircle /> Concrete Batching Plants</li>
                <li><FaCheckCircle /> Concrete Pumps</li>
                <li><FaCheckCircle /> Transit Mixers</li>
                <li><FaCheckCircle /> Concrete Vibrators</li>
                <li><FaCheckCircle /> Screed Systems</li>
                <li><FaCheckCircle /> Shotcrete Machines</li>
              </ul>
            </div>
          </div>

          <div className="service-cta">
            <Link to="/contact" className="service-btn">
              Get Construction Equipment Quote <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Industrial Equipment Services */}
      <section id="industrial" className="services-section industrial-services">
        <div className="services-container">
          <div className="service-category-header">
            <div className="category-icon"><FaIndustry /></div>
            <h2>Industrial Equipment</h2>
            <p>Machinery for manufacturing, processing, and industrial facilities</p>
          </div>

          <div className="services-grid">
            {/* Processing Equipment */}
            <div className="service-card">
              <h3>Processing Machinery</h3>
              <ul className="service-features">
                <li><FaCheckCircle /> Conveyor Systems</li>
                <li><FaCheckCircle /> Industrial Mixers</li>
                <li><FaCheckCircle /> Crushers & Grinders</li>
                <li><FaCheckCircle /> Screening Equipment</li>
                <li><FaCheckCircle /> Dryers & Coolers</li>
                <li><FaCheckCircle /> Packaging Lines</li>
              </ul>
            </div>

            {/* Material Handling */}
            <div className="service-card">
              <h3>Material Handling</h3>
              <ul className="service-features">
                <li><FaCheckCircle /> Overhead Cranes</li>
                <li><FaCheckCircle /> Gantry Cranes</li>
                <li><FaCheckCircle /> Hoists & Winches</li>
                <li><FaCheckCircle /> Pallet Racking</li>
                <li><FaCheckCircle /> Industrial Conveyors</li>
                <li><FaCheckCircle /> Automated Guided Vehicles</li>
              </ul>
            </div>

            {/* Power Generation */}
            <div className="service-card">
              <h3>Power Generation</h3>
              <ul className="service-features">
                <li><FaCheckCircle /> Diesel Generators</li>
                <li><FaCheckCircle /> Gas Generators</li>
                <li><FaCheckCircle /> Solar Power Systems</li>
                <li><FaCheckCircle /> UPS Systems</li>
                <li><FaCheckCircle /> Power Distribution</li>
                <li><FaCheckCircle /> Voltage Stabilizers</li>
              </ul>
            </div>

            {/* Workshop Equipment */}
            <div className="service-card">
              <h3>Workshop Equipment</h3>
              <ul className="service-features">
                <li><FaCheckCircle /> Compressors</li>
                <li><FaCheckCircle /> Welding Machines</li>
                <li><FaCheckCircle /> Industrial Tools</li>
                <li><FaCheckCircle /> Lubrication Systems</li>
                <li><FaCheckCircle /> Workshop Presses</li>
                <li><FaCheckCircle /> Testing Equipment</li>
              </ul>
            </div>
          </div>

          <div className="service-cta">
            <Link to="/contact" className="service-btn">
              Get Industrial Equipment Quote <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Agricultural Equipment Services */}
      <section id="agriculture" className="services-section agricultural-services">
        <div className="services-container">
          <div className="service-category-header">
            <div className="category-icon"><FaSeedling /></div>
            <h2>Agricultural Solutions</h2>
            <p>Modern farming equipment for improved productivity</p>
          </div>

          <div className="services-grid">
            {/* Tractors */}
            <div className="service-card">
              <h3>Tractors & Implements</h3>
              <ul className="service-features">
                <li><FaCheckCircle /> Utility Tractors (25-100 HP)</li>
                <li><FaCheckCircle /> Row Crop Tractors</li>
                <li><FaCheckCircle /> Compact Tractors</li>
                <li><FaCheckCircle /> Plows & Harrows</li>
                <li><FaCheckCircle /> Planters & Seeders</li>
                <li><FaCheckCircle /> Cultivators</li>
              </ul>
            </div>

            {/* Harvesting */}
            <div className="service-card">
              <h3>Harvesting Equipment</h3>
              <ul className="service-features">
                <li><FaCheckCircle /> Combine Harvesters</li>
                <li><FaCheckCircle /> Forage Harvesters</li>
                <li><FaCheckCircle /> Cotton Pickers</li>
                <li><FaCheckCircle /> Sugarcane Harvesters</li>
                <li><FaCheckCircle /> Balers</li>
                <li><FaCheckCircle /> Mowers</li>
              </ul>
            </div>

            {/* Irrigation */}
            <div className="service-card">
              <h3>Irrigation Systems</h3>
              <ul className="service-features">
                <li><FaCheckCircle /> Center Pivot Systems</li>
                <li><FaCheckCircle /> Drip Irrigation</li>
                <li><FaCheckCircle /> Sprinkler Systems</li>
                <li><FaCheckCircle /> Pumps & Motors</li>
                <li><FaCheckCircle /> Filtration Systems</li>
                <li><FaCheckCircle /> Control Systems</li>
              </ul>
            </div>

            {/* Post-Harvest */}
            <div className="service-card">
              <h3>Post-Harvest Handling</h3>
              <ul className="service-features">
                <li><FaCheckCircle /> Grain Dryers</li>
                <li><FaCheckCircle /> Storage Silos</li>
                <li><FaCheckCircle /> Cleaning & Grading</li>
                <li><FaCheckCircle /> Shellers & Threshers</li>
                <li><FaCheckCircle /> Mills & Grinders</li>
                <li><FaCheckCircle /> Packaging Equipment</li>
              </ul>
            </div>
          </div>

          <div className="service-cta">
            <Link to="/contact" className="service-btn">
              Get Agricultural Equipment Quote <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Value-Added Services */}
      <section className="services-section value-services">
        <div className="services-container">
          <div className="section-header">
            <span className="section-tag">BEYOND EQUIPMENT</span>
            <h2>Value-Added Services</h2>
            <p className="section-description">
              Comprehensive support to maximize your equipment investment
            </p>
          </div>

          <div className="value-grid">
            <div className="value-card">
              <div className="value-icon"><FaWrench /></div>
              <h3>Maintenance & Repairs</h3>
              <p>Preventive maintenance programs, on-site repairs, and overhaul services by certified technicians.</p>
            </div>

            <div className="value-card">
              <div className="value-icon"><FaTools /></div>
              <h3>Spare Parts Supply</h3>
              <p>Genuine OEM and quality aftermarket parts with fast delivery across East Africa.</p>
            </div>

            <div className="value-card">
              <div className="value-icon"><FaUsers /></div>
              <h3>Operator Training</h3>
              <p>Comprehensive training programs for equipment operators and maintenance staff.</p>
            </div>

            <div className="value-card">
              <div className="value-icon"><FaClipboardCheck /></div>
              <h3>Equipment Inspection</h3>
              <p>Pre-purchase inspections, condition assessments, and safety audits.</p>
            </div>

            <div className="value-card">
              <div className="value-icon"><FaCog /></div>
              <h3>Equipment Refurbishment</h3>
              <p>Complete overhaul and refurbishment services to extend equipment life.</p>
            </div>

            <div className="value-card">
              <div className="value-icon"><FaRecycle /></div>
              <h3>Equipment Disposal</h3>
              <p>Assistance with selling used equipment or environmentally responsible disposal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="services-section features-section">
        <div className="services-container">
          <div className="features-grid">
            <div className="feature-item">
              <FaClock className="feature-main-icon" />
              <h3>24/7 Emergency Support</h3>
              <p>Round-the-clock technical assistance to minimize downtime</p>
            </div>

            <div className="feature-item">
              <FaTruck className="feature-main-icon" />
              <h3>Fast Delivery</h3>
              <p>Efficient logistics network across East Africa</p>
            </div>

            <div className="feature-item">
              <FaShieldAlt className="feature-main-icon" />
              <h3>Warranty Coverage</h3>
              <p>Comprehensive warranties on all equipment</p>
            </div>

            <div className="feature-item">
              <FaHandshake className="feature-main-icon" />
              <h3>Flexible Financing</h3>
              <p>Purchase, lease, or rental options available</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="services-cta-content">
          <h2>Need Custom Equipment Solutions?</h2>
          <p>Our specialists will help you find the right equipment for your specific requirements</p>
          <div className="services-cta-buttons">
            <Link to="/contact" className="services-cta-btn services-cta-primary">
              Contact Our Team <FaArrowRight />
            </Link>
            <Link to="/quote" className="services-cta-btn services-cta-secondary">
              Request Quick Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;