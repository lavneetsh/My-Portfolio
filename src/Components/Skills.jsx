import React from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

const skills = [
  { name: "JavaScript", icon: "code" },
  { name: "TypeScript", icon: "terminal" },
  { name: "React/Next", icon: "integration_instructions" },
  { name: "Node.js", icon: "lan" },
  { name: "MongoDB", icon: "database" },
  { name: "AWS S3", icon: "cloud" },
  { name: "Payments", icon: "payments" },
  { name: "Auth/JWT", icon: "lock" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal>
            <h2 className="text-5xl font-bold font-headline mb-16 tracking-tight">
                02. <span className="text-secondary tracking-widest uppercase">Stack</span>
            </h2>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((s, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.1, rotate: 1 }}
              className="glass-card p-10 rounded-2xl text-center flex flex-col items-center gap-4 cursor-pointer group"
            >
              <span className="material-symbols-outlined text-4xl text-primary-container transition-transform group-hover:scale-110">
                {s.icon}
              </span>
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-on-surface-variant">
                {s.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
