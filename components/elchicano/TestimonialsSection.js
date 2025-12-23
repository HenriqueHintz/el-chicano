'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Image from 'next/image';
import { siteData } from '@/lib/siteData';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const paginate = useCallback((newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + siteData.testimonials.length) % siteData.testimonials.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 8000);
    return () => clearInterval(interval);
  }, [paginate]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    })
  };

  return (
    <section ref={ref} id="testimonials" className="py-24 md:py-32 bg-black overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-green-600 text-sm tracking-[0.4em] uppercase font-bold">Depoimentos</span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-7xl font-serif text-white">
            Experiências Reais
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mt-6 shadow-[0_0_15px_rgba(255,140,0,0.4)]"></div>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative max-w-5xl mx-auto">
          {/* Decorative Elements */}
          <Quote className="absolute -top-12 -left-4 w-24 h-24 text-orange-600/10 -rotate-12" />
          <Quote className="absolute -bottom-12 -right-4 w-24 h-24 text-orange-600/10 rotate-[168deg]" />

          <div className="relative min-h-[400px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 }
                }}
                className="absolute w-full px-4 md:px-16 text-center"
              >
                {/* Author Info (Top) */}
                <div className="flex flex-col items-center mb-8">
                  <div className="relative w-20 h-20 mb-4">
                    <div className="absolute inset-0 bg-orange-600 rounded-full blur-md opacity-20 animate-pulse" aria-hidden="true" />
                    <Image
                      src={siteData.testimonials[currentIndex].image}
                      alt={`Foto de ${siteData.testimonials[currentIndex].name}, ${siteData.testimonials[currentIndex].role}`}
                      fill
                      className="rounded-full object-cover border-2 border-orange-600/30 relative z-10"
                    />
                  </div>
                  <h3 className="text-white text-xl font-bold tracking-tight">
                    {siteData.testimonials[currentIndex].name}
                  </h3>
                  <p className="text-orange-500 text-xs uppercase tracking-[0.2em] font-black mt-1">
                    {siteData.testimonials[currentIndex].role}
                  </p>
                </div>

                {/* Rating */}
                <div className="flex justify-center gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < siteData.testimonials[currentIndex].rating ? 'text-amber-400 fill-amber-400' : 'text-white/10'}`}
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-2xl md:text-3xl text-white/80 leading-relaxed font-serif italic max-w-3xl mx-auto">
                  "{siteData.testimonials[currentIndex].text}"
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex flex-col items-center gap-8 mt-16">
            <div className="flex items-center gap-12" role="group" aria-label="Controles de navegação dos depoimentos">
              <button
                onClick={() => paginate(-1)}
                className="w-14 h-14 flex items-center justify-center rounded-full border border-white/10 hover:border-green-600 text-white/40 hover:text-white transition-all duration-500 group focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
              </button>

              {/* Dots */}
              <div className="flex gap-3" role="tablist" aria-label="Seletor de depoimentos">
                {siteData.testimonials.map((testimonial, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1);
                      setCurrentIndex(index);
                    }}
                    className={`h-1.5 transition-all duration-700 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black ${index === currentIndex
                      ? 'w-10 bg-orange-600 shadow-[0_0_10px_rgba(255,140,0,0.6)]'
                      : 'w-2 bg-white/10 hover:bg-white/30'
                      }`}
                    aria-label={`Ver depoimento de ${testimonial.name}`}
                    aria-selected={index === currentIndex}
                    role="tab"
                  />
                ))}
              </div>

              <button
                onClick={() => paginate(1)}
                className="w-14 h-14 flex items-center justify-center rounded-full border border-white/10 hover:border-green-600 text-white/40 hover:text-white transition-all duration-500 group focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black"
                aria-label="Próximo depoimento"
              >
                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
