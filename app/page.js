import React from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/elchicano/Navbar.js';
import HeroSection from '@/components/elchicano/HeroSection.js';

// Lazy load non-critical sections for better performance
const AboutSection = dynamic(() => import('@/components/elchicano/AboutSection.js'), {
    loading: () => <div className="h-screen bg-brand-base" />,
});

const CTASection = dynamic(() => import('@/components/elchicano/CTASection.js'), {
    loading: () => <div className="min-h-[400px] bg-brand-base" />,
});

const MenuSection = dynamic(() => import('@/components/elchicano/MenuSection.js'), {
    loading: () => <div className="h-screen bg-brand-base" />,
});

const GallerySection = dynamic(() => import('@/components/elchicano/GallerySection.js'), {
    loading: () => <div className="h-screen bg-brand-base" />,
});

const LocationsSection = dynamic(() => import('@/components/elchicano/LocationsSection.js'), {
    loading: () => <div className="h-screen bg-brand-base" />,
});



const Footer = dynamic(() => import('@/components/elchicano/Footer.js'), {
    loading: () => <div className="min-h-[300px] bg-brand-base" />,
});

export default function Home() {
    return (
        <div className="bg-brand-base min-h-screen">
            <Navbar />

            <main id="main-content">
                <HeroSection />

                <div id="about">
                    <AboutSection />
                </div>

                <MenuSection />

                <GallerySection />


                <LocationsSection />



                <div id="contact">
                    <CTASection />
                </div>
            </main>


            <Footer />
        </div>
    );
}
