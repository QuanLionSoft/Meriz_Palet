import { FaWhatsapp } from 'react-icons/fa';
import { site } from '../data/site.js';

// Numara girilmediyse buton hiç çıkmaz (eski kodda href="#" ile ölü bir butondu).
export default function WhatsAppButton() {
  const number = site.whatsapp.replace(/\D/g, '');
  if (!number) return null;

  return (
    <a
      className="whatsapp"
      href={`https://wa.me/${number}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile yazın"
    >
      <FaWhatsapp />
    </a>
  );
}
