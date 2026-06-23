import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiHtml5,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
} from 'react-icons/si';

import { FaCss3Alt } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';
const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'Python', icon: <SiPython /> },
      { name: 'C++', icon: <SiCplusplus /> },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5', icon: <SiHtml5 /> },
      { name: 'CSS3', icon: <FaCss3Alt /> },
      { name: 'React', icon: <SiReact /> },
      { name: 'Tailwind', icon: <SiTailwindcss /> },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs /> },
      { name: 'Express.js', icon: <SiExpress /> },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'MySQL', icon: <SiMysql /> },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: <SiGit /> },
      { name: 'GitHub', icon: <SiGithub /> },
      { name: 'Postman', icon: <SiPostman /> },
      { name: 'VS Code', icon: <VscVscode  /> },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-b from-transparent to-purple-900/10">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            My <span className="text-purple-500">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto mb-12 rounded-full" />
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-purple-400 mb-6">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass p-4 flex flex-col items-center gap-2 hover:shadow-glow transition-all duration-300 cursor-pointer"
                  >
                    <span className="text-3xl text-purple-500">{skill.icon}</span>
                    <span className="text-sm text-gray-300">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
