import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-950 via-blue-950 to-gray-950 overflow-hidden">
      <ParticlesBackground />
      
      <div className="relative z-10">
        <Navbar scrollY={scrollY} />
        <Hero />
        <About />
        <Services />
        <Projects />
        <Stats />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
