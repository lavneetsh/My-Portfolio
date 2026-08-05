import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DEMO_STEPS = [
  {
    id: 1,
    title: "1. Authentication & Tenant Workspace",
    sub: "JWT Session Validation & Multi-Tenant Context",
    duration: "0:05",
    icon: "lock",
    color: "from-blue-500 to-indigo-600",
    codeSnippet: `POST /api/v1/auth/login
Header: Authorization: Bearer <jwt_token>
Tenant Context: workspace_id="ws_damora_ent_99"
Role: "WORKSPACE_ADMIN"`,
    details: [
      "Secures endpoints using Passport JWT guards.",
      "Injects tenant context into request scope for row-level database isolation.",
      "Validates AES-256 encrypted BYOK keys."
    ]
  },
  {
    id: 2,
    title: "2. Document Ingestion & Storage",
    sub: "Multi-part Upload to S3-Compatible MinIO Storage",
    duration: "0:12",
    icon: "cloud_upload",
    color: "from-emerald-500 to-teal-600",
    codeSnippet: `POST /api/v1/documents/upload
File: "Enterprise_SLA_Architecture_2026.pdf" (14.2 MB)
Storage: minio://damora-vault/docs/ws_99/doc_441.pdf
Status: 202 Accepted (Enqueued)`,
    details: [
      "Streamed directly to private S3 bucket without loading full file into API RAM.",
      "Generates SHA-256 hash to prevent duplicate document ingestion.",
      "Dispatches ingestion job payload to BullMQ queue."
    ]
  },
  {
    id: 3,
    title: "3. Async Queue & OCR Extraction",
    sub: "BullMQ Distributed Worker & Tesseract Pipeline",
    duration: "0:22",
    icon: "memory",
    color: "from-amber-500 to-orange-600",
    codeSnippet: `BullMQ Worker [Worker_#3]:
Job ID: job_ingest_88412
Extracting text via pdf-parse & Tesseract OCR...
Extracted 42 pages, 18,450 words in 1.42s.`,
    details: [
      "Non-blocking background worker processes PDF pages concurrently.",
      "Extracts structured text, tables, and OCR fallback for scanned images.",
      "Automatic 3x exponential backoff retries on failure."
    ]
  },
  {
    id: 4,
    title: "4. Recursive Text Chunking & Embedding",
    sub: "Token-Aware Splitting & Gemini Embedding Models",
    duration: "0:35",
    icon: "hub",
    color: "from-purple-500 to-pink-600",
    codeSnippet: `Chunker Config: size=500 tokens, overlap=50 tokens
Generated 48 document chunks.
Requesting Embeddings: Gemini text-embedding-004
Dimensions: 768 float32 vectors.`,
    details: [
      "Splits content recursively respecting heading structures and code blocks.",
      "Batches text vectors into Gemini API with rate-limit throttling.",
      "Attaches rich metadata (page numbers, section headers, tenant_id)."
    ]
  },
  {
    id: 5,
    title: "5. Vector Indexing in Qdrant",
    sub: "HNSW Payload Indexing with Metadata Filters",
    duration: "0:45",
    icon: "database",
    color: "from-cyan-500 to-blue-600",
    codeSnippet: `Qdrant Client: upsertPoints()
Collection: "workspace_vectors"
Payload: { tenant_id: "ws_99", doc_id: "doc_441", text: "..." }
Index Status: Synced in 34ms.`,
    details: [
      "Indexes 768-dim vectors using HNSW cosine similarity search.",
      "Enforces strict payload filtering: filter = { tenant_id == 'ws_99' }.",
      "Ensures cross-tenant vector isolation."
    ]
  },
  {
    id: 6,
    title: "6. Semantic RAG Query & SSE Streaming",
    sub: "Hybrid Vector Search & Gemini 1.5 SSE Stream",
    duration: "1:00",
    icon: "stream",
    color: "from-cyan-400 to-indigo-500",
    codeSnippet: `User Query: "What is the SLA uptime guarantee and vector retention policy?"
Qdrant Vector Retrieval: 4 relevant chunks (Score > 0.84)
LLM Context Assembly → Gemini 1.5 Pro
Server-Sent Events (SSE) streaming token output...`,
    details: [
      "Sub-250ms vector retrieval returning top-k citations.",
      "Assembles grounded prompt context preventing LLM hallucinations.",
      "Streams markdown output token-by-token with exact page references."
    ]
  }
];

export default function ProjectDemoModal({ isOpen, onClose }) {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    let interval = null;
    if (isOpen && isPlaying) {
      interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % DEMO_STEPS.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isOpen, isPlaying]);

  if (!isOpen) return null;

  const step = DEMO_STEPS[activeStep];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-[#0d0f17] border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden text-zinc-100 flex flex-col max-h-[90vh]"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#090a10]">
            <div className="flex items-center gap-3">
              <span className="flex h-3 w-3 rounded-full bg-emerald-400 animate-pulse" />
              <h3 className="font-bold text-sm md:text-base tracking-tight text-white flex items-center gap-2">
                Damora AI — 60-Second RAG Architecture Demo
              </h3>
              <span className="text-[10px] font-mono uppercase bg-cyan-500/10 text-cyan-400 px-2 py-0.5 rounded border border-cyan-500/20">
                Production Pipeline
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="text-xs font-mono px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-sm">
                  {isPlaying ? "pause" : "play_arrow"}
                </span>
                {isPlaying ? "Pause Auto-play" : "Auto-play"}
              </button>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined text-base">close</span>
              </button>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 md:p-8 overflow-y-auto space-y-6 flex-1">
            {/* Step Navigation Pills */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
              {DEMO_STEPS.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => {
                    setActiveStep(idx);
                    setIsPlaying(false);
                  }}
                  className={`p-2.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                    activeStep === idx
                      ? "border-cyan-400 bg-cyan-500/10 shadow-lg shadow-cyan-500/10"
                      : "border-white/5 bg-white/5 opacity-60 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 mb-1">
                    <span>STEP 0{s.id}</span>
                    <span>{s.duration}</span>
                  </div>
                  <div className="text-xs font-bold truncate text-white">{s.title.split('.')[1]}</div>
                </button>
              ))}
            </div>

            {/* Active Step Visualizer Card */}
            <div className="grid md:grid-cols-12 gap-6 bg-[#111422] border border-white/10 rounded-2xl p-6 relative overflow-hidden">
              {/* Left Column: Flow & Details */}
              <div className="md:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-md`}>
                    <span className="material-symbols-outlined text-xl">{step.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-white">{step.title}</h4>
                    <p className="text-xs text-cyan-400 font-mono">{step.sub}</p>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                    Engine Action & Responsibilities:
                  </span>
                  <ul className="space-y-2 text-xs text-zinc-300">
                    {step.details.map((d, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-cyan-400 font-bold">•</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column: Code & Log Terminal */}
              <div className="md:col-span-5 flex flex-col">
                <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 bg-black/60 px-3 py-1.5 rounded-t-lg border-t border-x border-white/10">
                  <span>TERMINAL LOG STREAM</span>
                  <span className="text-emerald-400">STATUS 200 OK</span>
                </div>
                <div className="bg-black/80 border border-white/10 rounded-b-lg p-3 font-mono text-[11px] text-emerald-400 leading-relaxed overflow-x-auto flex-1">
                  <pre className="whitespace-pre-wrap">{step.codeSnippet}</pre>
                </div>
              </div>
            </div>

            {/* Simulated Workflow Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono text-zinc-400">
                <span>RAG INGESTION & QUERY TIMELINE</span>
                <span>STEP {activeStep + 1} OF {DEMO_STEPS.length}</span>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: `${((activeStep + 1) / DEMO_STEPS.length) * 100}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="px-6 py-4 border-t border-white/10 bg-[#090a10] flex items-center justify-between">
            <button
              onClick={() => {
                setActiveStep((prev) => (prev > 0 ? prev - 1 : DEMO_STEPS.length - 1));
                setIsPlaying(false);
              }}
              className="px-4 py-2 rounded-xl text-xs font-semibold border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
            >
              ← Previous Step
            </button>

            <span className="text-xs text-zinc-400 hidden md:inline">
              Press Pause or Click Any Step to Inspect Implementation Details
            </span>

            <button
              onClick={() => {
                setActiveStep((prev) => (prev + 1) % DEMO_STEPS.length);
                setIsPlaying(false);
              }}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-400 text-black font-bold hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-400/20"
            >
              Next Step →
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
