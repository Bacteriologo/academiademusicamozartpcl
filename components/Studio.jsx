/* Studio section — OZART */

const STUDIO_SERVICES = [
  { name: { es: 'Grabación & Mezcla', en: 'Recording & Mixing' }, desc: { es: 'Estudio profesional con equipamiento de alto nivel.', en: 'Professional studio with high-end equipment.' }, photo: null },
  { name: { es: 'Voz en Off', en: 'Voice Over' }, desc: { es: 'Locuciones para publicidad, documentales y más.', en: 'Voiceovers for ads, documentaries and more.' }, photo: null },
  { name: { es: 'Doblajes', en: 'Dubbing' }, desc: { es: 'Sincronización de voz para contenido audiovisual.', en: 'Voice sync for audiovisual content.' }, photo: null },
  { name: { es: 'Grabaciones en Vivo', en: 'Live Recording' }, desc: { es: 'Orquestas, bandas, rock acústico — capturamos todo.', en: 'Orchestras, bands, acoustic rock — we capture it all.' }, photo: null },
  { name: { es: 'Sala de Ensayo', en: 'Rehearsal Room' }, desc: { es: 'Espacio equipado para practicar con tu banda.', en: 'Fully equipped space to rehearse with your band.' }, photo: null },
  { name: { es: 'Masterización', en: 'Mastering' }, desc: { es: 'Acabado profesional para distribución digital.', en: 'Professional finish for digital distribution.' }, photo: null },
];

const StudioHero = ({ lang }) => {
  const t = (es, en) => lang === 'es' ? es : en;
  return (
    <section style={{
      background: '#080808', minHeight: '100vh',
      display: 'flex', alignItems: 'center',
      padding: '100px 24px 60px', position: 'relative', overflow: 'hidden',
    }}>
      {/* Background texture lines */}
      {[...Array(8)].map((_, i) => (
        <div key={i} style={{
          position: 'absolute',
          left: `${10 + i * 11}%`, top: 0, bottom: 0,
          width: 1,
          background: `rgba(192,57,43,${0.03 + i * 0.01})`,
          transform: `skewX(-8deg)`,
        }}/>
      ))}
      <div style={{
        position: 'absolute', top: '20%', right: '-5%',
        width: 500, height: 500,
        background: 'radial-gradient(circle, rgba(192,57,43,0.12) 0%, transparent 65%)',
        borderRadius: '50%',
      }}/>

      <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
              <div style={{ width: 40, height: 3, background: '#C0392B', borderRadius: 2 }}/>
              <span style={{ fontFamily: 'Barlow, sans-serif', fontSize: 12, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase', color: '#C0392B' }}>
                {t('Estudio profesional', 'Professional studio')}
              </span>
            </div>
            <h1 style={{
              fontFamily: 'Barlow Condensed, sans-serif',
              fontSize: 'clamp(52px, 7vw, 84px)',
              fontWeight: 800, lineHeight: 0.95,
              color: '#fff', margin: '0 0 24px',
              textTransform: 'uppercase', letterSpacing: -1,
            }}>
              MOZART<br/><span style={{ color: '#C0392B' }}>STUDIO</span><br/>
              <span style={{ fontSize: '0.55em', color: '#444', letterSpacing: 2 }}>PUCALLPA</span>
            </h1>
            <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: 17, lineHeight: 1.65, color: '#777', maxWidth: 440, margin: '0 0 36px' }}>
              {t(
                'Producción musical profesional en Pucallpa. Grabación, mezcla, masterización y más — con equipamiento de alta gama.',
                'Professional music production in Pucallpa. Recording, mixing, mastering and more — with high-end equipment.'
              )}
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="#contacto" style={{
                background: '#C0392B', color: '#fff',
                fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
                fontSize: 16, letterSpacing: 1, textTransform: 'uppercase',
                padding: '14px 32px', borderRadius: 3, textDecoration: 'none',
              }}>
                {t('Cotizar sesión', 'Get a quote')}
              </a>
              <a href="#servicios" style={{
                background: 'transparent', color: '#fff',
                fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
                fontSize: 16, letterSpacing: 1, textTransform: 'uppercase',
                padding: '14px 32px', borderRadius: 3, textDecoration: 'none',
                border: '2px solid #333',
              }}>
                {t('Ver servicios', 'See services')}
              </a>
            </div>
            <div style={{ display: 'flex', gap: 32, marginTop: 48 }}>
              {[
                { n: '6+', l: t('Servicios', 'Services') },
                { n: '100+', l: t('Proyectos', 'Projects') },
                { n: '24/7', l: t('Disponible', 'Available') },
              ].map((s, i) => (
                <div key={i}>
                  <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 36, fontWeight: 800, color: '#C0392B', lineHeight: 1 }}>{s.n}</div>
                  <div style={{ fontFamily: 'Barlow, sans-serif', fontSize: 13, color: '#555', marginTop: 2 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Photo */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: 4, overflow: 'hidden', aspectRatio: '4/3',
              border: '1px solid #1a1a1a',
            }}>
              <img
                src="uploads/fotos-1777316461370.jpg"
                alt="Mozart Studio"
                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.8) contrast(1.1)' }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(135deg, rgba(192,57,43,0.15) 0%, transparent 50%)',
              }}/>
            </div>
            <div style={{
              position: 'absolute', bottom: -16, right: -16,
              background: '#C0392B', color: '#fff',
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
              fontSize: 13, letterSpacing: 2, textTransform: 'uppercase',
              padding: '10px 16px', borderRadius: 3,
            }}>
              {t('Estudio disponible', 'Studio available')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StudioServicesSection = ({ lang }) => {
  const t = (es, en) => lang === 'es' ? es : en;
  return (
    <section id="servicios" style={{ background: '#0d0d0d', padding: '80px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
          <div style={{ width: 32, height: 3, background: '#C0392B' }}/>
          <span style={{ fontFamily: 'Barlow, sans-serif', fontSize: 12, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase', color: '#C0392B' }}>
            {t('Qué hacemos', 'What we do')}
          </span>
        </div>
        <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 48, fontWeight: 800, color: '#fff', marginBottom: 40, textTransform: 'uppercase' }}>
          {t('Servicios', 'Services')}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
          {STUDIO_SERVICES.map((s, i) => (
            <div key={i} style={{
              background: '#111', overflow: 'hidden',
              border: '1px solid #1a1a1a', cursor: 'pointer',
              transition: 'all 0.25s', position: 'relative',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#161616';
              e.currentTarget.style.borderColor = '#C0392B';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#111';
              e.currentTarget.style.borderColor = '#1a1a1a';
            }}>
              {/* Photo slot */}
              <div style={{
                height: 140, background: '#1a1a1a',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexDirection: 'column', gap: 6, position: 'relative', overflow: 'hidden',
              }}>
                {s.photo
                  ? <img src={s.photo} alt={s.name.es} style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }}/>
                  : <>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2a2a2a" strokeWidth="1.5">
                        <rect x="3" y="3" width="18" height="18" rx="2"/>
                        <circle cx="8.5" cy="8.5" r="1.5"/>
                        <path d="M3 16l5-5 4 4 3-3 6 6"/>
                      </svg>
                      <span style={{ fontFamily: 'Barlow, sans-serif', fontSize: 11, color: '#2e2e2e' }}>{lang === 'es' ? 'foto próximamente' : 'photo coming soon'}</span>
                    </>
                }
              </div>
              <div style={{ padding: '20px 24px 24px', position: 'relative' }}>
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 2,
                  background: '#C0392B', opacity: i % 3 === 0 ? 1 : 0,
                  transition: 'opacity 0.3s',
                }}/>
                <div style={{ width: 32, height: 3, background: '#C0392B', marginBottom: 16 }}></div>
                <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 6 }}>
                  {s.name[lang]}
                </h3>
                <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: 13, color: '#555', lineHeight: 1.6 }}>
                  {s.desc[lang]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StudioGallery = ({ lang }) => {
  const t = (es, en) => lang === 'es' ? es : en;
  return (
    <section id="galeria" style={{ background: '#080808', padding: '80px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
          <div style={{ width: 32, height: 3, background: '#C0392B' }}/>
          <span style={{ fontFamily: 'Barlow', fontSize: 12, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase', color: '#C0392B' }}>
            {t('Nuestras instalaciones', 'Our facilities')}
          </span>
        </div>
        <h2 style={{ fontFamily: 'Barlow Condensed', fontSize: 48, fontWeight: 800, color: '#fff', marginBottom: 40, textTransform: 'uppercase' }}>
          {t('Galería', 'Gallery')}
        </h2>
        {/* Main photo */}
        <div style={{ borderRadius: 4, overflow: 'hidden', marginBottom: 12, position: 'relative' }}>
          <img src="uploads/fotos-1777316461370.jpg" alt="Mozart Studio"
            style={{ width: '100%', height: 420, objectFit: 'cover', filter: 'brightness(0.85)' }}/>
          <div style={{
            position: 'absolute', bottom: 20, left: 20,
            background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)',
            color: '#fff', fontFamily: 'Barlow Condensed', fontWeight: 700,
            fontSize: 16, letterSpacing: 1, textTransform: 'uppercase',
            padding: '10px 16px', borderRadius: 3,
          }}>
            {t('Sala de control & grabación', 'Control room & recording booth')}
          </div>
        </div>
        {/* 3-col grid placeholders */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
          {[t('Sala de ensayo','Rehearsal room'), t('Cabina vocal','Vocal booth'), t('Equipamiento','Equipment')].map((label, i) => (
            <div key={i} style={{
              background: '#111', borderRadius: 4, height: 180,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              border: '1px solid #1e1e1e', flexDirection: 'column', gap: 8,
            }}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <path d="M3 16l5-5 4 4 3-3 6 6"/>
              </svg>
              <span style={{ fontFamily: 'Barlow', fontSize: 13, color: '#333' }}>{label}</span>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: 'Barlow', fontSize: 13, color: '#444', textAlign: 'center', marginTop: 16 }}>
          {t('Más fotos en nuestras redes sociales', 'More photos on our social media')}
        </p>
      </div>
    </section>
  );
};

const StudioQuoteSection = ({ lang }) => {
  const [name, setName] = React.useState('');
  const [service, setService] = React.useState('');
  const [details, setDetails] = React.useState('');
  const t = (es, en) => lang === 'es' ? es : en;

  const handleSend = () => {
    const msg = encodeURIComponent(`Hola Mozart Studio! Me interesa: ${service}. Mi nombre es ${name}. Detalles: ${details}`);
    window.open(`https://wa.me/51961005605?text=${msg}`, '_blank');
  };

  return (
    <section id="contacto" style={{ background: '#0d0d0d', padding: '80px 24px' }}>
      <div style={{ maxWidth: 860, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
              <div style={{ width: 32, height: 3, background: '#C0392B' }}/>
              <span style={{ fontFamily: 'Barlow', fontSize: 12, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase', color: '#C0392B' }}>
                {t('Hablemos', "Let's talk")}
              </span>
            </div>
            <h2 style={{ fontFamily: 'Barlow Condensed', fontSize: 42, fontWeight: 800, color: '#fff', marginBottom: 24, textTransform: 'uppercase' }}>
              {t('Cotiza tu sesión', 'Get your quote')}
            </h2>
            <p style={{ fontFamily: 'Barlow', fontSize: 15, color: '#666', lineHeight: 1.65, marginBottom: 32 }}>
              {t(
                'Cuéntanos tu proyecto y te respondemos con disponibilidad y precios. Respuesta en menos de 24 horas.',
                'Tell us about your project and we\'ll respond with availability and pricing. Reply within 24 hours.'
              )}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { label: t('Studio', 'Studio'), value: '+51 961 005 605' },
                { label: t('Email', 'Email'), value: 'juangrosvi@gmail.com' },
                { label: t('Dirección', 'Address'), value: 'Jr. las Alamedas Mz k Lt 03, Pucallpa' },
              ].map((c, i) => (
                <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', borderLeft: '2px solid #C0392B', paddingLeft: 12 }}>
                  <div style={{ fontSize: 18, marginTop: 1 }}>{c.icon}</div>
                  <div>
                    <div style={{ fontFamily: 'Barlow', fontSize: 11, color: '#C0392B', textTransform: 'uppercase', letterSpacing: 1, fontWeight: 600 }}>{c.label}</div>
                    <div style={{ fontFamily: 'Barlow', fontSize: 14, color: '#888' }}>{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Form */}
          <div style={{ background: '#111', borderRadius: 4, padding: 32, border: '1px solid #1e1e1e' }}>
            <input value={name} onChange={e => setName(e.target.value)} placeholder={t('Tu nombre', 'Your name')} style={{
              width: '100%', padding: '12px 16px', background: '#0d0d0d', border: '1px solid #2a2a2a',
              borderRadius: 3, color: '#fff', fontFamily: 'Barlow', fontSize: 14,
              marginBottom: 12, boxSizing: 'border-box',
            }}/>
            <select value={service} onChange={e => setService(e.target.value)} style={{
              width: '100%', padding: '12px 16px', background: '#0d0d0d', border: '1px solid #2a2a2a',
              borderRadius: 3, color: service ? '#fff' : '#555', fontFamily: 'Barlow', fontSize: 14,
              marginBottom: 12, boxSizing: 'border-box',
            }}>
              <option value="">{t('Selecciona servicio...', 'Select service...')}</option>
              {STUDIO_SERVICES.map((s, i) => <option key={i} value={s.name.es}>{s.name[lang]}</option>)}
            </select>
            <textarea value={details} onChange={e => setDetails(e.target.value)}
              placeholder={t('Detalles de tu proyecto...', 'Project details...')}
              rows={4} style={{
                width: '100%', padding: '12px 16px', background: '#0d0d0d', border: '1px solid #2a2a2a',
                borderRadius: 3, color: '#fff', fontFamily: 'Barlow', fontSize: 14,
                marginBottom: 16, boxSizing: 'border-box', resize: 'vertical',
              }}/>
            <button onClick={handleSend} style={{
              width: '100%', background: '#C0392B', color: '#fff', border: 'none', borderRadius: 3,
              padding: '14px', fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: 16,
              cursor: 'pointer', letterSpacing: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            }}>
              {t('Enviar por WhatsApp', 'Send via WhatsApp')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { StudioHero, StudioServicesSection, StudioGallery, StudioQuoteSection });
