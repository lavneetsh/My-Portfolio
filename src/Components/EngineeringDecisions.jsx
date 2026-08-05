import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from './Reveal';

const DECISIONS = [
  {
    id: "nestjs",
    decision: "NestJS",
    insteadOf: "Express.js",
    category: "Backend Framework",
    icon: "layers",
    summary: "Built-in Dependency Injection & Modular Architecture for Enterprise Scale",
    alternatives: ["Express.js", "Fastify", "Koa"],
    tradeoffs: [
      "Express is quick for small scripts but quickly degrades into spaghetti code in multi-tenant enterprise codebases.",
      "NestJS enforces strict TypeScript interfaces, Dependency Injection, Guards, and Interceptors.",
      "Facilitates seamless unit/E2E testing with NestJS TestingModule mocks."
    ],
    finalReason: "Modular Domain Architecture, Standardized Middleware, Enterprise Production Support."
  },
  {
    id: "qdrant",
    decision: "Qdrant Vector DB",
    insteadOf: "Pinecone",
    category: "Vector Search Engine",
    icon: "hub",
    summary: "Native Metadata Payload Filtering, High-Performance HNSW & Self-Hostable",
    alternatives: ["Pinecone", "Milvus", "pgvector"],
    tradeoffs: [
      "Pinecone is proprietary cloud-hosted with per-pod pricing that scales unpredictably.",
      "Qdrant offers open-source Docker deployment with HNSW index performance.",
      "Allows strict multi-tenant payload filtering (tenant_id == ws_id) directly inside the vector search query."
    ],
    finalReason: "Sub-50ms Vector Search Latency, Payload Indexing, Zero Vendor Lock-in."
  },
  {
    id: "bullmq",
    decision: "BullMQ + Redis",
    insteadOf: "Synchronous Ingestion",
    category: "Async Worker Pipeline",
    icon: "memory",
    summary: "Non-blocking PDF/OCR Document Processing with Retry Queues",
    alternatives: ["Synchronous Promises", "RabbitMQ", "AWS SQS"],
    tradeoffs: [
      "Parsing a 50-page PDF with OCR synchronously blocks the HTTP main event loop for 15+ seconds.",
      "BullMQ offloads file parsing to isolated Node worker processes with Redis persistence.",
      "Provides built-in 3x exponential retries, concurrency limits, and job rate-limiting."
    ],
    finalReason: "Sub-second API Response Time (202 Accepted), Worker Fault Tolerance."
  },
  {
    id: "jwt-redis",
    decision: "JWT + Redis Blacklist",
    insteadOf: "Stateless JWT Only",
    category: "Authentication & Security",
    icon: "lock",
    summary: "Instant Token Revocation & Role Session Management",
    alternatives: ["Stateless JWT Only", "Stateful Express Sessions"],
    tradeoffs: [
      "Pure stateless JWT cannot be invalidated prior to expiration if a key is compromised.",
      "Redis session blacklisting verifies token signature in-memory in < 1ms on request headers.",
      "Ensures immediate forced logout on role demotion or workspace permission change."
    ],
    finalReason: "Stateless API Velocity with Real-time Security Invalidation."
  },
  {
    id: "postgres",
    decision: "PostgreSQL + Prisma",
    insteadOf: "MongoDB",
    category: "Primary Database",
    icon: "database",
    summary: "ACID Relational Integrity for Complex Multi-Tenant RBAC",
    alternatives: ["MongoDB", "DynamoDB"],
    tradeoffs: [
      "NoSQL document databases struggle with strict multi-tenant relational schemas (Users → Workspaces → Roles → Keys).",
      "PostgreSQL guarantees relational foreign key constraints and transactional integrity.",
      "Prisma ORM provides type-safe auto-generated queries and schema migrations."
    ],
    finalReason: "Data Integrity, Strict Foreign Key Cascades, Type-Safe ORM."
  },
  {
    id: "byok",
    decision: "AES-256-CBC BYOK",
    insteadOf: "Master API Key",
    category: "AI Security & Privacy",
    icon: "key",
    summary: "Zero-Trust Encryption for User-Provided Gemini/OpenAI API Keys",
    alternatives: ["Shared System API Key", "Plaintext Database Storage"],
    tradeoffs: [
      "Using a single master API key exposes the platform to global rate-limiting and high operational cost.",
      "AES-256-CBC encrypts user keys with unique workspace salt before saving to PostgreSQL.",
      "Keys are decrypted only in RAM for the duration of the LLM inference call."
    ],
    finalReason: "Enterprise Privacy Compliance & Isolated Rate Limits per Tenant."
  }
];

export default function EngineeringDecisions() {
  const [selectedId, setSelectedId] = useState(DECISIONS[0].id);

  const selected = DECISIONS.find(d => d.id === selectedId) || DECISIONS[0];

  return (
    <section id="engineering-decisions" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <Reveal>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-mono uppercase tracking-widest">
              <span className="material-symbols-outlined text-sm">psychology</span>
              HOW I THINK & ARCHITECT
            </div>

            <h2 className="text-4xl md:text-5xl font-bold font-headline tracking-tight text-white">
              Engineering <span className="gradient-text">Tradeoffs & Choices</span>
            </h2>

            <p className="text-zinc-400 text-sm max-w-2xl font-light">
              Great software engineering isn't about knowing syntax—it's about making mature architectural decisions, understanding tradeoffs, and picking the right tool for production reliability.
            </p>
          </div>
        </Reveal>

        {/* Tab Buttons + Active Card Layout */}
        <Reveal>
          <div className="grid md:grid-cols-12 gap-8">
            {/* Left Nav Pills */}
            <div className="md:col-span-5 space-y-3">
              {DECISIONS.map((d) => (
                <button
                  key={d.id}
                  onClick={() => setSelectedId(d.id)}
                  className={`w-full p-4 rounded-xl border text-left transition-all duration-200 flex items-center justify-between group ${
                    selectedId === d.id
                      ? "bg-cyan-500/10 border-cyan-400 text-white shadow-lg shadow-cyan-500/5"
                      : "bg-[#0f111a]/60 border-white/10 text-zinc-400 hover:border-white/20 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-cyan-400 text-xl">{d.icon}</span>
                    <div>
                      <div className="font-bold text-sm text-white flex items-center gap-2">
                        {d.decision}
                        <span className="text-[10px] text-zinc-500 font-mono font-normal">vs {d.insteadOf}</span>
                      </div>
                      <div className="text-[11px] text-zinc-400 font-mono">{d.category}</div>
                    </div>
                  </div>

                  <span className="material-symbols-outlined text-sm text-zinc-500 group-hover:translate-x-1 transition-transform">
                    chevron_right
                  </span>
                </button>
              ))}
            </div>

            {/* Right Card Inspection View */}
            <div className="md:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selected.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="bg-[#0f111a] border border-white/10 rounded-2xl p-6 md:p-8 space-y-6 relative overflow-hidden"
                >
                  {/* Top Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
                    <div>
                      <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">
                        {selected.category}
                      </span>
                      <h3 className="text-2xl font-bold text-white flex items-center gap-3 mt-1">
                        <span>{selected.decision}</span>
                        <span className="text-xs font-mono px-2 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20">
                          OVER {selected.insteadOf}
                        </span>
                      </h3>
                    </div>

                    <div className="flex gap-2">
                      {selected.alternatives.map((alt, idx) => (
                        <span key={idx} className="text-[10px] font-mono bg-white/5 border border-white/10 text-zinc-400 px-2 py-1 rounded">
                          {alt}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-xl p-4 text-xs font-mono text-cyan-300">
                    💡 {selected.summary}
                  </div>

                  {/* Tradeoffs List */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                      Engineering Tradeoffs Evaluated:
                    </h4>
                    <ul className="space-y-2 text-xs text-zinc-300 font-light">
                      {selected.tradeoffs.map((t, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-cyan-400 font-bold mt-0.5">•</span>
                          <span className="leading-relaxed">{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Final Verdict */}
                  <div className="pt-4 border-t border-white/10">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                      FINAL PRODUCTION REASONING:
                    </span>
                    <p className="text-xs text-zinc-200 font-mono mt-1 bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-xl">
                      ✓ {selected.finalReason}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
