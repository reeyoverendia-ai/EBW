import React, { useState, useEffect } from 'react';

const Videos = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="videos" style={{ width: '100%', padding: '80px 0' }}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* SECTION TITLE */}
        <h2 style={{ color: '#FFFFF0' }} className="text-4xl md:text-5xl font-serif text-center mb-16 italic drop-shadow-md">
          Empowerment Gallery
        </h2>

        {/* FORCED FLEX CONTAINER */}
        <div style={{ 
          display: 'flex', 
          flexDirection: isMobile ? 'column' : 'row', 
          alignItems: 'stretch', 
          gap: '40px' 
        }}>
          
          {/* LEFT: THE TEXT CONTAINER */}
          <div 
            style={{ flex: '1', display: 'flex' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="frosted-glass" style={{ 
              width: '100%',
              borderRadius: '40px', 
              padding: '40px', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center', 
              textAlign: 'left',
              transition: 'all 0.6s ease-in-out',
              /* AURA GLOW EFFECT */
              border: isHovered ? '1.5px solid rgba(255, 255, 255, 0.6)' : '1.5px solid rgba(197, 179, 130, 0.4)',
              boxShadow: isHovered ? '0 0 70px rgba(255, 255, 255, 0.6)' : '0 10px 50px rgba(0, 0, 0, 0.3)',
              transform: isHovered ? 'translateY(-5px)' : 'translateY(0)'
            }}>
              <h3 style={{ color: '#FFFFF0', fontSize: '28px', fontFamily: 'serif', fontWeight: 'bold', marginBottom: '20px' }}>
                Community Moments
              </h3>
              <p style={{ color: '#FFFFF0', fontSize: '15px', fontStyle: 'italic', opacity: '0.9', lineHeight: '1.6' }}>
                Watch how we minister together. Every journey is a testament to The Power of God's love. All Glory to God.
              </p>
            </div>
          </div>

          {/* RIGHT: THE VIDEO CONTAINER */}
          <div style={{ flex: '1.5' }}>
            <div className="frosted-glass" style={{ 
              width: '100%', 
              height: '100%', 
              minHeight: isMobile ? '250px' : '400px',
              borderRadius: '40px', 
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(0,0,0,0.1)'
            }}>
              {/* Replace the text below with your <iframe /> or <video /> tag */}
              <p style={{ color: '#FFFFF0', opacity: '0.4', fontStyle: 'italic' }}>
                Video Player Placeholder
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Videos;