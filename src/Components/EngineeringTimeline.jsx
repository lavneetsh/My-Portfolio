import React from 'react';
import Reveal from './Reveal';

const TIMELINE_STEPS = [
  {
    year: "2023",
    title: "CS Graduation & Fundamentals",
    sub: "Computer Science Degree",
    desc: "Graduated with strong foundations in Data Structures, Algorithms, Operating Systems, Database Management Systems, and Computer Networks.",
    icon: "school",
    tags: ["DSA", "OOP", "DBMS", "OS"]
  },
  {
    year: "Late 2023",
    title: "Full Stack MERN Developer",
    sub: "Production Web Applications",
    desc: "Built performant REST APIs, authentication pipelines, state management systems, and responsive frontends using React, Node.js, Express, and MongoDB.",
    icon: "code",
    tags: ["React", "Node.js", "Express", "MongoDB", "Redux"]
  },
  {
    year: "2025",
    title: "Enterprise SaaS Engineering",
    sub: "CareMagnus Platform",
    desc: "Architected multi-tenant SaaS features, TOTP-based 2FA, WebSocket updates, AWS S3 presigned file pipelines, and Stripe payment processing.",
    icon: "business",
    tags: ["CareMagnus", "Multi-Tenant", "WebSockets", "AWS S3", "Stripe"]
  },
  {
    year: "2025 - Present",
    title: "Enterprise AI Systems Builder",
    sub: "Damora AI Flagship Platform",
    desc: "Designed and built Damora AI monorepo with NestJS, Next.js, Qdrant vector DB, BullMQ async OCR queues, BYOK AES encryption, and SSE streaming.",
    icon: "hub",
    tags: ["NestJS", "Qdrant", "RAG Pipelines", "BullMQ", "BYOK Security"]
  },
  {
    year: "Present",
    title: "Specializing in AI Engineering",
    sub: "Agentic Systems & AI Architecture",
    desc: "Deep-diving into Agentic AI workflows (LangGraph, Model Context Protocol MCP), distributed vector search, and scalable backend microservices.",
    icon: "auto_awesome",
    tags: ["Agentic AI", "MCP", "LangGraph", "Distributed Systems"]
  }
];

export default function EngineeringTimeline() {
  return (
    <section id="timeline" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Header */}
        <Reveal>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-mono uppercase tracking-widest">
              <span className="material-symbols-outlined text-sm">timeline</span>
              ENGINEERING EVOLUTION
            </div>

            <h2 className="text-4xl md:text-5xl font-bold font-headline tracking-tight text-white">
              Career & Technical <span className="gradient-text">Growth Timeline</span>
            </h2>

            <p className="text-zinc-400 text-sm max-w-xl font-light">
              Continuous technical evolution from core computer science fundamentals to building high-scale enterprise SaaS and AI systems.
            </p>
          </div>
        </Reveal>

        {/* Vertical Timeline Tree */}
        <div className="relative border-l border-white/10 ml-4 md:ml-32 space-y-12 pl-6 md:pl-10">
          {TIMELINE_STEPS.map((step, idx) => (
            <Reveal key={idx}>
              <div className="relative group">
                {/* Bullet Node Icon */}
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-8 h-8 rounded-full bg-[#090a0f] border-2 border-cyan-400 flex items-center justify-center text-cyan-400 shadow-md shadow-cyan-400/20 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-sm">{step.icon}</span>
                </div>

                {/* Left Year Label on Desktop */}
                <div className="hidden md:block absolute -left-44 top-2 text-right w-28 text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
                  {step.year}
                </div>

                {/* Content Box */}
                <div className="bg-[#0f111a] border border-white/10 hover:border-cyan-500/30 rounded-2xl p-6 space-y-3 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <span className="md:hidden text-xs font-mono text-cyan-400 font-bold mr-2">
                        [{step.year}]
                      </span>
                      <h3 className="text-lg font-bold text-white inline-block">{step.title}</h3>
                    </div>
                    <span className="text-xs font-mono text-zinc-400 bg-white/5 border border-white/10 px-2.5 py-0.5 rounded">
                      {step.sub}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed font-light">
                    {step.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {step.tags.map((t, i) => (
                      <span key={i} className="text-[10px] font-mono bg-white/5 text-zinc-300 px-2 py-0.5 rounded border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
