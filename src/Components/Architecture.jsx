import React, { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const nodes = [
  {
    id: "user",
    label: "User",
    icon: "person",
    color: "from-slate-700 to-slate-600",
    border: "border-slate-500/40",
    desc: "Browser / Mobile Client",
  },
  {
    id: "nextjs",
    label: "Next.js 14",
    icon: "web",
    color: "from-blue-900 to-blue-800",
    border: "border-blue-500/30",
    desc: "SSR, App Router, RSC",
  },
  {
    id: "nestjs",
    label: "NestJS API",
    icon: "lan",
    color: "from-red-950 to-red-900",
    border: "border-red-500/30",
    desc: "REST · RBAC · Guards",
  },
  {
    id: "postgres",
    label: "PostgreSQL",
    icon: "database",
    color: "from-sky-950 to-sky-900",
    border: "border-sky-500/30",
    desc: "Primary Data Store",
  },
  {
    id: "redis",
    label: "Redis",
    icon: "memory",
    color: "from-red-950 to-red-900",
    border: "border-red-400/30",
    desc: "Cache · Sessions",
  },
  {
    id: "qdrant",
    label: "Qdrant",
    icon: "hub",
    color: "from-purple-950 to-purple-900",
    border: "border-purple-500/30",
    desc: "Vector DB · RAG Search",
  },
  {
    id: "minio",
    label: "MinIO",
    icon: "cloud_upload",
    color: "from-emerald-950 to-emerald-900",
    border: "border-emerald-500/30",
    desc: "Object Storage · OCR Docs",
  },
  {
    id: "gemini",
    label: "Gemini AI",
    icon: "auto_awesome",
    color: "from-amber-950 to-amber-900",
    border: "border-amber-500/30",
    desc: "LLM · Embeddings · BYOK",
  },
];

const highlights = [
  { icon: "lock", label: "BYOK Security", desc: "AES-256-CBC encrypted workspace keys" },
  { icon: "hub", label: "RAG Pipeline", desc: "Chunk → Embed → Store → Retrieve" },
  { icon: "manage_accounts", label: "Multi-Tenant RBAC", desc: "Owner · Admin · Member isolation" },
  { icon: "analytics", label: "Workspace Analytics", desc: "Per-workspace AI usage & quotas" },
  { icon: "search", label: "Semantic Search", desc: "Vector similarity over knowledge base" },
  { icon: "document_scanner", label: "OCR Processing", desc: "Extract text from PDFs & images" },
];

export default function Architecture() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="architecture" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <h2 className="text-5xl font-bold font-headline mb-4 tracking-tight text-center">
            05.{" "}
            <span className="gradient-text uppercase">System Design</span>
          </h2>
          <p className="text-on-surface-variant text-center mb-4 text-sm uppercase tracking-widest">
            Damora AI — Architecture Breakdown
          </p>
          <p className="text-on-surface-variant text-center mb-20 text-sm max-w-2xl mx-auto leading-relaxed opacity-70">
            A production-grade AI platform built with a microservices-inspired monorepo. 
            Each layer is independently scalable with clear separation of concerns.
          </p>
        </Reveal>

        {/* Architecture Diagram */}
        <Reveal>
          <div className="glass-card rounded-3xl p-10 md:p-14 border border-primary-container/10 mb-16 relative overflow-hidden">
            {/* Grid background */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0,240,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,1) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            <div className="relative z-10 flex flex-col items-center gap-0">
              {/* Stack visualization */}
              {[
                [nodes[0]],
                [nodes[1]],
                [nodes[2]],
                [nodes[3], nodes[4], nodes[5], nodes[6], nodes[7]],
              ].map((row, rowIdx) => (
                <div key={rowIdx} className="flex flex-col items-center w-full">
                  {/* Connector arrow going down */}
                  {rowIdx > 0 && (
                    <motion.div
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: rowIdx * 0.1 }}
                      className="w-px h-10 bg-gradient-to-b from-primary-container/60 to-primary-container/20 origin-top"
                    />
                  )}

                  {/* Row of nodes */}
                  <div className="flex flex-wrap justify-center gap-4">
                    {row.map((node, ni) => (
                      <motion.div
                        key={node.id}
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: rowIdx * 0.1 + ni * 0.05 }}
                        whileHover={{ scale: 1.07, y: -4 }}
                        onHoverStart={() => setHovered(node.id)}
                        onHoverEnd={() => setHovered(null)}
                        className={`relative bg-gradient-to-br ${node.color} border ${node.border} rounded-2xl px-6 py-5 flex flex-col items-center gap-2 cursor-default min-w-[140px] transition-all duration-200`}
                      >
                        <span className="material-symbols-outlined text-3xl text-primary-container">
                          {node.icon}
                        </span>
                        <span className="font-bold text-sm tracking-tight text-white">
                          {node.label}
                        </span>
                        <span className="text-[10px] text-on-surface-variant text-center leading-tight">
                          {node.desc}
                        </span>

                        {/* Glow on hover */}
                        {hovered === node.id && (
                          <motion.div
                            layoutId="node-glow"
                            className="absolute inset-0 rounded-2xl ring-2 ring-primary-container/50 pointer-events-none"
                          />
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Feature Highlights */}
        <Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ scale: 1.04 }}
                className="glass-card rounded-2xl p-7 flex items-start gap-4 group border border-white/5 hover:border-primary-container/20 transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-container/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-container/20 transition-colors">
                  <span className="material-symbols-outlined text-primary-container text-2xl">
                    {h.icon}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-sm tracking-tight mb-1">{h.label}</p>
                  <p className="text-[12px] text-on-surface-variant leading-relaxed">{h.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
