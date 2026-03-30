import React from 'react';
import { Link } from 'react-scroll';

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl flex justify-between items-center px-8 py-4 z-50 shadow-2xl">
      <h1 className="text-xl font-bold text-primary-container uppercase tracking-tighter">
        Lavneet Sharma
      </h1>

      <div className="hidden md:flex gap-8">
        {['Hero', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
          <Link
            key={item}
            to={item.toLowerCase()}
            smooth={true}
            duration={500}
            className="text-sm font-medium text-on-surface-variant hover:text-primary-container cursor-pointer transition-colors uppercase tracking-widest"
          >
            {item}
          </Link>
        ))}
      </div>

      <a 
        href="https://drive.google.com/file/d/1YXDRgi2Em6rlviHUtnhlpL-F7tDeU9Ve/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-primary-container text-black px-5 py-2 rounded-xl font-bold text-xs uppercase tracking-widest hover:scale-105 transition-transform neon-glow flex items-center justify-center cursor-pointer"
      >
        Resume
      </a>
    </nav>
  );
}
