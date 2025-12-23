'use client';

import React, { useState } from 'react';
import { ShoppingBag, Check } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function AddToCartButton({ item, className = "" }) {
    const { addToCart } = useCart();
    const [isAdded, setIsAdded] = useState(false);

    const handleAdd = (e) => {
        e.stopPropagation(); // Prevent opening modal if clicking card
        addToCart(item);

        // Show feedback
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    return (
        <button
            onClick={handleAdd}
            className={`relative overflow-hidden group flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg transition-all active:scale-95 ${className}`}
            aria-label={`Adicionar ${item.name} ao carrinho`}
        >
            <AnimatePresence mode="wait">
                {isAdded ? (
                    <motion.div
                        key="check"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="flex items-center gap-2"
                    >
                        <Check className="w-4 h-4" />
                        <span className="text-sm font-medium">Adicionado</span>
                    </motion.div>
                ) : (
                    <motion.div
                        key="cart"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="flex items-center gap-2"
                    >
                        <ShoppingBag className="w-4 h-4" />
                        <span className="text-sm font-medium">Adicionar</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </button>
    );
}
