'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageCircle, Phone } from 'lucide-react';

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref}
      className="relative py-32 md:py-40 overflow-hidden"
    >
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1582169296194-e4d644c48063?q=80&w=2084')`,
        }}
      >
        <div className="absolute inset-0 bg-brand-base/80" />
      </div>

      {/* Decorative Border */}
      <div className="absolute inset-8 border border-brand-accent/20 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-6 py-2 bg-brand-accent rounded-full text-brand-base text-xs md:text-sm tracking-[0.2em] uppercase font-black shadow-glow-accent">
            Buscando realizar algo especial?
          </span>
          
          <h2 className="mt-8 text-4xl md:text-5xl lg:text-7xl font-serif text-brand-soft leading-tight max-w-4xl mx-auto">
            Pronto para viver uma <br className="hidden md:block" />
            <span className="text-brand-accent underline decoration-brand-accent/30 underline-offset-8">experiência mexicana?</span>
          </h2>
 
          <div className="mt-8 space-y-4">
            <p className="text-brand-light/90 text-lg md:text-xl font-light">
              Reserve agora e garanta sua mesa em uma experiência gastronômica autêntica
            </p>
            <p className="text-white text-sm md:text-base tracking-wider uppercase font-medium">
              Eventos especiais • Aniversários • Corporativos • Celebrações
            </p>
            <p className="text-brand-light/70 text-sm md:text-base italic">
              Atendimento personalizado para tornar seu momento inesquecível
            </p>
          </div>
 
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://api.whatsapp.com/send?phone=5548999326792&text=Olá, gostaria de fazer uma reserva no El Chicano Pocket"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs md:text-sm tracking-[0.2em] uppercase font-bold transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-600/30 rounded-xl"
              aria-label="Reserve agora via WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
              Reserve Agora
            </a>
            
            <a
              href="tel:+5548999326792"
              className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-white hover:bg-white/90 text-black text-xs md:text-sm tracking-[0.2em] uppercase font-bold transition-all duration-300 rounded-xl shadow-xl"
              aria-label="Ligar agora"
            >
              <Phone className="w-5 h-5" />
              Ligar Agora
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}