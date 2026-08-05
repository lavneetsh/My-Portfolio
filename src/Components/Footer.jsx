import React from 'react';

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/10 bg-[#090a10] text-center text-xs font-mono text-zinc-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          <span className="text-zinc-300 font-bold uppercase tracking-wider">LAVNEET SHARMA</span>
          <span>— Full Stack & AI Systems Engineer</span>
        </div>

        <div className="flex gap-6">
          <a href="https://github.com/lavneetsh" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
            GitHub
          </a>
          <a href="mailto:lavneetsharma.work@gmail.com" className="hover:text-cyan-400 transition-colors">
            Email
          </a>
          <a href="https://drive.google.com/file/d/1YXDRgi2Em6rlviHUtnhlpL-F7tDeU9Ve/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
