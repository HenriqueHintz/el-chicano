'use client';

import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/contexts/CartContext';

export default function CartButton() {
    const { toggleCart, cartCount } = useCart();

    return (
        <AnimatePresence>
            {cartCount > 0 && (
                <motion.button
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleCart}
                    className="fixed z-50 bottom-10 right-10 w-16 h-16 bg-amber-600 rounded-full shadow-[0_0_20px_rgba(217,119,6,0.5)] hidden lg:flex items-center justify-center text-white border-2 border-amber-400 hover:bg-amber-500 transition-colors"
                    aria-label={`Ver carrinho, ${cartCount} itens`}
                >
                    <div className="relative">
                        <ShoppingCart className="w-7 h-7" />
                        <span className="absolute -top-3 -right-3 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-xs font-bold border-2 border-bg-oled-black">
                            {cartCount}
                        </span>
                    </div>
                </motion.button>
            )}
        </AnimatePresence>
    );
}
