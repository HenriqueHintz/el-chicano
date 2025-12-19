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
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Decorative Border */}
      <div className="absolute inset-8 border border-amber-600/20 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-amber-400 text-sm tracking-[0.3em] uppercase">
            Buscando realizar algo especial?
          </span>
          
          <h2 className="mt-6 text-3xl md:text-5xl lg:text-6xl font-serif text-white leading-tight max-w-4xl mx-auto">
            Pronto para viver uma experiência 
            <span className="text-amber-400"> autêntica mexicana?</span>
          </h2>

          <p className="mt-8 text-neutral-300 text-lg max-w-2xl mx-auto">
            Seja para uma reserva especial, um evento corporativo ou uma celebração única, 
            estamos aqui para tornar seu momento inesquecível.
          </p>

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
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-600 hover:bg-green-700 text-white text-sm tracking-[0.15em] uppercase transition-all duration-300 hover:shadow-lg hover:shadow-green-600/30"
            >
              <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
              Fale pelo WhatsApp
            </a>
            
            <a
              href="tel:+5548999326792"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/30 hover:border-amber-400 text-white text-sm tracking-[0.15em] uppercase transition-all duration-300 hover:bg-white/10"
            >
              <Phone className="w-5 h-5 transition-transform group-hover:scale-110" />
              Ligar Agora
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}