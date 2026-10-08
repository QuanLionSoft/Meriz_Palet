import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaPaperPlane, FaWhatsapp } from 'react-icons/fa';
import { useQuote } from '../contexts/QuoteContext.jsx';
import { site } from '../data/site.js';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function ContactForm() {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const { items, count } = useQuote();

  const quoteSummary = items.map((i) => `${i.name} (${i.sku}) x ${i.qty}`).join('\n');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = formRef.current;

    if (form.elements.website.value) {
      setStatus('success');
      form.reset();
      return;
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error('EmailJS ayarları eksik: .env dosyasını kontrol et (.env.example).');
      setStatus('error');
      return;
    }

    setStatus('sending');
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, { publicKey: PUBLIC_KEY });
      setStatus('success');
      form.reset();
    } catch (err) {
      console.error('Mesaj gönderilemedi:', err);
      setStatus('error');
    }
  };

  const waNumber = site.whatsapp.replace(/\D/g, '');
  const waText = encodeURIComponent(
    `Merhaba, palet teklifi almak istiyorum.\n${quoteSummary ? `\nSepetim:\n${quoteSummary}\n` : ''}\nTeslim yeri: \nAdet: `
  );

  return (
    <form className="form" ref={formRef} onSubmit={handleSubmit}>
      <div className="form__head">
        <div className="form__title">Hızlı teklif formu</div>
        <p className="form__lead">
          {count > 0 ? `${count} adet palet sepetinizde. Bilgilerinizi doldurun, teklifiniz ile birlikte gönderelim.` : 'Formu doldurun, 30 dakika içinde net fiyat ve teslim tarihi verelim.'}
        </p>
      </div>

      {count > 0 && (
        <div style={{ padding: '0.85rem 1rem', background: 'var(--amber-soft)', border: '1px solid #f5d79a', borderRadius: '12px', fontSize: '0.85rem' }}>
          <strong style={{ display: 'block', marginBottom: '0.35rem' }}>Sepetiniz ({count} adet)</strong>
          <div style={{ whiteSpace: 'pre-wrap', lineHeight: 1.5, color: 'var(--ink-2)' }}>{quoteSummary}</div>
        </div>
      )}

      <div className="form__row form__row--2">
        <label className="form__field">
          <span>Ad Soyad *</span>
          <input type="text" name="name" autoComplete="name" required maxLength={100} placeholder="Adınız soyadınız" />
        </label>
        <label className="form__field">
          <span>Telefon *</span>
          <input type="tel" name="phone" autoComplete="tel" required maxLength={30} placeholder="05xx xxx xx xx" />
        </label>
      </div>

      <div className="form__row form__row--2">
        <label className="form__field">
          <span>E-posta *</span>
          <input type="email" name="email" autoComplete="email" required maxLength={150} placeholder="ornek@firma.com" />
        </label>
        <label className="form__field">
          <span>Firma (opsiyonel)</span>
          <input type="text" name="company" maxLength={100} placeholder="Firma adınız" />
        </label>
      </div>

      <label className="form__field">
        <span>Mesajınız *</span>
        <textarea
          name="message"
          rows={5}
          required
          maxLength={2000}
          placeholder="Ölçü, adet, teslim yeri ve özel isteklerinizi yazın..."
          defaultValue={quoteSummary ? `Merhaba,\n\nAşağıdaki ürünler için teklif almak istiyorum:\n\n${quoteSummary}\n\nTeslim yeri:\nEk not:` : ''}
        />
      </label>

      {/* Hidden fields for EmailJS */}
      <input type="hidden" name="quote_items" value={quoteSummary} />
      <input type="hidden" name="quote_count" value={String(count)} />

      {/* Honeypot */}
      <div className="form__trap" aria-hidden="true">
        <label>
          Bu alanı boş bırakın
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <button className="btn" type="submit" disabled={status === 'sending'}>
          <FaPaperPlane aria-hidden="true" />
          {status === 'sending' ? 'Gönderiliyor…' : 'Teklif iste'}
        </button>
        {waNumber && (
          <a
            href={`https://wa.me/${waNumber}?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ghost"
          >
            <FaWhatsapp /> WhatsApp ile gönder
          </a>
        )}
      </div>

      <p className={`form__status form__status--${status}`} role="status" aria-live="polite" style={{ display: status === 'idle' ? 'none' : 'block' }}>
        {status === 'success' && '✓ Mesajınız gönderildi, teşekkürler. En kısa sürede dönüş yapacağız.'}
        {status === 'error' &&
          'Mesaj gönderilemedi. Lütfen biraz sonra tekrar deneyin ya da bize doğrudan telefon/WhatsApp ile ulaşın.'}
        {status === 'sending' && 'Gönderiliyor...'}
      </p>

      <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--muted)', lineHeight: 1.4 }}>
        Formu göndererek kişisel verilerinizin teklif ve iletişim amacıyla işlenmesini kabul etmiş olursunuz.
      </p>
    </form>
  );
}
