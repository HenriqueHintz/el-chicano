'use client';

import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] via-[#2d1810] to-[#1a1a1a]">
            <div className="text-center p-8">
                <h1 className="text-6xl font-bold text-amber-500 mb-4">404</h1>
                <h2 className="text-2xl text-white mb-6">Página não encontrada</h2>
                <p className="text-white/60 mb-8">
                    Desculpe, a página que você está procurando não existe.
                </p>
                <Link
                    href="/"
                    className="inline-block px-6 py-3 bg-amber-500 text-black font-semibold rounded-lg hover:bg-amber-400 transition-colors"
                >
                    Voltar ao Início
                </Link>
            </div>
        </div>
    );
}
