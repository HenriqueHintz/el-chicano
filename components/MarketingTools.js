'use client';

import { useEffect } from 'react';

// Google Analytics
const GA_TRACKING_ID = 'GA_MEASUREMENT_ID'; // Replace with actual GA4 ID

export const GoogleAnalytics = () => {
    useEffect(() => {
        // Only load GA in production
        if (process.env.NODE_ENV !== 'production') return;

        const script1 = document.createElement('script');
        script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
        script1.async = true;
        document.head.appendChild(script1);

        const script2 = document.createElement('script');
        script2.innerHTML = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
                page_title: document.title,
                page_location: window.location.href
            });
        `;
        document.head.appendChild(script2);

        // Track page views
        const handleRouteChange = (url) => {
            window.gtag('config', GA_TRACKING_ID, {
                page_path: url,
            });
        };

        // Listen for route changes (for SPA behavior)
        window.addEventListener('popstate', () => {
            handleRouteChange(window.location.pathname);
        });

        return () => {
            document.head.removeChild(script1);
            document.head.removeChild(script2);
        };
    }, []);

    return null;
};

// Facebook Pixel
const FB_PIXEL_ID = 'YOUR_PIXEL_ID'; // Replace with actual Facebook Pixel ID

export const FacebookPixel = () => {
    useEffect(() => {
        if (process.env.NODE_ENV !== 'production') return;

        // Load Facebook Pixel
        const script = document.createElement('script');
        script.innerHTML = `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${FB_PIXEL_ID}');
            fbq('track', 'PageView');
        `;
        document.head.appendChild(script);

        // Track WhatsApp clicks
        const trackWhatsAppClick = () => {
            if (window.fbq) {
                window.fbq('track', 'Contact', {
                    content_name: 'WhatsApp Reservation'
                });
            }
        };

        // Add event listeners to WhatsApp links
        const whatsAppLinks = document.querySelectorAll('a[href*="whatsapp.com"]');
        whatsAppLinks.forEach(link => {
            link.addEventListener('click', trackWhatsAppClick);
        });

        return () => {
            document.head.removeChild(script);
            whatsAppLinks.forEach(link => {
                link.removeEventListener('click', trackWhatsAppClick);
            });
        };
    }, []);

    // Facebook Pixel noscript fallback
    return (
        <noscript>
            <img
                height="1"
                width="1"
                style={{ display: 'none' }}
                src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
                alt=""
            />
        </noscript>
    );
};

// Conversion tracking for reservations
export const trackReservation = (reservationType = 'general') => {
    // Google Analytics conversion
    if (window.gtag) {
        window.gtag('event', 'conversion', {
            send_to: 'GA_MEASUREMENT_ID/CONVERSION_ID', // Replace with actual conversion ID
            value: 1.0,
            currency: 'BRL'
        });
    }

    // Facebook Pixel conversion
    if (window.fbq) {
        window.fbq('track', 'Lead', {
            content_name: 'Restaurant Reservation',
            content_category: reservationType
        });
    }
};

// Track menu item views
export const trackMenuView = (menuItem) => {
    if (window.gtag) {
        window.gtag('event', 'view_item', {
            items: [{
                item_name: menuItem.name,
                item_category: menuItem.category,
                price: parseFloat(menuItem.price.replace('R$ ', '').replace(',', '.'))
            }]
        });
    }
};

// Track CTA clicks
export const trackCTAClick = (ctaType, ctaLocation) => {
    if (window.gtag) {
        window.gtag('event', 'click', {
            event_category: 'engagement',
            event_label: `${ctaType} - ${ctaLocation}`
        });
    }
};
