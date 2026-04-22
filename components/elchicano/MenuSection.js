'use client';

import React, { useState, useRef, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import { Utensils, X, ShoppingBag, Globe, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { menuCategories, menuItems } from '@/lib/siteData';

export default function MenuSection() {
    const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);

    const [selectedImage, setSelectedImage] = useState(null);
    const ref = useRef(null);
    const itemsContainerRef = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });
    const categoriesRef = useRef(null);

    const scrollCategories = (direction) => {
        if (categoriesRef.current) {
            const scrollAmount = direction === 'left' ? -200 : 200;
            categoriesRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

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
        return menuItems[activeCategory] || [];
    }, [activeCategory]);

    return (
        <section id="menu" className="py-24 bg-brand-base" ref={ref}>
            <div className="container mx-auto px-4 md:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="text-brand-accent text-sm tracking-[0.4em] uppercase font-bold">Experiência Gastronômica</span>
                    <h2 className="font-serif text-5xl md:text-7xl text-brand-soft mt-4 mb-6">
                        Nosso Cardápio
                    </h2>
                    <div className="w-24 h-1 bg-brand-accent mx-auto shadow-glow-accent"></div>
                </motion.div>

                {/* Category Tabs */}
                <div className="relative mb-16 px-4 md:px-0">
                    {/* Mobile Arrows */}
                    <button 
                        onClick={() => scrollCategories('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-brand-base/80 text-brand-soft md:hidden"
                        aria-label="Anterior"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    
                    <button 
                        onClick={() => scrollCategories('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-brand-base/80 text-brand-soft md:hidden"
                        aria-label="Próximo"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>

                    <div 
                        ref={categoriesRef}
                        className="flex md:flex-wrap md:justify-center gap-2 md:gap-3 overflow-x-auto scrollbar-hide pb-2 md:pb-0"
                        style={{ 
                            display: 'grid', 
                            gridAutoFlow: 'column', 
                            gridTemplateRows: 'repeat(2, minmax(0, 1fr))',
                            gap: '8px'
                        }}
                    >
                        {/* Adjust Grid for Desktop */}
                        <style jsx>{`
                            @media (min-width: 768px) {
                                div {
                                    display: flex !important;
                                    flex-wrap: wrap !important;
                                    justify-content: center !important;
                                }
                            }
                            .scrollbar-hide::-webkit-scrollbar {
                                display: none;
                            }
                            .scrollbar-hide {
                                -ms-overflow-style: none;
                                scrollbar-width: none;
                            }
                        `}</style>

                        {menuCategories.map((category, index) => (
                            <motion.button
                                key={category.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                onClick={() => {
                                    setActiveCategory(category.id);
                                    if (itemsContainerRef.current) {
                                        const yOffset = -120;
                                        const y = itemsContainerRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
                                        window.scrollTo({ top: y, behavior: 'smooth' });
                                    }
                                }}
                                className={`
                                    whitespace-nowrap px-5 py-2.5 rounded-full text-[11px] md:text-sm font-bold uppercase tracking-wider transition-all duration-300 border h-fit
                                    ${activeCategory === category.id
                                        ? 'bg-brand-accent border-brand-accent text-white shadow-glow-accent scale-105'
                                        : 'bg-brand-light/5 border-brand-light/15 text-brand-light/60 hover:border-brand-light/30 hover:text-brand-soft hover:bg-brand-light/10'
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
                            key={activeCategory}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
                        >
                            {filteredItems.length > 0 ? (
                                filteredItems.map((item, index) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="group relative bg-brand-base border border-brand-light/10 rounded-2xl overflow-hidden hover:border-brand-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-accent/20 flex flex-col min-h-[420px] cursor-pointer"
                                        onClick={() => {
                                            if (item.image) {
                                                setSelectedImage({ src: item.image, alt: item.name });
                                            }
                                        }}
                                    >
                                        {/* Background Image */}
                                        {item.image && (
                                            <>
                                                <div className="absolute inset-0 z-0 overflow-hidden">
                                                    <Image
                                                        src={item.image}
                                                        alt={item.name}
                                                        fill
                                                        quality={100}
                                                        priority={index < 4}
                                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 80vw"
                                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                                    />
                                                </div>
                                                {/* Dark Gradient Overlay */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-10"></div>
                                                
                                                {/* Zoom Button */}
                                                <button 
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setSelectedImage({ src: item.image, alt: item.name });
                                                    }}
                                                    className="absolute top-4 right-4 z-30 bg-black/40 hover:bg-brand-accent text-white p-2.5 rounded-full backdrop-blur-md transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
                                                    title="Ampliar foto"
                                                >
                                                    <ZoomIn className="w-5 h-5" />
                                                </button>
                                            </>
                                        )}

                                        {/* Content over image */}
                                        <div className={`p-5 md:p-6 flex flex-col flex-grow relative z-20 justify-end ${!item.image ? 'bg-brand-base/40' : ''}`}>
                                            <div className="mt-auto">
                                                <div className="flex justify-between items-end mb-4 gap-4">
                                                    <h3 className="text-xl md:text-2xl font-serif font-bold text-white drop-shadow-md">
                                                        {item.name}
                                                    </h3>
                                                    <span className="text-brand-accent font-bold text-lg md:text-xl whitespace-nowrap bg-black/60 px-3 py-1 rounded-full backdrop-blur-sm border border-brand-accent/20">
                                                        R$ {item.price}
                                                    </span>
                                                </div>

                                                <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-6 font-light line-clamp-3 group-hover:line-clamp-none transition-all duration-300 drop-shadow-md">
                                                    {item.description}
                                                </p>
                                            </div>

                                            <div className="pt-4 border-t border-white/10 flex flex-row gap-2">
                                                <a 
                                                    href="https://www.ifood.com.br/delivery/florianopolis-sc/el-chicano-pocket-restaurante-mexicano-centro/2b4260f7-b08e-49b8-b4b3-d42bc02a9eb7" 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="group/ifood flex-1 py-3 px-1.5 bg-[#EA1D2C]/90 hover:bg-[#EA1D2C] backdrop-blur-sm text-white rounded-lg flex items-center justify-center transition-all duration-300 shadow-lg hover:-translate-y-0.5 border border-[#EA1D2C]/50"
                                                >
                                                    <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 animate-bounce" />
                                                    <span className="text-[9px] sm:text-[11px] uppercase font-black tracking-wider text-center leading-tight">Peça no iFood</span>
                                                </a>
                                                <a 
                                                    href="https://elchicano.com.br" 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="group/web flex-1 py-3 px-1.5 bg-brand-accent/90 hover:bg-brand-accent backdrop-blur-sm text-white rounded-lg flex items-center justify-center transition-all duration-300 shadow-glow-accent hover:-translate-y-0.5 border border-brand-accent/50"
                                                >
                                                    <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 animate-pulse" />
                                                    <span className="text-[9px] sm:text-[11px] uppercase font-black tracking-wider text-center leading-tight">Peça no Cardápio Web</span>
                                                </a>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))
                            ) : (
                                <div className="col-span-full py-20 text-center">
                                    <Utensils className="w-12 h-12 text-brand-light/10 mx-auto mb-4" />
                                    <p className="text-brand-light/40 font-light italic">Nenhum item encontrado para sua busca.</p>
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
