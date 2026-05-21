/* Escuela section — OZART */

const COURSES = [
  { name: { es: 'Guitarra', en: 'Guitar' }, desc: { es: 'Acústica & eléctrica', en: 'Acoustic & electric' }, photo: null },
  { name: { es: 'Piano', en: 'Piano' }, desc: { es: 'Todos los niveles', en: 'All levels' }, photo: null },
  { name: { es: 'Canto', en: 'Voice' }, desc: { es: 'Técnica vocal', en: 'Vocal technique' }, photo: null },
  { name: { es: 'Violín', en: 'Violin' }, desc: { es: 'Clásico & moderno', en: 'Classic & modern' }, photo: null },
  { name: { es: 'Batería', en: 'Drums' }, desc: { es: 'Acústica & electrónica', en: 'Acoustic & electronic' }, photo: null },
];

const TIMES = ['9:00','10:00','11:00','15:00','16:00','17:00','18:00'];
const DAYS = [
  { es: 'Lun', en: 'Mon' }, { es: 'Mar', en: 'Tue' },
  { es: 'Mié', en: 'Wed' }, { es: 'Jue', en: 'Thu' },
  { es: 'Vie', en: 'Fri' }, { es: 'Sáb', en: 'Sat' },
];

const EscuelaHero = ({ lang }) => (
  <section style={{
    background: '#f5f3ee', minHeight: '100vh',
    display: 'flex', alignItems: 'center',
    padding: '100px 24px 60px',
    position: 'relative', overflow: 'hidden',
  }}>
    {/* Background geometric */}
    <div style={{
      position: 'absolute', top: -80, right: -80,
      width: 400, height: 400,
      background: 'linear-gradient(135deg, rgba(192,57,43,0.06) 0%, transparent 70%)',
      transform: 'rotate(15deg)',
      borderRadius: 8,
    }}/>
    <div style={{
      position: 'absolute', bottom: 0, left: '50%',
      width: 2, height: '40%',
      background: 'linear-gradient(to bottom, transparent, rgba(192,57,43,0.15))',
    }}/>

    <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%' }}>
      <div className="mozart-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
            <div style={{ width: 40, height: 3, background: '#C0392B', borderRadius: 2 }}/>
            <span style={{
              fontFamily: 'Barlow, sans-serif', fontSize: 12, fontWeight: 600,
              letterSpacing: 3, textTransform: 'uppercase', color: '#C0392B',
            }}>Pucallpa, Perú</span>
          </div>
          <h1 style={{
            fontFamily: 'Barlow Condensed, sans-serif',
            fontSize: 'clamp(52px, 7vw, 84px)',
            fontWeight: 800, lineHeight: 0.95,
            color: '#0a0a0a', margin: '0 0 24px',
            textTransform: 'uppercase', letterSpacing: -1,
          }}>
            {lang === 'es' ? (
              <>Tu talento<br/><span style={{ color: '#C0392B' }}>empieza</span><br/>aquí.</>
            ) : (
              <>Your talent<br/><span style={{ color: '#C0392B' }}>starts</span><br/>here.</>
            )}
          </h1>
          <p style={{
            fontFamily: 'Barlow, sans-serif', fontSize: 17, lineHeight: 1.65,
            color: '#555', maxWidth: 440, margin: '0 0 36px',
          }}>
            {lang === 'es'
              ? 'Escuela Contemporánea de Música y Artes. Docentes calificados, ambiente moderno, comunidad creativa.'
              : 'Contemporary Music and Arts School. Qualified teachers, modern environment, creative community.'}
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="#reserva" style={{
              background: '#C0392B', color: '#fff',
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
              fontSize: 16, letterSpacing: 1, textTransform: 'uppercase',
              padding: '14px 32px', borderRadius: 3, textDecoration: 'none',
              display: 'inline-block',
            }}>
              {lang === 'es' ? 'Reservar clase' : 'Book a class'}
            </a>
            <a href="#cursos" style={{
              background: 'transparent', color: '#0a0a0a',
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
              fontSize: 16, letterSpacing: 1, textTransform: 'uppercase',
              padding: '14px 32px', borderRadius: 3, textDecoration: 'none',
              border: '2px solid #0a0a0a', display: 'inline-block',
            }}>
              {lang === 'es' ? 'Ver cursos' : 'See courses'}
            </a>
          </div>
          <div style={{ display: 'flex', gap: 32, marginTop: 48 }}>
            {[
              { n: '7+', l: lang === 'es' ? 'Cursos' : 'Courses' },
              { n: '10+', l: lang === 'es' ? 'Docentes' : 'Teachers' },
              { n: '200+', l: lang === 'es' ? 'Estudiantes' : 'Students' },
            ].map((s, i) => (
              <div key={i}>
                <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 36, fontWeight: 800, color: '#C0392B', lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontFamily: 'Barlow, sans-serif', fontSize: 13, color: '#888', marginTop: 2 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Photo side */}
        <div style={{ position: 'relative' }}>
          <div className="mozart-hero-img" style={{
            background: '#ddd', borderRadius: 4, overflow: 'hidden',
            aspectRatio: '4/5',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <img
              src="uploads/escuela 1.jpg"
              alt="Escuela Mozart"
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.95)' }}
            />
          </div>
          <div style={{
            position: 'absolute', bottom: -16, left: -16,
            background: '#C0392B', color: '#fff',
            fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
            fontSize: 14, letterSpacing: 2, textTransform: 'uppercase',
            padding: '12px 20px', borderRadius: 3,
          }}>
            {lang === 'es' ? 'Pucallpa, Perú' : 'Pucallpa, Peru'}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ReservaSection = ({ lang }) => {
  const [step, setStep] = React.useState(1);
  const [selectedCourse, setSelectedCourse] = React.useState(null);
  const [selectedDay, setSelectedDay] = React.useState(2);
  const [selectedTime, setSelectedTime] = React.useState(null);
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [done, setDone] = React.useState(false);

  const t = (es, en) => lang === 'es' ? es : en;

  const handleConfirm = () => {
    if (!name || !phone) return;
    const msg = encodeURIComponent(
      `Hola! Quiero reservar una clase de ${selectedCourse?.name?.es || ''} el ${DAYS[selectedDay]?.es} a las ${TIMES[selectedTime] || ''}. Mi nombre es ${name}.`
    );
    window.open(`https://wa.me/51944489876?text=${msg}`, '_blank');
    setDone(true);
  };

  if (done) return (
    <section id="reserva" style={{ background: '#fff', padding: '80px 24px' }}>
      <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ width: 48, height: 4, background: '#C0392B', margin: '0 auto 20px', borderRadius: 2 }}></div>
        <h2 style={{ fontFamily: 'Barlow Condensed', fontSize: 36, fontWeight: 800, color: '#0a0a0a', marginBottom: 12 }}>
          {t('¡Listo! Te contactamos pronto.', 'Done! We\'ll contact you soon.')}
        </h2>
        <p style={{ fontFamily: 'Barlow', color: '#666' }}>
          {t('Revisa tu WhatsApp. Un docente te confirmará el horario.', 'Check your WhatsApp. A teacher will confirm your schedule.')}
        </p>
        <button onClick={() => { setDone(false); setStep(1); setSelectedCourse(null); setSelectedTime(null); }}
          style={{ marginTop: 24, background: '#C0392B', color: '#fff', border: 'none', borderRadius: 3, padding: '12px 28px', fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: 15, cursor: 'pointer', letterSpacing: 1 }}>
          {t('Nueva reserva', 'New booking')}
        </button>
      </div>
    </section>
  );

  return (
    <section id="reserva" style={{ background: '#fff', padding: '80px 24px' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
          <div style={{ width: 32, height: 3, background: '#C0392B' }}/>
          <span style={{ fontFamily: 'Barlow', fontSize: 12, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase', color: '#C0392B' }}>
            {t('Reserva online', 'Book online')}
          </span>
        </div>
        <h2 style={{ fontFamily: 'Barlow Condensed', fontSize: 48, fontWeight: 800, color: '#0a0a0a', marginBottom: 40, textTransform: 'uppercase' }}>
          {t('Reserva tu clase', 'Book your class')}
        </h2>

        {/* Steps indicator */}
        <div style={{ display: 'flex', gap: 0, marginBottom: 40 }}>
          {[1,2,3].map(s => (
            <React.Fragment key={s}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{
                  width: 28, height: 28, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: step >= s ? '#C0392B' : '#eee',
                  color: step >= s ? '#fff' : '#aaa',
                  fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: 14,
                  transition: 'all 0.3s',
                }}>{s}</div>
                <span style={{ fontFamily: 'Barlow', fontSize: 13, color: step >= s ? '#0a0a0a' : '#bbb', fontWeight: step === s ? 600 : 400 }}>
                  {s === 1 ? t('Curso', 'Course') : s === 2 ? t('Horario', 'Schedule') : t('Confirmar', 'Confirm')}
                </span>
              </div>
              {s < 3 && <div style={{ flex: 1, height: 1, background: step > s ? '#C0392B' : '#eee', alignSelf: 'center', margin: '0 12px', transition: 'background 0.3s' }}/>}
            </React.Fragment>
          ))}
        </div>

        {/* Step 1 */}
        {step === 1 && (
          <div>
            <p style={{ fontFamily: 'Barlow', color: '#666', marginBottom: 20 }}>
              {t('¿Qué quieres aprender?', 'What do you want to learn?')}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12 }}>
              {COURSES.map((c, i) => (
                <button key={i} onClick={() => { setSelectedCourse(c); setStep(2); }} style={{
                  background: selectedCourse?.icon === c.icon ? '#C0392B' : '#f5f3ee',
                  border: selectedCourse?.icon === c.icon ? '2px solid #C0392B' : '2px solid #e8e4de',
                  borderRadius: 4, padding: '20px 12px', cursor: 'pointer',
                  textAlign: 'center', transition: 'all 0.2s',
                }}>
                  <div style={{ fontSize: 32, marginBottom: 8 }}>{c.icon}</div>
                  <div style={{ fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: 15, color: selectedCourse?.icon === c.icon ? '#fff' : '#0a0a0a' }}>{c.name[lang]}</div>
                  <div style={{ fontFamily: 'Barlow', fontSize: 12, color: selectedCourse?.icon === c.icon ? 'rgba(255,255,255,0.8)' : '#888', marginTop: 4 }}>{c.desc[lang]}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div>
            <p style={{ fontFamily: 'Barlow', color: '#666', marginBottom: 20 }}>
              {t(`Curso: ${selectedCourse?.name?.es} — Elige día y hora`, `Course: ${selectedCourse?.name?.en} — Pick day & time`)}
            </p>
            <div style={{ display: 'flex', gap: 6, marginBottom: 20 }}>
              {DAYS.map((d, i) => (
                <button key={i} onClick={() => setSelectedDay(i)} style={{
                  flex: 1, padding: '10px 4px', border: 'none', borderRadius: 3, cursor: 'pointer',
                  background: selectedDay === i ? '#0a0a0a' : '#f0eeeb',
                  color: selectedDay === i ? '#fff' : '#555',
                  fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: 14,
                  transition: 'all 0.2s',
                }}>{d[lang]}</button>
              ))}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32 }}>
              {TIMES.map((t2, i) => (
                <button key={i} onClick={() => setSelectedTime(i)} style={{
                  padding: '10px 20px', border: '2px solid', borderRadius: 20, cursor: 'pointer',
                  borderColor: selectedTime === i ? '#C0392B' : '#ddd',
                  background: selectedTime === i ? '#C0392B' : '#fff',
                  color: selectedTime === i ? '#fff' : '#555',
                  fontFamily: 'Barlow Condensed', fontWeight: 600, fontSize: 15,
                  transition: 'all 0.2s',
                }}>{t2}</button>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              <button onClick={() => setStep(1)} style={{ background: 'transparent', border: '2px solid #ddd', borderRadius: 3, padding: '12px 24px', fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: 15, cursor: 'pointer', color: '#888' }}>
                ← {t('Atrás', 'Back')}
              </button>
              <button onClick={() => selectedTime !== null && setStep(3)} style={{
                background: selectedTime !== null ? '#C0392B' : '#ccc',
                color: '#fff', border: 'none', borderRadius: 3, padding: '12px 32px',
                fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: 15, cursor: selectedTime !== null ? 'pointer' : 'default',
                letterSpacing: 1,
              }}>
                {t('Siguiente →', 'Next →')}
              </button>
            </div>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div>
            <p style={{ fontFamily: 'Barlow', color: '#666', marginBottom: 24 }}>
              {t('Confirma tus datos para finalizar la reserva.', 'Confirm your details to complete the booking.')}
            </p>
            <div style={{ background: '#f5f3ee', borderRadius: 4, padding: 20, marginBottom: 24, display: 'flex', gap: 24 }}>
              <div>
                <div style={{ fontFamily: 'Barlow', fontSize: 12, color: '#888', textTransform: 'uppercase', letterSpacing: 1 }}>{t('Curso', 'Course')}</div>
                <div style={{ fontFamily: 'Barlow Condensed', fontSize: 20, fontWeight: 700 }}>{selectedCourse?.icon} {selectedCourse?.name?.[lang]}</div>
              </div>
              <div>
                <div style={{ fontFamily: 'Barlow', fontSize: 12, color: '#888', textTransform: 'uppercase', letterSpacing: 1 }}>{t('Día', 'Day')}</div>
                <div style={{ fontFamily: 'Barlow Condensed', fontSize: 20, fontWeight: 700 }}>{DAYS[selectedDay]?.[lang]}</div>
              </div>
              <div>
                <div style={{ fontFamily: 'Barlow', fontSize: 12, color: '#888', textTransform: 'uppercase', letterSpacing: 1 }}>{t('Hora', 'Time')}</div>
                <div style={{ fontFamily: 'Barlow Condensed', fontSize: 20, fontWeight: 700 }}>{TIMES[selectedTime]}</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
              <input value={name} onChange={e => setName(e.target.value)} placeholder={t('Tu nombre completo', 'Your full name')} style={{
                flex: 1, padding: '12px 16px', border: '2px solid #e0ddd8', borderRadius: 3,
                fontFamily: 'Barlow', fontSize: 15, outline: 'none', background: '#fafaf8',
              }}/>
              <input value={phone} onChange={e => setPhone(e.target.value)} placeholder={t('WhatsApp / Teléfono', 'WhatsApp / Phone')} style={{
                flex: 1, padding: '12px 16px', border: '2px solid #e0ddd8', borderRadius: 3,
                fontFamily: 'Barlow', fontSize: 15, outline: 'none', background: '#fafaf8',
              }}/>
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              <button onClick={() => setStep(2)} style={{ background: 'transparent', border: '2px solid #ddd', borderRadius: 3, padding: '12px 24px', fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: 15, cursor: 'pointer', color: '#888' }}>
                ← {t('Atrás', 'Back')}
              </button>
              <button onClick={handleConfirm} style={{
                background: '#C0392B', color: '#fff', border: 'none', borderRadius: 3,
                padding: '12px 32px', fontFamily: 'Barlow Condensed', fontWeight: 700,
                fontSize: 15, cursor: 'pointer', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 8,
              }}>
                {t('Confirmar por WhatsApp', 'Confirm via WhatsApp')}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const CoursesSection = ({ lang }) => {
  const t = (es, en) => lang === 'es' ? es : en;
  return (
    <section id="cursos" style={{ background: '#f5f3ee', padding: '80px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
          <div style={{ width: 32, height: 3, background: '#C0392B' }}/>
          <span style={{ fontFamily: 'Barlow', fontSize: 12, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase', color: '#C0392B' }}>
            {t('Lo que enseñamos', 'What we teach')}
          </span>
        </div>
        <h2 style={{ fontFamily: 'Barlow Condensed', fontSize: 48, fontWeight: 800, color: '#0a0a0a', marginBottom: 40, textTransform: 'uppercase' }}>
          {t('Nuestros cursos', 'Our courses')}
        </h2>
        <div className="mozart-courses-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16 }}>
          {COURSES.map((c, i) => (
            <div key={i} style={{
              background: '#fff', borderRadius: 4, overflow: 'hidden',
              border: '1px solid #e8e4de', cursor: 'pointer',
              transition: 'all 0.25s', position: 'relative',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.08)';
              e.currentTarget.style.borderColor = '#C0392B';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = '#e8e4de';
            }}>
              {/* Photo slot */}
              <div style={{
                height: 140, background: '#ede9e2',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexDirection: 'column', gap: 6, position: 'relative', overflow: 'hidden',
              }}>
                {c.photo
                  ? <img src={c.photo} alt={c.name[lang]} style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }}/>
                  : <>
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#bbb" strokeWidth="1.5">
                        <rect x="3" y="3" width="18" height="18" rx="2"/>
                        <circle cx="8.5" cy="8.5" r="1.5"/>
                        <path d="M3 16l5-5 4 4 3-3 6 6"/>
                      </svg>
                      <span style={{ fontFamily: 'Barlow', fontSize: 11, color: '#ccc' }}>{t('foto próximamente','photo coming soon')}</span>
                    </>
                }
              </div>
              <div style={{ padding: '16px 16px 20px' }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>{c.icon}</div>
                <h3 style={{ fontFamily: 'Barlow Condensed', fontSize: 20, fontWeight: 700, color: '#0a0a0a', marginBottom: 4 }}>{c.name[lang]}</h3>
                <p style={{ fontFamily: 'Barlow', fontSize: 12, color: '#888', marginBottom: 12 }}>{c.desc[lang]}</p>
                <a href="#reserva" style={{ fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: 12, color: '#C0392B', textDecoration: 'none', letterSpacing: 1, textTransform: 'uppercase' }}>
                  {t('Reservar →', 'Book →')}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PortalSection = ({ lang }) => {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');
  const [activeTab, setActiveTab] = React.useState('horario');
  const t = (es, en) => lang === 'es' ? es : en;

  const SCHEDULE = [
    { day: t('Lunes','Monday'), time: '15:00 – 16:00', course: t('Guitarra','Guitar'), teacher: 'Prof. García' },
    { day: t('Miércoles','Wednesday'), time: '15:00 – 16:00', course: t('Guitarra','Guitar'), teacher: 'Prof. García' },
    { day: t('Viernes','Friday'), time: '16:00 – 17:00', course: t('Piano','Piano'), teacher: 'Prof. Ríos' },
  ];

  return (
    <section id="portal" style={{ background: '#fff', padding: '80px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
          <div style={{ width: 32, height: 3, background: '#C0392B' }}/>
          <span style={{ fontFamily: 'Barlow', fontSize: 12, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase', color: '#C0392B' }}>
            {t('Solo para estudiantes', 'Students only')}
          </span>
        </div>
        <h2 style={{ fontFamily: 'Barlow Condensed', fontSize: 48, fontWeight: 800, color: '#0a0a0a', marginBottom: 40, textTransform: 'uppercase' }}>
          {t('Portal estudiantil', 'Student portal')}
        </h2>

        {!loggedIn ? (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }}>
            {/* Login form */}
            <div style={{ background: '#f5f3ee', borderRadius: 4, padding: 32 }}>
              <h3 style={{ fontFamily: 'Barlow Condensed', fontSize: 24, fontWeight: 700, marginBottom: 24 }}>
                {t('Iniciar sesión', 'Sign in')}
              </h3>
              <input value={email} onChange={e => setEmail(e.target.value)} placeholder={t('Email o usuario', 'Email or username')} style={{
                width: '100%', padding: '12px 16px', border: '2px solid #e0ddd8', borderRadius: 3,
                fontFamily: 'Barlow', fontSize: 15, marginBottom: 12, boxSizing: 'border-box', background: '#fff',
              }}/>
              <input type="password" value={pass} onChange={e => setPass(e.target.value)} placeholder={t('Contraseña', 'Password')} style={{
                width: '100%', padding: '12px 16px', border: '2px solid #e0ddd8', borderRadius: 3,
                fontFamily: 'Barlow', fontSize: 15, marginBottom: 20, boxSizing: 'border-box', background: '#fff',
              }}/>
              <button onClick={() => email && pass && setLoggedIn(true)} style={{
                width: '100%', background: '#C0392B', color: '#fff', border: 'none', borderRadius: 3,
                padding: '13px', fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: 16, cursor: 'pointer', letterSpacing: 1,
              }}>
                {t('Entrar al portal', 'Enter portal')}
              </button>
              <p style={{ fontFamily: 'Barlow', fontSize: 12, color: '#aaa', textAlign: 'center', marginTop: 16 }}>
                {t('¿No tienes cuenta? Habla con recepción.', "Don't have an account? Talk to reception.")}
              </p>
            </div>
            {/* Benefits */}
            <div>
              <h3 style={{ fontFamily: 'Barlow Condensed', fontSize: 22, fontWeight: 700, marginBottom: 20, color: '#0a0a0a' }}>
                {t('¿Qué encuentras en el portal?', 'What\'s in the portal?')}
              </h3>
              {[
                { title: t('Tu horario','Your schedule'), desc: t('Clases de la semana','Weekly classes') },
                { title: t('Materiales','Materials'), desc: t('Partituras y ejercicios','Scores and exercises') },
                { title: t('Tu progreso','Your progress'), desc: t('Seguimiento de tu aprendizaje','Learning tracking') },
                { title: t('Eventos','Events'), desc: t('Conciertos y presentaciones','Concerts and recitals') },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 14, marginBottom: 20 }}>
                  <div style={{ width: 8, height: 8, background: '#C0392B', borderRadius: '50%', flexShrink: 0, marginTop: 6 }}></div>
                  <div>
                    <div style={{ fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: 16, color: '#0a0a0a' }}>{item.title}</div>
                    <div style={{ fontFamily: 'Barlow', fontSize: 13, color: '#888' }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* ── PORTAL DASHBOARD ── */
          <div style={{ background: '#f5f3ee', borderRadius: 6, overflow: 'hidden', border: '1px solid #e8e4de' }}>
            {/* Portal header */}
            <div style={{ background: '#0a0a0a', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <img src="uploads/logo.jpg" alt="Mozart" style={{ height: 28, width: 'auto' }}/>
                <div style={{ width: 1, height: 24, background: '#333' }}/>
                <span style={{ fontFamily: 'Barlow Condensed', fontWeight: 600, fontSize: 13, letterSpacing: 2, textTransform: 'uppercase', color: '#888' }}>
                  {t('Portal Estudiantil', 'Student Portal')}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#C0392B', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: 14, color: '#fff' }}>
                      {(email.split('@')[0] || 'E')[0].toUpperCase()}
                    </span>
                  </div>
                  <span style={{ fontFamily: 'Barlow', fontSize: 13, color: '#aaa' }}>{email.split('@')[0] || 'Estudiante'}</span>
                </div>
                <button onClick={() => setLoggedIn(false)} style={{ background: 'transparent', border: '1px solid #333', borderRadius: 3, padding: '5px 12px', fontFamily: 'Barlow', fontSize: 12, cursor: 'pointer', color: '#666', letterSpacing: 0.5 }}>
                  {t('Salir', 'Sign out')}
                </button>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr' }}>
              {/* Sidebar */}
              <div style={{ background: '#fff', borderRight: '1px solid #e8e4de', padding: '24px 0' }}>
                {[
                  ['horario', t('Mi Horario', 'My Schedule')],
                  ['materiales', t('Materiales', 'Materials')],
                  ['progreso', t('Mi Progreso', 'My Progress')],
                  ['eventos', t('Eventos', 'Events')],
                ].map(([k, label]) => (
                  <button key={k} onClick={() => setActiveTab(k)} style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    width: '100%', padding: '12px 24px', border: 'none',
                    background: activeTab === k ? '#f5f3ee' : 'transparent',
                    borderLeft: activeTab === k ? '3px solid #C0392B' : '3px solid transparent',
                    cursor: 'pointer', textAlign: 'left', transition: 'all 0.15s',
                  }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: activeTab === k ? '#C0392B' : '#ccc', flexShrink: 0 }}/>
                    <span style={{ fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: 14, letterSpacing: 0.5, color: activeTab === k ? '#0a0a0a' : '#888' }}>{label}</span>
                  </button>
                ))}

                {/* Quick info */}
                <div style={{ margin: '24px 16px 0', background: '#f5f3ee', borderRadius: 4, padding: '14px 16px' }}>
                  <div style={{ fontFamily: 'Barlow', fontSize: 11, color: '#aaa', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>{t('Próxima clase', 'Next class')}</div>
                  <div style={{ fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: 15, color: '#0a0a0a' }}>{t('Guitarra', 'Guitar')}</div>
                  <div style={{ fontFamily: 'Barlow', fontSize: 12, color: '#888', marginTop: 2 }}>{t('Lun — 15:00', 'Mon — 15:00')}</div>
                  <div style={{ marginTop: 10, width: '100%', height: 2, background: '#e0ddd8', borderRadius: 1 }}>
                    <div style={{ width: '60%', height: '100%', background: '#C0392B', borderRadius: 1 }}/>
                  </div>
                  <div style={{ fontFamily: 'Barlow', fontSize: 11, color: '#aaa', marginTop: 4 }}>{t('En 2 días', 'In 2 days')}</div>
                </div>
              </div>

              {/* Main content */}
              <div style={{ padding: 28, minHeight: 420 }}>

                {/* HORARIO TAB */}
                {activeTab === 'horario' && (
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                      <h3 style={{ fontFamily: 'Barlow Condensed', fontSize: 22, fontWeight: 800, textTransform: 'uppercase' }}>{t('Mi Horario Semanal', 'My Weekly Schedule')}</h3>
                      <div style={{ fontFamily: 'Barlow', fontSize: 12, color: '#aaa' }}>{t('Semana actual', 'Current week')}</div>
                    </div>
                    {/* Week grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 6, marginBottom: 20 }}>
                      {[
                        { day: t('Lun','Mon'), active: true, course: t('Guitarra','Guitar'), time: '15:00', teacher: 'García' },
                        { day: t('Mar','Tue'), active: false },
                        { day: t('Mié','Wed'), active: true, course: t('Guitarra','Guitar'), time: '15:00', teacher: 'García' },
                        { day: t('Jue','Thu'), active: false },
                        { day: t('Vie','Fri'), active: true, course: 'Piano', time: '16:00', teacher: 'Ríos' },
                        { day: t('Sáb','Sat'), active: false },
                      ].map((d, i) => (
                        <div key={i} style={{
                          borderRadius: 4, overflow: 'hidden',
                          border: d.active ? '1.5px solid #C0392B' : '1.5px solid #e8e4de',
                          background: d.active ? '#fff' : '#faf9f7',
                        }}>
                          <div style={{ background: d.active ? '#C0392B' : '#e8e4de', padding: '6px 8px', textAlign: 'center' }}>
                            <span style={{ fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: 13, color: d.active ? '#fff' : '#aaa' }}>{d.day}</span>
                          </div>
                          {d.active && (
                            <div style={{ padding: '10px 8px' }}>
                              <div style={{ fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: 13, color: '#0a0a0a' }}>{d.course}</div>
                              <div style={{ fontFamily: 'Barlow', fontSize: 11, color: '#888', marginTop: 2 }}>{d.time}</div>
                              <div style={{ fontFamily: 'Barlow', fontSize: 11, color: '#bbb', marginTop: 1 }}>Prof. {d.teacher}</div>
                            </div>
                          )}
                          {!d.active && (
                            <div style={{ padding: '10px 8px', textAlign: 'center' }}>
                              <div style={{ width: 20, height: 1, background: '#ddd', margin: '10px auto' }}/>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    {/* Upcoming */}
                    <div style={{ fontFamily: 'Barlow Condensed', fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#aaa', marginBottom: 10 }}>{t('Próximas clases', 'Upcoming classes')}</div>
                    {SCHEDULE.map((s, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '12px 16px', background: '#fff', borderRadius: 4, marginBottom: 6, border: '1px solid #e8e4de' }}>
                        <div style={{ width: 4, height: 36, background: '#C0392B', borderRadius: 2, flexShrink: 0 }}/>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: 16, color: '#0a0a0a' }}>{s.course}</div>
                          <div style={{ fontFamily: 'Barlow', fontSize: 12, color: '#888' }}>{s.day} · {s.time}</div>
                        </div>
                        <div style={{ fontFamily: 'Barlow', fontSize: 12, color: '#aaa' }}>{s.teacher}</div>
                        <div style={{ background: '#f5f3ee', borderRadius: 3, padding: '3px 10px' }}>
                          <span style={{ fontFamily: 'Barlow Condensed', fontSize: 12, fontWeight: 600, color: '#666' }}>{t('Confirmada', 'Confirmed')}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* MATERIALES TAB */}
                {activeTab === 'materiales' && (
                  <div>
                    <h3 style={{ fontFamily: 'Barlow Condensed', fontSize: 22, fontWeight: 800, textTransform: 'uppercase', marginBottom: 20 }}>{t('Materiales de Estudio', 'Study Materials')}</h3>
                    {[
                      { name: t('Escala de Do Mayor — PDF', 'C Major Scale — PDF'), course: t('Guitarra','Guitar'), date: 'Abr 20', size: '1.2 MB' },
                      { name: t('Ejercicios de digitación — Semana 3', 'Fingering exercises — Week 3'), course: t('Guitarra','Guitar'), date: 'Abr 15', size: '840 KB' },
                      { name: t('Teoría musical básica', 'Basic music theory'), course: 'Piano', date: 'Abr 10', size: '2.1 MB' },
                      { name: t('Bach — Minueto en Sol', 'Bach — Minuet in G'), course: 'Piano', date: 'Abr 5', size: '320 KB' },
                    ].map((m, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '14px 16px', background: '#fff', borderRadius: 4, marginBottom: 6, border: '1px solid #e8e4de' }}>
                        <div style={{ width: 36, height: 36, background: '#f5f3ee', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <div style={{ width: 14, height: 16, border: '1.5px solid #C0392B', borderRadius: 1, position: 'relative' }}>
                            <div style={{ position: 'absolute', top: 3, left: 2, right: 2, height: 1.5, background: '#C0392B', opacity: 0.4 }}/>
                            <div style={{ position: 'absolute', top: 6, left: 2, right: 2, height: 1.5, background: '#C0392B', opacity: 0.4 }}/>
                          </div>
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: 15, color: '#0a0a0a' }}>{m.name}</div>
                          <div style={{ fontFamily: 'Barlow', fontSize: 12, color: '#aaa', marginTop: 2 }}>{m.course} · {m.date} · {m.size}</div>
                        </div>
                        <button style={{ background: '#0a0a0a', color: '#fff', border: 'none', borderRadius: 3, padding: '6px 14px', fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: 12, cursor: 'pointer', letterSpacing: 0.5 }}>
                          {t('Descargar', 'Download')}
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {/* PROGRESO TAB */}
                {activeTab === 'progreso' && (
                  <div>
                    <h3 style={{ fontFamily: 'Barlow Condensed', fontSize: 22, fontWeight: 800, textTransform: 'uppercase', marginBottom: 20 }}>{t('Mi Progreso', 'My Progress')}</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 24 }}>
                      {[
                        { course: t('Guitarra','Guitar'), level: t('Intermedio','Intermediate'), pct: 65, months: 4 },
                        { course: 'Piano', level: t('Básico','Beginner'), pct: 30, months: 2 },
                      ].map((c, i) => (
                        <div key={i} style={{ background: '#fff', borderRadius: 4, padding: 20, border: '1px solid #e8e4de' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
                            <div>
                              <div style={{ fontFamily: 'Barlow Condensed', fontWeight: 800, fontSize: 18, color: '#0a0a0a' }}>{c.course}</div>
                              <div style={{ fontFamily: 'Barlow', fontSize: 12, color: '#888', marginTop: 2 }}>{c.level}</div>
                            </div>
                            <div style={{ fontFamily: 'Barlow Condensed', fontWeight: 800, fontSize: 28, color: '#C0392B' }}>{c.pct}%</div>
                          </div>
                          <div style={{ height: 6, background: '#f0eeeb', borderRadius: 3, overflow: 'hidden' }}>
                            <div style={{ width: `${c.pct}%`, height: '100%', background: '#C0392B', borderRadius: 3, transition: 'width 1s' }}/>
                          </div>
                          <div style={{ fontFamily: 'Barlow', fontSize: 11, color: '#bbb', marginTop: 8 }}>{c.months} {t('meses cursando', 'months enrolled')}</div>
                        </div>
                      ))}
                    </div>
                    {/* Logros */}
                    <div style={{ fontFamily: 'Barlow Condensed', fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#aaa', marginBottom: 10 }}>{t('Logros recientes', 'Recent achievements')}</div>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                      {[t('Primera canción completa','First full song'), t('Lectura de notas básica','Basic note reading'), t('3 meses consecutivos','3 consecutive months')].map((a, i) => (
                        <div key={i} style={{ background: '#fff', border: '1.5px solid #C0392B', borderRadius: 20, padding: '5px 14px', fontFamily: 'Barlow Condensed', fontSize: 13, fontWeight: 600, color: '#C0392B' }}>{a}</div>
                      ))}
                    </div>
                  </div>
                )}

                {/* EVENTOS TAB */}
                {activeTab === 'eventos' && (
                  <div>
                    <h3 style={{ fontFamily: 'Barlow Condensed', fontSize: 22, fontWeight: 800, textTransform: 'uppercase', marginBottom: 20 }}>{t('Eventos Próximos', 'Upcoming Events')}</h3>
                    {[
                      { date: t('10 May','May 10'), title: t('Recital de fin de semestre','End-of-semester recital'), type: t('Presentación','Performance'), highlight: true },
                      { date: t('18 May','May 18'), title: t('Taller de improvisación','Improvisation workshop'), type: 'Workshop', highlight: false },
                      { date: t('1 Jun','Jun 1'), title: t('Audiciones nivel avanzado','Advanced level auditions'), type: t('Audición','Audition'), highlight: false },
                    ].map((ev, i) => (
                      <div key={i} style={{ display: 'flex', gap: 16, padding: '16px', background: ev.highlight ? '#0a0a0a' : '#fff', borderRadius: 4, marginBottom: 8, border: ev.highlight ? 'none' : '1px solid #e8e4de' }}>
                        <div style={{ textAlign: 'center', minWidth: 52, flexShrink: 0 }}>
                          <div style={{ fontFamily: 'Barlow Condensed', fontWeight: 800, fontSize: 22, color: '#C0392B', lineHeight: 1 }}>{ev.date.split(' ')[0]}</div>
                          <div style={{ fontFamily: 'Barlow', fontSize: 11, color: ev.highlight ? '#666' : '#aaa' }}>{ev.date.split(' ')[1]}</div>
                        </div>
                        <div style={{ width: 1, background: ev.highlight ? '#222' : '#eee', flexShrink: 0 }}/>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: 16, color: ev.highlight ? '#fff' : '#0a0a0a' }}>{ev.title}</div>
                          <div style={{ display: 'inline-block', background: ev.highlight ? '#1e1e1e' : '#f5f3ee', borderRadius: 3, padding: '2px 8px', marginTop: 6 }}>
                            <span style={{ fontFamily: 'Barlow', fontSize: 11, color: ev.highlight ? '#888' : '#666' }}>{ev.type}</span>
                          </div>
                        </div>
                        {ev.highlight && (
                          <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div style={{ background: '#C0392B', borderRadius: 3, padding: '5px 12px' }}>
                              <span style={{ fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: 12, color: '#fff', letterSpacing: 0.5 }}>{t('Inscribirse', 'Register')}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const TestimonialsSection = ({ lang }) => {
  const t = (es, en) => lang === 'es' ? es : en;
  const testimonials = [
    { name: 'María V.', course: t('Guitarra','Guitar'), text: t('Increíble nivel de enseñanza. Mi hijo aprendió a tocar en 3 meses.','Incredible teaching quality. My son learned to play in 3 months.') },
    { name: 'Carlos M.', course: t('Canto','Voice'), text: t('Los docentes son muy profesionales y el ambiente es perfecto para aprender.','The teachers are very professional and the environment is perfect for learning.') },
    { name: 'Ana R.', course: 'Piano', text: t('Recomiendo Mozart a cualquiera que quiera aprender música en Pucallpa.','I recommend Mozart to anyone who wants to learn music in Pucallpa.') },
  ];
  return (
    <section style={{ background: '#0a0a0a', padding: '80px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
          <div style={{ width: 32, height: 3, background: '#C0392B' }}/>
          <span style={{ fontFamily: 'Barlow', fontSize: 12, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase', color: '#C0392B' }}>
            {t('Lo que dicen', 'What they say')}
          </span>
        </div>
        <h2 style={{ fontFamily: 'Barlow Condensed', fontSize: 48, fontWeight: 800, color: '#fff', marginBottom: 40, textTransform: 'uppercase' }}>
          {t('Testimonios', 'Testimonials')}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {testimonials.map((t2, i) => (
            <div key={i} style={{ background: '#161616', borderRadius: 4, padding: 28, border: '1px solid #222' }}>
              <div style={{ display: 'flex', gap: 3, marginBottom: 16 }}>{[0,1,2,3,4].map(k => <div key={k} style={{ width: 10, height: 10, background: '#C0392B', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}/>)}</div>
              <p style={{ fontFamily: 'Barlow', fontSize: 15, color: '#aaa', lineHeight: 1.65, marginBottom: 20 }}>"{t2.text}"</p>
              <div>
                <div style={{ fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: 16, color: '#fff' }}>{t2.name}</div>
                <div style={{ fontFamily: 'Barlow', fontSize: 12, color: '#555' }}>{t2.course}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { EscuelaHero, ReservaSection, CoursesSection, PortalSection, TestimonialsSection });
