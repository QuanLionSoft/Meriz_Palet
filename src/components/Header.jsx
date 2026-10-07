import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { navLinks, site } from '../data/site.js';
import Logo from './Logo.jsx';

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="header__logo" onClick={close} aria-label={`${site.name} ana sayfa`}>
          <Logo />
        </Link>

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

        <nav id="ana-menu" className={`header__nav${open ? ' is-open' : ''}`} aria-label="Ana menü">
          {navLinks.map((l) =>
            l.to ? (
              <NavLink key={l.label} to={l.to} onClick={close}>
                {l.label}
              </NavLink>
            ) : (
              <a key={l.label} href={l.href} className={l.cta ? 'header__cta' : undefined} onClick={close}>
                {l.label}
              </a>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
