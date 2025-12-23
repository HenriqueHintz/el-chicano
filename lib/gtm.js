/**
 * Google Tag Manager Event Tracking Helpers
 * 
 * Funções auxiliares para rastrear eventos personalizados no GTM/GA4
 */

/**
 * Envia um evento de lead gerado (WhatsApp click)
 * @param {string} source - Origem do lead (hero, menu, floating-button, etc)
 */
export const trackWhatsAppClick = (source) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
            event: 'generate_lead',
            lead_source: source,
            event_category: 'engagement',
            event_label: 'whatsapp_click'
        });
    }
};

/**
 * Envia um evento de visualização de item do menu
 * @param {string} itemName - Nome do prato
 * @param {number} price - Preço do prato
 * @param {string} category - Categoria do prato
 */
export const trackMenuItemView = (itemName, price, category) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
            event: 'view_item',
            ecommerce: {
                currency: 'BRL',
                value: price,
                items: [{
                    item_name: itemName,
                    item_category: category,
                    price: price
                }]
            }
        });
    }
};

/**
 * Envia um evento de clique em telefone
 * @param {string} phoneNumber - Número clicado
 */
export const trackPhoneClick = (phoneNumber) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
            event: 'phone_call',
            phone_number: phoneNumber,
            event_category: 'engagement',
            event_label: 'click_to_call'
        });
    }
};

/**
 * Envia um evento customizado
 * @param {string} eventName - Nome do evento
 * @param {object} params - Parâmetros adicionais
 */
export const trackCustomEvent = (eventName, params = {}) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
            event: eventName,
            ...params
        });
    }
};
