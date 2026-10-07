import { site } from '../data/site.js';

// Kodla çizilmiş basit palet simgesi + yazı logosu. Görsel dosyası gerekmez.
// Gerçek bir logon olursa bu dosyayı <img> ile değiştir.
export default function Logo() {
  return (
    <span className="logo">
      <svg className="logo__mark" viewBox="0 0 32 32" aria-hidden="true">
        <rect width="32" height="32" rx="9" className="logo__bg" />
        <rect x="6" y="8" width="20" height="3.6" rx="1" className="logo__slat" />
        <rect x="6" y="13.2" width="20" height="3.6" rx="1" className="logo__slat" />
        <rect x="6" y="18.4" width="20" height="3.6" rx="1" className="logo__slat" />
        <rect x="8" y="23.2" width="4" height="2.8" rx="0.8" className="logo__foot" />
        <rect x="14" y="23.2" width="4" height="2.8" rx="0.8" className="logo__foot" />
        <rect x="20" y="23.2" width="4" height="2.8" rx="0.8" className="logo__foot" />
      </svg>
      <span className="logo__text">{site.name}</span>
    </span>
  );
}
