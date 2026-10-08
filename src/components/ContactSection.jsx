import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaClock, FaWhatsapp } from 'react-icons/fa';
import ContactForm from './ContactForm.jsx';
import { site } from '../data/site.js';

export default function ContactSection() {
  const waNumber = site.whatsapp.replace(/\D/g, '');

  return (
    <section className="section contact" id="iletisim">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">İletişim</p>
          <h2 className="section__title">Bize ulaşın, 30 dakikada teklif verelim</h2>
          <p className="section__lead">Ölçü, adet ve teslim yerini iletin. Tır bazında avantajlı fiyat ve aynı gün sevkiyat için hemen arayın veya form doldurun.</p>
        </div>

        <div className="contact__grid">
          <div className="contact__main">
            <ul className="contact__list">
              <li>
                <span className="contact__list-icon">
                  <FaPhoneAlt />
                </span>
                <span className="contact__list-content">
                  <span className="contact__list-label">Telefon</span>
                  <span className="contact__list-value">
                    <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phoneDisplay}</a>
                  </span>
                </span>
              </li>
              <li>
                <span className="contact__list-icon">
                  <FaEnvelope />
                </span>
                <span className="contact__list-content">
                  <span className="contact__list-label">E-posta</span>
                  <span className="contact__list-value">
                    <a href={`mailto:${site.email}`}>{site.email}</a>
                    {site.email2 && (
                      <>
                        <br />
                        <a href={`mailto:${site.email2}`} style={{ fontSize: '0.92rem', fontWeight: 500 }}>
                          {site.email2}
                        </a>
                      </>
                    )}
                  </span>
                </span>
              </li>
              <li>
                <span className="contact__list-icon">
                  <FaMapMarkerAlt />
                </span>
                <span className="contact__list-content">
                  <span className="contact__list-label">Adres & Üretim</span>
                  <span className="contact__list-value" style={{ fontSize: '0.98rem', fontWeight: 500, lineHeight: 1.5 }}>
                    {site.address}
                  </span>
                </span>
              </li>
              <li>
                <span className="contact__list-icon">
                  <FaClock />
                </span>
                <span className="contact__list-content">
                  <span className="contact__list-label">Çalışma Saatleri</span>
                  <span className="contact__list-value" style={{ fontSize: '0.98rem', fontWeight: 500 }}>
                    {site.workingHours}
                  </span>
                </span>
              </li>
              {waNumber && (
                <li>
                  <span className="contact__list-icon" style={{ background: '#25d366', color: '#fff', borderColor: '#25d366' }}>
                    <FaWhatsapp />
                  </span>
                  <span className="contact__list-content">
                    <span className="contact__list-label">WhatsApp</span>
                    <span className="contact__list-value">
                      <a href={`https://wa.me/${waNumber}`} target="_blank" rel="noopener noreferrer">
                        {site.whatsappDisplay} ile yaz
                      </a>
                    </span>
                  </span>
                </li>
              )}
            </ul>

            <div className="contact__map">
              <iframe
                title="Meriz Palet konumu"
                src={site.mapEmbedUrl}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
