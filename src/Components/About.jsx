import React from 'react';
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import profileImg from "../assets/Profile pic.png";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-[#1c1b1b] relative overflow-hidden">
      <Reveal>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-headline tracking-tight">
              ABOUT <span className="gradient-text">ME</span>
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed font-light">
              Full Stack Developer with a CS background, focused on building production-grade 
              SaaS platforms and AI-powered applications. Currently building{" "}
              <span className="text-white font-medium">Damora AI</span> — a multi-tenant 
              knowledge management platform with RAG pipelines, vector search, and BYOK security.
            </p>
            <p className="text-on-surface-variant text-lg leading-relaxed font-light mt-4">
              I specialize in{" "}
              <span className="text-white font-medium">Next.js, NestJS, TypeScript</span>, 
              distributed systems, LLM integrations, and secure multi-tenant architectures. 
              I care deeply about clean code, developer experience, and shipping things that scale.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="glass-card px-4 py-2 rounded-lg text-xs font-bold text-primary uppercase tracking-widest">AI / LLM</div>
              <div className="glass-card px-4 py-2 rounded-lg text-xs font-bold text-secondary uppercase tracking-widest">Full Stack</div>
              <div className="glass-card px-4 py-2 rounded-lg text-xs font-bold text-primary-container uppercase tracking-widest">SaaS Builder</div>
            </div>
          </div>

          <motion.div
            whileHover={{ rotate: 5, scale: 1.05 }}
            className="w-64 h-64 glass-card rounded-3xl relative overflow-hidden group flex items-center justify-center border-primary-container/20 shadow-primary-container/10 shadow-2xl"
          >
            <img
              src={profileImg}
              alt="Lavneet Sharma"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-container/10 to-transparent pointer-events-none"></div>
          </motion.div>
        </div>
      </Reveal>
    </section>
  );
}
