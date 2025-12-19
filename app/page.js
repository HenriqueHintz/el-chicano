import React from 'react';
import Navbar from '@/components/elchicano/Navbar.js';
import HeroSection from '@/components/elchicano/HeroSection.js';
import AboutSection from '@/components/elchicano/AboutSection.js';
import ExperiencesSection from '@/components/elchicano/ExperiencesSection.js';
import CTASection from '@/components/elchicano/CTASection.js';
import MenuSection from '@/components/elchicano/MenuSection.js';
import GallerySection from '@/components/elchicano/GallerySection.js';
import TestimonialsSection from '@/components/elchicano/TestimonialsSection.js';
import LocationsSection from '@/components/elchicano/LocationsSection.js';
import MobileQuickActions from '@/components/elchicano/MobileQuickActions.js';
import Footer from '@/components/elchicano/Footer.js';

export default function Home() {
    return (
        <div className="bg-black min-h-screen">
            <Navbar />

            <main id="top">
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
