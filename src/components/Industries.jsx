import React from 'react';
import { 
  FaHardHat, 
  FaTruckMoving, 
  FaSeedling, 
  FaIndustry,
  FaArrowRight 
} from 'react-icons/fa';
import './Industries.css';

function Industries() {
  const industries = [
    {
      name: 'Mining',
      icon: <FaHardHat />,
      description: 'Specialized equipment solutions for mining operations including excavation, hauling, and processing.',
      features: [
        'Excavation & Drilling Equipment',
        'Haul Trucks & Loaders',
        'Processing Plant Machinery',
        'Safety & Compliance Systems'
      ]
    },
    {
      name: 'Construction',
      icon: <FaTruckMoving />,
      description: 'Heavy machinery and equipment for infrastructure development and building construction projects.',
      features: [
        'Earth-Moving Equipment',
        'Cranes & Lifting Solutions',
        'Road Construction Machinery',
        'Concrete Processing Equipment'
      ]
    },
    {
      name: 'Agriculture',
      icon: <FaSeedling />,
      description: 'Modern farming equipment and irrigation systems to enhance agricultural productivity.',
      features: [
        'Tractors & Harvesting Equipment',
        'Irrigation Systems',
        'Storage & Processing Equipment',
        'Farm Mechanization Solutions'
      ]
    },
    {
      name: 'Industrial',
      icon: <FaIndustry />,
      description: 'Machinery for manufacturing plants, processing facilities, and industrial operations.',
      features: [
        'Processing Line Machinery',
        'Material Handling Systems',
        'Factory Automation Equipment',
        'Power Generation Equipment'
      ]
    }
  ];

  return (
    <section className="industries">
      <h2>Industries We Serve</h2>
      
      <p className="subtitle">
        We provide specialized equipment solutions tailored to the unique challenges 
        and requirements of each industry we serve.
      </p>

      <div className="industry-grid">
        {industries.map((industry, index) => (
          <div key={index} className="industry-card">
            <div className="industry-icon">
              {industry.icon}
            </div>
            <h3>{industry.name}</h3>
            <p>{industry.description}</p>
            
            <ul className="industry-features">
              {industry.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="industry-cta">
        <a href="/services" className="btn">
          Explore All Services
          <FaArrowRight />
        </a>
        <a href="/contact" className="btn btn-secondary">
          Get Industry-Specific Quote
        </a>
      </div>
    </section>
  );
}

export default Industries;