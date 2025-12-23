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
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Optimized Background Image with Parallax */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1514516322520-572a73f4aa9e?q=80&w=2070"
          alt="Restaurante mexicano El Chicano Pocket em Florianópolis - Ambiente acolhedor com decoração mexicana autêntica, mesas e atmosfera vibrante para experiência gastronômica única"
          fill
          priority
          quality={90}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />
      </motion.div>

      {/* Decorative Neon Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30z' fill='%23FF8C00' fill-opacity='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Content Area */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 h-full flex flex-col items-center justify-center px-4"
      >
        {/* Tags with Staggered Animation */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-8">
          {['Autêntico', 'Vibrante', 'Premium', 'El Chicano'].map((item, index) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className={`text-xs md:text-sm tracking-[0.3em] uppercase px-3 py-1 border border-white/10 rounded-full bg-black/20 backdrop-blur-sm ${index === 3 ? 'text-orange-500 font-bold border-orange-500/30' : 'text-white/60'
                }`}
            >
              {item}
            </motion.span>
          ))}
        </div>

        {/* Logo/Title with Reveal Animation */}
        <div className="text-center mb-6 overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className="font-serif text-6xl md:text-8xl lg:text-9xl text-white tracking-tight leading-none"
          >
            EL CHICANO
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 1.2 }}
            className="h-[2px] bg-orange-600 mx-auto mt-2 shadow-[0_0_15px_rgba(255,140,0,0.8)]"
          />
          <motion.p
            initial={{ opacity: 0, tracking: "0.2em" }}
            animate={{ opacity: 1, tracking: "0.5em" }}
            transition={{ duration: 1.5, delay: 1 }}
            className="text-orange-500 text-2xl md:text-3xl uppercase font-light mt-4"
          >
            Pocket
          </motion.p>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="text-white/70 text-center text-lg md:text-xl max-w-2xl leading-relaxed italic font-light"
        >
          "{siteData.fullTagline}"
        </motion.p>

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
            className="group relative px-10 py-4 bg-orange-600 overflow-hidden focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black rounded-lg"
            aria-label="Explorar nosso cardápio completo"
          >
            <span className="relative z-10 text-white text-sm tracking-[0.2em] uppercase font-bold">
              Explorar Menu
            </span>
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <style jsx>{`
              .group:hover span { color: black; transition: color 0.3s; }
            `}</style>
          </motion.a>

          <motion.a
            href="https://api.whatsapp.com/send?phone=5548999326792&text=Ol%C3%A1!%20Vi%20o%20site%20e%20gostaria%20de%20fazer%20uma%20reserva%20no%20El%20Chicano%20Pocket"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ borderColor: "#16A34A" }}
            className="px-10 py-4 border border-white/20 text-white text-sm tracking-[0.2em] uppercase transition-all duration-300 backdrop-blur-md hover:shadow-[0_0_20px_rgba(22,163,74,0.3)] hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-black rounded-lg"
            aria-label="Fazer reserva via WhatsApp (abre em nova aba)"
          >
            Reservas
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToContent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 hover:text-orange-500 transition-colors cursor-pointer group"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[10px] tracking-[0.4em] uppercase opacity-0 group-hover:opacity-100 transition-opacity">Scroll</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  );
}
