/**
 * Formats a currency value to BRL style (e.g. 49,90)
 */
export const formatCurrency = (value) => {
    return value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};

/**
 * Generates the WhatsApp message URL with the order details
 */
export const generateWhatsAppLink = (cartItems, total) => {
    const phoneNumber = '5548999326792'; // El Chicano Phone

    const header = "🌮 *Novo Pedido - Site El Chicano Pocket*\n\n📋 *Itens do Pedido:*\n";

    const itemsList = cartItems.map((item, index) => {
        const itemTotal = (parseFloat(item.price.replace('.', '').replace(',', '.')) * item.quantity);
        return `${index + 1}. *${item.name}*\n   Qtd: ${item.quantity}x | R$ ${item.price}\n   Subtotal: R$ ${formatCurrency(itemTotal)}`;
    }).join('\n\n');

    const footer = `\n\n💰 *Total do Pedido:* R$ ${formatCurrency(total)}\n\n---\n*Próximos passos:*\n1. Aguarde a confirmação\n2. Informe seu endereço para entrega ou se é retirada\n3. Informe a forma de pagamento`;

    const message = `${header}${itemsList}${footer}`;

    return `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
};
