import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

/* ── Timeline Data ── */
const timeline = [
  { year: '2020', title: 'The Genesis', desc: 'Founded in Pune with a vision to democratize enterprise-grade technology for Indian SMBs and startups.' },
  { year: '2021', title: 'First 50 Clients', desc: 'Delivered ERP and CRM solutions to local manufacturers, retailers, and clinics across Maharashtra.' },
  { year: '2022', title: 'Going Global', desc: 'Expanded operations to serve clients in the US and EU — building custom SaaS platforms and automation tools.' },
  { year: '2023', title: 'Product Suite Launch', desc: 'Launched 30+ prebuilt white-label products — Hospital ERP, School Management, E-Commerce, and more.' },
  { year: '2024', title: 'AI & Automation Era', desc: 'Integrated AI-powered chatbots, document analysis, and smart automation into our entire product ecosystem.' },
  { year: '2025', title: 'Scale & Impact', desc: '200+ clients served, 50+ products live, training programs launched, and a growing global footprint.' },
];

/* ── Services Data ── */
const services = [
  {
    title: 'ERP Systems',
    desc: 'End-to-end Enterprise Resource Planning — inventory, procurement, HR, payroll, and financial management under one roof.',
    icon: (
      <>
        <rect x="6" y="6" width="36" height="36" rx="2" />
        <path d="M6 18H42M18 6V42" />
        <circle cx="30" cy="30" r="6" />
      </>
    ),
  },
  {
    title: 'CRM Solutions',
    desc: 'Customer Relationship Management that tracks leads, automates follow-ups, and drives revenue growth with data insights.',
    icon: (
      <>
        <circle cx="24" cy="16" r="8" />
        <path d="M10 40C10 32 16 26 24 26S38 32 38 40" />
        <path d="M30 14L36 8" />
        <circle cx="38" cy="6" r="3" fill="#FF4D00" opacity="0.4" />
      </>
    ),
  },
  {
    title: 'Business Automation',
    desc: 'Automated invoicing, email campaigns, appointment reminders, inventory alerts, and lead nurturing workflows.',
    icon: (
      <>
        <path d="M8 24H16L20 16L28 32L32 24H40" />
        <circle cx="8" cy="24" r="3" fill="#FF4D00" opacity="0.4" />
        <circle cx="40" cy="24" r="3" fill="#FF4D00" opacity="0.4" />
      </>
    ),
  },
  {
    title: 'AI Integration',
    desc: 'Smart chatbots, document analysis, predictive analytics, voice assistants, and intelligent recommendation engines.',
    icon: (
      <>
        <circle cx="24" cy="24" r="16" />
        <path d="M16 20H32M16 28H32" />
        <circle cx="20" cy="24" r="2" fill="#FF4D00" opacity="0.6" />
        <circle cx="28" cy="24" r="2" fill="#FF4D00" opacity="0.6" />
      </>
    ),
  },
  {
    title: 'White-Label SaaS',
    desc: 'Build once, deploy for many. Multi-tenant architecture with custom branding, payments, and feature toggles.',
    icon: (
      <>
        <rect x="6" y="6" width="16" height="16" />
        <rect x="26" y="6" width="16" height="16" />
        <rect x="6" y="26" width="16" height="16" />
        <rect x="26" y="26" width="16" height="16" />
        <circle cx="14" cy="14" r="3" fill="#FF4D00" opacity="0.4" />
        <circle cx="34" cy="34" r="3" fill="#FF4D00" opacity="0.4" />
      </>
    ),
  },
  {
    title: 'Digital Transformation',
    desc: 'Help businesses identify bottlenecks, automate workflows, migrate to cloud, and adopt modern tech stacks.',
    icon: (
      <>
        <path d="M24 4L44 14V34L24 44L4 34V14L24 4Z" />
        <path d="M24 4V44" />
        <path d="M4 14L44 34" />
        <path d="M44 14L4 34" />
      </>
    ),
  },
];

/* ── Stats Data ── */
const stats = [
  { number: '200+', label: 'CLIENTS SERVED' },
  { number: '50+', label: 'PRODUCTS BUILT' },
  { number: '15+', label: 'COUNTRIES REACHED' },
  { number: '5+', label: 'YEARS OF IMPACT' },
];

/* ── India Focus Features ── */
const indiaFeatures = [
  { title: 'GST Integration', desc: 'Fully compliant GST invoicing, returns filing, and tax management baked into every product.' },
  { title: 'UPI & Payment Gateways', desc: 'Razorpay, Paytm, PhonePe, UPI QR — all payment methods Indian customers actually use.' },
  { title: 'Multi-Language Support', desc: 'Hindi, Marathi, Tamil, Telugu, Bengali, and 10+ regional language interfaces.' },
  { title: 'Aadhaar & DigiLocker', desc: 'KYC verification, Aadhaar-based authentication, and DigiLocker document integration.' },
  { title: 'Indian Compliance', desc: 'TDS, PF, ESI, Shop Act — all statutory compliance modules for Indian businesses.' },
  { title: 'Offline-First Design', desc: 'Apps that work in low-connectivity areas — essential for Tier 2 and Tier 3 Indian cities.' },
];

/* ── Values Data ── */
const values = [
  {
    title: 'Innovation',
    desc: 'We don\'t just follow trends — we build solutions that push the boundary of what Indian SMBs thought was possible.',
    icon: '◆',
  },
  {
    title: 'Reliability',
    desc: '99.9% uptime, 24/7 monitoring, automated backups, and dedicated support — your business never sleeps, neither do we.',
    icon: '◈',
  },
  {
    title: 'Scalability',
    desc: 'From 10 users to 10,000 — our architecture grows with your ambition. No rewrites, no migrations, just scale.',
    icon: '▲',
  },
  {
    title: 'Client-First',
    desc: 'Every line of code we write starts with understanding your business. We build for your success, not our portfolio.',
    icon: '●',
  },
];

/* ── Regions Data ── */
const regions = [
  { name: 'INDIA', projects: '120+', focus: 'ERP, CRM, E-Commerce, Healthcare, Education' },
  { name: 'UNITED STATES', projects: '45+', focus: 'SaaS Platforms, AI Tools, Business Automation' },
  { name: 'EUROPEAN UNION', projects: '35+', focus: 'White-Label SaaS, Data Analytics, Compliance Tools' },
];

export default function AboutPage() {
  const pageRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            /* stagger children if it's a grid */
            if (e.target.dataset.stagger) {
              const kids = e.target.querySelectorAll('[data-stagger-child]');
              kids.forEach((kid, idx) => {
                kid.style.transitionDelay = `${idx * 0.1}s`;
                kid.classList.add('visible');
              });
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    if (pageRef.current) {
      pageRef.current
        .querySelectorAll('[data-animate]')
        .forEach((el) => obs.observe(el));
    }

    return () => obs.disconnect();
  }, []);

  return (
    <div ref={pageRef} className="about-page">
      {/* ═══════ HERO ═══════ */}
      <section className="about-hero" data-animate>
        <div className="about-hero-bg-text">ABOUT</div>
        <div className="about-hero-content">
          <div className="about-hero-badge mono">
            <span className="about-est">EST. 2020</span>
            <span className="about-dot-separator">•</span>
            <span>PUNE, INDIA</span>
          </div>
          <h1 className="about-hero-title">
            <span className="about-hero-line">WE ARE</span>
            <span className="about-hero-line">
              <span className="accent">TANTR</span>SHELL
            </span>
          </h1>
          <p className="about-hero-subtitle">
            Engineering India's Digital Future — One Business at a Time.
            <br />
            Enterprise-grade tech, built for the real world.
          </p>
          <div className="about-hero-stats">
            {stats.map((s, i) => (
              <div key={i} className="about-hero-stat">
                <span className="about-hero-stat-number">{s.number}</span>
                <span className="about-hero-stat-label mono">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="about-hero-coords mono">
          <span>LAT: 18.6501° N</span>
          <span>LONG: 73.7568° E</span>
        </div>
      </section>

      {/* ═══════ OUR STORY ═══════ */}
      <section className="about-story section" data-animate>
        <div className="about-story-header">
          <span className="section-tag mono">01 // OUR JOURNEY</span>
          <h2 className="section-title">
            THE <span className="accent">STORY</span>
          </h2>
          <p className="section-desc">
            From a small office in Akurdi, Pune to serving clients across
            three continents — here's how it happened.
          </p>
        </div>

        <div className="about-timeline" data-animate data-stagger>
          {timeline.map((item, i) => (
            <div key={i} className="about-timeline-item" data-stagger-child data-animate>
              <div className="about-timeline-year mono">{item.year}</div>
              <div className="about-timeline-line">
                <div className="about-timeline-dot" />
              </div>
              <div className="about-timeline-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════ WHAT WE DO ═══════ */}
      {/* <section className="about-services section" data-animate>
        <div className="about-services-header">
          <span className="section-tag mono">02 // WHAT WE BUILD</span>
          <h2 className="section-title">
            OUR <span className="accent">EXPERTISE</span>
          </h2>
          <p className="section-desc">
            Full-stack technology partner for businesses — from ERP to AI,
            we build it all.
          </p>
        </div>

        <div className="about-services-grid" data-animate data-stagger>
          {services.map((s, i) => (
            <div key={i} className="about-service-card" data-stagger-child data-animate>
              <div className="about-service-number mono">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="about-service-icon">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  stroke="#FF4D00"
                  strokeWidth="1.5"
                >
                  {s.icon}
                </svg>
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* ═══════ GLOBAL REACH ═══════ */}
      <section className="about-global section" data-animate>
        <div className="about-global-header">
          <span className="section-tag mono">03 // GLOBAL FOOTPRINT</span>
          <h2 className="section-title">
            PROJECTS <span className="accent">WORLDWIDE</span>
          </h2>
          <p className="section-desc">
            Delivering enterprise solutions across India, the United States,
            and the European Union.
          </p>
        </div>

        <div className="about-regions" data-animate data-stagger>
          {regions.map((r, i) => (
            <div key={i} className="about-region-card" data-stagger-child data-animate>
              <div className="about-region-index mono">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="about-region-info">
                <h3>{r.name}</h3>
                <div className="about-region-projects">
                  <span className="about-region-number">{r.projects}</span>
                  <span className="about-region-label mono">PROJECTS DELIVERED</span>
                </div>
                <p className="about-region-focus">{r.focus}</p>
              </div>
              <div className="about-region-arrow">→</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════ MADE FOR INDIA ═══════ */}
      {/* <section className="about-india section" data-animate>
        <div className="about-india-header">
          <span className="section-tag mono">04 // BUILT FOR BHARAT</span>
          <h2 className="section-title">
            MADE FOR <span className="accent">INDIA</span>
          </h2>
          <p className="section-desc">
            We've implemented hundreds of Indian businesses to tech software
            — with features that actually matter here.
          </p>
        </div>

        <div className="about-india-grid" data-animate data-stagger>
          {indiaFeatures.map((f, i) => (
            <div key={i} className="about-india-card" data-stagger-child data-animate>
              <div className="about-india-index mono">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* ═══════ VALUES ═══════ */}
      {/* <section className="about-values section" data-animate>
        <div className="about-values-header">
          <span className="section-tag mono">05 // WHAT DRIVES US</span>
          <h2 className="section-title">
            OUR <span className="accent">VALUES</span>
          </h2>
        </div>

        <div className="about-values-grid" data-animate data-stagger>
          {values.map((v, i) => (
            <div key={i} className="about-value-card" data-stagger-child data-animate>
              <div className="about-value-icon accent">{v.icon}</div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* ═══════ OFFICE ═══════ */}
      <section className="about-office section" data-animate>
        <div className="about-office-header">
          <span className="section-tag mono">06 // HEADQUARTERS</span>
          <h2 className="section-title">
            FIND <span className="accent">US</span>
          </h2>
        </div>

        <div className="about-office-content" data-animate>
          <div className="about-office-card">
            <div className="about-office-map-placeholder">
              <div className="about-office-pin">
                <div className="about-office-pin-dot" />
                <div className="about-office-pin-ring" />
              </div>
              <div className="about-office-grid-lines">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="about-grid-line-h" style={{ top: `${(i + 1) * 14.28}%` }} />
                ))}
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="about-grid-line-v" style={{ left: `${(i + 1) * 11.11}%` }} />
                ))}
              </div>
              <div className="about-office-label mono">AKURDI, PUNE</div>
            </div>
            <div className="about-office-details">
              <h3>TantrShell Technologies</h3>
              <div className="about-office-address">
                <p>Akurdi Railway Station Building</p>
                <p>No. 19-03, Akurdi</p>
                <p>Pune, Maharashtra, India</p>
              </div>
              <div className="about-office-coords mono">
                <span>18.6501° N, 73.7568° E</span>
              </div>
              <Link to="/contact" className="btn btn-primary" id="about-contact-cta">
                GET IN TOUCH →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ MARQUEE ═══════ */}
      <div className="about-marquee">
        <div className="marquee-inner">
          {[
            'STARTUPS', 'MANUFACTURERS', 'CLINICS', 'SCHOOLS', 'RESTAURANTS',
            'RETAILERS', 'NGOS', 'AGENCIES', 'HOSPITALS', 'LOGISTICS',
            'STARTUPS', 'MANUFACTURERS', 'CLINICS', 'SCHOOLS', 'RESTAURANTS',
            'RETAILERS', 'NGOS', 'AGENCIES', 'HOSPITALS', 'LOGISTICS',
          ].map((item, i) => (
            <React.Fragment key={i}>
              <span>{item}</span>
              <span className="dot">●</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
