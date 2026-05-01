import { useState, useEffect, useRef } from 'react'
import './index.css'

// ---- NAVBAR ----
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Careers', href: '#careers' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact', cls: 'nav-cta' },
  ]

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <a className="nav-brand" href="#home">
          <div className="nav-logo">⚖️</div>
          <div className="nav-brand-text">
            <span className="nav-brand-name">Adv. Kamlesh Kumar</span>
            <span className="nav-brand-sub">Criminal & Civil Lawyer · Bihar</span>
          </div>
        </a>
        <ul className="nav-links">
          {links.map(l => (
            <li key={l.label}>
              <a href={l.href} className={l.cls || ''}>{l.label}</a>
            </li>
          ))}
        </ul>
        <div className="hamburger" onClick={() => setMobileOpen(o => !o)}>
          <span /><span /><span />
        </div>
      </nav>
      <div className={`mobile-nav${mobileOpen ? ' open' : ''}`}>
        {links.map(l => (
          <a key={l.label} href={l.href} onClick={() => setMobileOpen(false)}>{l.label}</a>
        ))}
      </div>
    </>
  )
}

// ---- HERO ----
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg-pattern" />
      <div className="hero-lines" />
      <div className="hero-container">
        <div className="animate-up">
          <div className="hero-badge">18+ Years of Legal Excellence</div>
          <h1 className="hero-title">
            Trusted <span className="gold">Criminal</span> &<br />Civil Lawyer<br />in Bihar
          </h1>
          <div className="hero-divider" />
          <p className="hero-subtitle">
            Dedicated legal counsel at Civil Court Nawada & Patna High Court — fighting for justice with integrity, experience, and unwavering commitment.
          </p>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-num">18+</div>
              <div className="hero-stat-label">Years Experience</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num">2500+</div>
              <div className="hero-stat-label">Cases Handled</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num">98%</div>
              <div className="hero-stat-label">Client Trust</div>
            </div>
          </div>
          <div className="hero-btns">
            <a href="#contact" className="btn-primary">📋 Book Consultation</a>
            <a href="tel:+919999999999" className="btn-outline">📞 Call Now</a>
          </div>
        </div>

        <div className="hero-image-wrap">
          <div className="hero-img-frame">
            <img
              src="/images/photo2.jpg"
              alt="Advocate Kamlesh Kumar"
              className="hero-img"
            />
            <div className="hero-img-badge">
              <div className="hero-img-badge-num">18+</div>
              <div className="hero-img-badge-text">Years<br/>Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ---- ABOUT ----
function About() {
  const expertise = [
    'Criminal Cases', 'Civil Disputes', 'Property Cases',
    'Bail Matters', 'High Court Appeals', 'Legal Consultation',
    'Family Law', 'Documentation', 'Legal Notices', 'Negotiation'
  ]
  return (
    <section className="section about" id="about">
      <div className="section-inner">
        <div className="about-grid">
          <div className="about-images">
            <img src="/images/photo3.jpg" alt="Advocate Kamlesh Kumar" className="about-img-main" />
            <img src="/images/photo4.jpg" alt="Advocate at Court" className="about-img-sec" />
            <div className="about-img-accent">⚖️</div>
          </div>

          <div className="about-content">
            <div className="section-label">About the Advocate</div>
            <h2 className="section-title">Advocate Kamlesh Kumar</h2>
            <p className="about-intro">
              "A seasoned legal professional with over 18 years of distinguished practice at Civil Court Nawada and Patna High Court, Bihar."
            </p>
            <p className="about-desc">
              Advocate Kamlesh Kumar is a highly experienced and respected criminal and civil lawyer practising in Bihar since 2006. He has built an outstanding reputation for his deep knowledge of Indian law, strategic courtroom skills, and unwavering dedication to his clients' interests. His practice spans across Civil Court Nawada and the honourable Patna High Court, where he has successfully argued hundreds of complex cases.
            </p>
            <p className="about-desc">
              Known for his honest consultation, prompt response, and strong advocacy, Advocate Kumar believes that every client deserves access to the best legal defence and guidance — regardless of the complexity of their case. His approach combines rigorous legal analysis with compassionate client service.
            </p>
            <div className="about-expertise">
              {expertise.map(e => (
                <div key={e} className="expertise-item">{e}</div>
              ))}
            </div>
            <div className="about-stats">
              {[
                { num: '18+', label: 'Years Practice' },
                { num: '2500+', label: 'Cases Handled' },
                { num: '1200+', label: 'Happy Clients' },
                { num: '2', label: 'Court Jurisdictions' },
              ].map(s => (
                <div key={s.label} className="about-stat">
                  <div className="about-stat-num">{s.num}</div>
                  <div className="about-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ---- SERVICES ----
const services = [
  { icon: '🔨', title: 'Criminal Law', desc: 'Expert defence in criminal proceedings — FIRs, bail applications, trials, and appeals before Sessions and High Courts.' },
  { icon: '🏛️', title: 'Civil Law', desc: 'Comprehensive civil litigation including suits, injunctions, decrees, execution proceedings, and civil appeals.' },
  { icon: '🔐', title: 'Bail Matters', desc: 'Swift and effective bail applications — regular bail, anticipatory bail, and surety matters before all Bihar courts.' },
  { icon: '🏠', title: 'Property Disputes', desc: 'Resolution of property ownership, partition suits, title disputes, land records, and mutation matters.' },
  { icon: '👨‍👩‍👧', title: 'Family Disputes', desc: 'Sensitive handling of matrimonial disputes, divorce, maintenance, custody, and succession matters.' },
  { icon: '📜', title: 'Legal Notices', desc: 'Drafting and serving legal notices, demand letters, cease & desist notices, and reply notices.' },
  { icon: '⚖️', title: 'High Court', desc: 'Strong representation before Patna High Court in writ petitions, revisions, appeals, and PILs.' },
  { icon: '📁', title: 'Documentation', desc: 'Drafting affidavits, agreements, deeds, power of attorney, wills, and all legal documents.' },
]

function Services() {
  return (
    <section className="section services" id="services">
      <div className="section-inner">
        <div className="section-label">Legal Practice Areas</div>
        <h2 className="section-title">Our Legal Services</h2>
        <p className="section-desc">
          Comprehensive legal assistance across criminal, civil, and family law domains — delivered with precision and dedication.
        </p>
        <div className="services-grid">
          {services.map(s => (
            <div key={s.title} className="service-card">
              <div className="service-icon">{s.icon}</div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <a href="#contact" className="service-link">Consult Now →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ---- WHY CHOOSE US ----
function WhyUs() {
  const features = [
    { icon: '🏆', title: '18+ Years Experience', desc: 'Decades of proven legal expertise across Bihar\'s courts.' },
    { icon: '🤝', title: 'Honest Consultation', desc: 'Transparent advice — we tell you the truth, not what you want to hear.' },
    { icon: '⚡', title: 'Fast Response', desc: 'Prompt attention to urgent bail matters and emergency legal needs.' },
    { icon: '🔒', title: 'Client Confidentiality', desc: 'Absolute discretion and privacy in all legal matters.' },
    { icon: '💼', title: 'Strong Court Advocacy', desc: 'Aggressive, well-prepared representation in every proceeding.' },
    { icon: '📊', title: 'High Success Rate', desc: 'Track record of favourable outcomes across criminal and civil cases.' },
    { icon: '🌐', title: 'Multi-Court Presence', desc: 'Active practice at Civil Court Nawada and Patna High Court.' },
    { icon: '👥', title: 'Client-First Approach', desc: 'Your interest is our mission — from first consultation to final verdict.' },
  ]

  const counters = [
    { num: '18+', label: 'Years in Practice' },
    { num: '2500+', label: 'Cases Handled' },
    { num: '1200+', label: 'Satisfied Clients' },
    { num: '98%', label: 'Client Satisfaction' },
  ]

  return (
    <section className="section why" id="why">
      <div className="section-inner">
        <div className="why-grid">
          <div>
            <div className="section-label" style={{ color: 'var(--gold)' }}>Why Choose Us</div>
            <h2 className="section-title light">Why Clients Choose<br />Advocate Kamlesh Kumar</h2>
            <p className="section-desc" style={{ color: 'rgba(255,255,255,0.55)' }}>
              A legacy of legal excellence built on trust, results, and relentless dedication to justice.
            </p>
            <div className="why-features">
              {features.map(f => (
                <div key={f.title} className="why-feature">
                  <span className="why-feature-icon">{f.icon}</span>
                  <div className="why-feature-title">{f.title}</div>
                  <div className="why-feature-desc">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="why-counters">
            {counters.map(c => (
              <div key={c.label} className="counter-box">
                <div className="counter-num">{c.num}</div>
                <div className="counter-label">{c.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ---- GALLERY ----
function Gallery() {
  const photos = [
    { src: '/images/photo1.jpg', cap: 'Advocate Kamlesh Kumar' },
    { src: '/images/photo2.jpg', cap: 'At Patna High Court' },
    { src: '/images/photo3.jpg', cap: 'Legal Consultation' },
    { src: '/images/photo4.jpg', cap: 'Outside Court Premises' },
  ]
  return (
    <section className="section gallery" id="gallery">
      <div className="section-inner">
        <div className="section-label">Photo Gallery</div>
        <h2 className="section-title">Meet Advocate Kamlesh Kumar</h2>
        <p className="section-desc">
          A dedicated legal professional committed to serving justice across Bihar's courts.
        </p>
        <div className="gallery-grid">
          {photos.map(p => (
            <div key={p.src} className="gallery-item">
              <img src={p.src} alt={p.cap} />
              <div className="gallery-overlay">
                <span className="gallery-caption">{p.cap}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ---- TESTIMONIALS ----
const testimonials = [
  {
    text: 'Advocate Kamlesh Kumar helped me secure bail within 24 hours when I was in a desperate situation. His expertise and speed were extraordinary. I cannot thank him enough.',
    name: 'Rajan Prasad',
    location: 'Nawada, Bihar',
    rating: 5,
  },
  {
    text: 'My property dispute had been dragging for years. Within months of engaging Advocate Kumar, we reached a favourable settlement. His legal knowledge and court presence are remarkable.',
    name: 'Sunita Devi',
    location: 'Patna, Bihar',
    rating: 5,
  },
  {
    text: 'Highly professional, deeply knowledgeable, and genuinely caring about clients. He explained every step of the criminal case clearly. I strongly recommend him to anyone needing legal help in Bihar.',
    name: 'Manoj Kumar Singh',
    location: 'Nawada, Bihar',
    rating: 5,
  },
  {
    text: 'His representation at Patna High Court was outstanding. The writ petition was argued brilliantly and we got the relief we deserved. True expertise.',
    name: 'Ramesh Yadav',
    location: 'Gaya, Bihar',
    rating: 5,
  },
  {
    text: 'Honest, transparent, and result-oriented. He told us exactly what was possible from day one and delivered on every promise. Exceptional legal counsel.',
    name: 'Priya Sharma',
    location: 'Nawada, Bihar',
    rating: 5,
  },
  {
    text: 'The divorce and custody case was emotionally draining, but Advocate Kumar handled it with great sensitivity and expertise. Got the best possible outcome for my children.',
    name: 'Anjali Kumari',
    location: 'Bihar Sharif',
    rating: 5,
  },
]

function Testimonials() {
  return (
    <section className="section testimonials" id="testimonials">
      <div className="section-inner">
        <div className="section-label">Client Reviews</div>
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="section-desc">
          Hundreds of satisfied clients across Bihar speak to our dedication and results.
        </p>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testi-card">
              <div className="testi-quote">"</div>
              <div className="testi-stars">{'★'.repeat(t.rating)}</div>
              <p className="testi-text">{t.text}</p>
              <div className="testi-author">
                <div className="testi-avatar">{t.name[0]}</div>
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-location">📍 {t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ---- FAQ ----
const faqs = [
  {
    q: 'How do I book a consultation with Advocate Kamlesh Kumar?',
    a: 'You can book a consultation by calling us directly, sending a WhatsApp message, filling out the consultation form on this website, or visiting our office in Nawada, Bihar. We respond to all inquiries within 24 hours.'
  },
  {
    q: 'What types of criminal cases does Advocate Kumar handle?',
    a: 'We handle all types of criminal matters including bail applications (regular and anticipatory), FIR challenges, Sessions Court trials, murder cases, dowry cases, POCSO matters, fraud, cheating cases, and criminal appeals before Patna High Court.'
  },
  {
    q: 'How does the bail application process work?',
    a: 'The bail process begins with filing an application before the appropriate court — Magistrate, Sessions, or High Court. We file the application with supporting documents, argue the case on the next hearing date, and pursue it aggressively until bail is granted. Urgent matters can often be addressed within 24-48 hours.'
  },
  {
    q: 'Do you handle cases at Patna High Court?',
    a: 'Yes, Advocate Kamlesh Kumar has extensive experience before Patna High Court and regularly handles writ petitions, criminal revisions, civil appeals, anticipatory bail applications, and PIL matters.'
  },
  {
    q: 'What documents should I bring for my first consultation?',
    a: 'For criminal matters, bring the FIR copy, chargesheet (if filed), bail rejection orders, and any court orders. For civil/property cases, bring property documents, sale deeds, court notices, and any prior judgments in the case.'
  },
  {
    q: 'What are the consultation fees?',
    a: 'Consultation fees vary by case type and complexity. We believe in transparent fee structures and will provide a clear breakdown during your initial meeting. There are no hidden charges. Contact us for specific fee information.'
  },
]

function FAQ() {
  const [open, setOpen] = useState(null)
  return (
    <section className="section faq" id="faq">
      <div className="section-inner">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Legal Questions</div>
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <div key={i} className="faq-item">
              <button
                className={`faq-q${open === i ? ' open' : ''}`}
                onClick={() => setOpen(open === i ? null : i)}
              >
                {f.q}
                <span className="faq-icon">{open === i ? '−' : '+'}</span>
              </button>
              <div className={`faq-a${open === i ? ' open' : ''}`}>
                <p>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ---- RECRUITMENT ----
const jobs = [
  {
    title: 'Junior Advocate',
    type: 'Full-time',
    tags: ['LLB Required', '0–3 Years', 'Nawada / Patna'],
    desc: 'Enrolled advocate to assist in court appearances, legal research, drafting petitions and briefs.'
  },
  {
    title: 'Legal Intern',
    type: 'Internship (3-6 months)',
    tags: ['LLB Student', 'Final Year', 'Nawada'],
    desc: 'Law students seeking practical exposure to criminal and civil practice at trial and High Court level.'
  },
  {
    title: 'Legal Assistant',
    type: 'Full-time',
    tags: ['Graduate', '1+ Year', 'Nawada'],
    desc: 'Manage case files, draft correspondence, coordinate with clients and court dates.'
  },
  {
    title: 'Office Helper',
    type: 'Full-time',
    tags: ['12th Pass', 'Fresher OK', 'Nawada'],
    desc: 'General office support — filing, documentation handling, client reception, and errands.'
  },
]

function Recruitment() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', position: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setForm({ name: '', email: '', phone: '', position: '', message: '' })
  }

  return (
    <section className="section recruitment" id="careers">
      <div className="section-inner">
        <div className="section-label" style={{ color: 'var(--gold)' }}>Careers</div>
        <h2 className="section-title light">Join Our Legal Team</h2>
        <p className="section-desc" style={{ color: 'rgba(255,255,255,0.55)' }}>
          We are growing our practice and seeking dedicated legal professionals and support staff to join us.
        </p>
        <div className="recruitment-grid">
          <div>
            <div className="jobs-list">
              {jobs.map(j => (
                <div key={j.title} className="job-card">
                  <div className="job-title">{j.title}</div>
                  <div className="job-meta">{j.type}</div>
                  <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)', marginBottom: '0.75rem', lineHeight: 1.6 }}>{j.desc}</p>
                  <div className="job-tags">
                    {j.tags.map(t => <span key={t} className="job-tag">{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="form-wrap">
            <h3 className="form-title">Apply Now</h3>
            {submitted ? (
              <div className="success-msg">✅ Application submitted! We will contact you shortly.</div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input type="text" placeholder="Your full name" required value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input type="tel" placeholder="+91 XXXXX XXXXX" required value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })} />
                  </div>
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="your@email.com" value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })} />
                </div>
                <div className="form-group">
                  <label>Position Applied For *</label>
                  <select required value={form.position} onChange={e => setForm({ ...form, position: e.target.value })}>
                    <option value="">Select position</option>
                    <option>Junior Advocate</option>
                    <option>Legal Intern</option>
                    <option>Legal Assistant</option>
                    <option>Office Helper</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Cover Message</label>
                  <textarea placeholder="Brief introduction and why you want to join..." value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })} />
                </div>
                <div className="form-group">
                  <label>Upload Resume / CV</label>
                  <input type="file" accept=".pdf,.doc,.docx" className="file-upload" />
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}>
                  📤 Submit Application
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

// ---- CONSULTATION FORM ----
function Consultation() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', caseType: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setForm({ name: '', email: '', phone: '', caseType: '', message: '' })
  }

  const infoItems = [
    { icon: '📍', title: 'Office Address', text: 'Civil Court Road, Nawada, Bihar — 805110' },
    { icon: '📞', title: 'Phone / Call', text: '+91 99999 99999\nAvailable Mon–Sat, 9AM–7PM' },
    { icon: '💬', title: 'WhatsApp', text: '+91 99999 99999\nSend case details anytime' },
    { icon: '⚖️', title: 'Court Jurisdictions', text: 'Civil Court Nawada\nPatna High Court, Bihar' },
    { icon: '🗺️', title: 'Location', text: 'Near Civil Court, Nawada, Bihar' },
  ]

  return (
    <section className="section consultation" id="contact">
      <div className="section-inner">
        <div className="section-label">Get Legal Help</div>
        <h2 className="section-title">Book a Consultation</h2>
        <p className="section-desc">
          Facing a legal challenge? Reach out for a confidential consultation. We're here to help.
        </p>
        <div className="consultation-grid">
          <div className="consult-info">
            {infoItems.map(item => (
              <div key={item.title} className="consult-info-item">
                <div className="consult-icon">{item.icon}</div>
                <div>
                  <div className="consult-info-title">{item.title}</div>
                  <div className="consult-info-text" style={{ whiteSpace: 'pre-line' }}>{item.text}</div>
                </div>
              </div>
            ))}
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <a href="https://wa.me/919999999999" className="btn-primary" style={{ fontSize: '0.82rem', padding: '0.7rem 1.25rem' }}>
                💬 WhatsApp
              </a>
              <a href="tel:+919999999999" className="btn-outline" style={{ fontSize: '0.82rem', padding: '0.7rem 1.25rem' }}>
                📞 Call Now
              </a>
            </div>
          </div>

          <div className="consult-form">
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '1.75rem' }}>
              Send Your Query
            </h3>
            {submitted ? (
              <div className="consult-success">✅ Query submitted! We will contact you within 24 hours.</div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input type="text" placeholder="Your full name" required value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input type="tel" placeholder="+91 XXXXX XXXXX" required value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })} />
                  </div>
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="your@email.com" value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })} />
                </div>
                <div className="form-group">
                  <label>Case Type *</label>
                  <select required value={form.caseType} onChange={e => setForm({ ...form, caseType: e.target.value })}>
                    <option value="">Select case type</option>
                    <option>Criminal Case</option>
                    <option>Bail Application</option>
                    <option>Civil Dispute</option>
                    <option>Property Dispute</option>
                    <option>Family / Matrimonial</option>
                    <option>High Court Appeal</option>
                    <option>Legal Notice</option>
                    <option>Documentation</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Case Details *</label>
                  <textarea placeholder="Briefly describe your case or legal matter..." required value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })} />
                </div>
                <div className="form-group">
                  <label>Upload Documents (optional)</label>
                  <input type="file" multiple accept=".pdf,.jpg,.jpeg,.png,.doc,.docx" className="file-upload" />
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}>
                  📋 Submit Consultation Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

// ---- CTA BANNER ----
function CTABanner() {
  return (
    <div className="cta-banner">
      <h2>Need Urgent Legal Assistance?</h2>
      <p>
        Don't face the legal system alone. Advocate Kamlesh Kumar is ready to fight for your rights.
      </p>
      <div className="cta-btns">
        <a href="tel:+919999999999" className="btn-navy">📞 Call Now: +91 99999 99999</a>
        <a href="https://wa.me/919999999999" className="btn-navy">💬 WhatsApp Us</a>
        <a href="#contact" className="btn-navy">📋 Book Consultation</a>
      </div>
    </div>
  )
}

// ---- FOOTER ----
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-brand-name">Advocate Kamlesh Kumar</div>
          <div className="footer-brand-sub">Criminal & Civil Lawyer · Bihar</div>
          <p className="footer-desc">
            18+ years of dedicated legal practice at Civil Court Nawada and Patna High Court. Trusted by thousands of clients across Bihar for honest, result-oriented legal representation.
          </p>
          <div className="footer-socials">
            {['📘', '📸', '🐦', '▶️'].map((icon, i) => (
              <a key={i} href="#" className="social-btn">{icon}</a>
            ))}
          </div>
        </div>

        <div>
          <div className="footer-col-title">Quick Links</div>
          <ul className="footer-links">
            {['About Advocate', 'Legal Services', 'Bail Matters', 'High Court Cases', 'Careers', 'FAQ'].map(l => (
              <li key={l}><a href="#about">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="footer-col-title">Practice Areas</div>
          <ul className="footer-links">
            {['Criminal Law', 'Civil Litigation', 'Property Disputes', 'Family Law', 'Legal Notices', 'Documentation'].map(l => (
              <li key={l}><a href="#services">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="footer-col-title">Contact</div>
          <div>
            {[
              { icon: '📍', text: 'Civil Court Road, Nawada, Bihar — 805110' },
              { icon: '📞', text: '+91 99999 99999' },
              { icon: '💬', text: 'WhatsApp: +91 99999 99999' },
              { icon: '⚖️', text: 'Civil Court Nawada & Patna High Court' },
            ].map((c, i) => (
              <div key={i} className="footer-contact-item">
                <span className="footer-contact-icon">{c.icon}</span>
                <span>{c.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div>© 2025 Advocate Kamlesh Kumar. All rights reserved.</div>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Disclaimer</a>
        </div>
      </div>
    </footer>
  )
}

// ---- FLOATING BUTTONS ----
function FloatingButtons() {
  return (
    <div className="floating-btns">
      <a href="https://wa.me/919999999999" className="float-btn float-whatsapp" title="WhatsApp">💬</a>
      <a href="tel:+919999999999" className="float-btn float-call" title="Call Now">📞</a>
    </div>
  )
}

// ---- APP ----
export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Gallery />
      <Testimonials />
      <CTABanner />
      <FAQ />
      <Recruitment />
      <Consultation />
      <Footer />
      <FloatingButtons />
    </>
  )
}
