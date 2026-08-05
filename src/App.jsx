import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import DamoraDeepDive from './Components/DamoraDeepDive';
import Architecture from './Components/Architecture';
import EngineeringDecisions from './Components/EngineeringDecisions';
import EngineeringChallenges from './Components/EngineeringChallenges';
import EngineeringTimeline from './Components/EngineeringTimeline';
import RecruiterSection from './Components/RecruiterSection';
import Projects from './Components/Projects';
import Experience from './Components/Experience';
import Education from './Components/Education';
import Footer from './Components/Footer';
import CursorGlow from './Components/CursorGlow';

function App() {
  return (
    <div className="relative bg-[#090a0f] text-zinc-100 min-h-screen selection:bg-cyan-500/20 selection:text-cyan-300">
      <CursorGlow />

      {/* Ambient Dark Grid Matrix & Soft Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Subtle Engineering Grid background */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(56,189,248,1) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,1) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute top-[-10%] left-[-10%] w-[45%] h-[45%] bg-cyan-500/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] bg-indigo-500/5 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 transition-colors duration-500 overflow-x-hidden text-zinc-100">
        <Navbar />
        <Hero />
        <About />
        <DamoraDeepDive />
        <Architecture />
        <EngineeringDecisions />
        <EngineeringChallenges />
        <EngineeringTimeline />
        <RecruiterSection />
        <Projects />
        <Experience />
        <Education />
        <Footer />
      </div>
    </div>
  );
}

export default function AppWrapper() {
  return <App />;
}
