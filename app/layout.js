import { Playfair_Display } from 'next/font/google'
import './globals.css'
import { siteData } from '@/lib/siteData'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import Analytics, { GTMBody } from '@/components/Analytics'
import LoadingScreen from '@/components/LoadingScreen'

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    display: 'swap',
})

export const metadata = {
    metadataBase: new URL('https://elchicanopocket.com.br'),
    title: {
        default: 'El Chicano Pocket - Restaurante Mexicano em Florianópolis e Laguna',
        template: '%s | El Chicano Pocket'
    },
    description: 'Autêntica culinária mexicana com alma, arte e sabor. Uma experiência gastronômica única em Florianópolis e Laguna. Tacos, tequila, margaritas e música ao vivo.',
    keywords: [
        'restaurante mexicano', 'tacos', 'tequila', 'margarita', 'floripa', 'laguna',
        'comida mexicana', 'bar', 'música ao vivo', 'el chicano pocket',
        'restaurante mexicano floripa', 'burritos', 'quesadillas', 'nachos',
        'culinária mexicana autêntica', 'experiência gastronômica'
    ],
    authors: [{ name: 'El Chicano Pocket' }],
    creator: 'El Chicano Pocket',
    publisher: 'El Chicano Pocket',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        title: 'El Chicano Pocket - Restaurante Mexicano',
        description: 'Autêntica culinária mexicana com alma, arte e sabor. Tacos, tequilas, margaritas e música ao vivo.',
        type: 'website',
        locale: 'pt_BR',
        siteName: 'El Chicano Pocket',
        url: 'https://elchicanopocket.com.br',
        images: [
            {
                url: 'https://images.unsplash.com/photo-1514516322520-572a73f4aa9e?q=80&w=1200',
                width: 1200,
                height: 630,
                alt: 'El Chicano Pocket - Restaurante Mexicano',
                type: 'image/jpeg',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'El Chicano Pocket - Restaurante Mexicano',
        description: 'Autêntica culinária mexicana com alma, arte e sabor. Tacos, tequilas, margaritas e música ao vivo.',
        images: ['https://images.unsplash.com/photo-1514516322520-572a73f4aa9e?q=80&w=1200'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'your-google-site-verification-code', // Replace with actual code
    },
}

export default function RootLayout({ children }) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Restaurant',
        name: siteData.name,
        image: siteData.locations[0].image,
        description: siteData.description,
        url: siteData.url,
        telephone: siteData.locations[0].phone,
        address: siteData.locations.map(loc => ({
            '@type': 'PostalAddress',
            streetAddress: loc.address,
            addressLocality: loc.city.split(',')[0],
            addressRegion: 'SC',
            addressCountry: 'BR'
        })),
        openingHoursSpecification: siteData.locations[0].hours
            .filter(h => h.time !== 'Fechado')
            .map(h => ({
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: h.days.includes('-') ? ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] : ['Sunday'],
                opens: h.time.split(' - ')[0].replace('h', ':00'),
                closes: h.time.split(' - ')[1].replace('h', ':00'),
            }))
    }

    return (
        <html lang="pt-BR" className={playfair.variable}>
            <head>
                {/* Google Tag Manager */}
                <Analytics />

                {/* Canonical URL */}
                <link rel="canonical" href="https://elchicanopocket.com.br" />

                {/* Preconnect to external domains for performance */}
                <link rel="preconnect" href="https://images.unsplash.com" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

                {/* DNS prefetch for WhatsApp */}
                <link rel="dns-prefetch" href="//api.whatsapp.com" />

                {/* Favicon and app icons */}
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />

                {/* Preload critical resources */}
                <link
                    rel="preload"
                    href="/images/menu/burrito-bowl.jpg"
                    as="image"
                    type="image/jpeg"
                />
            </head>
            <body className="antialiased">
                {/* Google Tag Manager (noscript) */}
                <GTMBody />

                {/* Loading Screen */}
                <LoadingScreen />

                {/* Skip link for accessibility */}
                <a href="#main-content" className="skip-link">
                    Pular para conteúdo principal
                </a>

                    {children}
                    <ScrollToTopButton />
                    <WhatsAppButton />
            </body>
        </html>
    )
}
