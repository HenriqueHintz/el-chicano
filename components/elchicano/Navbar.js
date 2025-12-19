'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram, Facebook } from 'lucide-react';

const navLinks = [
  { name: 'Início', href: '#top' },
  { name: 'Sobre', href: '#about' },
  { name: 'Experiências', href: '#experiences' },
  { name: 'Menu', href: '#menu' },
  { name: 'Unidades', href: '#locations' },
  { name: 'Contato', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (href === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'bg-black/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
          }`}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('#top')}
              className="flex flex-col"
            >
              <span className="font-serif text-2xl text-white tracking-wide">EL CHICANO</span>
              <span className="text-amber-400 text-[10px] tracking-[0.4em] uppercase -mt-1">Pocket</span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-white/70 hover:text-amber-400 text-xs tracking-[0.2em] uppercase transition-colors duration-300"
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* CTA + Social */}
            <div className="hidden lg:flex items-center gap-6">
              <div className="flex gap-3">
                <a
                  href="https://linktr.ee/elchicanoficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-amber-400 transition-colors text-xs"
                  title="Linktree"
                >
                  🔗
                </a>
                <a
                  href="https://www.instagram.com/elchicanoficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-amber-400 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.facebook.com/elchicanoficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-amber-400 transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
              <a
                href="https://api.whatsapp.com/send?phone=5548999326792&text=Olá, gostaria de fazer uma reserva"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-green-600 hover:bg-green-700 text-white text-xs tracking-[0.15em] uppercase transition-all duration-300 shadow-[0_0_15px_rgba(22,163,74,0.3)]"
              >
                Reservar
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white p-2"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-black flex flex-col justify-center items-center lg:hidden"
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  onClick={() => scrollToSection(link.href)}
                  className="font-serif text-3xl text-white hover:text-amber-500 transition-colors tracking-wider"
                >
                  {link.name}
                </motion.button>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-12 flex flex-col items-center gap-8"
            >
              <div className="w-16 h-[1px] bg-white/10" />

              <div className="flex gap-8">
                <a href="https://www.instagram.com/elchicanoficial" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-amber-500 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://www.facebook.com/elchicanoficial" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-amber-500 transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
              </div>

              <a
                href={siteData.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-white/20 text-white text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300"
              >
                Fazer Reserva
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}