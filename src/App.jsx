import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { motion } from 'framer-motion';

import ParticlesBg from './components/ParticlesBg';
import CursorGlow from './components/CursorGlow';

function App() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative bg-[#131313] text-white min-h-screen selection:bg-primary-container selection:text-on-primary-container"
    >
      <CursorGlow />
      <ParticlesBg />
      
      {/* Premium Atmosphere Globs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-container/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary-container/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 transition-colors duration-500 overflow-x-hidden text-white">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
    </motion.div>
  );
}

export default App;
