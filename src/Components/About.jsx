import React from 'react';
import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="max-w-5xl mx-auto space-y-10">
        <Reveal>
          <div className="bg-[#0f111a] border border-white/10 rounded-2xl p-8 md:p-12 space-y-6">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-cyan-400 text-2xl">person</span>
              <h2 className="text-2xl md:text-3xl font-bold font-headline text-white">
                Technical Profile & Capabilities
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 pt-2 text-xs leading-relaxed text-zinc-300 font-light">
              <div className="bg-white/5 border border-white/5 rounded-xl p-5 space-y-2">
                <span className="text-cyan-400 font-mono font-bold uppercase text-[11px]">1. WHAT I BUILD</span>
                <p>
                  Production-grade backend architectures, multi-tenant SaaS systems, async background pipelines, and high-performance RAG knowledge retrieval platforms.
                </p>
              </div>

              <div className="bg-white/5 border border-white/5 rounded-xl p-5 space-y-2">
                <span className="text-indigo-400 font-mono font-bold uppercase text-[11px]">2. PROBLEMS I SOLVE</span>
                <p>
                  Data isolation across tenants, vector search retrieval latency, LLM hallucination mitigation, non-blocking heavy document processing, and zero-trust key management.
                </p>
              </div>

              <div className="bg-white/5 border border-white/5 rounded-xl p-5 space-y-2">
                <span className="text-purple-400 font-mono font-bold uppercase text-[11px]">3. ROLES TARGETED</span>
                <p className="font-semibold text-white">
                  • AI Engineer<br />
                  • Backend Software Engineer<br />
                  • Full Stack Systems Engineer
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
