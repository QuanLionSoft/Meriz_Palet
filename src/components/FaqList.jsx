import { faqs } from '../data/site.js';

// <details> ile klavye ve ekran okuyucu uyumlu; gizli checkbox hilesine gerek yok.
export default function FaqList() {
  return (
    <section className="section container faq">
      {faqs.map((f) => (
        <details key={f.q} className="faq__item">
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      ))}
    </section>
  );
}
