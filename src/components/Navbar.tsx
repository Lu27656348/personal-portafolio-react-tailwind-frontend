import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Sobre Mí', href: '#about' },
    { name: 'Tecnologías', href: '#technologies' },
    { name: 'Proyectos', href: '#projects' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/50 backdrop-blur-md py-4 shadow-xl border-b border-white/5' : 'bg-black/20 backdrop-blur-sm py-6 border-b border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        {/* Left: Logo */}
        <div className="flex-1">
          <a href="#home" className="text-sm font-bold tracking-[0.15em] text-white flex items-center gap-2">
            <span className="text-base uppercase">Somoza's</span>
            <span className="font-extrabold text-red-600 text-base uppercase hidden sm:inline">Portafolio</span>
          </a>
        </div>

        {/* Center: Desktop Menu */}
        <div className="hidden md:flex gap-4 justify-center">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="px-4 py-2 rounded-sm text-slate-400 hover:text-white hover:bg-red-600 transition-all duration-300 text-sm tracking-[0.2em] uppercase font-bold hover:shadow-[0_0_20px_rgba(220,38,38,0.6)]">
              {link.name}
            </a>
          ))}
        </div>

        {/* Right: Button & Mobile Toggle */}
        <div className="flex-1 flex justify-end items-center gap-4">
          <a href="#contact" className="hidden md:inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-2 text-sm tracking-[0.15em] uppercase font-bold transition-colors">
            Contactar
          </a>
          {/* Mobile Menu Button */}
          <button className="md:hidden text-white hover:text-red-500 transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl flex flex-col items-center py-10 gap-8 shadow-2xl border-b border-white/10"
        >
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-white hover:text-red-500 transition-colors text-lg tracking-[0.2em] uppercase font-bold">
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="bg-red-600 text-white px-8 py-3 text-sm tracking-[0.15em] uppercase font-bold mt-4">
            Contactar
          </a>
        </motion.div>
      )}
    </nav>
  );
}
