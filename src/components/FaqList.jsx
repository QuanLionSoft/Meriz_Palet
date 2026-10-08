import { faqs } from '../data/site.js';

export default function FaqList() {
  return (
    <section className="section container faq">
      {faqs.map((f, idx) => (
        <details key={f.q} className="faq__item" open={idx === 0}>
          <summary>{f.q}</summary>
          <div className="faq__body">
            <p>{f.a}</p>
          </div>
        </details>
      ))}
    </section>
  );
}
