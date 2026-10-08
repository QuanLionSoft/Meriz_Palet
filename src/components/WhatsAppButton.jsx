import { FaWhatsapp } from 'react-icons/fa';
import { site } from '../data/site.js';
import { useQuote } from '../contexts/QuoteContext.jsx';

export default function WhatsAppButton() {
  const number = site.whatsapp.replace(/\D/g, '');
  const { count } = useQuote();
  if (!number) return null;

  return (
    <a
      className={`whatsapp ${count > 0 ? 'has-quote' : ''}`}
      href={`https://wa.me/${number}?text=Merhaba, palet teklifi almak istiyorum.`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile yazın"
    >
      <FaWhatsapp />
    </a>
  );
}
