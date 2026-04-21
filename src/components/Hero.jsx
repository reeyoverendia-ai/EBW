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

{/* RIGHT: THE ULTRA-VISIBLE BORDER TRACE */}
<div 
  style={{ 
    flex: '1', 
    display: 'flex', 
    position: 'relative',
    borderRadius: '44px', // Slightly larger radius for the outer frame
    padding: '6px', // More room for the thick glowing "snake"
    background: 'transparent',
    isolation: 'isolate',
    overflow: 'hidden'
  }}
>
  <svg
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: 0,
    }}
  >
    <defs>
      {/* Enhanced Neon Glow Filter */}
      <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="7" result="blur" />
        <feFlood floodColor="#FFFFF0" floodOpacity="0.9" result="color" />
        <feComposite in="color" in2="blur" operator="in" result="glow" />
        <feMerge>
          <feMergeNode in="glow" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <rect
      x="3"
      y="3"
      width="calc(100% - 6px)"
      height="calc(100% - 6px)"
      rx="40"
      fill="none"
      stroke="#FFFFF0" 
      strokeWidth="10" /* BOLD thickness for maximum impact */
      strokeDasharray="200 1000" 
      filter="url(#neonGlow)"
      style={{
        animation: 'strokeMove 4.5s linear infinite',
        strokeLinecap: 'round'
      }}
    />
  </svg>

  {/* THE INNER CONTENT BOX */}
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
  background: 'rgba(93, 84, 75, 0.38)', 
  backdropFilter: 'blur(30px)',
}}>
  {/* UPDATED TITLE */}
  <h1 style={{ 
    color: '#FFFFF0', 
    fontSize: isMobile ? '24px' : '34px', 
    fontFamily: 'serif', 
    fontWeight: 'bold', 
    marginBottom: '20px',
    lineHeight: '1.3',
    textShadow: '0 2px 15px rgba(0,0,0,0.2)' 
  }}>
    She Leads, She Equips, <br />
    We Embrace with <br />
    <span style={{ color: '#F1EAD8', fontStyle: 'italic' }}>The Love of Christ</span>
  </h1>
  
  {/* UPDATED DESCRIPTION */}
  <p style={{ 
    color: '#FFFFF0', 
    fontSize: '16px', 
    fontStyle: 'italic', 
    opacity: '1', 
    marginBottom: '30px', 
    lineHeight: '1.8' 
  }}>
    Dedicated to helping individuals know their true worth and identity in Jesus Christ. 
    <br /><br />
    Bringing healing thru The Agape Love of Christ.
  </p>
  
  {/* PEARLY WHITE BUTTON */}
  <div style={{ display: 'flex', justifyContent: isMobile ? 'center' : 'flex-start' }}>
    <a href="#contact" style={{ textDecoration: 'none' }}>
      <button 
        className="aura-button" 
        style={{ 
          padding: '14px 28px', 
          borderRadius: '50px', 
          fontWeight: 'bold', 
          fontSize: '11px', 
          letterSpacing: '2px', 
          textTransform: 'uppercase',
          cursor: 'pointer',
          border: '1px solid rgba(255, 255, 240, 0.6)',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          color: '#FFFFF0',
          transition: 'all 0.4s ease-in-out',
          boxShadow: '0 0 15px rgba(255, 255, 240, 0.4)'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.boxShadow = '0 0 30px rgba(255, 255, 255, 0.8)';
          e.currentTarget.style.transform = 'scale(1.05)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.boxShadow = '0 0 15px rgba(255, 255, 240, 0.4)';
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        Join Our Mission
      </button>
    </a>
  </div>
</div>

  <style>{`
    @keyframes strokeMove {
      0% { stroke-dashoffset: 1150; stroke: #FFFFF0; }
      50% { stroke: #C5B382; } 
      100% { stroke-dashoffset: 0; stroke: #FFFFF0; }
    }
  `}</style>
</div>

      </div>
    </section>
  );
};

export default Hero;