'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Menu, Calendar, ShoppingCart } from 'lucide-react';
import { siteData } from '@/lib/siteData';
import { useCart } from '@/contexts/CartContext';

export default function MobileQuickActions() {
    const { toggleCart, cartCount } = useCart();

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 lg:hidden w-[95%] max-w-[440px]">
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', damping: 20, stiffness: 100, delay: 1 }}
                className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-full p-2 flex items-center justify-between shadow-2xl shadow-orange-600/20"
            >
                <a
                    href="#menu"
                    className="flex-1 flex flex-col items-center justify-center py-3 px-2 text-white/70 hover:text-orange-500 transition-colors active:bg-white/10 rounded-lg min-h-[48px] touch-manipulation"
                    aria-label="Ver cardápio completo"
                >
                    <Menu className="w-5 h-5 mb-1" aria-hidden="true" />
                    <span className="text-[10px] uppercase tracking-widest font-bold">Cardápio</span>
                </a>

                <div className="w-[1px] h-8 bg-white/10 mx-1" />

                <a
                    href={siteData.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-[1.3] flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 active:bg-green-800 text-white py-3 px-4 rounded-full shadow-lg shadow-green-600/40 animate-pulse min-h-[48px] touch-manipulation transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-black"
                    aria-label="Fazer reserva via WhatsApp (abre em nova aba)"
                >
                    <Calendar className="w-4 h-4" aria-hidden="true" />
                    <span className="text-xs uppercase tracking-widest font-black">Reservar</span>
                </a>

                <div className="w-[1px] h-8 bg-white/10 mx-1" />

                <a
                    href={siteData.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex flex-col items-center justify-center py-3 px-2 text-white/70 hover:text-green-500 transition-colors active:bg-white/10 rounded-lg min-h-[48px] touch-manipulation"
                    aria-label="Falar via WhatsApp (abre em nova aba)"
                >
                    <MessageCircle className="w-5 h-5 mb-1" aria-hidden="true" />
                    <span className="text-[10px] uppercase tracking-widest font-bold">WhatsApp</span>
                </a>

                <div className="w-[1px] h-8 bg-white/10 mx-1" />

                {/* Cart Button */}
                <button
                    onClick={toggleCart}
                    className="flex-1 flex flex-col items-center justify-center py-3 px-2 text-white/70 hover:text-amber-500 transition-colors active:bg-white/10 rounded-lg min-h-[48px] touch-manipulation relative"
                    aria-label={`Ver carrinho, ${cartCount} itens`}
                >
                    <div className="relative">
                        <ShoppingCart className="w-5 h-5 mb-1" aria-hidden="true" />
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 w-4 h-4 bg-red-600 rounded-full flex items-center justify-center text-[8px] font-bold text-white border border-black">
                                {cartCount}
                            </span>
                        )}
                    </div>
                    <span className="text-[10px] uppercase tracking-widest font-bold">Carrinho</span>
                </button>
            </motion.div>
        </div>
    );
}
