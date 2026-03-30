import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";
import { UilGithub, UilLinkedin, UilInstagram, UilArrowDown } from "@iconscout/react-unicons";

const Home = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900" id="Intro">

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-[100px] animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-purple/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent-pink/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center">

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-display font-bold mb-4">
              <span className="bg-gradient-to-r from-primary-400 via-accent-purple to-accent-pink bg-clip-text text-transparent animate-gradient">
                Lavneet Sharma
              </span>
            </h1>

            <div className="text-2xl md:text-4xl font-semibold text-gray-300 h-20 flex items-center justify-center">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  strings: [
                    "Full Stack Developer 🚀",
                    "Next.js Specialist ⚡",
                    "React Expert 💻",
                    "UI/UX Enthusiast 🎨",
                  ],
                }}
              />
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12"
          >
            Crafting exceptional digital experiences with modern web technologies.
            Passionate about building scalable applications that make a difference.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-6 justify-center mb-16"
          >
            <Link to="contact" smooth={true} spy={true}>
              <button className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/50">
                <span className="relative z-10">Let's Work Together</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </Link>

            <a href="https://github.com/lavneetsh" target="_blank" rel="noreferrer">
              <button className="px-8 py-4 border-2 border-primary-500 rounded-full font-semibold text-primary-400 hover:bg-primary-500/10 transition-all duration-300 hover:scale-105">
                View My Work
              </button>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-6 justify-center mb-12"
          >
            <a href="https://github.com/lavneetsh" target="_blank" rel="noreferrer" className="group">
              <div className="p-4 glass rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110 glow-blue">
                <UilGithub size="28" className="text-gray-300 group-hover:text-primary-400 transition-colors" />
              </div>
            </a>
            <a href="https://linkedin.com/in/lavneet-sharma-99312b202/" target="_blank" rel="noreferrer" className="group">
              <div className="p-4 glass rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110 glow-blue">
                <UilLinkedin size="28" className="text-gray-300 group-hover:text-primary-400 transition-colors" />
              </div>
            </a>
            <a href="https://instagram.com/lavneet_sharma_?igshid=YmJhNjkzNzY=" target="_blank" rel="noreferrer" className="group">
              <div className="p-4 glass rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110 glow-pink">
                <UilInstagram size="28" className="text-gray-300 group-hover:text-accent-pink transition-colors" />
              </div>
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <Link to="education" smooth={true} spy={true}>
              <div className="flex flex-col items-center cursor-pointer group">
                <span className="text-sm text-gray-500 mb-2 group-hover:text-primary-400 transition-colors">Scroll Down</span>
                <UilArrowDown size="24" className="text-primary-400 animate-bounce" />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
