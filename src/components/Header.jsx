import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaShoppingBasket } from 'react-icons/fa';
import { navLinks, site } from '../data/site.js';
import Logo from './Logo.jsx';
import { useQuote } from '../contexts/QuoteContext.jsx';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { count, open: openQuote } = useQuote();
  const location = useLocation();
  const close = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    close();
  }, [location.pathname]);

  const handleAnchor = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      close();
      const id = href.slice(1);
      if (location.pathname !== '/') {
        window.location.href = `/${href}`;
        return;
      }
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header__inner">
        <Link to="/" className="header__logo" onClick={close} aria-label={`${site.name} ana sayfa`}>
          <Logo />
        </Link>

        <div className="header__actions">
          <nav id="ana-menu" className={`header__nav${open ? ' is-open' : ''}`} aria-label="Ana menü">
            {navLinks.map((l) =>
              l.to ? (
                <NavLink key={l.label} to={l.to} onClick={close} className={({ isActive }) => (isActive ? 'active' : undefined)}>
                  {l.label}
                </NavLink>
              ) : (
                <a
                  key={l.label}
                  href={l.href}
                  className={l.cta ? 'header__cta' : undefined}
                  onClick={(e) => handleAnchor(e, l.href)}
                >
                  {l.label}
                </a>
              )
            )}
          </nav>

          <button
            type="button"
            className="btn btn--sm header__quote-btn"
            aria-label={`Teklif sepeti, ${count} ürün`}
            onClick={openQuote}
          >
            <FaShoppingBasket aria-hidden="true" /> <span className="hide-mobile">Teklif</span>
            {count > 0 && <span className="header__quote-count">{count}</span>}
          </button>

          <button
            type="button"
            className="header__toggle"
            aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
            aria-expanded={open}
            aria-controls="ana-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
}
