import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const screenshotUrl = 'https://lh3.googleusercontent.com/aida/ADBb0ugYa9Ycfzc6di5iwDf5K7orc4m5dMj7TIvrrV87RfdqgXCOhkklcW1PKG_cFbFVc1Vtr4twUCB8epZCv4sYfPJ1fmroRaLu-Ult4F_s3tfLIks6zSbGHrHdlP1hitRuNxfuFa_rJX_j4bz4_BjLmz18tSClCrbcpG9fBnDFa0N946AlmXKOcffxxn5ZiG2MsI-2-VpV0UgzaEGd6mhjkbB9SqLDUzD0xvVr0_iAg2ZEi2ve0Sr8tgFKqEY';

const features = [
  { icon: '🎯', title: 'Lead Pipeline', desc: 'Visual kanban boards for lead tracking through stages — from first contact to deal closure with drag-and-drop.' },
  { icon: '💬', title: 'Communication Hub', desc: 'Unified inbox for emails, calls, and messages. Full conversation timeline with each contact and deal.' },
  { icon: '📈', title: 'Sales Analytics', desc: 'Real-time conversion metrics, win/loss analysis, sales velocity tracking, and forecasting dashboards.' },
  { icon: '👥', title: 'Contact Management', desc: 'Rich contact profiles with social data, interaction history, tags, and smart segmentation.' },
  { icon: '🤝', title: 'Deal Tracking', desc: 'Custom deal stages, weighted pipeline value, close probability, and automated follow-up sequences.' },
  { icon: '📧', title: 'Email Campaigns', desc: 'Templated outreach, drip campaigns, open/click tracking, and A/B testing for higher conversions.' },
];

const techStack = ['React', 'Node.js', 'PostgreSQL', 'SendGrid', 'Redis', 'GraphQL'];

export default function CRMPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="product-deploy-page" style={{ '--product-accent': '#FF2D55', '--product-accent-rgb': '255, 45, 85' }}>
      <section className="pdp-hero">
        <div className="pdp-hero-bg" style={{ background: 'radial-gradient(ellipse at 30% 20%, rgba(255,45,85,0.1) 0%, transparent 60%)' }} />
        <div className="pdp-hero-content">
          <span className="pdp-tag mono">SERVICE PLATFORM</span>
          <h1 className="pdp-title">CRM <span style={{ color: '#FF2D55' }}>Mini-Suite</span></h1>
          <p className="pdp-subtitle">Lead management, pipeline tracking, customer communication, and analytics — close deals faster with a modern CRM.</p>
          <div className="pdp-hero-actions">
            <Link to="/contact" className="btn btn-primary pdp-cta" style={{ background: '#FF2D55', color: '#fff' }}>REQUEST DEMO →</Link>
            <Link to="/products" className="btn btn-ghost">← BACK TO PRODUCTS</Link>
          </div>
          <div className="pdp-hero-stats">
            <div className="pdp-stat"><span className="pdp-stat-num" style={{ color: '#FF2D55' }}>3x</span><span className="pdp-stat-label mono">CONVERSION BOOST</span></div>
            <div className="pdp-stat"><span className="pdp-stat-num" style={{ color: '#FF2D55' }}>50%</span><span className="pdp-stat-label mono">TIME SAVED</span></div>
            <div className="pdp-stat"><span className="pdp-stat-num" style={{ color: '#FF2D55' }}>∞</span><span className="pdp-stat-label mono">CONTACTS</span></div>
          </div>
        </div>
      </section>

      <section className="pdp-screenshot-section">
        <div className="pdp-screenshot-wrapper" style={{ boxShadow: '0 30px 80px rgba(255,45,85,0.12)' }}>
          <div className="pdp-screenshot-topbar"><div className="pdp-dots"><span /><span /><span /></div><span className="mono" style={{ fontSize: '0.6rem', color: 'var(--outline)' }}>AETHER MAGENTA — CRM DASHBOARD</span></div>
          <img src={screenshotUrl} alt="CRM Dashboard" className="pdp-screenshot" loading="lazy" />
        </div>
      </section>

      <section className="pdp-features-section">
        <div className="pdp-section-header">
          <span className="pdp-section-tag mono" style={{ color: '#FF2D55' }}>CORE MODULES</span>
          <h2 className="pdp-section-title">Complete <span style={{ color: '#FF2D55' }}>Sales</span> Engine</h2>
        </div>
        <div className="pdp-features-grid">
          {features.map((f, i) => (
            <div key={i} className="pdp-feature-card" style={{ '--card-accent': '#FF2D55' }}>
              <div className="pdp-feature-icon">{f.icon}</div>
              <h3 className="pdp-feature-title">{f.title}</h3>
              <p className="pdp-feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pdp-tech-section">
        <div className="pdp-section-header">
          <span className="pdp-section-tag mono" style={{ color: '#FF2D55' }}>TECHNOLOGY</span>
          <h2 className="pdp-section-title">Built With <span style={{ color: '#FF2D55' }}>Modern</span> Stack</h2>
        </div>
        <div className="pdp-tech-pills">
          {techStack.map((t, i) => <span key={i} className="pdp-tech-pill" style={{ borderColor: 'rgba(255,45,85,0.3)', color: '#FF2D55' }}>{t}</span>)}
        </div>
      </section>

      <section className="pdp-cta-section" style={{ background: 'linear-gradient(135deg, rgba(255,45,85,0.06), transparent)' }}>
        <h2 className="pdp-cta-title">Close Deals <span style={{ color: '#FF2D55' }}>Faster</span></h2>
        <p className="pdp-cta-desc">From lead to loyal customer — manage every relationship seamlessly.</p>
        <Link to="/contact" className="btn btn-primary btn-large" style={{ background: '#FF2D55', color: '#fff' }}>START YOUR PROJECT →</Link>
      </section>
    </div>
  );
}
