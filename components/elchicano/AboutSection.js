'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-neutral-950 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-amber-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-900/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?q=80&w=1932"
                alt="Interior El Chicano"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/50 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 md:-right-12 bg-amber-600 p-6 md:p-8"
            >
              <p className="text-white text-3xl md:text-4xl font-serif">2024</p>
              <p className="text-amber-200 text-xs tracking-[0.2em] uppercase">Desde</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-amber-500 text-sm tracking-[0.3em] uppercase">Nossa História</span>
            
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight">
              Conheça o<br />
              <span className="text-amber-400">El Chicano</span>
            </h2>

            <div className="mt-8 space-y-6 text-neutral-400 leading-relaxed">
              <p>
                Nascido da paixão pela autêntica culinária mexicana e pela arte de receber bem, 
                o <strong className="text-white">El Chicano Pocket</strong> é um refúgio gastronômico 
                no coração da cidade.
              </p>
              <p>
                Cada prato conta uma história, cada drink celebra a tradição, e cada noite é uma 
                celebração da cultura mexicana em sua forma mais vibrante e contemporânea.
              </p>
              <p>
                Nosso espaço foi pensado para criar conexões — entre sabores, pessoas e momentos 
                que ficam na memória. Seja para um jantar íntimo ou uma celebração especial, 
                aqui você encontra a essência do México.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-neutral-800 pt-8">
              {[
                { number: '+50', label: 'Pratos' },
                { number: '+30', label: 'Drinks' },
                { number: '100%', label: 'Autêntico' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl md:text-4xl font-serif text-amber-400">{stat.number}</p>
                  <p className="text-xs tracking-[0.2em] uppercase text-neutral-500 mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}