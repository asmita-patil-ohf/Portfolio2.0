import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode, SiCodechef, SiHackerrank } from 'react-icons/si';

const profiles = [
  {
    name: 'GitHub',
    icon: <FaGithub />,
    url: 'https://github.com/asmita-patil-ohf',
    color: 'hover:text-white',
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedin />,
    url: 'https://www.linkedin.com/in/asmita-patil-436a62332/',
    color: 'hover:text-blue-500',
  },
  {
    name: 'LeetCode',
    icon: <SiLeetcode />,
    url: 'https://leetcode.com/u/YXLn8nNp8L/',
    color: 'hover:text-yellow-500',
  },
];

export default function CodingProfiles() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Coding <span className="text-purple-500">Profiles</span>
          </h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto mb-12 rounded-full" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {profiles.map((profile, index) => (
            <motion.a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className={`glass p-6 flex flex-col items-center gap-3 hover:shadow-glow transition-all duration-300 ${profile.color}`}
            >
              <span className="text-4xl text-purple-500">{profile.icon}</span>
              <span className="text-gray-300">{profile.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
