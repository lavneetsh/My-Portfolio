import React from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <h2 className="text-5xl font-bold font-headline mb-16 tracking-tight text-center">
            04. <span className="gradient-text uppercase">Projects</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-10">
          {[
            {
              title: "CareMagnus",
              icon: "hub",
              link: "https://caremagnus.com/",
              points: [
                "Architected a scalable **multi-tenant SaaS platform** with micro-frontend architecture, supporting complex hierarchical site management.",
                "Engineered high-security **TOTP-based MFA** (2FA) and backup recovery systems with automated session handling.",
                "Integrated **WebSockets**, **AWS S3 presigned uploads**, and dynamic **Stripe** payment pipelines for real-time care management."
              ],
              stack: ["React", "Redux Toolkit", "Node.js", "Socket.io", "AWS S3", "Stripe"]
            },
            {
              title: "YouTube Backend",
              icon: "database",
              points: [
                "Developed a high-performance **REST API ecosystem** featuring secure JWT authentication and optimized data pipelines.",
                "Leveraged **Mongoose aggregation frameworks** for advanced analytics and handled multi-part file processing via **Cloudinary**.",
                "Implemented secure media storage and automated metadata extraction workflows for scalable video streaming."
              ],
              stack: ["Node.js", "Express", "MongoDB", "Cloudinary", "Multer"]
            },
            {
              title: "Blog CMS",
              icon: "edit_note",
              link: "https://blog-website-delta-five.vercel.app/",
              points: [
                "Built a high-performance **Full-Stack CMS** with integrated post management, real-time Firestore synchronization, and secure Firebase authentication.",
                "Leveraged **Firebase Storage** for high-availability media management and optimized data retrieval via Redux Toolkit.",
                "Developed a highly responsive and performant UI using **Tailwind CSS**, ensuring a seamless content creation experience across all devices."
              ],
              stack: ["React", "Redux Toolkit", "Firebase", "Tailwind CSS"]
            }
          ].map((project, i) => (
            <motion.a
              key={i}
              href={project.link || "#"}
              target={project.link ? "_blank" : "_self"}
              rel={project.link ? "noopener noreferrer" : ""}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass-card p-10 rounded-3xl group cursor-pointer block"
            >
              <div className="w-16 h-16 rounded-2xl bg-surface-container-high flex items-center justify-center mb-8 group-hover:bg-primary-container/10 transition-colors">
                <span className="material-symbols-outlined text-3xl text-primary-container">{project.icon}</span>
              </div>
              <h3 className="text-3xl font-bold mb-4 tracking-tight">{project.title}</h3>

              <ul className="text-on-surface-variant text-sm leading-relaxed font-light mb-8 space-y-4">
                {project.points.map((pt, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-primary-container mt-1">•</span>
                    <span dangerouslySetInnerHTML={{ __html: pt.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') }} />
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.stack.map((tag, idx) => (
                  <span key={idx} className="text-[10px] font-mono uppercase tracking-widest text-slate-500 bg-white/5 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 text-primary-container text-xs uppercase font-bold tracking-widest">
                {project.link ? "Visit Live Project" : "System Overview"} <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
