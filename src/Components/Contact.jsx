import React from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <Reveal>
          <motion.h2
            whileInView={{ scale: 1.1 }}
            initial={{ scale: 1 }}
            className="text-6xl md:text-8xl font-bold font-headline mb-10 tracking-tighter"
          >
            CONTACT
          </motion.h2>
        </Reveal>

        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex flex-col md:flex-row items-stretch justify-center gap-8 md:gap-12"
          >
            <motion.div
              whileHover={{ y: -5 }}
              className="flex-1 glass-card p-10 rounded-3xl flex flex-col items-center justify-center gap-4 max-w-sm mx-auto md:mx-0"
            >
              <span className="material-symbols-outlined text-primary-container text-5xl">alternate_email</span>
              <div className="text-center">
                <p className="text-sm text-slate-500 font-mono uppercase tracking-widest mb-1">Email Me</p>
                <p className="text-lg md:text-xl font-medium tracking-tight break-all">lavneetsharma123@gmail.com</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="flex-1 glass-card p-10 rounded-3xl flex flex-col items-center justify-center gap-4 max-w-sm mx-auto md:mx-0"
            >
              <span className="material-symbols-outlined text-primary-container text-5xl">call</span>
              <div className="text-center">
                <p className="text-sm text-slate-500 font-mono uppercase tracking-widest mb-1">Call Me</p>
                <p className="text-2xl md:text-3xl font-bold tracking-tight text-primary-container">+91 73575 93544</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-16 flex justify-center items-center gap-3 text-on-surface-variant font-mono text-sm uppercase tracking-[0.3em]"
          >
            <span className="material-symbols-outlined text-sm text-primary-container">location_on</span>
            <p>Based in Jaipur, India</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
