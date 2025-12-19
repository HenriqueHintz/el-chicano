'use client';

import React, { useState, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import { Search, Utensils, Info } from 'lucide-react';
import { menuCategories, menuItems } from '@/lib/siteData';

export default function MenuSection() {
    const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);
    const [searchTerm, setSearchTerm] = useState('');
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

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
                                    setSearchTerm('');
                                }}
                                className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-bold tracking-widest uppercase transition-all duration-300 border ${activeCategory === category.id
                                    ? 'bg-orange-600 border-orange-600 text-white shadow-[0_0_20px_rgba(255,140,0,0.4)]'
                                    : 'bg-white/5 border-white/10 text-white/60 hover:border-white/30 hover:text-white'
                                    }`}
                            >
                                <span className="mr-2">{category.icon}</span>
                                {category.name}
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* Menu Items Grid */}
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
                                    className="group relative bg-[#0A0A0A] border border-white/5 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-600/10"
                                >
                                    {/* Item Image */}
                                    {item.image && (
                                        <div className="relative h-56 overflow-hidden">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                quality={85}
                                                priority={index < 2}
                                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60"></div>

                                            {/* Price Badge */}
                                            <div className="absolute top-4 right-4 bg-orange-600 text-white px-4 py-2 rounded-full font-black text-sm shadow-xl">
                                                R$ {item.price}
                                            </div>

                                            {item.trending && (
                                                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full font-black text-[10px] uppercase tracking-tighter animate-bounce shadow-[0_0_10px_rgba(22,163,74,0.5)]">
                                                    Popular 🔥
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {/* Content */}
                                    <div className="p-8">
                                        <div className="flex justify-between items-start mb-3">
                                            <h3 className="font-serif text-2xl text-white group-hover:text-orange-500 transition-colors">
                                                {item.name}
                                            </h3>
                                        </div>

                                        {item.description && (
                                            <p className="text-white/40 text-sm leading-relaxed mb-6 font-light line-clamp-3">
                                                {item.description}
                                            </p>
                                        )}

                                        <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                                            <button className="flex-1 bg-white/5 hover:bg-green-600 text-white text-[10px] uppercase tracking-[0.2em] font-black py-3 rounded-lg transition-all border border-white/10 hover:border-green-600">
                                                Pedir Agora
                                            </button>
                                            <button className="p-3 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-all text-white/40 hover:text-white">
                                                <Info className="w-4 h-4" />
                                            </button>
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
        </section>
    );
}
