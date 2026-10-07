import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import ContactForm from './ContactForm.jsx';
import { site } from '../data/site.js';

export default function ContactSection() {
  return (
    <section className="section contact" id="iletisim">
      <div className="container contact__grid">
        <div className="contact__main">
          <p className="eyebrow">İletişim</p>
          <h2 className="section__title">Bize Ulaşın</h2>

          <ul className="contact__list">
            {site.email && (
              <li>
                <FaEnvelope aria-hidden="true" />
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
            )}
            {site.phone && (
              <li>
                <FaPhoneAlt aria-hidden="true" />
                <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a>
              </li>
            )}
          </ul>

          <iframe
            className="contact__map"
            title="Meriz Palet konumu"
            src={site.mapEmbedUrl}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
