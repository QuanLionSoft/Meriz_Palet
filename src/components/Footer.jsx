import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { navLinks, site } from '../data/site.js';
import Logo from './Logo.jsx';

export default function Footer() {
  const hasSocial = site.instagram || site.facebook;

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo />
          {site.email && (
            <p>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          )}
          {site.phone && (
            <p>
              <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a>
            </p>
          )}
        </div>

        <nav aria-label="Alt menü">
          <p className="footer__heading">Sayfalar</p>
          <ul className="footer__links">
            {navLinks.map((l) => (
              <li key={l.label}>{l.to ? <Link to={l.to}>{l.label}</Link> : <a href={l.href}>{l.label}</a>}</li>
            ))}
          </ul>
        </nav>

        {hasSocial && (
          <div>
            <p className="footer__heading">Bizi takip edin</p>
            <ul className="footer__social">
              {site.instagram && (
                <li>
                  <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <FaInstagram />
                  </a>
                </li>
              )}
              {site.facebook && (
                <li>
                  <a href={site.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <FaFacebookF />
                  </a>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
      <div className="footer__bar">
        <div className="container">© {new Date().getFullYear()} {site.name}</div>
      </div>
    </footer>
  );
}
