import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero_Image from "../assets/hero.jpg";
import "./Hero.css";

function Hero() {
    const navigate = useNavigate();

    const myStyle = {
        backgroundImage: `url(${Hero_Image})`, 
        height: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'relative',
    };

    const handleGetQuote = () => {
        navigate('/contact');
    };

    const handleExploreIndustries = () => {
        navigate('/services');
    };

    return (
        <>
            <div className="hero-container" style={myStyle}>
                <div className='heading-subheading'>
                    <h1>Your Trusted Partner in Industrial Equipment Supply</h1>
                    <p>Comprehensive solutions for mining, construction, agriculture, and industrial sectors 
                        - delivering reliability when it matters most</p>
                    
                    <div className="cta-container">
                        <button 
                            onClick={handleGetQuote}
                            className="cta-button cta-primary"
                        >
                            Get Equipment Quote
                        </button>
                        <button 
                            onClick={handleExploreIndustries}
                            className="cta-button cta-secondary"
                        >
                            Explore Industries
                        </button>
                    </div>
                    
                    <div className="hero-stats">
                        <div className="stat-item">
                            <div className="stat-number">500+</div>
                            <div className="stat-label">Equipment Types</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">24/7</div>
                            <div className="stat-label">Support</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">100+</div>
                            <div className="stat-label">Industry Partners</div>
                        </div>
                    </div>
                </div>
                
                <div className="scroll-indicator">
                    <span>Scroll Down</span>
                    <div className="mouse"></div>
                </div>
            </div>
        </>
    );
}

export default Hero;