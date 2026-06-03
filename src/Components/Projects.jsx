import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from './Reveal';

const FILTERS = ["All", "SaaS", "AI/ML", "Backend", "CMS"];

const projects = [
  {
    title: "Damora AI",
    category: "AI/ML",
    tags: ["SaaS", "AI/ML"],
    featured: true,
    icon: "hub",
    link: null,
    github: null,
    badge: "Featured Project",
    categoryBadges: ["Enterprise AI", "Full Stack", "SaaS"],
    description:
      "Multi-tenant AI knowledge management platform with RAG pipelines, semantic search, OCR, BYOK security, role-based access control, and workspace analytics.",
    points: [
      "Built **RAG pipeline** with Qdrant vector DB, MinIO storage, and Gemini AI for workspace-scoped semantic search and document Q&A.",
      "Implemented **BYOK (Bring Your Own Key)** with AES-256-CBC encryption, supporting Gemini, OpenAI, and Anthropic Claude.",
      "Designed **Multi-Tenant RBAC** — Owner, Admin, Member roles with workspace-isolated data, analytics, and AI quotas.",
    ],
    metrics: [
      { label: "User Roles", value: "3" },
      { label: "Multi-Tenant", value: "✓" },
      { label: "APIs", value: "10+" },
      { label: "Infra Services", value: "6+" },
    ],
    stack: ["Next.js", "NestJS", "PostgreSQL", "Redis", "Qdrant", "MinIO", "Gemini AI", "TypeScript"],
  },
  {
    title: "CareMagnus",
    category: "SaaS",
    tags: ["SaaS"],
    icon: "hub",
    link: "https://caremagnus.com/",
    points: [
      "Architected a scalable **multi-tenant SaaS platform** with micro-frontend architecture, supporting complex hierarchical site management.",
      "Engineered high-security **TOTP-based MFA** (2FA) and backup recovery systems with automated session handling.",
      "Integrated **WebSockets**, **AWS S3 presigned uploads**, and dynamic **Stripe** payment pipelines for real-time care management.",
    ],
    stack: ["React", "Redux Toolkit", "Node.js", "Socket.io", "AWS S3", "Stripe"],
  },
  {
    title: "YouTube Clone Backend",
    category: "Backend",
    tags: ["Backend"],
    icon: "database",
    points: [
      "Developed a high-performance **REST API ecosystem** featuring secure JWT authentication and optimized data pipelines.",
      "Leveraged **Mongoose aggregation frameworks** for advanced analytics and handled multi-part file processing via **Cloudinary**.",
      "Implemented secure media storage and automated metadata extraction workflows for scalable video streaming.",
    ],
    stack: ["Node.js", "Express", "MongoDB", "Cloudinary", "Multer"],
  },
  {
    title: "Blog CMS",
    category: "CMS",
    tags: ["CMS"],
    icon: "edit_note",
    link: "https://blog-website-delta-five.vercel.app/",
    points: [
      "Built a high-performance **Full-Stack CMS** with integrated post management, real-time Firestore synchronization, and secure Firebase authentication.",
      "Leveraged **Firebase Storage** for high-availability media management and optimized data retrieval via Redux Toolkit.",
      "Developed a highly responsive and performant UI using **Tailwind CSS**, ensuring a seamless content creation experience across all devices.",
    ],
    stack: ["React", "Redux Toolkit", "Firebase", "Tailwind CSS"],
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const visible =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.tags?.includes(activeFilter));

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <h2 className="text-5xl font-bold font-headline mb-4 tracking-tight text-center">
            04. <span className="gradient-text uppercase">Projects</span>
          </h2>
          <p className="text-on-surface-variant text-center mb-12 text-sm uppercase tracking-widest">
            Things I've shipped that solve real problems
          </p>
        </Reveal>

        {/* Filter Chips */}
        <Reveal>
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2 rounded-full text-xs font-mono uppercase tracking-widest border transition-all duration-200 ${
                  activeFilter === f
                    ? "bg-primary-container text-black border-primary-container shadow-primary-container/20 shadow-lg"
                    : "border-white/10 text-on-surface-variant hover:border-primary-container/40 hover:text-primary-container"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-10"
          >
            {visible.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ scale: 1.03, y: -6 }}
                className={`glass-card p-10 rounded-3xl group cursor-pointer relative overflow-hidden ${
                  project.featured
                    ? "md:col-span-2 border border-primary-container/20 shadow-primary-container/10 shadow-xl"
                    : ""
                }`}
                onClick={() => project.link && window.open(project.link, "_blank")}
              >
                {/* Featured shimmer border */}
                {project.featured && (
                  <div className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-br from-primary-container/5 via-transparent to-secondary-container/5" />
                )}

                {/* Badge row */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  {project.badge && (
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest bg-primary-container text-black font-bold">
                      ⭐ {project.badge}
                    </span>
                  )}
                  {(project.categoryBadges || [project.category]).map((b, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest border border-primary-container/30 text-primary-container"
                    >
                      {b}
                    </span>
                  ))}
                </div>

                {/* Icon + Title */}
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-surface-container-high flex items-center justify-center group-hover:bg-primary-container/10 transition-colors flex-shrink-0">
                    <span className="material-symbols-outlined text-3xl text-primary-container">
                      {project.icon}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold tracking-tight">{project.title}</h3>
                </div>

                {project.description && (
                  <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>
                )}

                {/* Metrics for featured */}
                {project.metrics && (
                  <div className="grid grid-cols-4 gap-4 mb-8">
                    {project.metrics.map((m, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl border border-primary-container/15 bg-primary-container/5 p-4 text-center"
                      >
                        <div className="text-2xl font-bold gradient-text font-headline">{m.value}</div>
                        <div className="text-[10px] uppercase tracking-widest text-on-surface-variant mt-1">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Bullet Points */}
                <ul className="text-on-surface-variant text-sm leading-relaxed font-light mb-8 space-y-4">
                  {project.points.map((pt, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-primary-container mt-1">•</span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: pt.replace(
                            /\*\*(.*?)\*\*/g,
                            '<strong class="text-white">$1</strong>'
                          ),
                        }}
                      />
                    </li>
                  ))}
                </ul>

                {/* Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.stack.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono uppercase tracking-widest text-slate-500 bg-white/5 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 text-primary-container text-xs uppercase font-bold tracking-widest">
                  {project.link ? "Visit Live Project" : "System Overview"}
                  <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
