export const siteData = {
    name: "El Chicano Pocket",
    tagline: "Restaurante Mexicano",
    fullTagline: "Sabores autênticos mexicanos em uma experiência única de gastronomia, arte e música",
    description: "O melhor da culinária mexicana com o toque El Chicano. Burritos, Tacos, Quesadillas e muito mais!",
    url: "https://elchicano.com.br", // Substituir pelo oficial se houver
    social: {
        instagram: "https://instagram.com/elchicanopocket",
        facebook: "https://facebook.com/elchicanopocket",
        whatsapp: "https://api.whatsapp.com/send?phone=5548999326792"
    },
    locations: [
        {
            id: 'centro',
            name: 'Centro - Florianópolis',
            address: 'Rua das Palmeiras, 123',
            city: 'Centro, Florianópolis - SC',
            phone: '+55 (48) 99932-6792',
            whatsapp: 'https://api.whatsapp.com/send?phone=5548999326792',
            coordinates: { lat: -27.5872762, lng: -48.5433644 },
            hours: [
                { days: 'Ter - Qui', time: '18h - 00h' },
                { days: 'Sex - Sáb', time: '18h - 02h' },
                { days: 'Dom', time: '12h - 22h' },
                { days: 'Seg', time: 'Fechado' }
            ],
            googleMaps: 'https://www.google.com/maps/place/El+Chicano+Pocket/@-27.5872762,-48.5433644,15z/data=!4m6!3m5!1s0x952739d6ba408363:0x34ef4b90b468f567!8m2!3d-27.5872762!4d-48.5433644!16s%2Fg%2F11sdy_1gy_',
            image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070'
        },
        {
            id: 'laguna',
            name: 'Laguna',
            address: 'R. Joana Mussi',
            city: 'Laguna - SC, 88790-000',
            phone: '+55 (48) 99909-5712',
            whatsapp: 'https://api.whatsapp.com/send?phone=5548997887816',
            coordinates: { lat: -28.4974191, lng: -48.7565431 },
            hours: [
                { days: 'Ter - Qui', time: '18h - 00h' },
                { days: 'Sex - Sáb', time: '18h - 02h' },
                { days: 'Dom', time: '12h - 22h' },
                { days: 'Seg', time: 'Fechado' }
            ],
            googleMaps: 'https://www.google.com/maps/search/R.+Joana+Mussi,+Laguna,+SC,+88790-000',
            image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070'
        }
    ],
    faq: [
        {
            question: "Vocês aceitam reservas?",
            answer: "Sim! Aceitamos reservas para ambas as unidades via WhatsApp ou telefone."
        },
        {
            question: "O restaurante é pet friendly?",
            answer: "Sim, nossas unidades são pet friendly e seu melhor amigo é muito bem-vindo!"
        },
        {
            question: "Existem opções vegetarianas?",
            answer: "Com certeza! Temos uma seção dedicada 'Session Veggie' com burritos, tacos e nachos vegetarianos."
        }
    ],
    testimonials: [
        {
            name: 'Marina Costa',
            role: 'Food Blogger',
            text: 'O melhor restaurante mexicano que já experimentei! Os tacos al pastor são autênticos e os drinks são incríveis. Recomendo para todos os amantes da culinária internacional.',
            rating: 5,
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200'
        },
        {
            name: 'Ricardo Almeida',
            role: 'Empresário',
            text: 'Fiz meu evento corporativo no El Chicano e foi um sucesso absoluto. Equipe super atenciosa e profissional. O espaço é perfeito para reuniões de negócio.',
            rating: 5,
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200'
        },
        {
            name: 'Ana Carolina Santos',
            role: 'Turista',
            text: 'Viajei de São Paulo só para conhecer o El Chicano! Os burritos são incríveis e o ambiente me transportou para o México. Experiência única!',
            rating: 5,
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200'
        },
        {
            name: 'Carlos Eduardo Lima',
            role: 'Chef de Cozinha',
            text: 'Como profissional da gastronomia, posso afirmar: o El Chicano tem qualidade excepcional. Ingredientes frescos e técnicas autênticas mexicanas.',
            rating: 5,
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200'
        },
        {
            name: 'Juliana Ferreira',
            role: 'Mãe',
            text: 'Trouxe minha família toda para conhecer. As crianças adoraram os pratos menos picantes e eu amei os drinks especiais. Ambiente familiar e acolhedor.',
            rating: 5,
            image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200'
        },
        {
            name: 'Pedro Rodrigues',
            role: 'Estudante',
            text: 'Preços justos para a qualidade oferecida. Os combos são perfeitos para estudantes. Música ao vivo deixa o ambiente ainda mais especial!',
            rating: 5,
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200'
        }
    ]
};

export const menuCategories = [
    { id: 'lancamento', name: 'Lançamento do Mês', icon: '🔥' },
    { id: 'burrito-bowl', name: 'Burrito Bowl', icon: '🥗' },
    { id: 'combos', name: 'Combos Promocionais', icon: '🎉' },
    { id: 'antojitos', name: 'Antojitos - Entradas', icon: '🌮' },
    { id: 'tacos', name: 'Duplas de Tacos', icon: '🌮' },
    { id: 'quesadillas', name: 'Quesadillas', icon: '🫓' },
    { id: 'burritos', name: 'Burritos + Salsa', icon: '🌯' },
    { id: 'veggie', name: 'Session Veggie', icon: '🥬' },
    { id: 'salsas', name: 'Salsas (Molhos)', icon: '🌶️' },
    { id: 'postres', name: 'Postres (Sobremesa)', icon: '🍮' },
    { id: 'sucos', name: 'Sucos', icon: '🧃' },
    { id: 'bebidas', name: 'Bebidas', icon: '🥤' },
    { id: 'cervejas', name: 'Cervejas', icon: '🍺' },
];

export const menuItems = {
    lancamento: [
        { name: 'Quesadilla de Costela com Barbecue', description: 'Tortilha De Trigo, Muçarela, Costela Cozida E Desfiada Em Molho Demi-Glace, Regada ao Barbecue El Chicano. Acompanha Uma Maionese De Alho Espanhol Defumado 30 GR E 10 Unidades De Nachos', price: '49,90', image: '/images/menu/quesadilla-costela.jpg', trending: true }
    ],
    'burrito-bowl': [
        { name: 'Burrito Bowl', description: 'Escolha entre os sabores de: Carne grelhada, frango ou Cerdo el Pastor. Acompanha guacamole, sour cream, pico de gallo, arroz, frijolez, folhas verdes e 3 nachos.', price: '36,80', image: '/images/menu/burrito-bowl.jpg' },
        { name: 'Burrito Bowl + Bebida', description: 'Escolha entre os sabores de: Carne grelhada, frango ou Cerdo el Pastor. Acompanha guacamole, sour cream, pico de gallo, arroz, frijolez, folhas verdes e 3 nachos + 1 bebida a sua escolha!', price: '41,50', image: '/images/menu/burrito-bowl-bebida.jpg' }
    ],
    combos: [
        { name: 'Meu Combo Individual', description: '1 Burrito de Pollo (frango), Nachos crocantes (50g), Guacamole (100g), Escolha 1 água ou 1 coca cola', price: '65,90', image: '/images/menu/combo-chilli.jpg' },
        { name: 'Combo Chilli De Carne Completo + Coca Cola 350ml', description: 'O Autentico Chilli De Carne, Com Mussarela e Cheddar Cremoso 240 gr, Acompanhado De 80gr Guacamole, E 100g De Nachos.', price: '48,90', image: '/images/menu/combo-chilli.jpg' },
        { name: 'Combito! A experiência completa', description: '1 Burrito Califórnia 300gr, 1 und Taco de Pollo grelhado, 1 porção de guacamole, 10 unidades de nachos super crocantes, 1 bebida', price: '72,50', image: '/images/menu/combito.jpg' },
        { name: 'COMBO FAMÍLIA', description: '1 Nachos do Rafa, 1 Quesadilla de Cerdo, 2 Tacos de Carne (4 unid.), 2 Burritos Pollo, 1 Guacamole 80gr', price: '260,00', image: '/images/menu/combo-familia.jpg' },
        { name: 'COMBO CASAL', description: '1 Burrito Pollo, 1 Taco de Cerdo com piña (2 und), 1 Taco de Carne (2 und), 100gr Nachos, 80gr guacamole', price: '138,00', image: '/images/menu/combo-casal.jpg' }
    ],
    antojitos: [
        { name: 'Nachos - Tortillas Chips', description: '50g De Tortilla Chips De Milho.', price: '12,00', image: '/images/menu/nachos-simples.jpg' },
        { name: 'Nachos Do Rafa - Chef da Casa', description: 'Tortilla chips de milho, regadas ao chilli de carne, guacamole, fios de sour cream, coentro fresco e fios de sweet chilli.', price: '69,00', image: '/images/menu/nachos-rafa.jpg' },
        { name: 'Nachos Express', description: 'Chilli De Carne, Guacamole, Pico De Gallo E Sour Cream, Acompanha 100 Gr De Nachos.', price: '38,00', image: '/images/menu/nachos-express.jpg' },
        { name: 'Combo Chilli De Carne Completo', description: 'O Autentico Chilli De Carne, Com Mussarela e Cheddar Cremoso, Acompanhado De Guacamole E 100g De Nachos.', price: '44,90', image: '/images/menu/combo-chilli-completo.jpg' }
    ],
    tacos: [
        { name: 'Dupla de Tacos - Carne Grelhada', description: 'Tortilla de milho crocante (sem glúten). Recheados com cubos de alcatra marinada e grelhada, guacamole, acelga fresca, pico de gallo, sour cream e notas de coentro fresco. 2 unidades', price: '37,00', image: '/images/menu/taco-carne.jpg' },
        { name: 'Dupla de Tacos - Cerdo Al Pastor', description: 'Tortilla de milho crocante (sem glúten). Recheado com muçarela, pernil suíno marinado no abacaxi caramelizado, guacamole, acelga crocante, pico de gallo, sour cream. 2 unidades', price: '37,00', image: '/images/menu/taco-cerdo.jpg' },
        { name: 'Dupla de Tacos - Frango Grelhado com Milho', description: 'Tortilla de milho crocante (sem glúten), muçarela, frango em cubos marinado e grelhado, guacamole, acelga crocante, pico de gallo, sour cream, milho tostado. 2 unidades', price: '37,00', image: '/images/menu/taco-frango.jpg' },
        { name: 'Dupla de Tacos - Camarão', description: 'Taco Shell, mussarela, camarão refogado, guacamole, acelga fresca em julienne, pico de gallo e sour cream.', price: '44,00', image: '/images/menu/taco-camarao.jpg' }
    ],
    quesadillas: [
        { name: 'Quesadilla de Cerdo Al Pastor', description: 'Tortilla De Trigo, Mussarella, Pernil Suíno Com Abacaxi Caramelizado. Acompanha 1 Salsa De Sua Preferência', price: '48,00', image: '/images/menu/quesadilla-cerdo.jpg' },
        { name: 'Quesadilla de Camarão', description: 'Tortilla De Trigo, Mussarella E o Legítimo Refogado Camarão Da Laguna. Acompanha 1 Salsa De Sua Preferência', price: '62,00', image: '/images/menu/quesadilla-camarao.jpg' },
        { name: 'Quesadilla de Carne Grelhada', description: 'Tortilla de Trigo, Mussarella, Barbecue, Carne Grelhada. Acompanha 1 Salsa de sua preferência', price: '49,90', image: '/images/menu/quesadilla-carne.jpg' },
        { name: 'Quesadilla de Filé Mignon', description: 'Tortilla de Trigo, mussarella, cheddar, barbecue, filetos de mignon grelhados em azeite de oliva e notas de jalapeño.', price: '62,00', image: '/images/menu/quesadilla-mignon.jpg' },
        { name: 'Quesadilla de Pollo', description: 'Tortilla de Trigo, Mussarella, Milho Tostado, Frango Grelhado. Acompanha 1 Salsa De Sua Preferência', price: '46,00', image: '/images/menu/quesadilla-pollo.jpg' },
        { name: 'Quesadilla de Costela', description: 'Tortilla De Trigo, Mussarella, Costela Desfiada, Notas De Abacaxi Caramelizado E Fios De Cheddar.', price: '49,90', image: '/images/menu/quesadilla-costela-2.jpg' },
        { name: 'Quesadilla de Siri', description: 'Tortilla De Trigo, Mussarella, Siri Refogado. Acompanha Geléia De Butiá Com Leve Toque De Pimenta', price: '53,90', image: '/images/menu/quesadilla-siri.jpg' }
    ],
    burritos: [
        { name: 'Burrito Califórnia - Carne Grelhada', description: 'Tortilla De Trigo, Mussarella, Papas Fritas, Isca De Carne Marinada E Grelhada, Guacamole, Sour Cream E Notas De Abacaxi Caramelizado.', price: '46,90', image: '/images/menu/burrito-california.jpg' },
        { name: 'Burrito El Gringo - Carne Grelhada', description: 'Tortilla De Trigo, Mussarella, Arroz Tex Mex, Frijoles, Isca De Carne Marinada E Grelhada, Cebola Roxa, Fios De Cheddar, Barbecue E Acelga Fresca.', price: '47,90', image: '/images/menu/burrito-gringo.jpg' },
        { name: 'BURRITO SURF AND TURF', description: 'Tortilla de Trigo, Mussarella, Papas Fritas, Camarão Refogado, Bacon Grelhado, Guacamole, Sour Cream e Acelga Crocante.', price: '60,90', image: '/images/menu/burrito-surf-turf.jpg' },
        { name: 'Special Califórnia Mignon', description: 'Tortilha de Trigo, Muçarela, Papas Fritas, Isca De Mignon Marinada e Grelhada, Guacamole, Sour Cream e Notas De Abacaxi Caramelizado.', price: '58,00', image: '/images/menu/burrito-mignon.jpg' },
        { name: 'Burrito Cerdo com Piña', description: 'Tortilla De Trigo, Mussarella, Arroz Tex Mex, Frijoles, Pernil Suíno Com Abacaxi Caramelizado, Bacon Crispis, Guacamole, Pico De Gallo, Sour Cream', price: '47,90', image: '/images/menu/burrito-cerdo.jpg' },
        { name: 'Burrito Premium Ribs - Costela', description: 'Tortilla De Trigo, Mussarella, Costela Desfiada, Notas De Abacaxi In Natura, Maionese De Alho Espanhol Defumado, Fios De Cheddar, Guacamole', price: '48,90', image: '/images/menu/burrito-ribs.jpg' },
        { name: 'BURRITO PREMIUM POLLO', description: 'Tortilla De Trigo, Mussarella, Papas Fritas, Iscas de Frango Marinado e Grelhado, Bacon Fatiado e Grelhado, Cheddar, Guacamole, Sour Cream, Acelga', price: '47,90', image: '/images/menu/burrito-pollo.jpg' },
        { name: 'Burrito Pollo', description: 'Tortilla De Trigo, Mussarella, Arroz Tex Mex, Frijoles, Frango Temperado E Grelhado, Milho Tostado, Guacamole, Pico De Gallo, Sour Cream', price: '44,00', image: '/images/menu/burrito-pollo.jpg' }
    ],
    veggie: [
        { name: 'Nachos Express Veggie', description: 'Chilli de cogumelos com frijoles, abobrinha e cenoura salteados em alho espanhol defumado, guacamole, pico de gallo. Acompanha 100gr de nachos.', price: '39,90', image: '/images/menu/nachos-express-veggie.jpg' },
        { name: 'Quesadilla Ovolactovegetariana', description: 'Tortilla de trigo, muçarela ralada tradicional, cogumelos salteados em alho espanhol defumado.', price: '45,90', image: '/images/menu/quesadilla-veggie.jpg' },
        { name: 'Burrito Veggie', description: 'Tortilla de Trigo, Muçarela, Arroz Tex Mex, Cogumelos Salteados Em Alho Espanhol Defumado, Guacamole, Pico De Gallo, Sour Cream E Acelga Fresca.', price: '46,90', image: '/images/menu/burrito-veggie.jpg' },
        { name: 'Combo Chilli Veggie Completo', description: '240gr Chilli De Cogumelos Salteados Em Alho Espanhol Defumado Abobrinha, Cenoura E Frijoles, 80gr Guacamole, 100gr Nachos.', price: '44,90', image: '/images/menu/combo-chilli-veggie.jpg' },
        { name: 'Tacos Veggie', description: 'Tortilla de milho crocante (sem glúten). Recheado com muçarela, mix de cogumelos salteados, guacamole, acelga crocante, pico de gallo. 2 unidades', price: '39,90', image: '/images/menu/tacos-veggie.jpg' }
    ],
    salsas: [
        { name: 'Dip De Cheddar', description: '80g de molho cheddar cremoso', price: '11,50', image: '/images/menu/salsa-cheddar.jpg' },
        { name: 'Maionese De Alho Espanhol Defumado', description: '80g de maionese artesanal', price: '7,00', image: '/images/menu/salsa-maionese.jpg' },
        { name: 'Barbecue El Chicano', description: '80g do nosso barbecue especial', price: '11,50', image: '/images/menu/salsa-bbq.jpg' },
        { name: 'Sour Cream', description: '80g de creme azedo tradicional', price: '11,50', image: '/images/menu/salsa-sour-cream.jpg' },
        { name: 'Guacamole', description: '80g de guacamole fresco', price: '12,00', image: '/images/menu/salsa-guacamole.jpg' },
        { name: 'Pico De Gallo', description: '80g de salsa fresca mexicana', price: '9,00', image: '/images/menu/salsa-pico.jpg' },
        { name: 'Geléia De Butiá Com Pimenta', description: '80g de geleia artesanal', price: '12,00', image: '/images/menu/salsa-butia.jpg' },
        { name: 'Salsa Chilli De Carne', description: '240g de chilli de carne autêntico', price: '30,00', image: '/images/menu/salsa-chilli-carne.jpg' },
        { name: 'Sweet Chilli', description: '80g de molho sweet chilli', price: '12,00', image: '/images/menu/salsa-sweet-chilli.jpg' },
        { name: 'Frijoles', description: '80g de feijões mexicanos', price: '11,50', image: '/images/menu/salsa-frijoles.jpg' },
        { name: 'Salsa Chilli Veggie', description: '240g de chilli vegetariano', price: '28,00', image: '/images/menu/salsa-chilli-veggie.jpg' },
        { name: 'Pimenta Jalapeño Slice', description: '30g de jalapeño fatiado', price: '12,00', image: '/images/menu/salsa-jalapeno.jpg' },
        { name: 'Batata Frita Palito', description: '100g de batatas fritas crocantes', price: '14,00', image: '/images/menu/batata-frita.jpg' },
        { name: 'Salsa Roja', description: '80g de salsa vermelha picante', price: '11,50', image: '/images/menu/salsa-roja.jpg' }
    ],
    postres: [
        { name: 'Churros', description: 'Churros tradicional mexicano com açúcar e canela', price: '12,00', image: '/images/menu/churros.jpg' },
        { name: 'Alfajor Tradicional ODARA', description: 'Alfajor recheado com duas camadas de doce de leite e cobertura de chocolate meio amargo', price: '9,00', image: '/images/menu/alfajor.jpg' }
    ],
    sucos: [
        { name: 'Suco Néctar Del Valle Uva', description: '290ml', price: '9,00', image: '/images/menu/suco-uva.jpg' },
        { name: 'Água de Jamaica', description: '300ml - Refresque-se com o sabor vibrante das flores de hibisco', price: '9,00', image: '/images/menu/agua-jamaica.jpg' },
        { name: 'Suco de Laranja', description: '300ml - Natural, feito com laranjas frescas e suculentas', price: '9,00', image: '/images/menu/suco-laranja.jpg' },
        { name: 'Suco de Butiá', description: '300ml - Fruta nativa da região, refrescante e nutritivo', price: '9,00', image: '/images/menu/suco-butia.jpg' }
    ],
    bebidas: [
        { name: 'Coca-Cola Original', description: 'Lata 350ml', price: '8,00', image: '/images/menu/coca-cola.jpg' },
        { name: 'Coca-Cola Zero', description: 'Lata 350ml', price: '8,00', image: '/images/menu/coca-zero.png' },
        { name: 'Guaraná Antarctica', description: 'Lata 350ml', price: '8,00', image: '/images/menu/guarana.jpg' },
        { name: 'Guaraná sem Açúcar Antarctica', description: 'Lata 350ml', price: '8,00', image: '/images/menu/guarana-zero.jpg' },
        { name: 'Água Tônica Antarctica Zero', description: 'Lata 350ml sem açúcar', price: '8,00', image: '/images/menu/tonica.jpg' },
        { name: 'Água Mineral sem Gás', description: '500ml', price: '6,00', image: '/images/menu/agua-sem-gas.jpg' },
        { name: 'Água Mineral com Gás', description: '500ml', price: '6,00', image: '/images/menu/agua-com-gas.jpg' }
    ],
    cervejas: [
        { name: 'Cerveja Heineken Long Neck', description: '330ml - Produto para maiores de 18 anos', price: '16,00', image: '/images/menu/cerveja-heineken.jpg' },
        { name: 'Cerveja Long Neck Corona', description: '330ml - Produto para maiores de 18 anos', price: '16,00', image: '/images/menu/cerveja-corona.jpg' },
        { name: 'Cerveja Zero Heineken', description: '330ml - Produto para maiores de 18 anos', price: '16,00', image: '/images/menu/cerveja-heineken.jpg' },
        { name: 'Cerveja Stella Artois sem Glúten', description: '330ml puro malte - Produto para maiores de 18 anos', price: '16,00', image: '/images/menu/stella-artois-sem-gluten.jpg' }
    ]
};
