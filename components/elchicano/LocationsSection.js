'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { MapPin, Phone, Clock, MessageCircle, Navigation, Wifi, Beer, Wine, Dog, Accessibility, Car, UtensilsCrossed, Users, Smartphone } from 'lucide-react';
import DigitalPresenceModal from './DigitalPresenceModal';

const locations = [
  {
    id: 'centro',
    name: 'Centro - Florianópolis',
    address: 'Rua das Palmeiras, 123',
    city: 'Centro, Florianópolis - SC',
    phone: '+55 (48) 99932-6792',
    whatsapp: 'https://api.whatsapp.com/send?phone=5548999326792',
    coordinates: [-27.5872762, -48.5433644],
    hours: [
      'Terça à Quinta: 18h - 00h',
      'Sexta e Sábado: 18h - 02h',
      'Domingo: 12h - 22h',
      'Segunda: Fechado'
    ],
    googleMaps: 'https://www.google.com/maps/place/El+Chicano+Pocket/@-27.5872762,-48.5433644,15z/data=!4m6!3m5!1s0x952739d6ba408363:0x34ef4b90b468f567!8m2!3d-27.5872762!4d-48.5433644!16s%2Fg%2F11sdy_1gy_',
    image: '/images/locations/floripa-interior.jpg',
    features: [
      { icon: Accessibility, label: 'Acessibilidade completa' },
      { icon: Wifi, label: 'Wi-Fi gratuito' },
      { icon: Beer, label: 'Ótima seleção de cervejas' },
      { icon: Wine, label: 'Carta de vinhos e coquetéis' },
      { icon: Dog, label: 'Pet friendly' },
      { icon: Car, label: 'Estacionamento gratuito na rua' },
      { icon: UtensilsCrossed, label: 'Almoço, jantar e happy hour' },
      { icon: Users, label: 'Aceita reservas' },
    ],
    services: [
      'Entrega',
      'Para viagem',
      'Refeição no local',
      'Bar no local',
      'Banheiro com acessibilidade',
      'Entrada com acessibilidade',
      'Estacionamento acessível',
      'Banheiro de gênero neutro',
      'Aceita cartões',
      'Pagamento por NFC',
      'Bom para grupos',
      'Bom para crianças',
    ]
  },
  {
    id: 'laguna',
    name: 'Laguna',
    address: 'R. Joana Mussi',
    city: 'Laguna - SC, 88790-000',
    phone: '+55 (48) 99909-5712',
    whatsapp: 'https://api.whatsapp.com/send?phone=5548997887816&text=Olá, gostaria de fazer uma reserva no El Chicano Pocket Laguna',
    coordinates: [-28.4974191, -48.7565431],
    hours: [
      'Terça à Quinta: 18h - 00h',
      'Sexta e Sábado: 18h - 02h',
      'Domingo: 12h - 22h',
      'Segunda: Fechado'
    ],
    googleMaps: 'https://www.google.com/maps/search/R.+Joana+Mussi,+Laguna,+SC,+88790-000',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070',
    features: [
      { icon: Accessibility, label: 'Acessibilidade' },
      { icon: Wifi, label: 'Wi-Fi gratuito' },
      { icon: Beer, label: 'Cervejas artesanais' },
      { icon: Wine, label: 'Drinks e coquetéis' },
      { icon: Dog, label: 'Pet friendly' },
      { icon: Car, label: 'Estacionamento na rua' },
      { icon: UtensilsCrossed, label: 'Jantar e happy hour' },
      { icon: Users, label: 'Aceita reservas' },
    ]
  }
];

function LocationCard({ location, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group flex flex-col bg-[#080808] border border-white/5 rounded-3xl overflow-hidden hover:border-brand-accent/20 transition-all duration-500 shadow-2xl"
    >
      {/* Minimalist Image Header */}
      <div className="relative h-64 sm:h-72 w-full overflow-hidden shrink-0">
        <img
          src={location.image}
          alt={location.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
        />

        
      </div>


      {/* Content Body */}
      <div className="p-6 sm:p-8 flex flex-col flex-grow">
        <div className="mb-6">
          <h3 className="text-2xl md:text-3xl font-serif text-white mb-2">{location.name}</h3>
          <p className="text-gray-400 font-light flex items-center gap-2 text-sm md:text-base">
            <MapPin className="w-4 h-4 text-brand-accent shrink-0" />
            {location.address}
          </p>
        </div>

        {/* Minimalist Ghost Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-auto pt-6 border-t border-white/5">
          <a
            href={location.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 border border-emerald-500/30 bg-emerald-500/5 hover:bg-emerald-500 text-emerald-500 hover:text-white rounded-xl transition-all duration-300 text-[11px] tracking-wider uppercase font-bold"
            onClick={(e) => e.stopPropagation()}
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
          <a
            href={location.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white text-white hover:text-black rounded-xl transition-all duration-300 text-[11px] tracking-wider uppercase font-bold"
            onClick={(e) => e.stopPropagation()}
          >
            <Navigation className="w-4 h-4" />
            Rotas
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function LocationsSection() {
  const [activeLocation, setActiveLocation] = useState(locations[0]);
  const [isPresenceOpen, setIsPresenceOpen] = useState(false);
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="locations" className="py-24 md:py-32 bg-brand-base">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-brand-accent text-sm tracking-[0.3em] uppercase font-bold">Nossas Unidades</span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-7xl font-serif text-brand-soft">
            Onde nos encontrar
          </h2>
          <div className="w-24 h-1 bg-brand-accent mx-auto mt-6 shadow-glow-accent"></div>
          <p className="mt-8 text-brand-light/70 max-w-2xl mx-auto font-light text-lg">
            Duas unidades para você curtir a melhor experiência mexicana em Santa Catarina
          </p>
        </motion.div>

        {/* Locations Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {locations.map((location, index) => (
            <LocationCard
              key={location.id}
              location={location}
              index={index}
            />
          ))}
        </div>

        <DigitalPresenceModal
          isOpen={isPresenceOpen}
          onClose={() => setIsPresenceOpen(false)}
        />
      </div>
    </section>
  );
}