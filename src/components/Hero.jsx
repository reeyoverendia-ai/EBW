import React, { useState, useEffect } from 'react';
import ebwPhoto from '../assets/ebw.jpg'; 

const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="home" style={{ width: '100%', paddingTop: isMobile ? '180px' : '140px', paddingBottom: '80px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'stretch', gap: '30px', padding: '0 20px' }}>
        
        {/* LEFT: THE PHOTO */}
        <div style={{ flex: '1' }}>
          <img src={ebwPhoto} alt="Community" style={{ width: '100%', height: isMobile ? 'auto' : '100%', objectFit: 'cover', borderRadius: '40px', boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }} />
        </div>

{/* RIGHT: THE HIGH-CONTRAST "ECLIPSE" AURA */}
<div 
  style={{ 
    flex: '1', 
    display: 'flex', 
    position: 'relative',
    borderRadius: '40px',
    isolation: 'isolate',
  }}
>
  {/* LAYER 1: THE CONTRAST SHADOW (The Secret Ingredient) */}
  {/* This creates a "dark pocket" so the peach background doesn't eat the light */}
  <div 
    style={{
      position: 'absolute',
      inset: '-50px',
      borderRadius: '60px',
      zIndex: 0,
      background: 'radial-gradient(circle, rgba(93, 84, 75, 0.4) 0%, transparent 70%)',
      filter: 'blur(60px)', // Deep, wide, soft shadow
    }}
  />

  {/* LAYER 2: THE HEAVENLY RADIANCE (The wide bloom) */}
  <div 
    className="animate-radiance"
    style={{
      position: 'absolute',
      inset: '-40px', 
      borderRadius: '60px',
      zIndex: 0,
      background: 'radial-gradient(circle, rgba(255, 255, 240, 0.7) 0%, rgba(197, 179, 130, 0.4) 50%, transparent 80%)',
      filter: 'blur(40px)',
    }}
  />

  {/* LAYER 3: THE INTENSE CORE (The bright center) */}
  <div 
    className="animate-radiance-delayed"
    style={{
      position: 'absolute',
      inset: '-15px',
      borderRadius: '45px',
      zIndex: 0,
      background: 'radial-gradient(circle, #FFFFF0 0%, rgba(255, 255, 240, 0.6) 50%, transparent 100%)',
      filter: 'blur(10px)',
    }}
  />

  {/* THE CONTENT BOX */}
  <div className="frosted-glass" style={{ 
    width: '100%',
    height: '100%',
    borderRadius: '40px', 
    padding: isMobile ? '30px' : '40px', 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    textAlign: isMobile ? 'center' : 'left',
    boxSizing: 'border-box',
    position: 'relative',
    zIndex: 1,
    /* Darkening the container slightly more for "True Identity" visibility */
    background: 'rgba(74, 67, 61, 0.55)', 
    backdropFilter: 'blur(45px)',
    border: '2.5px solid #FFFFF0', // Strong, bright "Holy" edge
    boxShadow: '0 0 50px rgba(255, 255, 240, 0.4)',
  }}>
    <h1 style={{ 
    color: '#FFFFF0', 
    fontSize: isMobile ? '24px' : '34px', 
    fontFamily: 'Georgia, serif', 
    fontStyle: 'italic', // Unified Italic
    fontWeight: 'bold', 
    marginBottom: '20px',
    lineHeight: '1.4',
    textShadow: '0 4px 20px rgba(0,0,0,0.5)'
    }}>
      She Leads, She Equips, <br />
      We Embrace with <br />
      <span style={{ color: '#F3E5DE', fontStyle: 'italic' }}>The Love of Christ</span>
    </h1>
    
    <p style={{ 
      color: '#FFFFF0', 
      fontSize: '17px', // Bumped size for readability
      fontStyle: 'italic', 
      opacity: '1', 
      marginBottom: '35px', 
      lineHeight: '1.8',
      fontWeight: '600'
    }}>
      Dedicated to helping individuals know their true worth and identity in Jesus Christ. 
      <br /><br />
      Bringing healing thru The Agape Love of Christ.
    </p>
    
    <div style={{ display: 'flex', justifyContent: isMobile ? 'center' : 'flex-start' }}>
      <a href="#contact" style={{ textDecoration: 'none' }}>
        <button className="aura-button" style={{ 
          padding: '18px 36px', 
          borderRadius: '50px', 
          fontWeight: '900', 
          fontSize: '13px', 
          letterSpacing: '3px', 
          textTransform: 'uppercase',
          cursor: 'pointer',
          border: '2px solid #FFFFF0',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          color: '#FFFFF0',
          transition: 'all 0.5s ease',
          boxShadow: '0 10px 30px rgba(255, 255, 255, 0.4)'
        }}>
          Join Our Mission
        </button>
      </a>
    </div>
  </div>

  <style>{`
    @keyframes deepRadiance {
      0% { opacity: 0.4; transform: scale(0.9); }
      50% { opacity: 1; transform: scale(1.15); }
      100% { opacity: 0.4; transform: scale(0.9); }
    }
    @keyframes corePulse {
      0% { opacity: 0.6; transform: scale(1); }
      50% { opacity: 1; transform: scale(1.08); }
      100% { opacity: 0.6; transform: scale(1); }
    }
    .animate-radiance {
      animation: deepRadiance 5s ease-in-out infinite;
    }
    .animate-radiance-delayed {
      animation: corePulse 5s ease-in-out infinite;
      animation-delay: 0.5s;
    }
  `}</style>
</div>
      </div>
    </section>
  );
};

export default Hero;