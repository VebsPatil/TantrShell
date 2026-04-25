import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const screenshotUrl = 'https://lh3.googleusercontent.com/aida/ADBb0ujc9qlFFeLie9dR89ILUDi5sFKUZOo4ea_eNvRCZ1egyfDiTWcG9eCG7yEn5DgZnngDvihasCOCeagtczAZ8LQAeKu2CnTN5WsNH8RWnwgKej2FruBz65XLSTBfCfu4JK8q7wDEirUk6yv5kvcWnjNIomMbV4pVkFs4qM9B9KaQhNOA2a3MWXT-cciiHPLE1RORoww1fLAo3BwDqdOrJKJUFm0O0aTYFBupBoaMxqd1j6CwLaAYLcysnQ0';

const features = [
  { icon: '📅', title: 'Smart Calendar', desc: 'Multi-service calendar with time slots, availability management, buffer times, and recurring booking support.' },
  { icon: '🔔', title: 'Auto Notifications', desc: 'Email & SMS reminders, confirmation alerts, rescheduling notifications, and follow-up campaigns.' },
  { icon: '💳', title: 'Payment Integration', desc: 'Upfront payments, deposits, refund handling, and multi-currency support with Stripe and Razorpay.' },
  { icon: '👥', title: 'Client Management', desc: 'Customer profiles, booking history, preferences, notes, and loyalty tracking for repeat clients.' },
  { icon: '📊', title: 'Revenue Analytics', desc: 'Booking trends, peak hours analysis, no-show rates, and revenue forecasting dashboards.' },
  { icon: '🔗', title: 'Embed & Share', desc: 'Embeddable booking widget for your website, shareable booking links, and QR code generation.' },
];

const techStack = ['React', 'Node.js', 'MongoDB', 'Twilio', 'Stripe', 'Socket.io'];

export default function BookingEnginePage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="product-deploy-page" style={{ '--product-accent': '#0EA5E9', '--product-accent-rgb': '14, 165, 233' }}>
      <section className="pdp-hero">
        <div className="pdp-hero-bg" style={{ background: 'radial-gradient(ellipse at 30% 20%, rgba(14,165,233,0.12) 0%, transparent 60%)' }} />
        <div className="pdp-hero-content">
          <span className="pdp-tag mono">SERVICE PLATFORM</span>
          <h1 className="pdp-title">Booking <span style={{ color: '#0EA5E9' }}>Engine</span></h1>
          <p className="pdp-subtitle">Multi-service appointment booking with calendar, notifications, and payment integration — perfect for salons, clinics, and consultants.</p>
          <div className="pdp-hero-actions">
            <Link to="/contact" className="btn btn-primary pdp-cta" style={{ background: '#0EA5E9', color: '#00344d' }}>REQUEST DEMO →</Link>
            <Link to="/products" className="btn btn-ghost">← BACK TO PRODUCTS</Link>
          </div>
          <div className="pdp-hero-stats">
            <div className="pdp-stat"><span className="pdp-stat-num" style={{ color: '#0EA5E9' }}>24/7</span><span className="pdp-stat-label mono">BOOKING ACCESS</span></div>
            <div className="pdp-stat"><span className="pdp-stat-num" style={{ color: '#0EA5E9' }}>60%</span><span className="pdp-stat-label mono">NO-SHOW REDUCTION</span></div>
            <div className="pdp-stat"><span className="pdp-stat-num" style={{ color: '#0EA5E9' }}>5min</span><span className="pdp-stat-label mono">SETUP TIME</span></div>
          </div>
        </div>
      </section>

      <section className="pdp-screenshot-section">
        <div className="pdp-screenshot-wrapper" style={{ boxShadow: '0 30px 80px rgba(14,165,233,0.15)' }}>
          <div className="pdp-screenshot-topbar"><div className="pdp-dots"><span /><span /><span /></div><span className="mono" style={{ fontSize: '0.6rem', color: 'var(--outline)' }}>SKY OBSIDIAN — BOOKING DASHBOARD</span></div>
          <img src={screenshotUrl} alt="Booking Engine Dashboard" className="pdp-screenshot" loading="lazy" />
        </div>
      </section>

      <section className="pdp-features-section">
        <div className="pdp-section-header">
          <span className="pdp-section-tag mono" style={{ color: '#0EA5E9' }}>CORE MODULES</span>
          <h2 className="pdp-section-title">Complete <span style={{ color: '#0EA5E9' }}>Booking</span> Solution</h2>
        </div>
        <div className="pdp-features-grid">
          {features.map((f, i) => (
            <div key={i} className="pdp-feature-card" style={{ '--card-accent': '#0EA5E9' }}>
              <div className="pdp-feature-icon">{f.icon}</div>
              <h3 className="pdp-feature-title">{f.title}</h3>
              <p className="pdp-feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pdp-tech-section">
        <div className="pdp-section-header">
          <span className="pdp-section-tag mono" style={{ color: '#0EA5E9' }}>TECHNOLOGY</span>
          <h2 className="pdp-section-title">Built With <span style={{ color: '#0EA5E9' }}>Modern</span> Stack</h2>
        </div>
        <div className="pdp-tech-pills">
          {techStack.map((t, i) => <span key={i} className="pdp-tech-pill" style={{ borderColor: 'rgba(14,165,233,0.3)', color: '#0EA5E9' }}>{t}</span>)}
        </div>
      </section>

      <section className="pdp-cta-section" style={{ background: 'linear-gradient(135deg, rgba(14,165,233,0.08), transparent)' }}>
        <h2 className="pdp-cta-title">Automate Your <span style={{ color: '#0EA5E9' }}>Bookings</span></h2>
        <p className="pdp-cta-desc">Let clients book 24/7. No more phone tag. No more double bookings.</p>
        <Link to="/contact" className="btn btn-primary btn-large" style={{ background: '#0EA5E9', color: '#00344d' }}>START YOUR PROJECT →</Link>
      </section>
    </div>
  );
}
