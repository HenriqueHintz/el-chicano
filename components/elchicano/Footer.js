'use client';

import React, { useState } from 'react';
import { Instagram, Facebook, MapPin, Phone, Clock, Mail, X, Globe, ExternalLink, Smartphone, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import DigitalPresenceModal from './DigitalPresenceModal';

export default function Footer() {
  const [isDigitalPresenceOpen, setIsDigitalPresenceOpen] = useState(false);
  return (
    <footer className="bg-black pt-20 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-neutral-800">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-3xl text-white">EL CHICANO</h3>
            <p className="text-amber-400 text-sm tracking-[0.3em] uppercase mt-1">Pocket</p>
            <p className="mt-6 text-neutral-500 text-sm leading-relaxed">
              Autêntica culinária mexicana com alma, arte e sabor. Uma experiência gastronômica única.
            </p>

            {/* Digital Presence Button */}
            <div className="flex gap-4 mt-6">
              <button
                onClick={() => setIsDigitalPresenceOpen(true)}
                className="px-5 py-2.5 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white text-xs tracking-[0.15em] uppercase transition-all duration-300 shadow-[0_0_15px_rgba(251,146,60,0.3)] hover:shadow-[0_0_20px_rgba(251,146,60,0.5)] flex items-center gap-2"
              >
                <MapPin className="w-4 h-4" />
                <span>Plataformas Digitais</span>
              </button>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white text-sm tracking-[0.2em] uppercase mb-6">Menu</h4>
            <ul className="space-y-3">
              {['Entradas', 'Tacos', 'Pratos Principais', 'Sobremesas', 'Drinks', 'Carta de Vinhos'].map((item) => (
                <li key={item}>
                  <a href="#menu" className="text-neutral-500 hover:text-amber-400 text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="text-white text-sm tracking-[0.2em] uppercase mb-6">El Chicano</h4>
            <ul className="space-y-3">
              {['Sobre Nós', 'Reservas', 'Eventos Privados', 'Música ao Vivo', 'Trabalhe Conosco', 'Contato'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-neutral-500 hover:text-amber-400 text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm tracking-[0.2em] uppercase mb-6">Contato</h4>
            <ul className="space-y-4">
              <li>
                <p className="text-neutral-400 text-xs uppercase tracking-wider mb-2">Centro - Florianópolis</p>
                <div className="flex items-start gap-3 mb-2">
                  <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-500 text-sm">
                    Rua das Palmeiras, 123<br />
                    Centro, Florianópolis - SC
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  <a href="tel:+5548999326792" className="text-neutral-500 hover:text-amber-400 text-sm transition-colors">
                    (48) 99932-6792
                  </a>
                </div>
              </li>
              <li className="pt-3 border-t border-neutral-800">
                <p className="text-neutral-400 text-xs uppercase tracking-wider mb-2">Laguna</p>
                <div className="flex items-start gap-3 mb-2">
                  <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-500 text-sm">
                    R. Joana Mussi<br />
                    Laguna - SC, 88790-000
                  </span>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <Phone className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  <a href="tel:+5548999095712" className="text-neutral-500 hover:text-amber-400 text-sm transition-colors">
                    (48) 99909-5712
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  <a href="tel:+5548997887816" className="text-neutral-500 hover:text-amber-400 text-sm transition-colors">
                    (48) 9978-7816 (WhatsApp)
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3 pt-3 border-t border-neutral-800">
                <Mail className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <a href="mailto:elchicanoficial@gmail.com" className="text-neutral-500 hover:text-amber-400 text-sm transition-colors">
                  elchicanoficial@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-500 text-sm">
                  Ter - Qui: 18h - 00h<br />
                  Sex - Sáb: 18h - 02h<br />
                  Dom: 12h - 22h
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-600 text-xs">
            © 2024 El Chicano Pocket. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-neutral-600 hover:text-neutral-400 text-xs transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-neutral-600 hover:text-neutral-400 text-xs transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>

      {/* Digital Presence Modal */}
      <DigitalPresenceModal
        isOpen={isDigitalPresenceOpen}
        onClose={() => setIsDigitalPresenceOpen(false)}
      />
    </footer>
  );
}