'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="relative py-16 md:py-24 bg-brand-base overflow-hidden">
      
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-10 items-center bg-brand-light/5 border border-brand-light/10 p-6 md:p-10 rounded-2xl backdrop-blur-sm">
          {/* Image Container */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center md:justify-start"
          >
            <div className="relative w-full max-w-[320px] md:max-w-[480px] aspect-[4/5] overflow-hidden rounded-xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?q=80&w=1932"
                alt="Interior El Chicano"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Year Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-4 -left-4 bg-brand-accent p-2 md:p-3 rounded-lg shadow-glow-accent flex items-center justify-center"
            >
              <motion.svg
                animate={{ y: [0, -6, 0], rotate: [-8, 2, -8] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                className="w-16 h-16 md:w-20 md:h-20 drop-shadow-md"
              >
                {/* Main Body (Tortilla) */}
                <path d="M 12 24 H 48 V 44 H 12 C 6 44 2 40 2 34 C 2 28 6 24 12 24 Z" fill="#FFFFFF" />
                
                {/* Wrap Lines */}
                <path d="M 20 24 Q 16 34 20 44" stroke="#E5E7EB" strokeWidth="2" fill="none" />
                <path d="M 34 24 Q 30 34 34 44" stroke="#E5E7EB" strokeWidth="2" fill="none" />
                
                {/* Toasted Spots */}
                <circle cx="15" cy="30" r="1.5" fill="#E5E7EB" />
                <circle cx="26" cy="38" r="2" fill="#E5E7EB" />
                <circle cx="38" cy="28" r="1" fill="#E5E7EB" />
                <circle cx="10" cy="38" r="1" fill="#E5E7EB" />
                <circle cx="42" cy="36" r="1.5" fill="#E5E7EB" />

                {/* Open End Background */}
                <ellipse cx="48" cy="34" rx="6" ry="10" fill="#E5E7EB" />
                
                {/* Cheese */}
                <ellipse cx="48" cy="34" rx="5" ry="9" fill="#FBBF24" />
                
                {/* Meat / Beans */}
                <circle cx="48" cy="29" r="2.5" fill="#78350F" />
                <circle cx="46" cy="34" r="2" fill="#78350F" />
                <circle cx="49" cy="38" r="2.5" fill="#78350F" />
                
                {/* Guacamole / Lettuce */}
                <circle cx="46" cy="27" r="1.5" fill="#22C55E" />
                <circle cx="51" cy="32" r="2" fill="#22C55E" />
                <circle cx="46" cy="38" r="1.5" fill="#22C55E" />
                
                {/* Tomato / Salsa */}
                <circle cx="51" cy="36" r="1.5" fill="#EF4444" />
                <circle cx="49" cy="27" r="1.5" fill="#EF4444" />
                
                {/* Drip of salsa */}
                <path d="M 51 36 Q 53 40 51 44 Q 49 40 51 36 Z" fill="#EF4444" />
              </motion.svg>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-brand-accent text-xs tracking-[0.3em] uppercase font-bold">Nossa História</span>
            
            <h2 className="mt-2 text-4xl md:text-5xl font-serif text-brand-soft leading-tight">
              El Chicano Pocket
            </h2>
            <p className="text-brand-accent text-base md:text-lg font-medium mt-1">
              Sabor, atmosfera e experiência em um só lugar.
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-brand-soft font-bold text-base md:text-lg tracking-wide mb-2">Momentos inesquecíveis garantidos</h3>
                <p className="text-brand-light/70 text-base md:text-lg leading-relaxed">
                  O Chef Rafa Cordeiro preparou um ambiente pensado para viver o melhor da culinária mexicana com autenticidade, personalidade e charme.
                </p>
              </div>

              <div>
                <h3 className="text-brand-accent font-bold text-base md:text-lg tracking-wide mb-2">Sabores autênticos que conquistam</h3>
                <p className="text-brand-light/70 text-base md:text-lg leading-relaxed">
                  Aqui, cada detalhe convida você a apreciar sabores marcantes, drinks especiais e momentos que ficam na memória.
                </p>
              </div>
            </div>

            <p className="mt-10 text-brand-soft font-serif italic text-lg md:text-xl border-l-2 border-brand-accent pl-4">
              El Chicano Pocket — onde o México ganha vida.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}