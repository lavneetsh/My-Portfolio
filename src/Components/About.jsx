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
              I am a Computer Science graduate experienced in building scalable SaaS and full-stack applications using the **MERN stack**.
              I have a strong foundation in system design, authentication, and real-time systems, along with cloud integrations like AWS and Stripe.
              I specialize in developing secure, high-performance platforms with multi-tenant architecture and complex workflows.
            </p>
            <div className="mt-8 flex gap-4">
              <div className="glass-card px-4 py-2 rounded-lg text-xs font-bold text-primary uppercase tracking-widest">React Developer</div>
              <div className="glass-card px-4 py-2 rounded-lg text-xs font-bold text-secondary uppercase tracking-widest">Full Stack Developer</div>
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
