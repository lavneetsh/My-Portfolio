import React from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

const PROJECTS = [
  {
    title: "Damora AI",
    category: "Enterprise AI Knowledge Platform",
    featured: true,
    icon: "hub",
    link: "https://damora-ai-web.vercel.app/",
    github: "https://github.com/lavneetsh",
    badge: "Flagship Production System",
    description: "Multi-tenant SaaS AI platform featuring RAG pipelines, async OCR document ingestion via Redis BullMQ, Qdrant vector search, BYOK AES-256 encryption, and SSE token streaming.",
    points: [
      "Built **RAG pipeline** with Qdrant vector DB, MinIO storage, and Gemini AI for workspace-scoped document Q&A.",
      "Engineered **Async OCR ingestion queues** using Redis BullMQ and Tesseract to handle 50+ page PDFs without HTTP timeouts.",
      "Implemented **BYOK (Bring Your Own Key)** with AES-256-CBC encryption and row-level multi-tenant RBAC isolation."
    ],
    metrics: [
      { label: "Query Latency", value: "287ms" },
      { label: "Vector Search", value: "Qdrant" },
      { label: "Async Queue", value: "BullMQ" },
      { label: "Deployment", value: "Live" }
    ],
    stack: ["Next.js 14", "NestJS", "PostgreSQL", "Redis", "Qdrant DB", "BullMQ", "Gemini AI", "TypeScript"]
  },
  {
    title: "CareMagnus",
    category: "Enterprise Multi-Tenant SaaS",
    icon: "business",
    link: "https://caremagnus.com/",
    description: "Production multi-tenant SaaS platform for healthcare management with hierarchical organization scoping, TOTP 2FA security, AWS S3 presigned upload pipelines, and Stripe payments.",
    points: [
      "Architected multi-tenant site isolation with custom role hierarchies and permission guards.",
      "Engineered high-security **TOTP multi-factor authentication (2FA)** and single-use recovery code pipelines.",
      "Integrated **WebSockets** for live patient alerts and **AWS S3 presigned URLs** to reduce server memory load."
    ],
    stack: ["React", "Redux Toolkit", "Node.js", "Socket.io", "AWS S3", "Stripe", "Express"]
  },
  {
    title: "Full-Stack Blog CMS",
    category: "Content Engine",
    icon: "edit_note",
    link: "https://blog-website-delta-five.vercel.app/",
    description: "High-performance Full-Stack CMS featuring real-time Firebase synchronization, rich text post editor, client state caching, and responsive UI design.",
    points: [
      "Leveraged **Firebase Firestore** real-time listeners for instant post updates across clients.",
      "Implemented **Redux Toolkit** state slice caching for rapid route navigation and optimistic UI updates.",
      "Styled with **Tailwind CSS** for a clean, responsive content management experience."
    ],
    stack: ["React", "Redux Toolkit", "Firebase Firestore", "Firebase Storage", "Tailwind CSS"]
  }
];

export default function Projects() {
  return (
    <section id="other-projects" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        <Reveal>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono uppercase tracking-widest">
              DEPLOYED PRODUCTION SYSTEMS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-headline text-white">
              Featured <span className="gradient-text">Production Projects</span>
            </h2>
            <p className="text-zinc-400 text-sm max-w-xl font-light">
              Real-world deployed web applications & platforms that demonstrate full-stack engineering capability and system architecture.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {PROJECTS.map((p, idx) => (
            <Reveal key={idx}>
              <motion.div
                whileHover={{ y: -6 }}
                className={`bg-[#0f111a] border rounded-2xl p-6 flex flex-col justify-between h-full space-y-6 transition-all duration-200 ${
                  p.featured
                    ? "border-cyan-500/40 shadow-xl shadow-cyan-500/5 bg-gradient-to-b from-[#111524] to-[#0f111a]"
                    : "border-white/10 hover:border-cyan-500/30"
                }`}
              >
                <div className="space-y-4">
                  {/* Badge & Category */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <span className="material-symbols-outlined text-xl">{p.icon}</span>
                    </div>
                    <span className="text-[10px] font-mono text-cyan-400 uppercase bg-cyan-500/10 border border-cyan-500/20 px-2 py-1 rounded">
                      {p.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{p.title}</h3>
                    <p className="text-xs text-zinc-300 leading-relaxed font-light">{p.description}</p>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 text-xs text-zinc-300 font-light">
                    {p.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-cyan-400 font-bold">•</span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: pt.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
                          }}
                        />
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4 pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-1.5">
                    {p.stack.map((s, i) => (
                      <span key={i} className="text-[10px] font-mono bg-white/5 border border-white/10 text-zinc-300 px-2 py-0.5 rounded">
                        {s}
                      </span>
                    ))}
                  </div>

                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-xs uppercase tracking-widest transition-transform hover:scale-105 inline-flex items-center gap-2 shadow-lg shadow-cyan-400/20"
                    >
                      <span>Visit Live System</span>
                      <span className="material-symbols-outlined text-sm">open_in_new</span>
                    </a>
                  )}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
