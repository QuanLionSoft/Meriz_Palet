import { FaStar } from 'react-icons/fa';
import { testimonials } from '../data/site.js';

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <div className="section__head center">
          <p className="eyebrow">Müşteri Yorumları</p>
          <h2 className="section__title">Bize güvenenler ne diyor?</h2>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((t) => (
            <div key={t.name} className="testimonial">
              <div className="testimonial__stars" aria-label="5 yıldız">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="testimonial__text">“{t.text}”</p>
              <div className="testimonial__author">
                <div className="testimonial__avatar">{t.name.charAt(0)}</div>
                <div>
                  <div className="testimonial__name">{t.name}</div>
                  <div className="testimonial__role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
