import { motion, useScroll, useTransform } from "framer-motion";

const stats = [
  { value: "2+", label: "Years Building" },
  { value: "5+", label: "Projects Shipped" },
  { value: "10+", label: "APIs Integrated" },
  { value: "3", label: "User Roles in Damora" },
];

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 120]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden"
    >
      {/* Floating Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="w-96 h-96 bg-primary-container/10 blur-[120px] rounded-full absolute top-20 left-10"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="w-96 h-96 bg-secondary-container/10 blur-[120px] rounded-full absolute bottom-20 right-10"
        />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 w-full max-w-5xl mx-auto">
        {/* Currently Building Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-container/30 bg-primary-container/10 text-primary-container text-xs font-mono uppercase tracking-widest mb-10"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Currently Building · Damora AI — Enterprise Knowledge Platform
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-5xl md:text-8xl font-bold font-headline leading-tight tracking-tighter"
        >
          BUILDING SCALABLE <br />
          <span className="gradient-text uppercase">Full Stack Solutions</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.9 }}
          className="mt-8 text-on-surface-variant max-w-2xl mx-auto text-lg md:text-xl font-light"
        >
          Full Stack Developer specializing in high-performance SaaS platforms, 
          RAG pipelines, and cloud-native multi-tenant architectures. 
          Passionate about developer tooling and AI-driven products.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex flex-wrap gap-4 justify-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-primary-container px-8 py-4 rounded-xl text-black font-bold uppercase tracking-widest text-sm inline-block shadow-primary-container/20 shadow-2xl"
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="border border-primary-container/30 text-primary-container px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm inline-block hover:bg-primary-container/10 transition-colors"
          >
            Hire Me
          </motion.a>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((s, i) => (
            <div key={i} className="glass-card rounded-2xl p-6 flex flex-col items-center gap-1">
              <span className="text-4xl font-bold gradient-text font-headline">{s.value}</span>
              <span className="text-xs uppercase tracking-widest text-on-surface-variant font-light">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
