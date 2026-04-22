'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import Image from 'next/image';

const galleryImages = [
  {
    src: '/images/menu/nachos-rafa.jpg',
    alt: 'Nachos do Rafa - Chef da Casa',
    category: 'comida'
  },
  {
    src: '/images/menu/quesadilla-costela.jpg',
    alt: 'Quesadilla de Costela com Barbecue',
    category: 'comida'
  },
  {
    src: '/images/menu/burrito-surf-turf.jpg',
    alt: 'Burrito Surf and Turf',
    category: 'comida'
  },
  {
    src: '/images/menu/taco-carne.jpg',
    alt: 'Dupla de Tacos - Carne Grelhada',
    category: 'comida'
  },
  {
    src: '/images/menu/combo-familia.jpg',
    alt: 'Combo Família',
    category: 'comida'
  },
  {
    src: '/images/menu/burrito-california.jpg',
    alt: 'Burrito Califórnia',
    category: 'comida'
  },
  {
    src: '/images/menu/quesadilla-camarao.jpg',
    alt: 'Quesadilla de Camarão',
    category: 'comida'
  },
  {
    src: '/images/menu/churros.jpg',
    alt: 'Churros',
    category: 'comida'
  },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="gallery" className="py-24 md:py-32 bg-brand-base">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-brand-accent text-sm tracking-[0.4em] uppercase font-bold">Galeria Gastronômica</span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-7xl font-serif text-brand-soft">
            Nossos Pratos
          </h2>
          <div className="w-24 h-1 bg-brand-accent mx-auto mt-6 shadow-glow-accent"></div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[280px]">
          {galleryImages.map((image, index) => {
            // Determine Bento Grid classes
            let bentoClass = "col-span-1 row-span-1";
            if (index === 0) bentoClass = "col-span-2 row-span-2"; // Large Featured
            else if (index === 3) bentoClass = "col-span-2 row-span-1"; // Horizontal span

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative overflow-hidden cursor-pointer group rounded-2xl bg-brand-base shadow-lg ${bentoClass}`}
                onClick={() => setSelectedImage(image)}
              >
                <div className="absolute inset-0 z-0">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    quality={100}
                    priority={index < 3}
                    sizes={index === 0 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300 z-10"></div>
                
                {/* Hover Content */}
                <div className="absolute inset-0 z-20 p-4 md:p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <span className="text-brand-accent text-[10px] md:text-xs font-bold uppercase tracking-wider block mb-1">
                        {image.category || "Menu"}
                      </span>
                      <h3 className="text-white text-lg md:text-xl font-serif font-bold drop-shadow-md">
                        {image.alt}
                      </h3>
                    </div>
                    <div className="bg-black/50 backdrop-blur-md p-2.5 rounded-full text-white shrink-0 group-hover:bg-brand-accent transition-colors">
                      <ZoomIn className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0a0a0a]/95 flex flex-col p-4 md:p-8 backdrop-blur-xl"
            onClick={() => setSelectedImage(null)}
          >
            {/* Header with Close Button */}
            <div className="flex justify-end w-full max-w-7xl mx-auto shrink-0 mb-4 md:mb-6">
              <button
                className="bg-white/10 hover:bg-brand-accent text-white p-2 md:p-3 rounded-full backdrop-blur-md transition-all duration-300"
                onClick={() => setSelectedImage(null)}
                title="Fechar tela cheia"
              >
                <X className="w-6 h-6 md:w-8 md:h-8" />
              </button>
            </div>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative flex-grow w-full max-w-7xl mx-auto rounded-xl md:rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                quality={100}
                className="object-contain"
                sizes="100vw"
              />
            </motion.div>

            {/* Title Footer */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="shrink-0 pt-6 pb-2 md:pb-6 text-center w-full max-w-7xl mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-white text-2xl md:text-4xl font-serif tracking-wide drop-shadow-2xl px-4">{selectedImage.alt}</h3>
              <div className="w-16 h-1 bg-brand-accent mx-auto mt-4 rounded-full"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
