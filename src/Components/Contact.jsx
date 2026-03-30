import React from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 text-center relative overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10">
        <Reveal>
          <motion.h2
            whileInView={{ scale: 1.1 }}
            initial={{ scale: 1 }}
            className="text-6xl md:text-8xl font-bold font-headline mb-10 tracking-tighter"
          >
            CONTACT
          </motion.h2>
        </Reveal>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8 mb-16"
        >
          <motion.div
            whileHover={{ y: -5 }}
            className="glass-card p-8 rounded-3xl inline-flex flex-col items-center gap-2 mx-auto"
          >
            <span className="material-symbols-outlined text-primary-container text-4xl mb-2">alternate_email</span>
            <p className="text-2xl font-medium tracking-tight">lavneetsharma123@gmail.com</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="glass-card p-8 rounded-3xl inline-flex flex-col items-center gap-2 mx-auto"
          >
            <span className="material-symbols-outlined text-primary-container text-4xl mb-2">call</span>
            <p className="text-2xl font-medium tracking-tight">+91 73575 93544</p>
          </motion.div>

          <div className="flex justify-center gap-10 text-on-surface-variant font-mono text-sm uppercase tracking-widest">
            <p>Location: Jaipur, India</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
