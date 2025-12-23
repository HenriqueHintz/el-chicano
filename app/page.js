import React from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/elchicano/Navbar.js';
import HeroSection from '@/components/elchicano/HeroSection.js';

// Lazy load non-critical sections for better performance
const AboutSection = dynamic(() => import('@/components/elchicano/AboutSection.js'), {
    loading: () => <div className="h-screen bg-black" />,
});

const ExperiencesSection = dynamic(() => import('@/components/elchicano/ExperiencesSection.js'), {
    loading: () => <div className="h-screen bg-black" />,
});

const CTASection = dynamic(() => import('@/components/elchicano/CTASection.js'), {
    loading: () => <div className="min-h-[400px] bg-black" />,
});

const MenuSection = dynamic(() => import('@/components/elchicano/MenuSection.js'), {
    loading: () => <div className="h-screen bg-black" />,
});

const GallerySection = dynamic(() => import('@/components/elchicano/GallerySection.js'), {
    loading: () => <div className="h-screen bg-black" />,
});

const TestimonialsSection = dynamic(() => import('@/components/elchicano/TestimonialsSection.js'), {
    loading: () => <div className="h-screen bg-black" />,
});

const LocationsSection = dynamic(() => import('@/components/elchicano/LocationsSection.js'), {
    loading: () => <div className="h-screen bg-black" />,
});

const MobileQuickActions = dynamic(() => import('@/components/elchicano/MobileQuickActions.js'), {
    ssr: false,
});

const Footer = dynamic(() => import('@/components/elchicano/Footer.js'), {
    loading: () => <div className="min-h-[300px] bg-black" />,
});

export default function Home() {
    return (
        <div className="bg-black min-h-screen">
            <Navbar />

            <main id="main-content">
                <HeroSection />

                <div id="about">
                    <AboutSection />
                </div>

                <div id="experiences">
                    <ExperiencesSection />
                </div>

                <MenuSection />

                <GallerySection />

                <TestimonialsSection />

                <LocationsSection />



                <div id="contact">
                    <CTASection />
                </div>
            </main>

            <MobileQuickActions />
            <Footer />
        </div>
    );
}
