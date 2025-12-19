import { Playfair_Display } from 'next/font/google'
import './globals.css'
import { siteData } from '@/lib/siteData'
import WhatsAppButton from '@/components/WhatsAppButton'

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    display: 'swap',
})

export const metadata = {
    title: 'El Chicano Pocket - Restaurante Mexicano em Florianópolis e Laguna',
    description: 'Autêntica culinária mexicana com alma, arte e sabor. Uma experiência gastronômica única em Florianópolis e Laguna. Tacos, tequila, margaritas e música ao vivo.',
    keywords: 'restaurante mexicano, tacos, tequila, margarita, florianópolis, laguna, comida mexicana, bar, música ao vivo, el chicano pocket, restaurante mexicano floripa',
    authors: [{ name: 'El Chicano Pocket' }],
    creator: 'El Chicano Pocket',
    publisher: 'El Chicano Pocket',
    openGraph: {
        title: 'El Chicano Pocket - Restaurante Mexicano',
        description: 'Autêntica culinária mexicana com alma, arte e sabor. Tacos, tequilas, margaritas e música ao vivo.',
        type: 'website',
        locale: 'pt_BR',
        siteName: 'El Chicano Pocket',
        url: 'https://elchicanopocket.com.br',
        images: [
            {
                url: 'https://images.unsplash.com/photo-1653069196998-adddc6ad8e18?q=80&w=1200',
                width: 1200,
                height: 630,
                alt: 'El Chicano Pocket - Restaurante Mexicano',
            },
        ],
    },
    robots: {
        index: true,
        follow: true,
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
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className="antialiased">
                {children}
                <WhatsAppButton />
            </body>
        </html>
    )
}
