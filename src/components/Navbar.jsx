import React from 'react';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-[100] bg-transparent backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* LOGO */}
        <h1 className="text-xl md:text-2xl font-serif font-bold text-[#FFFFF0] whitespace-nowrap tracking-wide drop-shadow-sm">
          Empowered Beloved Women
        </h1>

        {/* NAVIGATION LINKS */}
        <ul className="flex flex-row items-center gap-8 md:gap-10">
          {['Home', 'Videos', 'Contact'].map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`} 
                className="relative text-[11px] md:text-xs uppercase font-black tracking-[0.25em] text-[#FFFFF0] transition-all duration-300 group"
              >
                {item}
                {/* THE REACTION: An underline that grows from the center */}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#C5B382] transition-all duration-300 group-hover:w-full opacity-70"></span>
                
                {/* THE GLOW: Text gains a slight outer glow on hover */}
                <style jsx>{`
                  a:hover {
                    text-shadow: 0 0 10px rgba(255, 255, 240, 0.8);
                    color: #FFFFF0 !important; /* Forces it to stay Ivory */
                  }
                `}</style>
              </a>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;