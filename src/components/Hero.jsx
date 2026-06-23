import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiDownload, HiMail } from 'react-icons/hi';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-24"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="w-80 h-80 md:w-[28rem] md:h-[28rem] rounded-full overflow-hidden border-4 border-purple-500 shadow-glow-lg">
            <img
              src="/src/assets/profile.jpg"
              alt="Asmita Patil"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = '[via.placeholder.com](https://via.placeholder.com/320?text=AP)';
              }}
            />
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/20 to-transparent pointer-events-none" />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center lg:text-left"
        >
          <p className="text-purple-500 text-lg mb-2">Hello there! </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            I'm <span className="text-purple-500">Asmita Patil</span>
          </h1>
          <div className="text-xl md:text-2xl text-gray-300 mb-6 h-8">
            <TypeAnimation
              sequence={[
                'Computer Engineering Student',
                2000,
                'Backend Developer',
                2000,
                'AI Enthusiast',
                2000,
                'Problem Solver',
                2000,
              ]}
              repeat={Infinity}
              wrapper="span"
              cursor={true}
            />
          </div>
          <p className="text-gray-400 max-w-lg mb-8">
            Passionate about building efficient backend systems, exploring AI/ML,
            and solving complex problems through elegant code.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-full font-medium transition shadow-glow"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 glass hover:shadow-glow rounded-full font-medium flex items-center gap-2 transition"
            >
              <HiDownload /> Resume
            </a>
            <a
              href="#contact"
              className="px-6 py-3 glass hover:shadow-glow rounded-full font-medium flex items-center gap-2 transition"
            >
              <HiMail /> Contact
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-8 justify-center lg:justify-start">
            <a
              href='https://github.com/asmita-patil-ohf'
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-full hover:shadow-glow transition"
            >
              <FaGithub size={24} />
            </a>
            <a
              href='https://www.linkedin.com/in/asmita-patil-436a62332/'
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-full hover:shadow-glow transition"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
