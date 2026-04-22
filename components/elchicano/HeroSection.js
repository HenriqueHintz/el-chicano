'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { siteData } from '@/lib/siteData';

export default function HeroSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.9]);

  const scrollToContent = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-brand-base">
      {/* Plain Background */}
      <div className="absolute inset-0 z-0 bg-brand-base" />



      {/* Content Area */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 h-full flex flex-col items-start justify-center px-6 md:px-20 lg:px-32 max-w-7xl mx-auto w-full"
      >
        {/* Label Prefix */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center gap-4 mb-4"
        >
          <div className="h-[1px] w-12 bg-brand-accent" />
          <span className="text-brand-accent text-sm tracking-[0.4em] uppercase font-bold">
            Pocket
          </span>
        </motion.div>

        {/* Main Title */}
        <div className="overflow-hidden mb-8">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className="font-serif text-6xl md:text-8xl lg:text-9xl text-brand-soft tracking-tight leading-[0.9]"
          >
            EL <br className="md:hidden" /> CHICANO
          </motion.h1>
        </div>

        {/* Tagline with accent line */}
        <div className="flex gap-6 items-start max-w-2xl">
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 1, delay: 1.2 }}
            className="w-[2px] bg-brand-accent shadow-glow-accent self-stretch" 
          />
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-brand-light text-lg md:text-xl leading-relaxed font-light"
          >
            {siteData.fullTagline}
          </motion.p>
        </div>

        {/* CTA Buttons with Hover Effects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.1 }}
          className="mt-12 flex flex-col sm:flex-row gap-6"
        >
          <motion.a
            href="#menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 py-4 bg-brand-soft overflow-hidden focus:outline-none focus:ring-2 focus:ring-brand-soft focus:ring-offset-2 focus:ring-offset-brand-base rounded-lg shadow-lg"
            aria-label="Explorar nosso cardápio completo"
          >
            <span className="relative z-10 text-[#1A1A1A] text-sm tracking-[0.2em] uppercase font-bold">
              Explorar Menu
            </span>
            <motion.div
              className="absolute inset-0 bg-brand-accent"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <style jsx>{`
              .group:hover span { color: #1A1A1A; transition: color 0.3s; }
            `}</style>
          </motion.a>

          <motion.a
            href="https://api.whatsapp.com/send?phone=5548999326792&text=Ol%C3%A1!%20Vi%20o%20site%20e%20gostaria%20de%20fazer%20uma%20reserva%20no%20El%20Chicano%20Pocket"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 92, 0, 0.55)" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-brand-accent/45 backdrop-blur-md border border-brand-accent/30 text-brand-soft text-sm tracking-[0.2em] uppercase font-bold transition-all duration-300 hover:shadow-glow-accent focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-base rounded-lg"
            aria-label="Fazer reserva via WhatsApp (abre em nova aba)"
          >
            Reservas
          </motion.a>
        </motion.div>


      </motion.div>
    </section>
  );
}
