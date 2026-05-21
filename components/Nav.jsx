/* Nav component — OZART (mobile fixed) */
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
    <>
      {/* Desktop nav */}
      <nav className="desktop-nav" style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: 'rgba(8,8,8,0.97)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #1a1a1a',
        fontFamily: 'Barlow, sans-serif'
      }}>
        <div style={{
          maxWidth: 1200, margin: '0 auto',
          padding: '0 24px', height: 64,
          display: 'flex', alignItems: 'center', gap: 16
        }}>
          <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
            <img src="uploads/logo.jpg" alt="Mozart" style={{ height: 36, width: 'auto', display: 'block' }} />
          </a>

          {/* Mode toggle */}
          <div style={{
            display: 'flex', borderRadius: 4, overflow: 'hidden',
            border: '1px solid #333', marginLeft: 8
          }}>
            {[['escuela', lang === 'es' ? 'Escuela' : 'School'],
             ['studio', 'Studio']].map(([m, label]) =>
              <button key={m} onClick={() => setMode(m)} style={{
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
          <div style={{ display: 'flex', gap: 28, marginLeft: 'auto', alignItems: 'center' }}>
            {links.map((l, i) =>
              <a key={i} href={l.href} style={{
                fontFamily: 'Barlow, sans-serif', fontSize: 14, fontWeight: 500,
                color: '#aaa', textDecoration: 'none', transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.color = '#C0392B'}
              onMouseLeave={(e) => e.target.style.color = '#aaa'}>
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
            onMouseEnter={(e) => e.target.style.background = '#a93226'}
            onMouseLeave={(e) => e.target.style.background = '#C0392B'}>
              {lang === 'es' ? 'Inscríbete' : 'Enroll'}</a>
          </div>

          {/* Hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} style={{
            display: 'none', background: 'transparent', border: 'none',
            cursor: 'pointer', padding: 8, marginLeft: 'auto'
          }} className="hamburger-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2">
              {menuOpen
                ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
                : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
              }
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{
            background: 'rgba(8,8,8,0.98)',
            padding: '0 24px 24px',
            borderTop: '1px solid #222'
          }} className="mobile-menu">
            {links.map((l, i) =>
              <a key={i} href={l.href} onClick={() => setMenuOpen(false)} style={{
                display: 'block', fontFamily: 'Barlow, sans-serif', fontSize: 16, fontWeight: 500,
                color: '#aaa', textDecoration: 'none',
                borderBottom: '1px solid #222', padding: '14px 0'
              }}>{l.label}</a>
            )}
            <div style={{ display: 'flex', gap: 12, marginTop: 16, flexWrap: 'wrap' }}>
              <a href="#reserva" onClick={() => setMenuOpen(false)} style={{
                background: '#C0392B', color: '#fff',
                fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
                fontSize: 15, letterSpacing: 1, textTransform: 'uppercase',
                padding: '10px 20px', borderRadius: 3, textDecoration: 'none',
                textAlign: 'center'
              }}>{lang === 'es' ? 'Inscríbete' : 'Enroll'}</a>
            </div>
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { height: auto !important; }
          .desktop-nav > div > div:last-child { display: none !important; }
          .hamburger-btn { display: flex !important; }
          .mobile-menu { display: block !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu { display: none !important; }
        }
      `}</style>
    </>
  );
};

Object.assign(window, { NavBar, OzartLogo });
