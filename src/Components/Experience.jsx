import React from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 bg-surface-container-low">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h2 className="text-5xl font-bold font-headline mb-16 tracking-tight">
            03. <span className="text-primary-container tracking-[0.2em] uppercase">Experience</span>
          </h2>
        </Reveal>

        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-card p-10 rounded-3xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-6xl">work</span>
            </div>
            <h3 className="text-3xl font-bold mb-2">Appic Softwares</h3>
            <p className="gradient-text font-mono text-xs uppercase tracking-widest mb-6">Full Stack Developer — Jaipur (Apr 2025 – Present)</p>
            <ul className="text-on-surface-variant leading-relaxed space-y-4 font-light text-sm">
              <li className="flex gap-3">
                <span className="text-primary-container mt-1">•</span>
                <span>Architecting **Locumize**, a high-scale SaaS marketplace; engineered modular backend systems, multi-role authentication, and secure onboarding workflows.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary-container mt-1">•</span>
                <span>Spearheaded financial integrations with **Stripe and QuickBooks**, orchestrating complex payment pipelines, automated invoicing, and payout systems.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary-container mt-1">•</span>
                <span>Implemented **WebSockets** for real-time state synchronization, building mission-critical scheduling, time-tracking, and document management systems.</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass-card p-10 rounded-3xl relative overflow-hidden group"
          >
            <h3 className="text-3xl font-bold mb-2 text-white/80">Ethnus</h3>
            <p className="gradient-text font-mono text-xs uppercase tracking-widest mb-6 uppercase">MERN Stack Intern  (May 2024 - July 2024)</p>
            <p className="text-on-surface-variant leading-relaxed">
              Collaborative development of enterprise-grade job portals using MERN stack with modern state management.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
