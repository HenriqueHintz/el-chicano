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
    <section ref={ref} id="gallery" className="py-24 md:py-32 bg-black">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-green-600 text-sm tracking-[0.4em] uppercase font-bold">Galeria Gastronômica</span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-7xl font-serif text-white">
            Nossos Pratos
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mt-6 shadow-[0_0_10px_rgba(255,140,0,0.5)]"></div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden cursor-pointer group rounded-lg ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              onClick={() => setSelectedImage(image)}
            >
              <div className={`aspect-square ${index === 0 ? 'md:aspect-auto md:h-full' : 'h-full'}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  quality={90}
                  priority={index < 2}
                  sizes={index === 0 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                <div className="text-white text-center p-4">
                  <ZoomIn className="w-8 h-8 mx-auto mb-2 text-orange-500" />
                  <p className="text-xs tracking-[0.2em] font-medium uppercase">{image.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-orange-500 transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-10 h-10" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                quality={100}
                className="w-full h-full object-contain rounded-lg shadow-2xl shadow-orange-600/10"
              />
              <div className="absolute -bottom-14 left-0 right-0 text-center">
                <h3 className="text-white text-xl font-serif tracking-wide">{selectedImage.alt}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
