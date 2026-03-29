const WHATSAPP_NUMBER = "5541992293719";
const DEFAULT_MESSAGE = "Olá! Gostaria de solicitar um orçamento.";

export const getWhatsAppUrl = (message: string = DEFAULT_MESSAGE) => {
  const params = new URLSearchParams({
    phone: WHATSAPP_NUMBER,
    text: message,
  });

  return `https://wa.me/${WHATSAPP_NUMBER}?${params.toString().replace(`phone=${WHATSAPP_NUMBER}&`, "")}`;
};

export const openWhatsApp = (message?: string) => {
  window.open(getWhatsAppUrl(message), "_blank", "noopener,noreferrer");
};

export { DEFAULT_MESSAGE, WHATSAPP_NUMBER };