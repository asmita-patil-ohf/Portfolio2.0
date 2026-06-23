import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCode, FaLaptopCode, FaLightbulb } from 'react-icons/fa';

const stats = [
  { icon: <FaCode />, value: '5+', label: 'Projects' },
  { icon: <FaLaptopCode />, value: '10+', label: 'Technologies' },
  { icon: <FaLightbulb />, value: '100+', label: 'Problems Solved' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            About <span className="text-purple-500">Me</span>
          </h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto mb-12 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass p-8 glow-border"
          >
            <p className="text-gray-300 leading-relaxed mb-6">
              Hello! I'm <span className="text-purple-500 font-semibold">Asmita Patil</span>,
              a second-year Computer Engineering student with a deep passion for building
              scalable backend systems and exploring the frontiers of Artificial Intelligence.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              I thrive on solving complex problems and turning ideas into functional,
              efficient applications. Currently focusing on Node.js, Express, RESTful APIs,
              and diving into machine learning.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My goal is to continuously learn, contribute to meaningful projects, and
              eventually work on systems that make a real-world impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-4"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass p-6 text-center hover:shadow-glow transition-all duration-300"
              >
                <div className="text-purple-500 text-3xl mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
