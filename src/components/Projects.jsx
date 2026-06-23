import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Portfolio Website',
    description:
      'A modern, responsive developer portfolio built with React, Tailwind CSS, and Framer Motion featuring glassmorphism design.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    github: 'https://github.com/asmita-patil-ohf/my_portfolio',
    demo: '#',
    category: 'Web Development',
  },
  {
    title: 'Notes API',
    description:
      'A RESTful Notes API built with Node.js and Express.js implementing full CRUD operations for efficient note management.',
    tags: ['Node.js', 'Express.js', 'REST API'],
    github: 'https://github.com/asmita-patil-ohf/notes_api',
    demo: '#',
    category: 'Backend',
  },
  {
    title: 'GitHub User Finder',
    description:
      'A web app that fetches and displays GitHub user details including profile, followers, and repositories using the GitHub API.',
    tags: ['HTML', 'CSS', 'JavaScript', 'GitHub API'],
    github: 'https://github.com/asmita-patil-ohf/github_user_finder',
    demo: '#',
    category: 'Web Development',
  },
];

const categories = ['All', 'Backend', 'AI/ML', 'Web Development'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            My <span className="text-purple-500">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto mb-8 rounded-full" />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-purple-500 text-white shadow-glow'
                  : 'glass text-gray-300 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-6 hover:shadow-glow transition-all duration-300 flex flex-col"
            >
              <div className="h-40 bg-gradient-to-br from-purple-500/20 to-purple-900/20 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-4xl text-purple-500">📁</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-purple-500 transition"
                >
                  <FaGithub /> Code
                </a>
                {project.demo !== '#' && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-purple-500 transition"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
