import { aboutText, site } from '../data/site.js';
import { FaCheck } from 'react-icons/fa';

export default function About() {
  return (
    <section className="about" id="hakkimizda">
      <div className="container about__grid">
        <div>
          <p className="eyebrow eyebrow--light">Biz kimiz</p>
          <h2 className="about__title">Samsun’dan Türkiye’ye sağlam palet</h2>
          <div style={{ marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            <span className="chip" style={{ background: 'var(--amber)', color: 'var(--ink)' }}>Aile Şirketi</span>
            <span className="chip" style={{ background: 'rgb(255 255 255 / 0.12)', color: '#fff', border: '1px solid rgb(255 255 255 / 0.18)' }}>OSB Üretim</span>
            <span className="chip" style={{ background: 'rgb(255 255 255 / 0.12)', color: '#fff', border: '1px solid rgb(255 255 255 / 0.18)' }}>Sertifikalı</span>
          </div>
        </div>
        <div className="about__text">
          {aboutText.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          <ul style={{ display: 'grid', gap: '0.6rem', marginTop: '1.5rem' }}>
            {[
              'Fırınlanmış çam kerestesi, düşük nem oranı',
              'ISPM-15 ısıl işlem ve HT damga, ihracat uyumlu',
              'EPAL, EUR ve CP1-CP9 standartlarında üretim',
              'Tamir, geri alım ve özel ölçü danışmanlığı',
            ].map((item) => (
              <li key={item} style={{ display: 'flex', gap: '0.7rem', alignItems: 'flex-start', color: 'rgb(246 240 231 / 0.9)', fontSize: '1.05rem' }}>
                <span style={{ width: 26, height: 26, display: 'grid', placeItems: 'center', background: 'var(--amber)', color: 'var(--ink)', borderRadius: '50%', flex: 'none', marginTop: 2 }}>
                  <FaCheck style={{ fontSize: '0.75rem' }} />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="about__stats">
            {site.stats.map((s) => (
              <div key={s.label} className="about__stat">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
