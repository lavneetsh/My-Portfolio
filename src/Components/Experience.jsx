import React from 'react';
import Reveal from './Reveal';

const EXPERIENCES = [
  {
    role: "Lead Architect & AI Engineer",
    company: "Damora AI (Enterprise Knowledge Engine)",
    period: "2025 - Present",
    type: "Production Platform",
    impacts: [
      "Designed & shipped an **Enterprise AI Knowledge Platform** using NestJS, Next.js, Qdrant vector database, and BullMQ async queues.",
      "Engineered **Async OCR Document Ingestion** via Tesseract & Redis workers, eliminating HTTP gateway timeouts on multi-page PDFs.",
      "Implemented **Zero-Trust AES-256 BYOK Encryption** and multi-tenant workspace isolation across relational (PostgreSQL) and vector (Qdrant) data stores.",
      "Delivered **Sub-200ms TTFT SSE Token Streaming** directly to Next.js markdown renderers with grounded source page citations."
    ],
    tech: ["NestJS", "Next.js", "Qdrant", "Redis", "BullMQ", "PostgreSQL", "Gemini AI"]
  },
  {
    role: "Full Stack Software Engineer",
    company: "CareMagnus (Enterprise SaaS Platform)",
    period: "2025 - 2026",
    type: "Production Experience",
    impacts: [
      "Architected multi-tenant hierarchical organization scoping supporting multi-branch healthcare management.",
      "Engineered **TOTP 2FA Authentication** with automated QR generation and single-use emergency recovery keys.",
      "Built **AWS S3 Presigned Upload Pipeline**, reducing server bandwidth load by 70% during multi-megabyte media uploads.",
      "Integrated real-time WebSocket state synchronization for patient alerts and Stripe subscription payment processing."
    ],
    tech: ["React", "Redux Toolkit", "Node.js", "Express", "Socket.io", "AWS S3", "Stripe"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto space-y-12">
        <Reveal>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono uppercase tracking-widest">
              <span className="material-symbols-outlined text-sm">badge</span>
              PRODUCTION ENGINEERING EXPERIENCE
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-headline text-white">
              Engineering Impact & Track Record
            </h2>
          </div>
        </Reveal>

        <div className="space-y-8">
          {EXPERIENCES.map((exp, idx) => (
            <Reveal key={idx}>
              <div className="bg-[#0f111a] border border-white/10 hover:border-cyan-500/30 rounded-2xl p-6 md:p-8 space-y-6 transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
                  <div>
                    <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">{exp.type}</span>
                    <h3 className="text-2xl font-bold text-white mt-1">{exp.role}</h3>
                    <div className="text-sm text-zinc-300 font-medium">{exp.company}</div>
                  </div>
                  <span className="text-xs font-mono text-zinc-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                    {exp.period}
                  </span>
                </div>

                <div className="space-y-3">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                    Key Technical Contributions & Scale Impact:
                  </span>
                  <ul className="space-y-3 text-xs text-zinc-300 font-light">
                    {exp.impacts.map((imp, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-cyan-400 font-bold mt-0.5">•</span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: imp.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
                          }}
                          className="leading-relaxed"
                        />
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                  {exp.tech.map((t, i) => (
                    <span key={i} className="text-[10px] font-mono bg-white/5 border border-white/10 text-cyan-300 px-2.5 py-1 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
