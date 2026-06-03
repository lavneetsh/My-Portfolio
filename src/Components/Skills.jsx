import React from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

const skills = [
  // Core Languages
  { name: "TypeScript", icon: "terminal", category: "Language" },
  { name: "JavaScript", icon: "code", category: "Language" },
  // Frontend
  { name: "React / Next.js", icon: "integration_instructions", category: "Frontend" },
  // Backend
  { name: "Node.js / NestJS", icon: "lan", category: "Backend" },
  // Databases
  { name: "PostgreSQL", icon: "database", category: "Database" },
  { name: "MongoDB", icon: "storage", category: "Database" },
  { name: "Redis", icon: "memory", category: "Cache" },
  // AI/ML
  { name: "Qdrant (Vector DB)", icon: "hub", category: "AI/ML" },
  { name: "RAG Pipelines", icon: "psychology", category: "AI/ML" },
  { name: "Gemini AI / LLMs", icon: "auto_awesome", category: "AI/ML" },
  // Infra
  { name: "AWS S3 / MinIO", icon: "cloud", category: "Infra" },
  { name: "Docker", icon: "widgets", category: "Infra" },
  // Auth / Security
  { name: "Auth / RBAC / JWT", icon: "lock", category: "Security" },
  { name: "AES-256 Encryption", icon: "security", category: "Security" },
  // Payments
  { name: "Stripe Payments", icon: "payments", category: "Payments" },
  // DevOps
  { name: "GitHub Actions", icon: "merge", category: "DevOps" },
];

const CATEGORY_COLORS = {
  Language:  "text-yellow-400",
  Frontend:  "text-blue-400",
  Backend:   "text-green-400",
  Database:  "text-purple-400",
  Cache:     "text-red-400",
  "AI/ML":   "text-primary-container",
  Infra:     "text-sky-400",
  Security:  "text-orange-400",
  Payments:  "text-emerald-400",
  DevOps:    "text-pink-400",
};

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <h2 className="text-5xl font-bold font-headline mb-4 tracking-tight">
            02. <span className="text-secondary tracking-widest uppercase">Stack</span>
          </h2>
          <p className="text-on-surface-variant mb-16 text-sm uppercase tracking-widest">
            Technologies I build production systems with
          </p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.07, rotate: 1 }}
              className="glass-card p-8 rounded-2xl text-center flex flex-col items-center gap-3 cursor-pointer group"
            >
              <span
                className={`material-symbols-outlined text-4xl transition-transform group-hover:scale-110 ${
                  CATEGORY_COLORS[s.category] || "text-primary-container"
                }`}
              >
                {s.icon}
              </span>
              <span className="text-[10px] uppercase font-bold tracking-[0.15em] text-on-surface-variant leading-tight">
                {s.name}
              </span>
              <span
                className={`text-[9px] uppercase tracking-widest opacity-60 ${
                  CATEGORY_COLORS[s.category] || "text-primary-container"
                }`}
              >
                {s.category}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
