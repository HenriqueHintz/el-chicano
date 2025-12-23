'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, X, Smartphone } from 'lucide-react';
import DigitalPresenceModal from './DigitalPresenceModal';


export default function DigitalPresenceButton() {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted || !isVisible) return null;

    return (
        <>
            {/* Floating Button - Above WhatsApp */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.5, type: 'spring', damping: 15 }}
                className="hidden lg:flex fixed bottom-28 left-6 z-50 items-start"
            >
                <button
                    onClick={() => setIsOpen(true)}
                    className="flex items-center gap-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-5 py-3 rounded-full shadow-lg shadow-orange-600/30 border border-amber-400/30 hover:shadow-orange-600/50 transition-all group"
                    aria-label="Ver plataformas digitais do El Chicano"
                >
                    <MapPin className="w-5 h-5 group-hover:animate-bounce" />
                    <span className="font-bold text-sm uppercase tracking-wide hidden sm:inline">Plataformas Digitais</span>
                </button>

                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute -top-2 -right-2 bg-black border border-white/20 text-white rounded-full p-1 shadow-lg hover:bg-red-600 transition-colors"
                    aria-label="Fechar botão flutuante"
                >
                    <X className="w-3 h-3" />
                </button>
            </motion.div>

            {/* Modal */}
            <DigitalPresenceModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </>
    );
}
