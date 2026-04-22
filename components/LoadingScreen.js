'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulate loading progress
        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    return 100;
                }
                // Faster initial progress, slower at the end
                const increment = prev < 60 ? 15 : prev < 90 ? 8 : 3;
                return Math.min(prev + increment, 100);
            });
        }, 200);

        // Wait for page to be fully loaded
        const handleLoad = () => {
            // Ensure minimum loading time for smooth UX
            setTimeout(() => {
                setProgress(100);
                setTimeout(() => setIsLoading(false), 500);
            }, 1000);
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
        }

        return () => {
            clearInterval(progressInterval);
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-base"
                >
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <div
                            className="w-full h-full"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30z' fill='%23F97316' fill-opacity='0.5'/%3E%3C/svg%3E")`,
                                backgroundSize: '40px 40px',
                            }}
                        />
                    </div>

                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-12 text-center"
                    >
                        <h1 className="font-serif text-5xl md:text-6xl text-brand-soft tracking-tight">
                            EL CHICANO
                        </h1>
                        <div className="h-[2px] bg-brand-accent mx-auto mt-2 shadow-glow-accent w-24" />
                        <p className="text-brand-accent text-xl uppercase tracking-[0.3em] mt-2">
                            Pocket
                        </p>
                    </motion.div>

                    {/* Progress Bar Container */}
                    <div className="relative w-full max-w-md px-8 mb-8">
                        {/* Progress Bar Track */}
                        <div className="relative h-3 bg-brand-light/10 rounded-full overflow-hidden backdrop-blur-sm">
                            {/* Progress Bar Fill */}
                            <motion.div
                                initial={{ width: '0%' }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.3, ease: 'easeOut' }}
                                className="h-full bg-brand-accent relative"
                            >
                                {/* Glow effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                            </motion.div>
                        </div>
                    </div>

                    {/* Loading Text */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-center"
                    >
                        <p className="text-brand-light/50 text-sm tracking-[0.3em] uppercase">
                            Carregando experiência
                        </p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="text-brand-accent/70 text-xs mt-2"
                        >
                            {progress}%
                        </motion.p>
                    </motion.div>

                    {/* Optional cheese drip animation at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-accent/20" />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
