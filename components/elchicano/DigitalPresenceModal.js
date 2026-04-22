'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Instagram, Facebook, Globe, ShoppingBag, ExternalLink, Smartphone } from 'lucide-react';

const digitalPlatforms = [
    {
        title: 'Instagram Florianópolis',
        url: 'https://www.instagram.com/elchicanofloripa/',
        icon: Instagram,
        color: 'from-purple-600 to-pink-600',
        description: '@elchicanofloripa'
    },
    {
        title: 'Instagram Laguna',
        url: 'https://www.instagram.com/elchicanoficial/',
        icon: Instagram,
        color: 'from-purple-600 to-pink-600',
        description: '@elchicanoficial'
    },
    {
        title: 'Facebook Oficial',
        url: 'https://www.facebook.com/elchicanoficial',
        icon: Facebook,
        color: 'from-blue-600 to-blue-800',
        description: '/elchicanoficial'
    },
    {
        title: 'Cardápio Web Floripa',
        url: 'https://app.cardapioweb.com/elchicano_pocketfloripa',
        icon: Globe,
        color: 'from-[#F97316] to-[#d95800]',
        description: 'Pedido online - Floripa'
    },
    {
        title: 'iFood Floripa Centro',
        url: 'https://www.ifood.com.br/delivery/florianopolis-sc/el-chicano-pocket---mexicana-centro/cb6ad1a2-13cb-4c18-bedb-8aac8eb0c672',
        icon: ShoppingBag,
        color: 'from-red-500 to-red-700',
        description: 'Peça pelo iFood'
    },
    {
        title: 'Linktree Oficial',
        url: 'https://linktr.ee/elchicanoficial',
        icon: ExternalLink,
        color: 'from-[#F97316] to-[#d95800]',
        description: 'Todos os links'
    }
];

export default function DigitalPresenceModal({ isOpen, onClose }) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-brand-base/80 backdrop-blur-sm z-[100]"
                    />

                    {/* Modal Content */}
                    <div className="fixed inset-0 z-[101] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: 'spring', damping: 20, stiffness: 200 }}
                            className="w-full max-w-2xl"
                        >
                            <div className="bg-brand-base border border-brand-light/15 rounded-2xl shadow-2xl overflow-hidden">
                                {/* Header */}
                                <div className="flex items-center justify-between p-6 border-b border-brand-light/15 bg-brand-accent/5">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-brand-accent rounded-xl">
                                            <Smartphone className="w-5 h-5 text-brand-base" />
                                        </div>
                                        <div>
                                            <h2 className="text-xl font-serif font-bold text-brand-soft">Links</h2>
                                            <p className="text-brand-light/50 text-sm">Encontre-nos em todos os canais oficiais</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={onClose}
                                        className="p-2 text-brand-light/50 hover:text-brand-soft transition-colors rounded-lg hover:bg-brand-light/10"
                                        aria-label="Fechar"
                                    >
                                        <X className="w-6 h-6" />
                                    </button>
                                </div>

                                {/* Content */}
                                <div className="p-6 max-h-[60vh] overflow-y-auto">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {digitalPlatforms.map((platform, index) => {
                                            const IconComponent = platform.icon;
                                            return (
                                                <motion.a
                                                    key={index}
                                                    href={platform.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: index * 0.05 }}
                                                    className="group flex items-center gap-4 p-4 rounded-xl bg-brand-light/5 border border-brand-light/15 hover:border-brand-light/30 hover:bg-brand-light/10 transition-all"
                                                >
                                                    <div className={`p-3 rounded-xl bg-gradient-to-br ${platform.color} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                                                        <IconComponent className="w-5 h-5" />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <h3 className="text-brand-soft font-semibold text-sm truncate">{platform.title}</h3>
                                                        <p className="text-brand-light/40 text-xs truncate">{platform.description}</p>
                                                    </div>
                                                    <ExternalLink className="w-4 h-4 text-brand-light/30 group-hover:text-brand-accent transition-colors flex-shrink-0" />
                                                </motion.a>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Footer */}
                                <div className="p-4 border-t border-brand-light/15 bg-brand-light/5">
                                    <p className="text-center text-brand-light/40 text-xs">
                                        🌮 Siga-nos para novidades, promoções e mais!
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
