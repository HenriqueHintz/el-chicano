'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { siteData } from '@/lib/siteData';

export default function FloatingCTA() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling 300px
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-24 right-6 z-40 lg:bottom-6 lg:right-6"
                >
                    <a
                        href={siteData.social.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-full shadow-lg shadow-green-600/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-black"
                        aria-label="Fazer reserva rápida via WhatsApp"
                    >
                        <MessageCircle className="w-5 h-5" aria-hidden="true" />
                        <span className="text-sm font-bold hidden sm:inline">Reserve Agora</span>
                        <span className="text-sm font-bold sm:hidden">Reservar</span>
                    </a>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
