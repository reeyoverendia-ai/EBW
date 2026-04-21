import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        
        <h2 style={{ color: '#635D59' }} className="text-4xl md:text-5xl font-serif font-bold mb-6 italic drop-shadow-sm">
          Connect With Us
        </h2>
        
        <p style={{ color: '#635D59' }} className="text-lg opacity-90 mb-12 italic max-w-2xl mx-auto">
          We are here to embrace, equip, and empower. Reach out to start your journey with our community.
        </p>

        <form className="grid grid-cols-1 gap-6 max-w-xl mx-auto">
          
          {/* MUTED GOLD SEMI-FROSTED INPUTS */}
          {['Your Name', 'Your Email'].map((placeholder, index) => (
            <input 
              key={index}
              type={index === 1 ? "email" : "text"} 
              placeholder={placeholder} 
              style={{
                background: 'rgba(197, 179, 130, 0.15)', // Muted Gold Tint
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(197, 179, 130, 0.3)' // Subtle Gold Edge
              }}
              className="w-full rounded-2xl p-5 text-[#635D59] 
                         placeholder:text-[#635D59]/60 outline-none transition-all duration-500
                         hover:shadow-[0_0_60px_rgba(255,255,255,0.9)]
                         focus:shadow-[0_0_40px_rgba(255,255,255,0.6)] focus:border-white/40"
            />
          ))}

          <textarea 
            placeholder="Your Message" 
            rows="4"
            style={{
              background: 'rgba(197, 179, 130, 0.15)', // Muted Gold Tint
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(197, 179, 130, 0.3)'
            }}
            className="w-full rounded-2xl p-5 text-[#635D59] 
                       placeholder:text-[#635D59]/60 outline-none transition-all duration-500
                       hover:shadow-[0_0_60px_rgba(255,255,255,0.9)]
                       focus:shadow-[0_0_40px_rgba(255,255,255,0.6)] focus:border-white/40"
          ></textarea>

          {/* THE GOLD GLOW FROSTED BUTTON */}
          <button 
            type="submit"
            className="frosted-glass mt-4 py-4 rounded-2xl font-black uppercase tracking-[0.3em] text-[12px] transition-all duration-500"
            style={{
              color: '#FFFFF0',
              border: '1.5px solid rgba(197, 179, 130, 0.6)', 
              boxShadow: '0 0 20px rgba(197, 179, 130, 0.2)', 
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.boxShadow = '0 0 60px rgba(197, 179, 130, 0.7)';
              e.currentTarget.style.backgroundColor = 'rgba(197, 179, 130, 0.3)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.boxShadow = '0 0 20px rgba(197, 179, 130, 0.2)';
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;