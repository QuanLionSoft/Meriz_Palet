import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function ContactForm() {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = formRef.current;

    // Bot tuzağı: insanlar bu gizli alanı görmez/doldurmaz.
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
      form.reset(); // Sadece başarılı olunca temizle; hata olursa yazdığı mesaj kaybolmasın.
    } catch (err) {
      console.error('Mesaj gönderilemedi:', err);
      setStatus('error');
    }
  };

  return (
    <form className="form" ref={formRef} onSubmit={handleSubmit}>
      <p className="form__lead">Formu doldurun, mesajınız bize ulaşsın.</p>

      <label className="form__field">
        <span>Ad Soyad</span>
        <input type="text" name="name" autoComplete="name" required maxLength={100} />
      </label>

      <label className="form__field">
        <span>E-posta</span>
        <input type="email" name="email" autoComplete="email" required maxLength={150} />
      </label>

      <label className="form__field">
        <span>Mesajınız</span>
        <textarea name="message" rows={6} required maxLength={2000} />
      </label>

      {/* Bot tuzağı (gizli alan) */}
      <div className="form__trap" aria-hidden="true">
        <label>
          Bu alanı boş bırakın
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <button className="btn" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Gönderiliyor…' : 'Gönder'}
      </button>

      <p className={`form__status form__status--${status}`} role="status" aria-live="polite">
        {status === 'success' && 'Mesajınız gönderildi, teşekkürler.'}
        {status === 'error' &&
          'Mesaj gönderilemedi. Lütfen biraz sonra tekrar deneyin ya da bize doğrudan ulaşın.'}
      </p>
    </form>
  );
}
