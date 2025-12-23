'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, ChefHat, Utensils, Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
    {
        id: 1,
        title: "O Segredo dos Tacos Autênticos Mexicanos",
        excerpt: "Descubra por que nossos tacos são diferentes de tudo que você já provou. Receitas tradicionais mexicanas com ingredientes frescos de Santa Catarina.",
        content: "Os tacos são muito mais do que um simples prato... [conteúdo completo]",
        image: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?q=80&w=1000",
        author: "Chef Rafael",
        date: "2024-12-20",
        readTime: "5 min",
        category: "Culinária",
        tags: ["tacos", "autêntico", "mexico", "receitas"],
        seoTitle: "Tacos Autênticos Mexicanos | El Chicano Pocket",
        seoDescription: "Aprenda sobre tacos mexicanos autênticos preparados com receitas tradicionais no El Chicano Pocket, Florianópolis."
    },
    {
        id: 2,
        title: "Burritos: A Arte de Embrulhar Sabores",
        excerpt: "Da rua para o prato: como transformamos uma comida de rua simples em uma experiência gastronômica premium.",
        content: "O burrito é uma obra de arte culinária... [conteúdo completo]",
        image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=1000",
        author: "Chef Rafael",
        date: "2024-12-18",
        readTime: "4 min",
        category: "Receitas",
        tags: ["burritos", "street-food", "mexico"],
        seoTitle: "Burritos Premium | El Chicano Pocket",
        seoDescription: "Descubra a arte de preparar burritos premium com ingredientes frescos e autênticos."
    },
    {
        id: 3,
        title: "Tequila vs Mezcal: Qual a Diferença?",
        excerpt: "Entenda a diferença entre tequila e mezcal, e quando usar cada um em seus drinks favoritos.",
        content: "Muitos confundem tequila com mezcal... [conteúdo completo]",
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000",
        author: "Bartender Carlos",
        date: "2024-12-15",
        readTime: "6 min",
        category: "Bebidas",
        tags: ["tequila", "mezcal", "drinks", "mexico"],
        seoTitle: "Tequila vs Mezcal | Diferenças e Usos",
        seoDescription: "Aprenda a diferença entre tequila e mezcal e como usar cada um nos melhores drinks mexicanos."
    },
    {
        id: 4,
        title: "Festival do Día de los Muertos no Brasil",
        excerpt: "Como a tradição mexicana do Dia dos Mortos se conecta com nossa cultura brasileira e culinária.",
        content: "O Día de los Muertos é uma celebração única... [conteúdo completo]",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1000",
        author: "Equipe El Chicano",
        date: "2024-12-10",
        readTime: "8 min",
        category: "Cultura",
        tags: ["dia-dos-mortos", "cultura", "tradição", "mexico"],
        seoTitle: "Día de los Muertos no Brasil | Tradição Mexicana",
        seoDescription: "Conheça a tradição do Día de los Muertos e como ela se conecta com a cultura brasileira."
    },
    {
        id: 5,
        title: "Como Escolher o Melhor Guacamole",
        excerpt: "Dicas de especialistas para identificar e preparar o guacamole perfeito em casa.",
        content: "O guacamole é mais do que apenas abacate amassado... [conteúdo completo]",
        image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=1000",
        author: "Chef Rafael",
        date: "2024-12-08",
        readTime: "3 min",
        category: "Dicas",
        tags: ["guacamole", "abacate", "mexico", "receitas"],
        seoTitle: "Guacamole Perfeito | Dicas de Preparo",
        seoDescription: "Aprenda a preparar o guacamole perfeito com dicas de chefs especializados em culinária mexicana."
    },
    {
        id: 6,
        title: "Ingredientes Essenciais da Cozinha Mexicana",
        excerpt: "Conheça os 10 ingredientes que não podem faltar em uma cozinha mexicana autêntica.",
        content: "A cozinha mexicana é rica em sabores e aromas... [conteúdo completo]",
        image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1000",
        author: "Chef Rafael",
        date: "2024-12-05",
        readTime: "7 min",
        category: "Ingredientes",
        tags: ["ingredientes", "cozinha-mexicana", "temperos", "autêntico"],
        seoTitle: "Ingredientes Essenciais da Cozinha Mexicana",
        seoDescription: "Descubra os 10 ingredientes fundamentais para uma cozinha mexicana autêntica."
    }
];

const categories = ["Todos", "Culinária", "Receitas", "Bebidas", "Cultura", "Dicas", "Ingredientes"];

export default function BlogSection() {
    const [selectedCategory, setSelectedCategory] = useState("Todos");

    const filteredPosts = selectedCategory === "Todos"
        ? blogPosts
        : blogPosts.filter(post => post.category === selectedCategory);

    return (
        <section className="py-24 md:py-32 bg-black">
            <div className="container mx-auto px-4 md:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-orange-500 text-sm tracking-[0.3em] uppercase font-bold">
                        🌶️ Blog Gastronômico
                    </span>
                    <h1 className="mt-4 text-5xl md:text-7xl font-serif text-white">
                        Sabores & <span className="text-orange-500">Histórias</span>
                    </h1>
                    <p className="mt-6 text-neutral-400 text-lg max-w-2xl mx-auto">
                        Descubra os segredos da culinária mexicana, receitas autênticas e
                        histórias que tornam cada prato uma experiência única.
                    </p>
                    <div className="w-24 h-1 bg-orange-600 mx-auto mt-8 shadow-[0_0_15px_rgba(255,140,0,0.5)]"></div>
                </motion.div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-3 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 ${
                                selectedCategory === category
                                    ? 'bg-orange-600 text-white shadow-[0_0_20px_rgba(255,140,0,0.4)]'
                                    : 'bg-white/5 border border-white/10 text-white/60 hover:border-white/30 hover:text-white'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Blog Posts Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredPosts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-neutral-900 border border-white/5 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-600/10"
                        >
                            {/* Image */}
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                                {/* Category Badge */}
                                <div className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                    {post.category}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex items-center gap-4 text-neutral-500 text-sm mb-4">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        {new Date(post.date).toLocaleDateString('pt-BR')}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        {post.readTime}
                                    </div>
                                </div>

                                <h2 className="text-xl font-serif text-white group-hover:text-orange-500 transition-colors mb-3 leading-tight">
                                    {post.title}
                                </h2>

                                <p className="text-neutral-400 text-sm leading-relaxed mb-6 line-clamp-3">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <ChefHat className="w-4 h-4 text-orange-500" />
                                        <span className="text-neutral-500 text-sm">{post.author}</span>
                                    </div>

                                    <Link
                                        href={`/blog/${post.id}`}
                                        className="group/btn flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors"
                                    >
                                        <span className="text-sm font-bold">Ler mais</span>
                                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/5">
                                    {post.tags.slice(0, 3).map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs bg-white/5 text-neutral-400 px-2 py-1 rounded-full"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mt-20 text-center bg-gradient-to-r from-orange-600/10 to-green-600/10 rounded-3xl p-12 border border-white/5"
                >
                    <Heart className="w-12 h-12 text-orange-500 mx-auto mb-6" />
                    <h3 className="text-3xl font-serif text-white mb-4">
                        Pronto para Experimentar?
                    </h3>
                    <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
                        Venha viver a experiência completa da culinária mexicana autêntica.
                        Reserve sua mesa e descubra por que somos referência em Florianópolis e Laguna.
                    </p>
                    <a
                        href="https://api.whatsapp.com/send?phone=5548999326792&text=Olá, gostaria de fazer uma reserva no El Chicano Pocket"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-green-600/30"
                    >
                        <Utensils className="w-5 h-5" />
                        Fazer Reserva Agora
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
