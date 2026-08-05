import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from './Reveal';

const CHALLENGES = [
  {
    id: "multi-tenancy",
    title: "Multi-Tenant Workspace Isolation",
    category: "Security & Database Architecture",
    icon: "shield",
    problem: "Prevent cross-tenant data leaks across database queries, Redis sessions, and vector collections in a shared enterprise SaaS environment.",
    approach: "Implement NestJS request-scoped ExecutionContext Guards and Prisma Middleware to enforce row-level workspace scoping automatically.",
    solution: "Configured PostgreSQL row scoping and injected strict tenant payload filters (filter: tenant_id == workspace_id) into Qdrant vector queries.",
    result: "100% tenant data isolation guaranteed with zero manual query boilerplate and zero cross-tenant leak vectors."
  },
  {
    id: "ocr-pipeline",
    title: "Async OCR & Heavy PDF Ingestion Bottlenecks",
    category: "Distributed Background Workers",
    icon: "memory",
    problem: "Processing 50+ page PDFs with OCR synchronously locked Node's main event loop for 15+ seconds, causing 504 Gateway Timeouts.",
    approach: "Decouple API upload handling from heavy compute parsing using isolated background worker threads.",
    solution: "Implemented Redis BullMQ distributed queues with MinIO presigned URL file streaming and Tesseract OCR concurrency throttles.",
    result: "API upload endpoints respond in < 150ms with 202 Accepted while BullMQ handles heavy parsing concurrently with 3x retry fallbacks."
  },
  {
    id: "vector-retrieval",
    title: "Sub-Second Vector Search & Retrieval Tuning",
    category: "AI & Vector Search Engine",
    icon: "hub",
    problem: "High retrieval latency and low semantic precision during vector similarity searches over 800k+ vector collections.",
    approach: "Tune Qdrant HNSW graph index parameters (m=16, ef_construct=100) and implement recursive token-aware chunking.",
    solution: "Configured 500-token chunk windows with 50-token overlaps, combined with Qdrant payload indexing for instant metadata filtering.",
    result: "Achieved average query retrieval latency of 287ms with 94.2% semantic precision on benchmark queries."
  },
  {
    id: "rag-hallucination",
    title: "RAG Hallucination Mitigation & Context Guardrails",
    category: "LLM Engineering & Reliability",
    icon: "psychology",
    problem: "Generic LLMs generating ungrounded facts or hallucinating details missing from internal workspace documents.",
    approach: "Implement cosine similarity distance thresholds combined with strict prompt engineering context boundaries.",
    solution: "Filter out vector chunks below 0.78 similarity score, injecting explicit system prompts requiring page-level source citations.",
    result: "Zero ungrounded responses; 100% of generated answers cite verified page numbers and source document references."
  },
  {
    id: "sse-streaming",
    title: "Real-Time SSE Response Token Streaming",
    category: "API Protocol & Performance",
    icon: "stream",
    problem: "WebSocket infrastructure added excessive state tracking overhead for one-way LLM response token streaming.",
    approach: "Adopt HTTP Server-Sent Events (SSE) via NestJS @Sse() controller decorators and RxJS Observable streams.",
    solution: "Streamed Gemini LLM token outputs over lightweight persistent HTTP/2 response streams directly to the frontend markdown renderer.",
    result: "Sub-200ms time-to-first-token (TTFT) streaming velocity with 80% lower server memory footprint than WebSockets."
  },
  {
    id: "byok-encryption",
    title: "AES-256-CBC BYOK Security Architecture",
    category: "Cryptography & Data Privacy",
    icon: "key",
    problem: "Storing plaintext user LLM API keys exposes the platform to key leakage and single-point quota exhaustion.",
    approach: "Architect a Bring Your Own Key (BYOK) vault encrypting keys at rest with workspace-derived initialization vectors.",
    solution: "Implemented AES-256-CBC encryption in NestJS crypto service, decrypting keys in RAM strictly for the duration of inference execution.",
    result: "Absolute tenant key privacy with zero key leakage risk even if database snapshots are exposed."
  }
];

export default function EngineeringChallenges() {
  const [activeTab, setActiveTab] = useState(CHALLENGES[0].id);

  const active = CHALLENGES.find(c => c.id === activeTab) || CHALLENGES[0];

  return (
    <section id="engineering-challenges" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <Reveal>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono uppercase tracking-widest">
              <span className="material-symbols-outlined text-sm">build</span>
              REAL HARD PROBLEMS SOLVED
            </div>

            <h2 className="text-4xl md:text-5xl font-bold font-headline tracking-tight text-white">
              Engineering <span className="gradient-text">Challenges & Solutions</span>
            </h2>

            <p className="text-zinc-400 text-sm max-w-2xl font-light">
              Portfolios shouldn't just list features—they should showcase concrete engineering obstacles solved in production environments.
            </p>
          </div>
        </Reveal>

        {/* Challenge Selection & Deep Dive Card */}
        <Reveal>
          <div className="space-y-8">
            {/* Grid Pills */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {CHALLENGES.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveTab(c.id)}
                  className={`p-3.5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between ${
                    activeTab === c.id
                      ? "bg-emerald-500/10 border-emerald-400 text-white shadow-lg shadow-emerald-500/5"
                      : "bg-[#0f111a]/60 border-white/10 text-zinc-400 hover:border-white/20 hover:text-white"
                  }`}
                >
                  <span className="material-symbols-outlined text-emerald-400 text-xl mb-2">{c.icon}</span>
                  <div className="text-xs font-bold leading-tight line-clamp-2 text-white">{c.title}</div>
                </button>
              ))}
            </div>

            {/* Active Challenge Deep-Dive Breakdown */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="bg-[#0f111a] border border-white/10 rounded-2xl p-6 md:p-10 space-y-8 relative overflow-hidden"
              >
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <span className="material-symbols-outlined text-2xl">{active.icon}</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">
                        {active.category}
                      </span>
                      <h3 className="text-2xl font-bold text-white tracking-tight">{active.title}</h3>
                    </div>
                  </div>

                  <span className="text-xs font-mono text-zinc-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                    Production Battle-tested
                  </span>
                </div>

                {/* 4-Step Breakdown Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Problem */}
                  <div className="bg-rose-500/5 border border-rose-500/15 rounded-xl p-5 space-y-2">
                    <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-semibold uppercase">
                      <span className="material-symbols-outlined text-base">warning</span>
                      1. The Problem
                    </div>
                    <p className="text-xs text-zinc-300 font-light leading-relaxed">
                      {active.problem}
                    </p>
                  </div>

                  {/* Approach */}
                  <div className="bg-amber-500/5 border border-amber-500/15 rounded-xl p-5 space-y-2">
                    <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-semibold uppercase">
                      <span className="material-symbols-outlined text-base">explore</span>
                      2. Architectural Approach
                    </div>
                    <p className="text-xs text-zinc-300 font-light leading-relaxed">
                      {active.approach}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="bg-cyan-500/5 border border-cyan-500/15 rounded-xl p-5 space-y-2">
                    <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-semibold uppercase">
                      <span className="material-symbols-outlined text-base">code</span>
                      3. Technical Solution
                    </div>
                    <p className="text-xs text-zinc-300 font-light leading-relaxed">
                      {active.solution}
                    </p>
                  </div>

                  {/* Result */}
                  <div className="bg-emerald-500/5 border border-emerald-500/15 rounded-xl p-5 space-y-2">
                    <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-semibold uppercase">
                      <span className="material-symbols-outlined text-base">verified</span>
                      4. Quantifiable Result
                    </div>
                    <p className="text-xs text-zinc-200 font-mono leading-relaxed">
                      {active.result}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
