import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa';
import { site } from '../data/site.js';

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar__inner">
        <div className="topbar__left">
          <a href={`tel:${site.phone.replace(/\s/g, '')}`}>
            <FaPhoneAlt aria-hidden="true" /> {site.phoneDisplay}
          </a>
          <span className="hide-mobile" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <FaEnvelope aria-hidden="true" /> {site.email}
          </span>
          <span className="hide-mobile" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <FaMapMarkerAlt aria-hidden="true" /> {site.address.split(' - ')[0]}
          </span>
        </div>
        <div className="topbar__right">
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className="topbar__dot" aria-hidden="true" />
            <FaClock aria-hidden="true" /> {site.workingHours}
          </span>
          <span className="hide-mobile" style={{ opacity: 0.7 }}>
            Türkiye geneli sevkiyat • Aynı gün teklif
          </span>
        </div>
      </div>
    </div>
  );
}
