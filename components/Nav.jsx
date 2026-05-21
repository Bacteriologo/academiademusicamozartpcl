/* Nav component — OZART v4 (CSS must live in index.html) */
const OzartLogo = ({ size = 32 }) =>
<svg width={size} height={size} viewBox="0 0 44 44" fill="none">
    <polygon points="22,3 42,40 2,40" fill="white" opacity="0.95" />
    <polygon points="18,8 36,40 8,40" fill="#C0392B" opacity="0.85" />
    <polygon points="14,14 28,40 6,40" fill="#C0392B" opacity="0.6" />
    <circle cx="13" cy="37" r="4.5" fill="#C0392B" />
    <circle cx="13" cy="37" r="2.5" fill="white" />
  </svg>;

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
    <nav className="mozart-nav" style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: 'rgba(8,8,8,0.97)', backdropFilter: 'blur(12px)',
      borderBottom: '1px solid #1a1a1a',
      fontFamily: 'Barlow, sans-serif',
      height: 64,
      display: 'flex', alignItems: 'center'
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '0 24px', width: '100%',
        display: 'flex', alignItems: 'center', gap: 12
      }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
          <img src="uploads/logo.jpg" alt="Mozart" style={{ height: 34, width: 'auto', display: 'block' }} />
        </a>

        {/* Toggle — always visible */}
        <div style={{
          display: 'flex', borderRadius: 4, overflow: 'hidden',
          border: '1px solid #333', flexShrink: 0, marginLeft: 8
        }}>
          {[['escuela', lang === 'es' ? 'Escuela' : 'School'],
           ['studio', 'Studio']].map(([m, label]) =>
            <button key={m} onClick={() => { setMode(m); setMenuOpen(false); }} style={{
              padding: '5px 16px', border: 'none', cursor: 'pointer',
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600,
              fontSize: 13, letterSpacing: 1, textTransform: 'uppercase',
              transition: 'all 0.3s',
              background: mode === m ? '#C0392B' : 'transparent',
              color: mode === m ? '#fff' : '#666'
            }}>{label}</button>
          )}
        </div>

        {/* Desktop links */}
        <div className="mozart-desktop-links" style={{ display: 'flex', gap: 24, marginLeft: 'auto', alignItems: 'center' }}>
          {links.map((l, i) =>
            <a key={i} href={l.href} style={{
              fontFamily: 'Barlow, sans-serif', fontSize: 14, fontWeight: 500,
              color: '#aaa', textDecoration: 'none', transition: 'color 0.2s'
            }}
            onMouseEnter={e => e.target.style.color = '#C0392B'}
            onMouseLeave={e => e.target.style.color = '#aaa'}>
              {l.label}</a>
          )}
          <button onClick={() => setLang(lang === 'es' ? 'en' : 'es')} style={{
            background: 'transparent', border: '1px solid #444',
            color: '#888', borderRadius: 3,
            padding: '3px 8px', fontSize: 11, fontFamily: 'Barlow, sans-serif',
            fontWeight: 600, letterSpacing: 1, cursor: 'pointer',
            textTransform: 'uppercase'
          }}>{lang === 'es' ? 'EN' : 'ES'}</button>
          <a href="#reserva" style={{
            background: '#C0392B', color: '#fff',
            fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
            fontSize: 14, letterSpacing: 1, textTransform: 'uppercase',
            padding: '8px 20px', borderRadius: 3, textDecoration: 'none',
            transition: 'background 0.2s'
          }}
          onMouseEnter={e => e.target.style.background = '#a93226'}
          onMouseLeave={e => e.target.style.background = '#C0392B'}>
            {lang === 'es' ? 'Inscríbete' : 'Enroll'}</a>
        </div>

        {/* Hamburger (mobile) */}
        <button className="mozart-hamburger" onClick={() => setMenuOpen(!menuOpen)} style={{
          display: 'none', background: 'transparent', border: 'none',
          cursor: 'pointer', padding: 8, marginLeft: 'auto'
        }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2">
            {menuOpen
              ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
              : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mozart-mobile-menu" style={{
          position: 'fixed', top: 64, left: 0, right: 0, bottom: 0,
          background: 'rgba(8,8,8,0.98)', zIndex: 99,
          padding: '24px 20px', display: 'flex', flexDirection: 'column'
        }}>
          {links.map((l, i) =>
            <a key={i} href={l.href} className="mozart-mobile-link" onClick={() => setMenuOpen(false)}>{l.label}</a>
          )}
          <a href="#reserva" className="mozart-mobile-cta" onClick={() => setMenuOpen(false)}>
            {lang === 'es' ? 'Inscríbete' : 'Enroll'}
          </a>
        </div>
      )}
    </nav>
  );
};

Object.assign(window, { NavBar, OzartLogo });
