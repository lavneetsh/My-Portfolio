import React from 'react';
import Reveal from './Reveal';

const WHY_INTERVIEW = [
  { label: "Production Experience", detail: "1.3+ Years shipping real-world software & SaaS" },
  { label: "Full Stack (MERN)", detail: "React / Redux / Next.js + Node.js / Express / NestJS + MongoDB / PostgreSQL" },
  { label: "AI Engineering", detail: "RAG Pipelines, Qdrant Vector DB, Gemini LLM & BullMQ Workers" },
  { label: "Enterprise Security", detail: "Multi-Tenant RBAC, TOTP 2FA & AES-256 BYOK Encryption" },
  { label: "System Architecture", detail: "Async Ingestion Queues, S3 Presigned Uploads, SSE Streaming & Decoupled APIs" },
  { label: "Live Production Systems", detail: "Damora AI, CareMagnus SaaS & Full-Stack Blog CMS" },
  { label: "Availability", detail: "Immediate Joiner (0 Days Notice Period)" },
];

export default function RecruiterSection() {
  return (
    <section id="recruiter" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto space-y-12">
        <Reveal>
          <div className="bg-gradient-to-b from-[#0f111a] to-[#090a10] border border-cyan-500/30 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden space-y-8">
            {/* Top Badge */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <span className="material-symbols-outlined text-2xl">verified_user</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest font-semibold">
                    DIRECT RECRUITER PITCH
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold font-headline text-white">
                    Why Interview Me?
                  </h2>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                IMMEDIATE JOINER
              </div>
            </div>

            {/* Bullet List */}
            <div className="grid md:grid-cols-2 gap-4">
              {WHY_INTERVIEW.map((item, idx) => (
                <div key={idx} className="bg-white/5 border border-white/5 rounded-xl p-4 flex items-start gap-3">
                  <span className="text-emerald-400 font-bold text-base mt-0.5">✓</span>
                  <div>
                    <div className="font-bold text-xs text-white uppercase tracking-wider">{item.label}</div>
                    <div className="text-xs text-zinc-400 font-light mt-0.5">{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call To Action Buttons Bar */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center md:justify-between gap-4">
              <div className="text-xs text-zinc-400 font-mono text-center md:text-left">
                Ready to contribute to your engineering team from Day 1.
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href="https://damora-ai-web.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-xs uppercase tracking-widest transition-transform hover:scale-105 shadow-lg shadow-cyan-400/20 flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-base">rocket_launch</span>
                  Launch Damora AI
                </a>

                <a
                  href="https://drive.google.com/file/d/1YXDRgi2Em6rlviHUtnhlpL-F7tDeU9Ve/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-widest transition-colors flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-base">description</span>
                  Download Resume
                </a>

                <a
                  href="mailto:lavneetsharma.work@gmail.com"
                  className="px-4 py-3 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-widest transition-colors flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-base">mail</span>
                  Email Me
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
