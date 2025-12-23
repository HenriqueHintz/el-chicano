'use client';

/**
 * Google Tag Manager Integration
 * 
 * Este componente gerencia a instalação do Google Tag Manager e Google Analytics 4.
 * 
 * IMPORTANTE: Substitua 'GTM-XXXXXXX' pelo seu ID real do GTM.
 * Para obter o ID: https://tagmanager.google.com/
 */

import Script from 'next/script';

export default function Analytics() {
    const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX'; // Substituir pelo ID real

    return (
        <>
            {/* Google Tag Manager - Head */}
            <Script
                id="gtm-script"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagname(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `,
                }}
            />
        </>
    );
}

/**
 * Google Tag Manager - Body (NoScript)
 * Use este componente no início do <body> do layout
 */
export function GTMBody() {
    const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX'; // Substituir pelo ID real

    return (
        <noscript>
            <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                height="0"
                width="0"
                style={{ display: 'none', visibility: 'hidden' }}
                title="Google Tag Manager"
            />
        </noscript>
    );
}
