'use client';

import React from 'react';
import { X, ShoppingBag, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/contexts/CartContext';
import CartItem from './CartItem';
import { formatCurrency, generateWhatsAppLink } from '@/lib/cartUtils';

export default function CartDrawer() {
    const { isCartOpen, setIsCartOpen, cartItems, cartTotal, clearCart } = useCart();

    const handleCheckout = () => {
        const whatsappUrl = generateWhatsAppLink(cartItems, cartTotal);
        window.open(whatsappUrl, '_blank');
        // Optional: clearCart() here if you want to empty it immediately, 
        // but usually better to let user keep it in case they come back 
        // or want to add more items. 
        // We can clear it or let them clear it manually. 
        // Given the request, "clearing cart after send" is a good UX 
        // but risky if the popup is blocked etc.
        // Let's toggle the cart closed instead.
        setIsCartOpen(false);
    };

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsCartOpen(false)}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
                        aria-hidden="true"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-y-0 right-0 w-full max-w-md bg-[#0F0F0F] border-l border-white/10 z-[70] flex flex-col shadow-2xl"
                        role="dialog"
                        aria-label="Carrinho de Compras"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-white/10">
                            <div className="flex items-center gap-3">
                                <ShoppingBag className="w-5 h-5 text-amber-500" />
                                <h2 className="text-xl font-serif font-bold text-white">Meu Pedido</h2>
                            </div>
                            <button
                                onClick={() => setIsCartOpen(false)}
                                className="p-2 text-white/50 hover:text-white transition-colors rounded-lg hover:bg-white/10"
                                aria-label="Fechar carrinho"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
                            {cartItems.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-full text-center space-y-4 opacity-50">
                                    <ShoppingBag className="w-16 h-16 text-white/20" />
                                    <p className="text-white/60 text-lg">Seu carrinho está vazio</p>
                                    <button
                                        onClick={() => setIsCartOpen(false)}
                                        className="text-amber-500 hover:text-amber-400 font-medium underline underline-offset-4"
                                    >
                                        Voltar ao menu
                                    </button>
                                </div>
                            ) : (
                                cartItems.map((item) => (
                                    <CartItem key={item.id} item={item} />
                                ))
                            )}
                        </div>

                        {/* Footer */}
                        {cartItems.length > 0 && (
                            <div className="p-6 border-t border-white/10 bg-[#161616]">
                                <div className="flex items-center justify-between mb-6">
                                    <span className="text-white/60">Total do Pedido</span>
                                    <span className="text-2xl font-bold text-amber-500">
                                        R$ {formatCurrency(cartTotal)}
                                    </span>
                                </div>

                                <div className="space-y-3">
                                    <button
                                        onClick={handleCheckout}
                                        className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all hover:scale-[1.02] shadow-lg shadow-green-900/20"
                                    >
                                        <span>Finalizar no WhatsApp</span>
                                        <ArrowRight className="w-5 h-5" />
                                    </button>

                                    <button
                                        onClick={() => { clearCart(); setIsCartOpen(false); }}
                                        className="w-full text-white/40 text-sm hover:text-red-400 transition-colors py-2"
                                    >
                                        Esvaziar carrinho
                                    </button>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
