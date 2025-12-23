'use client';

import React, { useState, useRef, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import { Search, Utensils, X } from 'lucide-react';
import { menuCategories, menuItems } from '@/lib/siteData';
import AddToCartButton from '@/components/cart/AddToCartButton';

export default function MenuSection() {
    const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const ref = useRef(null);
    const itemsContainerRef = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    // Close modal on ESC key press
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape' && selectedImage) {
                setSelectedImage(null);
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [selectedImage]);

    const filteredItems = useMemo(() => {
        const items = menuItems[activeCategory] || [];
        if (!searchTerm) return items;

        return items.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description?.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [activeCategory, searchTerm]);

    return (
        <section id="menu" className="py-24 bg-black" ref={ref}>
            <div className="container mx-auto px-4 md:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="text-orange-500 text-sm tracking-[0.4em] uppercase font-bold">Experiência Gastronômica</span>
                    <h2 className="font-serif text-5xl md:text-7xl text-white mt-4 mb-6">
                        Nosso Cardápio
                    </h2>
                    <div className="w-24 h-1 bg-orange-600 mx-auto shadow-[0_0_15px_rgba(255,140,0,0.5)]"></div>
                </motion.div>

                {/* Search and Filters Container */}
                <div className="flex flex-col gap-8 mb-16">
                    {/* Search Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        className="relative max-w-md mx-auto w-full"
                    >
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Buscar prato ou ingrediente..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-12 pr-6 text-white placeholder:text-white/20 focus:outline-none focus:border-orange-500 focus:bg-white/10 transition-all backdrop-blur-md"
                        />
                    </motion.div>

                    {/* Category Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                        {menuCategories.map((category, index) => (
                            <motion.button
                                key={category.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                onClick={() => {
                                    setActiveCategory(category.id);
                                    if (itemsContainerRef.current) {
                                        const yOffset = -120; // Ajustado para não esconder o topo dos cards
                                        const y = itemsContainerRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
                                        window.scrollTo({ top: y, behavior: 'smooth' });
                                    }
                                }}
                                className={`
                                    relative px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 border
                                    ${activeCategory === category.id
                                        ? 'bg-amber-600 border-amber-600 text-white shadow-[0_0_20px_rgba(217,119,6,0.3)] scale-105'
                                        : 'bg-white/5 border-white/10 text-white/60 hover:border-white/30 hover:text-white hover:bg-white/10'
                                    }
                                `}
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    {category.name}
                                </span>
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* Menu Items Grid */}
                <div ref={itemsContainerRef} className="scroll-mt-32">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory + searchTerm}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {filteredItems.length > 0 ? (
                                filteredItems.map((item, index) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="group relative bg-[#0A0A0A] border border-white/5 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-600/10 flex flex-col"
                                    >
                                        {/* Item Image */}
                                        {item.image && (
                                            <div
                                                className="relative h-56 overflow-hidden flex-shrink-0 cursor-pointer"
                                                onClick={() => setSelectedImage({ src: item.image, alt: item.name })}
                                            >
                                                <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    fill
                                                    quality={85}
                                                    priority={index < 2}
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                                            </div>
                                        )}

                                        <div className="p-6 md:p-8 flex flex-col flex-grow relative">
                                            <div className="flex justify-between items-start mb-4">
                                                <h3 className="text-xl md:text-2xl font-serif font-bold text-white group-hover:text-amber-500 transition-colors duration-300">
                                                    {item.name}
                                                </h3>
                                                <span className="text-amber-500 font-bold text-lg md:text-xl whitespace-nowrap ml-4">
                                                    R$ {item.price}
                                                </span>
                                            </div>

                                            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 font-light line-clamp-3 group-hover:line-clamp-none transition-all duration-300 flex-grow">
                                                {item.description}
                                            </p>

                                            <div className="pt-4 mt-auto border-t border-white/10 flex justify-end">
                                                <AddToCartButton
                                                    item={{
                                                        id: `${activeCategory}-${index}`,
                                                        name: item.name,
                                                        price: item.price,
                                                        image: item.image || '/images/logo.png', // Fallback
                                                        category: activeCategory
                                                    }}
                                                    className="w-full md:w-auto"
                                                />
                                            </div>
                                        </div>
                                    </motion.div>
                                ))
                            ) : (
                                <div className="col-span-full py-20 text-center">
                                    <Utensils className="w-12 h-12 text-white/10 mx-auto mb-4" />
                                    <p className="text-white/40 font-light italic">Nenhum item encontrado para sua busca.</p>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Lightbox Modal */}
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
