import React from 'react';
import Reveal from './Reveal';

export default function Education() {
  return (
    <section id="education" className="py-16 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="bg-[#0f111a] border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400">
                <span className="material-symbols-outlined text-2xl">school</span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">ACADEMIC BACKGROUND</span>
                <h3 className="text-xl font-bold text-white">Bachelor of Technology (B.Tech)</h3>
                <div className="text-xs text-zinc-400 font-light mt-0.5">Computer Science & Engineering</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 text-xs font-mono text-zinc-400">
              <span className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">Data Structures & Algorithms</span>
              <span className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">DBMS & SQL</span>
              <span className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">Operating Systems</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}