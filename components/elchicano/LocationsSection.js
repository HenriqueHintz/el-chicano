'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { MapPin, Phone, Clock, MessageCircle, Navigation, Wifi, Beer, Wine, Dog, Accessibility, Car, UtensilsCrossed, Users } from 'lucide-react';

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
      'Ter - Qui: 18h - 00h',
      'Sex - Sáb: 18h - 02h',
      'Dom: 12h - 22h',
      'Seg: Fechado'
    ],
    googleMaps: 'https://www.google.com/maps/place/El+Chicano+Pocket/@-27.5872762,-48.5433644,15z/data=!4m6!3m5!1s0x952739d6ba408363:0x34ef4b90b468f567!8m2!3d-27.5872762!4d-48.5433644!16s%2Fg%2F11sdy_1gy_',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070',
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
      'Ter - Qui: 18h - 00h',
      'Sex - Sáb: 18h - 02h',
      'Dom: 12h - 22h',
      'Seg: Fechado'
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

function LocationCard({ location, isActive, onClick, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      onClick={onClick}
      className={`group cursor-pointer transition-all duration-300 ${isActive ? 'ring-2 ring-amber-600' : ''
        }`}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={location.image}
          alt={location.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Badge */}
        <div className="absolute top-4 right-4 px-3 py-1 bg-amber-600 text-white text-xs tracking-wider uppercase">
          {location.id}
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-serif text-white mb-2">{location.name}</h3>
          <p className="text-white/80 text-sm flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            {location.address}
          </p>
        </div>
      </div>

      {/* Info */}
      <div className="bg-neutral-900 p-6 space-y-4">
        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-3 text-neutral-400">
            <Phone className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
            <a href={`tel:${location.phone}`} className="hover:text-amber-400 transition-colors">
              {location.phone}
            </a>
          </div>

          <div className="flex items-start gap-3 text-neutral-400">
            <Clock className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
            <div>
              {location.hours.map((hour, i) => (
                <p key={i}>{hour}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Features - Only for Centro */}
        {location.features && (
          <div className="pt-4 border-t border-neutral-800">
            <h4 className="text-xs uppercase tracking-wider text-neutral-500 mb-3">Destaques</h4>
            <div className="grid grid-cols-2 gap-2">
              {location.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-neutral-400">
                  <feature.icon className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                  <span>{feature.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Services - Only for Centro */}
        {location.services && (
          <div className="pt-4 border-t border-neutral-800">
            <h4 className="text-xs uppercase tracking-wider text-neutral-500 mb-3">Serviços</h4>
            <div className="flex flex-wrap gap-2">
              {location.services.slice(0, 6).map((service, i) => (
                <span key={i} className="px-2 py-1 bg-neutral-800 text-neutral-400 text-xs rounded">
                  {service}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-2 pt-4 border-t border-neutral-800">
          <a
            href={location.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-green-600 hover:bg-green-700 text-white text-xs tracking-wider uppercase transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>

          <a
            href={location.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-neutral-700 hover:border-amber-600 text-neutral-300 hover:text-amber-400 text-xs tracking-wider uppercase transition-all"
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
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="locations" className="py-24 md:py-32 bg-black">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-amber-500 text-sm tracking-[0.3em] uppercase">Nossas Unidades</span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-serif text-white">
            Onde nos encontrar
          </h2>
          <p className="mt-6 text-neutral-400 max-w-2xl mx-auto">
            Duas unidades para você curtir a melhor experiência mexicana em Santa Catarina
          </p>
        </motion.div>

        {/* Locations Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {locations.map((location, index) => (
            <LocationCard
              key={location.id}
              location={location}
              isActive={activeLocation.id === location.id}
              onClick={() => setActiveLocation(location)}
              index={index}
            />
          ))}
        </div>


      </div>
    </section>
  );
}