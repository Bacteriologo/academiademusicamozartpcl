/* Nav component — OZART v3 (single responsive nav, Escuela/Studio toggle) */
const OzartLogo = ({ size = 32 }) =>
<svg width={size} height={size} viewBox="0 0 44 44" fill="none">
    <polygon points="22,3 42,40 2,40" fill="white" opacity="0.95" />
    <polygon points="18,8 36,40 8,40" fill="#C0392B" opacity="0.85" />
    <polygon points="14,14 28,40 6,40" fill="#C0392B" opacity="0.6" />
    <circle cx="13" cy="37" r="4.5" fill="#C0392B" />
    <circle cx="13" cy="37" r="2.5" fill="white" />
  </svg>;

/* Single nav, responsive via CSS */
const navStyle = document.createElement('style');
navStyle.id = 'mozart-nav-styles';
navStyle.textContent = `
  .mozart-nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; background: rgba(8,8,8,0.97); backdrop-filter: blur(12px); border-bottom: 1px solid #1a1a1a; font-family: 'Barlow, sans-serif'; }
  .mozart-nav-inner { max-width: 1200px; margin: 0 auto; padding: 0 24px; height: 64px; display: flex; align-items: center; gap: 12px; }
  .mozart-toggle { display: flex; border-radius: 4px; overflow: hidden; border: 1px solid #333; flex-shrink: 0; }
  .mozart-toggle-btn { padding: 5px 16px; border: none; cursor: pointer; font-family: 'Barlow Condensed, sans-serif'; font-weight: 600; font-size: 13px; letter-spacing: 1px; text-transform: uppercase; transition: all 0.3s; background: transparent; color: #666; }
  .mozart-toggle-btn.active { background: #C0392B; color: #fff; }
  .mozart-links { display: flex; gap: 24px; margin-left: auto; align-items: center; }
  .mozart-links a { font-family: 'Barlow, sans-serif'; font-size: 14px; font-weight: 500; color: #aaa; text-decoration: none; transition: color 0.2s; }
  .mozart-links a:hover { color: #C0392B; }
  .mozart-lang-btn { background: transparent; border: 1px solid #444; color: #888; border-radius: 3px; padding: 3px 8px; font-size: 11px; font-family: 'Barlow, sans-serif'; font-weight: 600; letter-spacing: 1px; cursor: pointer; text-transform: uppercase; }
  .mozart-cta { background: #C0392B; color: #fff; font-family: 'Barlow Condensed, sans-serif'; font-weight: 700; font-size: 14px; letter-spacing: 1px; text-transform: uppercase; padding: 8px 20px; border-radius: 3px; text-decoration: none; transition: background 0.2s; flex-shrink: 0; }
  .mozart-cta:hover { background: #a93226; }
  .mozart-hamburger { display: none; background: transparent; border: none; cursor: pointer; padding: 8px; margin-left: auto; }
  .mozart-mobile-menu { display: none; position: fixed; top: 64px; left: 0; right: 0; bottom: 0; background: rgba(8,8,8,0.98); z-index: 99; padding: 24px 20px; flex-direction: column; gap: 0; }
  .mozart-mobile-menu.open { display: flex; }
  .mozart-mobile-link { display: block; font-family: 'Barlow, sans-serif'; font-size: 17px; font-weight: 500; color: #aaa; text-decoration: none; border-bottom: 1px solid #222; padding: 14px 0; }
  .mozart-mobile-cta { background: #C0392B; color: #fff; font-family: 'Barlow Condensed, sans-serif'; font-weight: 700; font-size: 15px; letter-spacing: 1px; text-transform: uppercase; padding: 11px 22px; border-radius: 3px; text-decoration: none; text-align: center; margin-top: 20px; }
  @media (max-width: 768px) {
    .mozart-nav { height: 56px; }
    .mozart-nav-inner { padding: 0 16px; gap: 8px; }
    .mozart-links { display: none; }
    .mozart-hamburger { display: flex; }
    .mozart-lang-btn, .mozart-cta { display: none; }
  }
  @media (max-width: 400px) {
    .mozart-toggle-btn { padding: 4px 10px; font-size: 11px; }
  }
`;
document.head.appendChild(navStyle);

const NavBar = ({ mode, setMode, lang, setLang }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const isStudio = mode === 'studio';

  const escuelaLinks = [
    { label: lang === 'es' ? 'Cursos' : 'Courses', href: '#cursos' },
    { label: lang === 'es' ? 'Reservar' : 'Book', href: '#reserva' },
    { label: 'Portal', href: '#portal' },
    { label: lang === 'es' ? 'Contacto' : 'Contact', href: '#contacto' }
  ];

  const studioLinks = [
    { label: lang === 'es' ? 'Servicios' : 'Services', href: '#servicios' },
    { label: lang === 'es' ? 'Galería' : 'Gallery', href: '#galeria' },
    { label: lang === 'es' ? 'Cotizar' : 'Quote', href: '#contacto' }
  ];

  const links = isStudio ? studioLinks : escuelaLinks;

  return (
    <nav className="mozart-nav">
      <div className="mozart-nav-inner">
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
          <img src="uploads/logo.jpg" alt="Mozart" style={{ height: 34, width: 'auto', display: 'block' }} />
        </a>

        {/* Toggle — always visible */}
        <div className="mozart-toggle">
          {[['escuela', lang === 'es' ? 'Escuela' : 'School'],
           ['studio', 'Studio']].map(([m, label]) =>
            <button key={m} onClick={() => { setMode(m); setMenuOpen(false); }} className={`mozart-toggle-btn ${mode === m ? 'active' : ''}`}>
              {label}
            </button>
          )}
        </div>

        {/* Desktop links */}
        <div className="mozart-links">
          {links.map((l, i) =>
            <a key={i} href={l.href}>{l.label}</a>
          )}
          <button className="mozart-lang-btn" onClick={() => setLang(lang === 'es' ? 'en' : 'es')}>
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
          <a href="#reserva" className="mozart-cta">
            {lang === 'es' ? 'Inscríbete' : 'Enroll'}
          </a>
        </div>

        {/* Hamburger (mobile only) */}
        <button className="mozart-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2">
            {menuOpen
              ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
              : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`mozart-mobile-menu ${menuOpen ? 'open' : ''}`}>
        {links.map((l, i) =>
          <a key={i} href={l.href} className="mozart-mobile-link" onClick={() => setMenuOpen(false)}>{l.label}</a>
        )}
        <a href="#reserva" className="mozart-mobile-cta" onClick={() => setMenuOpen(false)}>
          {lang === 'es' ? 'Inscríbete' : 'Enroll'}
        </a>
      </div>
    </nav>
  );
};

Object.assign(window, { NavBar, OzartLogo });
