import React from 'react';
import { 
  FaShieldAlt, 
  FaClock, 
  FaCogs, 
  FaHeadset,
  FaArrowRight,
  FaStar,
  FaTruck,
  FaUsers
} from 'react-icons/fa';
import './WhyChooseUs.css';

function WhychooseUs() {
  const whyData = [
    {
      icon: <FaShieldAlt />,
      title: 'Reliability You Can Count On',
      description: 'Equipment that performs when it matters most, with proven track records in the toughest environments.',
      features: [
        'Rigorously tested equipment',
        'Proven performance in harsh conditions',
        'Backed by comprehensive warranties',
        'Consistent uptime guarantee'
      ]
    },
    {
      icon: <FaClock />,
      title: '24/7 Emergency Support',
      description: 'Round-the-clock technical assistance ensures your operations never face extended downtime.',
      features: [
        'Immediate response team',
        'Remote diagnostics available',
        'Emergency parts delivery',
        'On-site support within hours'
      ]
    },
    {
      icon: <FaCogs />,
      title: 'Industry-Specific Expertise',
      description: 'Specialized knowledge of mining, construction, and industrial equipment requirements.',
      features: [
        'Sector-specialized engineers',
        'Custom equipment configurations',
        'Safety compliance expertise',
        'Regulatory knowledge'
      ]
    },
    {
      icon: <FaHeadset />,
      title: 'End-to-End Service',
      description: 'From selection to maintenance, we support you throughout your equipment lifecycle.',
      features: [
        'Professional operator training',
        'Preventive maintenance programs',
        'Genuine parts availability',
        'Equipment modernization'
      ]
    }
  ];

  return (
    <section className="why-us">
      <h2>Why Choose Omni Supplies</h2>
      
      <p className="why-subtitle">
        We don't just supply equipment — we provide peace of mind, expertise, 
        and unwavering support for your critical operations.
      </p>

      <div className="why-grid">
        {whyData.map((item, index) => (
          <div key={index} className="why-card">
            <div className="counter-badge">{String(index + 1).padStart(2, '0')}</div>
            <div className="why-icon">
              {item.icon}
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            
            <ul className="why-features">
              {item.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="why-cta">
        <a href="/contact" className="btn">
          Partner With Us <FaArrowRight />
        </a>
        <a href="/services" className="btn btn-secondary">
          View Our Capabilities <FaStar />
        </a>
      </div>
    </section>
  );
}

export default WhychooseUs;