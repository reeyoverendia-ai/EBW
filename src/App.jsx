import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Videos from './components/Videos';
import Contact from './components/Contact';

function App() {
  return (
    /* Using 'block' ensures no flex-column is forcing a stack */
    <main className="w-full block">
      <Navbar />
      <Hero />
      <Videos />
      <Contact />
    </main>
  );
}

export default App;
