import React from 'react';
import Navbar from '@/components/elchicano/Navbar.js';
import Footer from '@/components/elchicano/Footer.js';
import WhatsAppButton from '@/components/WhatsAppButton';
import FloatingCTA from '@/components/FloatingCTA.js';
import BlogSection from '@/components/BlogSection.js';

export const metadata = {
    title: 'Blog - El Chicano Pocket | Dicas de Culinária Mexicana',
    description: 'Descubra segredos da culinária mexicana, receitas autênticas, cultura e dicas para uma experiência gastronômica única no El Chicano Pocket.',
    keywords: 'blog culinária mexicana, receitas mexicanas, cultura mexicana, tacos, burritos, margarita, el chicano pocket, gastronomia',
    openGraph: {
        title: 'Blog Gastronômico - El Chicano Pocket',
        description: 'Descubra os segredos da culinária mexicana autêntica',
        type: 'website',
    },
};

export default function BlogPage() {
    return (
        <div className="bg-black min-h-screen">
            <Navbar />
            <main>
                <BlogSection />
            </main>
            <FloatingCTA />
            <Footer />
            <WhatsAppButton />
        </div>
    );
}
