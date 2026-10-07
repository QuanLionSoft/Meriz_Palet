import { faqs } from '../data/site.js';

// <details> ile klavye ve ekran okuyucu uyumlu; gizli checkbox hilesine gerek yok.
export default function FaqList() {
  return (
    <section className="section container faq">
      {faqs.map((f) => (
        <details
          key={f.q}
          className="faq__item"
          style={{
            textAlign: 'center',
            display: 'block',
          }}
        >
          <summary
            style={{
              textAlign: 'center',
              display: 'block',
              width: '100%',
              cursor: 'pointer',
            }}
          >
            {f.q}
          </summary>

          <p
            style={{
              textAlign: 'center',
              display: 'block',
              width: '100%',
              margin: '15px auto 0 auto',
            }}
          >
            {f.a}
          </p>
        </details>
      ))}
    </section>
  );
}