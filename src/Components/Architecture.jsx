import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";

const NODES = [
  {
    id: "nextjs",
    label: "Next.js 14 UI",
    category: "Frontend Layer",
    icon: "web",
    color: "from-blue-600 to-indigo-600",
    responsibilities: "SSR rendering, App Router, Markdown parsing, SSE response stream consumption, State management.",
    whyExists: "Delivers sub-100ms initial page load with Server Components and immediate interactive user UI.",
    tech: ["Next.js 14", "React 18", "TailwindCSS", "SSE Client"],
    tradeoffs: "App Router adds server/client bundle boundary management but drastically cuts client JS payload."
  },
  {
    id: "nestjs",
    label: "NestJS Microservice",
    category: "API & Business Logic",
    icon: "lan",
    color: "from-rose-600 to-red-700",
    responsibilities: "JWT auth guards, Multi-tenant RBAC, Workspace isolation, REST routing, SSE stream controller.",
    whyExists: "Provides enterprise TypeScript-first Dependency Injection and strict modular separation of domain logic.",
    tech: ["NestJS", "Passport JWT", "RxJS", "Reflector Guards"],
    tradeoffs: "Requires strict boilerplate setup compared to Express, but guarantees maintainability at scale."
  },
  {
    id: "bullmq",
    label: "BullMQ & Redis",
    category: "Async Worker Queue",
    icon: "memory",
    color: "from-amber-600 to-orange-700",
    responsibilities: "Distributed background queues, OCR ingestion jobs, Retry backoff schedules, Concurrency limits.",
    whyExists: "Offloads heavy PDF parsing & text extraction from main HTTP event loop, maintaining fast API response times.",
    tech: ["BullMQ", "Redis 7", "Node Workers"],
    tradeoffs: "Introduces Redis state dependence, but prevents main thread blocking and API request timeouts."
  },
  {
    id: "minio",
    label: "MinIO Object Storage",
    category: "File Vault",
    icon: "cloud_upload",
    color: "from-emerald-600 to-teal-700",
    responsibilities: "Presigned upload URLs, Raw PDF document storage, Scanned image assets, Workspace hash tracking.",
    whyExists: "S3-compatible private document vault avoiding vendor lock-in and allowing high-throughput streaming.",
    tech: ["MinIO", "S3 API", "AES-256 Storage"],
    tradeoffs: "Requires container disk management, but provides 100% data ownership and lower bandwidth cost."
  },
  {
    id: "qdrant",
    label: "Qdrant Vector DB",
    category: "Vector Retrieval Engine",
    icon: "hub",
    color: "from-purple-600 to-pink-700",
    responsibilities: "HNSW vector indexing, 768-dim similarity search, Payload metadata tenant filtering (tenant_id == ws_id).",
    whyExists: "Sub-50ms vector distance matching with native JSON payload filtering for multi-tenant isolation.",
    tech: ["Qdrant", "HNSW Index", "Cosine Distance"],
    tradeoffs: "RAM intensive for large vector graphs, but delivers unmatched query retrieval speeds."
  },
  {
    id: "postgres",
    label: "PostgreSQL & Prisma",
    category: "Relational Database",
    icon: "database",
    color: "from-sky-600 to-blue-700",
    responsibilities: "User accounts, Workspace RBAC hierarchy, Encrypted BYOK key storage, Transaction logs, Usage quotas.",
    whyExists: "ACID transactional consistency for relational tenant membership and strict foreign key cascades.",
    tech: ["PostgreSQL 16", "Prisma ORM", "Connection Pooling"],
    tradeoffs: "Requires schema migrations, but eliminates unstructured document database inconsistency."
  },
  {
    id: "gemini",
    label: "Gemini 1.5 LLM Engine",
    category: "AI & Embeddings",
    icon: "auto_awesome",
    color: "from-cyan-500 to-indigo-600",
    responsibilities: "Text embedding generation (768-dim), Grounded RAG token synthesis, Citation formatting, SSE output stream.",
    whyExists: "Generates high-context window answers grounded strictly in retrieved workspace document vectors.",
    tech: ["Gemini 1.5 Pro/Flash", "Text-Embedding-004", "BYOK Keys"],
    tradeoffs: "Requires rate-limiting safeguards, but delivers state-of-the-art reasoning quality."
  }
];

const FLOWS = {
  ingestion: [
    "1. Client POSTs PDF → NestJS API returns 202 Accepted",
    "2. File saved to S3-compatible MinIO Vault",
    "3. Ingestion Job dispatched to Redis BullMQ Queue",
    "4. Isolated Worker runs pdf-parse & Tesseract OCR",
    "5. Text split into 500-token chunks with 50-token overlap",
    "6. Gemini API generates 768-dim vector embeddings",
    "7. Vector & payload (tenant_id, doc_id) upserted into Qdrant"
  ],
  rag: [
    "1. User submits question to Next.js chat UI",
    "2. NestJS Guard validates JWT & Workspace Context",
    "3. Question converted into 768-dim vector embedding",
    "4. Qdrant searches top-k vectors filtered by workspace_id",
    "5. Low-distance chunks assembled into grounded System Prompt",
    "6. Gemini 1.5 streams response tokens over HTTP SSE stream",
    "7. UI renders live markdown answer with page citations"
  ],
  auth: [
    "1. Client authenticates via POST /api/v1/auth/login",
    "2. NestJS issues signed JWT + Redis session registration",
    "3. Request Headers checked by Passport JWT Execution Guard",
    "4. Reflector Guard verifies User Role (OWNER | ADMIN | MEMBER)",
    "5. Encrypted BYOK API key retrieved from PostgreSQL",
    "6. AES-256-CBC decrypts API key strictly in RAM for LLM call"
  ]
};

export default function Architecture() {
  const [activeNode, setActiveNode] = useState(NODES[1]); // Default NestJS
  const [activeFlow, setActiveFlow] = useState("ingestion");

  return (
    <section id="architecture" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <Reveal>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono uppercase tracking-widest">
              <span className="material-symbols-outlined text-sm">account_tree</span>
              AUTHENTIC SYSTEM DESIGN
            </div>

            <h2 className="text-4xl md:text-5xl font-bold font-headline tracking-tight text-white">
              Interactive Damora AI <span className="gradient-text">Architecture</span>
            </h2>

            <p className="text-zinc-400 text-sm max-w-2xl font-light">
              Click or hover any node to inspect real implementation responsibilities, tech choices, and architectural tradeoffs.
            </p>
          </div>
        </Reveal>

        {/* System Diagram & Detail Inspector */}
        <Reveal>
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Left Diagram Node Matrix */}
            <div className="lg:col-span-7 bg-[#0f111a] border border-white/10 rounded-2xl p-6 md:p-8 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  SYSTEM COMPONENT MAP
                </span>
                <span className="text-[10px] font-mono text-cyan-400">Click Any Node to Inspect</span>
              </div>

              {/* Node Buttons Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {NODES.map((n) => (
                  <button
                    key={n.id}
                    onClick={() => setActiveNode(n)}
                    onMouseEnter={() => setActiveNode(n)}
                    className={`p-4 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between ${
                      activeNode.id === n.id
                        ? "bg-cyan-500/10 border-cyan-400 text-white shadow-lg shadow-cyan-500/10"
                        : "bg-white/5 border-white/5 text-zinc-400 hover:border-white/20 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="material-symbols-outlined text-cyan-400 text-xl">{n.icon}</span>
                      <span className="text-[9px] font-mono text-zinc-500 uppercase">{n.category.split(' ')[0]}</span>
                    </div>
                    <div className="font-bold text-xs text-white">{n.label}</div>
                  </button>
                ))}
              </div>

              {/* Interactive Pipeline Data Flow Selector */}
              <div className="pt-6 border-t border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                    EXECUTION PIPELINE FLOWS
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setActiveFlow("ingestion")}
                      className={`text-[10px] font-mono px-3 py-1 rounded-lg border transition-colors ${
                        activeFlow === "ingestion"
                          ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/40 font-bold"
                          : "bg-white/5 text-zinc-400 border-white/10 hover:text-white"
                      }`}
                    >
                      Document Ingestion
                    </button>

                    <button
                      onClick={() => setActiveFlow("rag")}
                      className={`text-[10px] font-mono px-3 py-1 rounded-lg border transition-colors ${
                        activeFlow === "rag"
                          ? "bg-purple-500/20 text-purple-300 border-purple-500/40 font-bold"
                          : "bg-white/5 text-zinc-400 border-white/10 hover:text-white"
                      }`}
                    >
                      RAG Query SSE
                    </button>

                    <button
                      onClick={() => setActiveFlow("auth")}
                      className={`text-[10px] font-mono px-3 py-1 rounded-lg border transition-colors ${
                        activeFlow === "auth"
                          ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40 font-bold"
                          : "bg-white/5 text-zinc-400 border-white/10 hover:text-white"
                      }`}
                    >
                      Auth & BYOK Security
                    </button>
                  </div>
                </div>

                {/* Step Pipeline List */}
                <div className="bg-black/60 border border-white/10 rounded-xl p-4 space-y-2">
                  {FLOWS[activeFlow].map((step, idx) => (
                    <div key={idx} className="text-xs font-mono text-zinc-300 flex items-start gap-2">
                      <span className="text-cyan-400">→</span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Node Inspector */}
            <div className="lg:col-span-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeNode.id}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="bg-[#0f111a] border border-cyan-500/30 rounded-2xl p-6 md:p-8 space-y-6 relative overflow-hidden"
                >
                  <div className="flex items-center gap-4 pb-4 border-b border-white/10">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${activeNode.color} flex items-center justify-center text-white shadow-md`}>
                      <span className="material-symbols-outlined text-2xl">{activeNode.icon}</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">
                        {activeNode.category}
                      </span>
                      <h3 className="text-2xl font-bold text-white">{activeNode.label}</h3>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                        Core Responsibilities:
                      </span>
                      <p className="text-xs text-zinc-200 font-light mt-1 leading-relaxed">
                        {activeNode.responsibilities}
                      </p>
                    </div>

                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                        Why It Exists in Damora AI:
                      </span>
                      <p className="text-xs text-zinc-200 font-light mt-1 leading-relaxed bg-emerald-500/5 border border-emerald-500/20 p-3 rounded-xl">
                        {activeNode.whyExists}
                      </p>
                    </div>

                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-semibold">
                        Architectural Tradeoffs:
                      </span>
                      <p className="text-xs text-zinc-300 font-light mt-1 leading-relaxed bg-amber-500/5 border border-amber-500/20 p-3 rounded-xl">
                        {activeNode.tradeoffs}
                      </p>
                    </div>

                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                        Technologies & Libraries:
                      </span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {activeNode.tech.map((t, i) => (
                          <span key={i} className="text-[10px] font-mono bg-white/5 border border-white/10 text-cyan-300 px-2.5 py-1 rounded-md">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
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
