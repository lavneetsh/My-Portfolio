import React from 'react';
import { motion } from 'framer-motion';

const DASHBOARD_METRICS = [
  { label: "Experience", value: "1.3+ Years", sub: "Production Software", icon: "badge" },
  { label: "Production Projects", value: "3 Deployed", sub: "Damora AI · CareMagnus · CMS", icon: "rocket_launch" },
  { label: "AI Stack", value: "Gemini · Claude · OpenAI", sub: "Vector Search & RAG", icon: "auto_awesome" },
  { label: "Backend Core", value: "NestJS · Node.js", sub: "TypeScript & Microservices", icon: "terminal" },
  { label: "Data & Storage", value: "Postgres · Qdrant · Redis", sub: "Relational & Vector DBs", icon: "database" },
  { label: "Deployment", value: "Live Production", sub: "Vercel & Cloud Services", icon: "cloud_done" },
  { label: "Current Focus", value: "Enterprise AI Systems", sub: "RAG & Agentic Systems", icon: "psychology" },
];

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen pt-28 pb-16 px-6 relative flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full space-y-12">
        {/* Top Status & Main Headline */}
        <div className="space-y-6 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono uppercase tracking-widest"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            ENGINEERING SUMMARY DASHBOARD · OPEN TO FULL STACK (MERN) & AI ENGINEER ROLES
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-bold font-headline tracking-tight text-white leading-tight"
          >
            FULL STACK (MERN) & <br className="hidden md:block" />
            <span className="gradient-text">AI SYSTEMS ENGINEER</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-base md:text-lg max-w-3xl font-light leading-relaxed"
          >
            Full Stack Developer specializing in production-grade MERN architectures, NestJS microservices, multi-tenant SaaS platforms, vector search RAG pipelines, and zero-trust security.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4 pt-2 justify-center md:justify-start"
          >
            <a
              href="https://damora-ai-web.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-400 hover:bg-cyan-300 text-black px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-transform hover:scale-105 shadow-xl shadow-cyan-400/20 flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-lg">rocket_launch</span>
              Launch Live Damora AI
            </a>

            <a
              href="#damora-ai"
              className="border border-white/20 bg-white/5 hover:bg-white/10 text-white px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-colors flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-lg">hub</span>
              Inspect Platform Architecture
            </a>

            <a
              href="https://github.com/lavneetsh"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 bg-white/5 hover:bg-white/10 text-white px-5 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-colors flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-lg">code</span>
              GitHub Repos
            </a>

            <a
              href="https://drive.google.com/file/d/19n8tX8DkYA7ejr3ney7WM2HAsuJm20NI/view"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 bg-white/5 hover:bg-white/10 text-white px-5 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-colors flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-lg">description</span>
              Resume
            </a>
          </motion.div>
        </div>

        {/* Dashboard Stat Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 pt-4"
        >
          {DASHBOARD_METRICS.map((m, i) => (
            <div
              key={i}
              className={`bg-[#0f111a]/80 border border-white/10 rounded-2xl p-4 flex flex-col justify-between hover:border-cyan-500/30 transition-all ${
                i === 6 ? "col-span-2 md:col-span-4 lg:col-span-1 border-cyan-500/20 bg-cyan-500/5" : ""
              }`}
            >
              <div className="flex items-center justify-between text-zinc-400 mb-2">
                <span className="text-[10px] font-mono uppercase tracking-wider">{m.label}</span>
                <span className="material-symbols-outlined text-cyan-400 text-base">{m.icon}</span>
              </div>
              <div className="text-sm font-bold text-white font-mono tracking-tight my-1">{m.value}</div>
              <div className="text-[10px] text-zinc-400 font-light truncate">{m.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
