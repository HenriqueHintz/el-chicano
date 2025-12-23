'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Shield, Award, Clock, Users, MapPin } from 'lucide-react';

export default function TrustIndicators() {
    const indicators = [
        {
            icon: Star,
            title: '5.0/5 estrelas',
            description: 'Avaliação dos clientes',
            color: 'text-yellow-500'
        },
        {
            icon: Shield,
            title: 'Seguro & Higiênico',
            description: 'Certificado de qualidade',
            color: 'text-green-500'
        },
        {
            icon: Award,
            title: 'Premiado',
            description: 'Melhor Mexicano 2024',
            color: 'text-orange-500'
        },
        {
            icon: Clock,
            title: 'Atendimento Rápido',
            description: 'Máximo 15 minutos',
            color: 'text-blue-500'
        },
        {
            icon: Users,
            title: '+1000 clientes',
            description: 'Satisfeitos mensalmente',
            color: 'text-purple-500'
        },
        {
            icon: MapPin,
            title: '2 Unidades',
            description: 'Florianópolis & Laguna',
            color: 'text-red-500'
        }
    ];

    return (
        <section className="py-16 bg-neutral-950 border-y border-white/5">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {indicators.map((indicator, index) => {
                        const IconComponent = indicator.icon;
                        return (
                            <motion.div
                                key={indicator.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="text-center group"
                            >
                                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors mb-4`}>
                                    <IconComponent className={`w-8 h-8 ${indicator.color}`} />
                                </div>
                                <h3 className="text-white font-bold text-sm mb-1">
                                    {indicator.title}
                                </h3>
                                <p className="text-neutral-400 text-xs leading-tight">
                                    {indicator.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Additional Trust Signals */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-12 flex flex-wrap justify-center items-center gap-8 text-neutral-500 text-sm"
                >
                    <div className="flex items-center gap-2">
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                            ))}
                        </div>
                        <span>4.9/5 Google Reviews</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-green-500" />
                        <span>Certificado HACCP</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-orange-500" />
                        <span>Membro ABRALOG</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
