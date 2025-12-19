'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Utensils, Wine, Music, Calendar } from 'lucide-react';

const experiences = [
  {
    icon: Utensils,
    title: 'Restaurante',
    description: 'Culinária mexicana autêntica com toques contemporâneos. Tacos, burritos, enchiladas e muito mais, preparados com ingredientes selecionados.',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=1980',
    color: 'from-amber-600/80',
  },
  {
    icon: Wine,
    title: 'Bar & Tequilaria',
    description: 'Mais de 30 tipos de tequila e mezcal premium. Margaritas clássicas e autorais, micheladas e coquetéis exclusivos da casa.',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070',
    color: 'from-red-800/80',
  },
  {
    icon: Music,
    title: 'Música ao Vivo',
    description: 'Apresentações semanais com mariachis, bandas de latin jazz e DJs que trazem a energia da música latina para suas noites.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070',
    color: 'from-emerald-800/80',
  },
  {
    icon: Calendar,
    title: 'Eventos',
    description: 'Espaço versátil para eventos corporativos, festas privadas e celebrações especiais com toda a atmosfera mexicana.',
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070',
    color: 'from-purple-800/80',
  },
];

function ExperienceCard({ experience, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative overflow-hidden cursor-pointer"
    >
      {/* Background Image */}
      <div className="aspect-[3/4] md:aspect-[4/5] overflow-hidden">
        <img
          src={experience.image}
          alt={experience.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t ${experience.color} to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300`} />

      {/* Content */}
      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
        <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
          <experience.icon className="w-10 h-10 text-white/80 mb-4" />

          <h3 className="text-2xl md:text-3xl font-serif text-white mb-3">
            {experience.title}
          </h3>

          <p className="text-white/80 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-h-0 group-hover:max-h-40 overflow-hidden">
            {experience.description}
          </p>

          <div className="mt-4 flex items-center gap-2 text-amber-300 text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span>Saiba mais</span>
            <span className="transform group-hover:translate-x-2 transition-transform">→</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ExperiencesSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section className="py-24 md:py-32 bg-neutral-900">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-amber-500 text-sm tracking-[0.3em] uppercase">Experiências</span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-serif text-white">
            O que oferecemos
          </h2>
          <p className="mt-6 text-neutral-400 max-w-2xl mx-auto">
            Muito mais que um restaurante, somos um espaço de experiências completas
            para todos os seus sentidos.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.title} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}