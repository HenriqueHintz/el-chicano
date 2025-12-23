'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram, Facebook, Globe, ExternalLink, MapPin, Smartphone, ShoppingBag } from 'lucide-react';
import DigitalPresenceModal from './DigitalPresenceModal';
import { siteData } from '@/lib/siteData';

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
  const [activeSection, setActiveSection] = useState('#top');
  const [isDigitalPresenceOpen, setIsDigitalPresenceOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section with IntersectionObserver (optimized)
  useEffect(() => {
    const observerOptions = {
      rootMargin: '-10% 0px -70% 0px',
      threshold: [0, 0.5, 1] // Reduced from 5 thresholds to 3 for better performance
    };

    let debounceTimer;
    const observerCallback = (entries) => {
      // Debounce to reduce processing frequency
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        // Find the entry with the highest intersection ratio
        let maxRatio = 0;
        let maxEntry = null;

        entries.forEach(entry => {
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            maxEntry = entry;
          }
        });

        if (maxEntry && maxEntry.isIntersecting) {
          const newSection = `#${maxEntry.target.id}`;
          // Only update if section actually changed
          setActiveSection(prev => prev !== newSection ? newSection : prev);
        }
      }, 50); // 50ms debounce
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    navLinks.forEach(link => {
      if (link.href !== '#top') {
        const element = document.querySelector(link.href);
        if (element) observer.observe(element);
      }
    });

    // Set #top as active when at the very top
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection('#top');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(debounceTimer);
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
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

  if (!mounted) return null;

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
              className="flex flex-col focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black rounded-lg p-2 -m-2"
              aria-label="Ir para o início da página El Chicano Pocket"
            >
              <span className="font-serif text-2xl text-white tracking-wide">EL CHICANO</span>
              <span className="text-amber-400 text-[10px] tracking-[0.4em] uppercase -mt-1">Pocket</span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8" role="navigation" aria-label="Navegação principal">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="relative text-xs tracking-[0.2em] uppercase transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1 group"
                  aria-label={`Navegar para ${link.name}`}
                  aria-current={activeSection === link.href ? 'page' : undefined}
                >
                  <span className={`transition-colors duration-300 ${activeSection === link.href
                    ? 'text-amber-400 font-bold'
                    : 'text-white/70 group-hover:text-amber-400'
                    }`}>
                    {link.name}
                  </span>
                  {/* Animated underline */}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-300 ease-out ${activeSection === link.href
                      ? 'w-full opacity-100'
                      : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                      }`}
                  />
                </button>
              ))}
            </nav>

            {/* CTA */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={() => setIsDigitalPresenceOpen(true)}
                className="px-3 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white text-[10px] sm:text-xs tracking-[0.1em] sm:tracking-[0.15em] uppercase transition-all duration-300 shadow-[0_0_15px_rgba(251,146,60,0.3)] hover:shadow-[0_0_20px_rgba(251,146,60,0.5)] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black rounded flex items-center gap-1 sm:gap-2"
                aria-label="Ver plataformas digitais"
              >
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden xs:inline">Plataformas Digitais</span>
                <span className="xs:hidden">Digitais</span>
              </button>
              <a
                href="https://api.whatsapp.com/send?phone=5548999326792&text=Olá, gostaria de fazer uma reserva"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 sm:px-6 py-2 sm:py-2.5 bg-green-600 hover:bg-green-700 text-white text-[10px] sm:text-xs tracking-[0.1em] sm:tracking-[0.15em] uppercase transition-all duration-300 shadow-[0_0_15px_rgba(22,163,74,0.3)] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-black rounded"
                aria-label="Fazer reserva via WhatsApp (abre em nova aba)"
              >
                Reservar
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white p-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black rounded"
              aria-label={isMobileMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
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
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação móvel"
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded"
              aria-label="Fechar menu de navegação"
            >
              <X className="w-8 h-8" aria-hidden="true" />
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

              <div className="flex flex-col gap-4 w-full px-8">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsDigitalPresenceOpen(true);
                  }}
                  className="w-full py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  Plataformas Digitais
                </button>
                <a
                  href={siteData.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 border border-white/20 text-white text-xs uppercase tracking-[0.2em] flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                >
                  Fazer Reserva
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Digital Presence Modal */}
      <DigitalPresenceModal
        isOpen={isDigitalPresenceOpen}
        onClose={() => setIsDigitalPresenceOpen(false)}
      />
    </>
  );
}