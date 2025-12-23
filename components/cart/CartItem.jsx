'use client';

import React from 'react';
import Image from 'next/image';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { formatCurrency } from '@/lib/cartUtils';

export default function CartItem({ item }) {
    const { updateQuantity, removeFromCart } = useCart();

    return (
        <div className="flex gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-colors">
            {/* Image */}
            <div className="relative w-20 h-20 flex-shrink-0 rounded-md overflow-hidden bg-black/50">
                <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                    <h3 className="text-white font-medium text-sm line-clamp-2">{item.name}</h3>
                    <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-white/40 hover:text-red-500 transition-colors p-1"
                        aria-label="Remover item"
                    >
                        <Trash2 className="w-4 h-4" />
                    </button>
                </div>

                <div className="flex justify-between items-end mt-2">
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 bg-black/30 rounded-lg p-1 border border-white/10">
                        <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 text-amber-500 hover:text-amber-400 transition-colors"
                            aria-label="Diminuir quantidade"
                        >
                            <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-bold w-4 text-center text-amber-500">{item.quantity}</span>
                        <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 text-amber-500 hover:text-amber-400 transition-colors"
                            aria-label="Aumentar quantidade"
                        >
                            <Plus className="w-3 h-3" />
                        </button>
                    </div>

                    {/* Price */}
                    <div className="text-right">
                        <p className="text-amber-500 font-bold text-sm">
                            R$ {formatCurrency(parseFloat(item.price.replace('.', '').replace(',', '.')) * item.quantity)}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
