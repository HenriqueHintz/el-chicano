'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Menu, Calendar } from 'lucide-react';
import { siteData } from '@/lib/siteData';

export default function MobileQuickActions() {
    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 lg:hidden w-[90%] max-w-[400px]">
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', damping: 20, stiffness: 100, delay: 1 }}
                className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-full p-2 flex items-center justify-between shadow-2xl shadow-orange-600/20"
            >
                <a
                    href="#menu"
                    className="flex-1 flex flex-col items-center justify-center py-2 text-white/70 hover:text-orange-500 transition-colors"
                >
                    <Menu className="w-5 h-5 mb-1" />
                    <span className="text-[10px] uppercase tracking-widest font-bold">Cardápio</span>
                </a>

                <div className="w-[1px] h-8 bg-white/10 mx-2" />

                <a
                    href={siteData.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-[1.5] flex items-center justify-center gap-2 bg-green-600 text-white py-3 px-6 rounded-full shadow-lg shadow-green-600/40 animate-pulse"
                >
                    <Calendar className="w-4 h-4" />
                    <span className="text-xs uppercase tracking-widest font-black">Reservar</span>
                </a>

                <div className="w-[1px] h-8 bg-white/10 mx-2" />

                <a
                    href={siteData.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex flex-col items-center justify-center py-2 text-white/70 hover:text-green-500 transition-colors"
                >
                    <MessageCircle className="w-5 h-5 mb-1" />
                    <span className="text-[10px] uppercase tracking-widest font-bold">WhatsApp</span>
                </a>
            </motion.div>
        </div>
    );
}
