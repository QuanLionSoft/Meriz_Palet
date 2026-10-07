import { aboutText } from '../data/site.js';

export default function About() {
  return (
    <section className="about" id="hakkimizda">
      <div className="container about__grid">
        <div>
          <p className="eyebrow eyebrow--light">Biz kimiz</p>
          <h2 className="about__title">Hakkımızda</h2>
        </div>
        <div className="about__text reveal">
          {aboutText.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
