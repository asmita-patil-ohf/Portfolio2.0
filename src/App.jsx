import { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import CodingProfiles from './components/CodingProfiles';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="relative min-h-screen overflow-x-hidden">

      {/* Background blobs */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">

        {/* Top Left Purple */}
        <div
          className="
          absolute
          top-[-200px]
          left-[-200px]
          w-[600px]
          h-[600px]
          bg-fuchsia-400 opacity-20
          rounded-full
          blur-[200px]
        "
        />

        {/* Bottom Right Pink/Fuchsia */}
        <div
          className="
          absolute
          bottom-[-200px]
          right-[-200px]
          w-[600px]
          h-[600px]
          bg-fuchsia-400 opacity-20
          rounded-full
          blur-[200px]
        "
        />

        {/* Center Indigo */}
        <div
          className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[600px]
          h-[600px]
          bg-violet-800 opacity-23
          rounded-full
          blur-[220px]
        "
        />
      </div>

      {/* Particles */}
      <div className="fixed inset-0 z-0">
        <ParticlesBackground />
      </div>

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <CodingProfiles />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}