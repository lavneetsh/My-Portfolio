import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center text-center px-6 relative overflow-hidden">
      
      {/* Floating Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <motion.div 
           animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
           className="w-96 h-96 bg-primary-container/10 blur-[120px] rounded-full absolute top-20 left-10"
        />
        <motion.div 
           animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
           className="w-96 h-96 bg-secondary-container/10 blur-[120px] rounded-full absolute bottom-20 right-10"
        />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 transition-transform duration-75">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-8xl font-bold font-headline leading-tight tracking-tighter"
        >
          BUILDING SCALABLE <br />
          <span className="gradient-text uppercase">Full Stack Solutions</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-8 text-on-surface-variant max-w-xl mx-auto text-lg md:text-xl font-light"
        >
          MERN Stack Developer building high-performance SaaS platforms, real-time systems & cloud-native architectures.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12"
        >
          <motion.a 
            href="#projects" 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-primary-container px-8 py-4 rounded-xl text-black font-bold uppercase tracking-widest text-sm inline-block shadow-primary-container/20 shadow-2xl"
          >
            View Projects
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
