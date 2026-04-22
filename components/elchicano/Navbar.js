'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram, Facebook, Globe, ExternalLink, MapPin, Smartphone, ShoppingBag } from 'lucide-react';
import DigitalPresenceModal from './DigitalPresenceModal';
import { siteData } from '@/lib/siteData';

const navLinks = [
  { name: 'Início', href: '#top' },
  { name: 'Sobre', href: '#about' },
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
          ? 'bg-brand-base/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
          }`}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('#top')}
              className="flex flex-col focus:outline-none"
              aria-label="Ir para o início da página El Chicano Pocket"
            >
              <span className="font-serif text-2xl text-brand-soft tracking-wide">EL CHICANO</span>
              <span className="text-brand-accent text-[10px] tracking-[0.4em] uppercase -mt-1">Pocket</span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8" role="navigation" aria-label="Navegação principal">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="relative text-xs tracking-[0.2em] uppercase transition-all duration-300 focus:outline-none group"
                  aria-label={`Navegar para ${link.name}`}
                  aria-current={activeSection === link.href ? 'page' : undefined}
                >
                  <span className={`transition-colors duration-300 ${activeSection === link.href
                    ? 'text-brand-soft font-bold'
                    : 'text-brand-light group-hover:text-brand-soft'
                    }`}>
                    {link.name}
                  </span>
                  {/* Animated underline */}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-brand-accent transition-all duration-300 ease-out ${activeSection === link.href
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
                className="px-3 sm:px-5 py-2 sm:py-2.5 bg-brand-soft hover:brightness-110 text-[#1A1A1A] text-[10px] sm:text-xs font-bold tracking-[0.1em] sm:tracking-[0.15em] uppercase transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-soft focus:ring-offset-2 focus:ring-offset-brand-base rounded flex items-center gap-1 sm:gap-2"
                aria-label="Ver plataformas digitais"
              >
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden xs:inline">Links</span>
                <span className="xs:hidden">Links</span>
              </button>
              <a
                href="https://api.whatsapp.com/send?phone=5548999326792&text=Olá, gostaria de fazer uma reserva"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 sm:px-6 py-2 sm:py-2.5 bg-brand-accent/45 border border-brand-accent/30 text-brand-soft text-[10px] sm:text-xs tracking-[0.1em] sm:tracking-[0.15em] uppercase transition-all duration-300 hover:bg-brand-accent/55 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-base rounded hidden sm:flex items-center justify-center"
                aria-label="Fazer reserva via WhatsApp (abre em nova aba)"
              >
                Reservar
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-brand-soft p-2 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-base rounded"
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
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-[#050505] lg:hidden flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação móvel"
          >
            {/* Header in Menu */}
            <div className="flex items-center justify-between px-6 h-20 border-b border-white/5">
              <div className="flex flex-col">
                <span className="font-serif text-xl text-white tracking-wide">EL CHICANO</span>
                <span className="text-brand-accent text-[8px] tracking-[0.4em] uppercase -mt-0.5">Pocket</span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-white/50 hover:text-white transition-colors"
                aria-label="Fechar menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Links Section */}
            <div className="flex-1 flex flex-col justify-center px-10">
              <nav className="flex flex-col gap-8">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    onClick={() => scrollToSection(link.href)}
                    className="flex flex-col group items-start"
                  >
                    <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase font-black mb-1 group-hover:text-brand-accent transition-colors">
                      0{index + 1}
                    </span>
                    <span className="font-serif text-4xl text-white group-hover:text-brand-accent transition-all tracking-tight">
                      {link.name}
                    </span>
                  </motion.button>
                ))}
              </nav>
            </div>

            {/* Bottom Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="p-10 border-t border-white/5 bg-white/[0.02]"
            >
              <div className="flex flex-col gap-8">
                <div className="flex justify-between items-end">
                  <div className="flex flex-col gap-4">
                    <h4 className="text-brand-accent text-[10px] tracking-[0.3em] uppercase font-black">Siga-nos</h4>
                    <div className="flex gap-6">
                      <a href="https://instagram.com/elchicanopocket" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
                        <Instagram className="w-5 h-5" />
                      </a>
                      <a href="#" className="text-white/50 hover:text-white transition-colors">
                        <Facebook className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsDigitalPresenceOpen(true);
                    }}
                    className="text-white text-[10px] tracking-[0.2em] uppercase font-bold border-b border-brand-accent pb-1"
                  >
                    Plataformas Digitais
                  </button>
                </div>

                <a
                  href={siteData.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-white text-black text-xs font-black uppercase tracking-[0.3em] flex items-center justify-center rounded-xl shadow-xl shadow-white/5"
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