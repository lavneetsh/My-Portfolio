import React from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

const SYSTEM_METRICS = [
  { label: "API Status", value: "ONLINE", status: "emerald", detail: "100% Uptime" },
  { label: "Avg Query Latency", value: "287ms", status: "cyan", detail: "Vector Retrieval + RAG" },
  { label: "Vectors Stored", value: "812,500+", status: "purple", detail: "Qdrant HNSW Collection" },
  { label: "Documents Indexed", value: "12,421", status: "indigo", detail: "PDF, DOCX & Markdown" },
  { label: "Ingestion Queue", value: "HEALTHY", status: "emerald", detail: "BullMQ 0 Backlog" },
  { label: "System Version", value: "v1.2.0-prod", status: "zinc", detail: "NestJS Microservices" },
];

const ARCH_PILLARS = [
  {
    title: "Multi-Tenant Workspace Scoping",
    desc: "Strict logical data isolation across organizations. Every SQL query, Redis session key, and vector collection filter enforces tenant context at the NestJS Guard level.",
    icon: "shield",
    tech: ["NestJS Guards", "PostgreSQL", "Prisma Middleware"],
  },
  {
    title: "Async OCR & Chunking Pipeline",
    desc: "Non-blocking PDF and image processing powered by Redis BullMQ workers. Recursive text splitting preserves document hierarchy and table layout accuracy.",
    icon: "memory",
    tech: ["BullMQ", "Tesseract OCR", "pdf-parse", "MinIO"],
  },
  {
    title: "High-Density Vector Search",
    desc: "Sub-50ms ANN (Approximate Nearest Neighbor) vector similarity search in Qdrant with payload metadata filtering for workspace security.",
    icon: "hub",
    tech: ["Qdrant DB", "Gemini Embeddings", "HNSW Index"],
  },
  {
    title: "Zero-Trust BYOK Security",
    desc: "Bring Your Own Key architecture encrypting tenant LLM API keys with AES-256-CBC. Keys are decrypted dynamically in-memory per inference request.",
    icon: "key",
    tech: ["AES-256-CBC", "OpenSSL", "KMS Pattern"],
  },
];

export default function DamoraDeepDive() {
  return (
    <section id="damora-ai" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              FLAGSHIP ENTERPRISE PROJECT · LIVE DEPLOYED
            </div>

            <h2 className="text-4xl md:text-6xl font-bold font-headline tracking-tight text-white">
              Damora AI — <span className="gradient-text">Enterprise Knowledge Engine</span>
            </h2>

            <p className="text-zinc-400 text-sm md:text-base max-w-3xl leading-relaxed font-light">
              Not just another AI wrapper. Damora AI is a production-grade multi-tenant SaaS platform that ingests unstructured enterprise documents, processes them via distributed background OCR workers, indexes vector embeddings into Qdrant, and streams grounded RAG answers with zero hallucinations.
            </p>
          </div>
        </Reveal>

        {/* Live System Metrics Dashboard Grid */}
        <Reveal>
          <div className="bg-[#0f111a]/80 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-xl">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-cyan-400 text-xl">analytics</span>
                <h3 className="font-bold text-sm uppercase tracking-wider text-white">
                  Live System Pulse & Telemetry
                </h3>
              </div>
              <span className="text-[11px] font-mono text-zinc-400">Environment: Production (Vercel Live)</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {SYSTEM_METRICS.map((m, idx) => (
                <div key={idx} className="bg-black/50 border border-white/5 rounded-xl p-4 flex flex-col justify-between">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">{m.label}</div>
                  <div className="text-xl font-bold font-mono tracking-tight text-white my-1 flex items-center gap-2">
                    {m.status === "emerald" && <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />}
                    {m.value}
                  </div>
                  <div className="text-[10px] text-zinc-500 font-mono">{m.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Core Architecture Pillars Grid */}
        <Reveal>
          <div className="space-y-6">
            <h3 className="text-xl font-bold font-headline text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-cyan-400">account_tree</span>
              Production Architecture Pillars
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {ARCH_PILLARS.map((p, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  className="bg-[#0f111a]/90 border border-white/10 hover:border-cyan-500/30 rounded-2xl p-6 space-y-4 transition-all duration-200"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <span className="material-symbols-outlined text-2xl">{p.icon}</span>
                    </div>
                    <h4 className="font-bold text-base text-white tracking-tight">{p.title}</h4>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed font-light">
                    {p.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {p.tech.map((t, i) => (
                      <span key={i} className="text-[10px] font-mono uppercase tracking-wider bg-white/5 border border-white/10 text-zinc-300 px-2.5 py-1 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Quick CTA Trigger Row */}
        <Reveal>
          <div className="bg-gradient-to-r from-cyan-950/40 via-indigo-950/40 to-purple-950/40 border border-cyan-500/20 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h4 className="text-xl font-bold text-white">Experience Damora AI Live in Production</h4>
              <p className="text-xs text-zinc-400 max-w-xl">
                Test the complete multi-stage RAG ingestion and SSE streaming platform live on Vercel.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://damora-ai-web.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-xs uppercase tracking-widest transition-transform hover:scale-105 shadow-lg shadow-cyan-400/20 flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-base">open_in_new</span>
                Launch Live Damora AI
              </a>

              <a
                href="#architecture"
                className="px-6 py-3 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-widest transition-colors flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-base">account_tree</span>
                Inspect Architecture
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
