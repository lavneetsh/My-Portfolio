import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UilExternalLinkAlt, UilGithub, UilEye } from '@iconscout/react-unicons';
import MovieSearch from '../../img/movie-search.jpg';
import Remine from '../../img/remine.jpg';
import Quiz from '../../img/quiz.jpg';
import BikeRental from '../../img/bike-rental.jpg';
import SchoolWebsite from '../../img/school-website.jpg';

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Movie Searcher',
      category: 'web',
      description: 'Real-time movie search application with detailed information and responsive design.',
      image: MovieSearch,
      link: 'https://movie-searcher-info.netlify.app/',
      tags: ['React', 'API', 'CSS3'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: 'Remine India',
      category: 'web',
      description: 'Corporate website with modern design and smooth animations.',
      image: Remine,
      link: 'https://remine-india-rushabh.netlify.app/',
      tags: ['React', 'Bootstrap'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      title: 'Quiz Application',
      category: 'app',
      description: 'Interactive quiz with timer and score tracking.',
      image: Quiz,
      link: 'https://lavneetsh.github.io/project-3_quiz-app/',
      tags: ['JavaScript', 'HTML5'],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      id: 4,
      title: 'Bike Rental Platform',
      category: 'fullstack',
      description: 'Full-stack platform with booking and payment integration.',
      image: BikeRental,
      link: 'https://bikerental-isa.netlify.app/',
      tags: ['React', 'Node.js', 'MongoDB'],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      id: 5,
      title: 'Password Generator',
      category: 'app',
      description: 'Secure password generator with customizable options.',
      image: SchoolWebsite,
      link: 'https://lavneetsh.github.io/project-4-Random-Password-Generator-app/',
      tags: ['JavaScript', 'Security'],
      gradient: 'from-indigo-500 to-purple-500',
    },
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'app', label: 'Applications' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="work" className="relative py-32 bg-gradient-to-b from-dark-800 to-dark-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-pink-500/10 border border-pink-500/20 rounded-full text-pink-300 text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Featured Work
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of projects showcasing my skills and passion for development
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${activeFilter === filter.id
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
                }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/30 transition-all backdrop-blur-sm"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-90 transition-opacity duration-300`} />

                  {/* Hover Actions */}
                  <AnimatePresence>
                    {hoveredProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="absolute inset-0 flex items-center justify-center gap-4 z-10"
                      >
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="p-4 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-all hover:scale-110"
                        >
                          <UilExternalLinkAlt size="24" className="text-white" />
                        </a>
                        <button className="p-4 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-all hover:scale-110">
                          <UilEye size="24" className="text-white" />
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity -z-10`} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a href="https://github.com/lavneetsh" target="_blank" rel="noreferrer">
            <button className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden hover:scale-105 transition-all">
              <span className="relative z-10 flex items-center gap-2">
                <UilGithub size="20" />
                View All on GitHub
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
