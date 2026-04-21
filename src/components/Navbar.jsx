import React, { useState, useEffect } from 'react';

const Navbar = () => {
const fullText = "Empowered Beloved Women";
  const [displayText, setDisplayText] = useState("");
  const [loopCount, setLoopCount] = useState(0);
  const maxLoops = 20;

  useEffect(() => {
    // If we've finished 5 loops, stop everything and show full text
    if (loopCount >= maxLoops) {
      setDisplayText(fullText);
      return;
    }

    let currentLetterIndex = 0;
    
    // START TYPING
    const typingInterval = setInterval(() => {
      if (currentLetterIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentLetterIndex));
        currentLetterIndex++;
      } else {
        // FINISHED TYPING ONE ROUND
        clearInterval(typingInterval);
        
        // WAIT 2 SECONDS, THEN RESET FOR NEXT LOOP
        setTimeout(() => {
          setDisplayText(""); // Clear text
          setLoopCount(prev => prev + 1); // This triggers the useEffect to run again
        }, 2000);
      }
    }, 100);

    return () => {
      clearInterval(typingInterval);
    };
  }, [loopCount]); // The loopCount dependency is key here
   
  return (
    <nav className="absolute top-0 left-0 w-full z-[100] bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* LOGO - Floating on the background */}
        <h1 
          style={{ 
            fontFamily: 'Georgia, serif', 
            fontStyle: 'italic', 
            color: '#FFFFF0', 
            textShadow: '0 2px 15px rgba(0,0,0,0.4)',
            minHeight: '1.2em'
          }} 
          className="text-2xl md:text-3xl font-bold whitespace-nowrap tracking-tight"
        >
          {displayText}
          <span className="animate-pulse">|</span>
        </h1>

        {/* NAVIGATION LINKS */}
        <ul className="flex flex-row items-center gap-8 md:gap-10">
          {['Home', 'Videos', 'Contact'].map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`} 
                className="relative text-[11px] md:text-xs uppercase font-black tracking-[0.25em] text-[#FFFFF0] transition-all duration-300 group hover:opacity-100 opacity-90"
                style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#C5B382] transition-all duration-300 group-hover:w-full opacity-70"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-pulse {
          animation: pulse 0.8s infinite;
          margin-left: 2px;
          color: #C5B382;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;