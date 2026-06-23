import { useState, useEffect } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#timeline' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav
      className="
      fixed top-0 left-0 w-full z-50
      bg-[#13111C]/90
      backdrop-blur-sm
      border-b border-violet-500/10
      shadow-lg
      py-5
      transition-all duration-300
    "
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="text-3xl font-bold">
          <span className="bg-gradient-to-r from-violet-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            asmita
          </span>
          <span className="text-white">.dev</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="
              text-gray-300
              text-lg
              hover:text-violet-400
              transition-colors duration-300
            "
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-3xl text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="
          md:hidden
          mt-4
          mx-4
          p-6
          rounded-3xl
          bg-[#13111C]/95
          border border-violet-500/10
          shadow-xl
        "
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="
              block
              py-3
              text-gray-300
              hover:text-violet-400
              transition
            "
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}