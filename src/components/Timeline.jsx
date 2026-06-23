import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGraduationCap, FaTrophy, FaCertificate, FaCode } from 'react-icons/fa';

const timelineData = [
  {
    year: '2024',
    title: 'Started B.E. in Computer Engineering',
    description: 'Began my journey in Computer Engineering, focusing on software development and AI.',
    icon: <FaGraduationCap />,
  },
  {
    year: '2024',
    title: 'First GitHub Repository',
    description: 'Created my first open-source project and started contributing to the developer community.',
    icon: <FaCode />,
  },
  {
    year: '2025',
    title: 'Built Portfolio Website',
    description: 'Designed and developed a modern portfolio using React and Tailwind CSS.',
    icon: <FaTrophy />,
  },
  {
    year: '2025',
    title: 'REST API Development',
    description: 'Built a full-featured Notes API with Node.js and Express.js.',
    icon: <FaCertificate />,
  },
];

export default function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="timeline" className="py-20 px-6 bg-gradient-to-b from-purple-900/10 to-transparent">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            My <span className="text-purple-500">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto mb-12 rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-purple-500/30 rounded-full" />

          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Content */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                <div className="glass p-6 hover:shadow-glow transition-all duration-300">
                  <span className="text-purple-500 text-sm font-semibold">{item.year}</span>
                  <h3 className="text-lg font-bold text-white mt-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm mt-2">{item.description}</p>
                </div>
              </div>

              {/* Center Icon */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white shadow-glow z-10">
                {item.icon}
              </div>

              {/* Empty Space */}
              <div className="w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
