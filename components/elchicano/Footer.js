'use client';

import React, { useState } from 'react';
import { Instagram, Facebook, ChevronRight, MapPin } from 'lucide-react';
import DigitalPresenceModal from './DigitalPresenceModal';

export default function Footer() {
  const [isDigitalPresenceOpen, setIsDigitalPresenceOpen] = useState(false);

  return (
    <footer className="bg-[#050505] pt-20 pb-12 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-start items-start gap-16 lg:gap-32 mb-16">
          {/* Brand Identity */}
          <div className="max-w-md">
            <div className="flex flex-col">
              <h2 className="font-serif text-3xl text-white tracking-tight">EL CHICANO</h2>
              <span className="text-brand-accent text-xs tracking-[0.4em] uppercase font-bold mt-1">Pocket</span>
            </div>
            <p className="mt-6 text-gray-500 text-sm font-light leading-relaxed">
              Autêntica culinária mexicana com alma, arte e sabor. <br className="hidden md:block" />
              Uma experiência gastronômica única onde cada detalhe conta uma história.
            </p>
            <div className="flex items-center gap-4 mt-8">
              <a href="https://instagram.com/elchicanopocket" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-500 hover:bg-brand-accent hover:text-brand-base transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-500 hover:bg-brand-accent hover:text-brand-base transition-all duration-300">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Minimal Links */}
          <div className="flex flex-col sm:flex-row gap-12 sm:gap-24">
            <div>
              <h4 className="text-brand-accent text-[10px] tracking-[0.3em] uppercase font-black mb-6">Links Rápidos</h4>
              <ul className="space-y-3">
                {[
                  { name: 'Início', href: '#top' },
                  { name: 'Sobre', href: '#about' },
                  { name: 'Menu', href: '#menu' },
                  { name: 'Unidades', href: '#locations' },
                  { name: 'Contato', href: '#contact' }
                ].map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-500 hover:text-white flex items-center gap-2 group transition-colors text-xs font-light">
                      <ChevronRight className="w-2.5 h-2.5 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-brand-accent" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-brand-accent text-[10px] tracking-[0.3em] uppercase font-black mb-6">Plataformas</h4>
              <button 
                onClick={() => setIsDigitalPresenceOpen(true)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 text-white text-[10px] tracking-widest uppercase font-bold hover:bg-white hover:text-black transition-all duration-300"
              >
                <MapPin className="w-3 h-3" />
                Links Úteis
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Developer Credit */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-gray-600 text-[9px] tracking-widest font-medium uppercase">
              © 2024 EL CHICANO POCKET. TODOS OS DIREITOS RESERVADOS.
            </p>
            <p className="text-gray-800 text-[9px] tracking-[0.4em] uppercase hidden md:block">
              Mexican Soul
            </p>
          </div>

          <a 
            href="https://www.instagram.com/henriquehtz/?hl=pt-br" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-4 px-6 py-3 bg-white/[0.03] border border-white/5 hover:border-brand-accent/30 rounded-2xl transition-all duration-500 hover:bg-white/[0.05]"
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-brand-accent transition-colors duration-500">
              <img 
                src="/images/foto de perfil.jpg" 
                alt="Henrique Hintz" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-gray-500 text-[9px] tracking-widest uppercase font-bold group-hover:text-brand-accent transition-colors">Desenvolvedor</span>
              <span className="text-white text-xs font-serif tracking-wide">Created by Henrique Hintz</span>
              <span className="text-brand-accent text-[10px] tracking-wider font-bold mt-0.5">@henriquehtz</span>
            </div>
          </a>

          <div className="flex items-center gap-6 group">
            <div className="h-px w-12 bg-white/5 group-hover:w-16 group-hover:bg-brand-accent/30 transition-all duration-500 hidden md:block" />
            <p className="text-gray-700 group-hover:text-gray-400 transition-colors text-[9px] tracking-[0.4em] uppercase">
              Florianópolis | Laguna
            </p>
          </div>
        </div>
      </div>

      <DigitalPresenceModal
        isOpen={isDigitalPresenceOpen}
        onClose={() => setIsDigitalPresenceOpen(false)}
      />
    </footer>
  );
}