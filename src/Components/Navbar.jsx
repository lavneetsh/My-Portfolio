import React from 'react';
import { Link } from 'react-scroll';

export default function Navbar() {
  const navItems = [
    { name: 'Dashboard', to: 'hero' },
    { name: 'Damora AI', to: 'damora-ai' },
    { name: 'Architecture', to: 'architecture' },
    { name: 'Decisions', to: 'engineering-decisions' },
    { name: 'Challenges', to: 'engineering-challenges' },
    { name: 'Timeline', to: 'timeline' },
    { name: 'Recruiter', to: 'recruiter' },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-7xl rounded-2xl border border-white/10 bg-[#090a10]/80 backdrop-blur-xl flex justify-between items-center px-6 py-3.5 z-50 shadow-2xl">
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
        <span className="text-sm font-bold text-white uppercase tracking-wider font-mono">
          LAVNEET SHARMA <span className="text-cyan-400">{"// ENG DASHBOARD"}</span>
        </span>
      </div>

      <div className="hidden lg:flex gap-6">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.to}
            smooth={true}
            duration={500}
            className="text-xs font-mono font-medium text-zinc-400 hover:text-cyan-400 cursor-pointer transition-colors uppercase tracking-widest"
          >
            {item.name}
          </Link>
        ))}
      </div>

      <a
        href="https://drive.google.com/file/d/1YXDRgi2Em6rlviHUtnhlpL-F7tDeU9Ve/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-cyan-400 text-black px-4 py-2 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-cyan-300 transition-colors flex items-center justify-center cursor-pointer shadow-lg shadow-cyan-400/20"
      >
        Resume
      </a>
    </nav>
  );
}

