const WHATSAPP_NUMBER = "5541992293719";
const DEFAULT_MESSAGE = "Olá! Gostaria de solicitar um orçamento.";

const isMobileDevice = () => /Android|iPhone|iPad|iPod|Mobile/i.test(window.navigator.userAgent);

export const getWhatsAppUrl = (message: string = DEFAULT_MESSAGE) => {
  const encodedMessage = encodeURIComponent(message);

  if (isMobileDevice()) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  }

  return `https://web.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodedMessage}`;
};

export const openWhatsApp = (message?: string) => {
  const url = getWhatsAppUrl(message);
  const link = document.createElement("a");

  link.href = url;
  link.rel = "noopener noreferrer";
  link.target = window.self !== window.top ? "_top" : "_blank";

  document.body.appendChild(link);
  link.click();
  link.remove();
};

export { DEFAULT_MESSAGE, WHATSAPP_NUMBER };