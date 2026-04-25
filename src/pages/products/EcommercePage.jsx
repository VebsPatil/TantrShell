import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const screenshotUrl = 'https://lh3.googleusercontent.com/aida/ADBb0ui2BsjoPUndToE7aidIXs3--X0Qutn8K1JgZfF3q3Rvziw5lxsyrckZItn-F2Ua9TxocVKWR0tDrpCYcvDQ49HTE5SO2HtE3DUIKBF1-DH6rXY60ORPNAG0mcfCsBrhlb5-ymaAvgH7iwRjP3hXPdD6UzOXkh9tQLHDySB1H70V0awSkeLENrOG1xFpu_k2WXq5J6G6DX_lZ3iqFUmcB7SE5jlLNGLOfRyDnmrd9dhEEcgAL4AR1Wt7sWs';

const features = [
  { icon: '🛒', title: 'Product Catalog', desc: 'Rich product management with variants, bulk upload, SEO-friendly URLs, and advanced filtering and search.' },
  { icon: '💳', title: 'Payment Gateway', desc: 'Multi-gateway integration — Stripe, Razorpay, PayPal — with secure checkout and automated refund processing.' },
  { icon: '📦', title: 'Inventory Control', desc: 'Real-time stock management, warehouse tracking, low-stock alerts, and automated purchase order generation.' },
  { icon: '🚚', title: 'Order Pipeline', desc: 'Complete order lifecycle management from placement to delivery with tracking, returns, and exchange workflows.' },
  { icon: '📈', title: 'Revenue Analytics', desc: 'Customer lifetime value, conversion funnels, sales trends, and product performance with exportable reports.' },
  { icon: '👥', title: 'Customer Management', desc: 'Customer profiles, order history, wishlists, loyalty programs, and segmented email marketing tools.' },
];

const techStack = ['Next.js', 'Stripe', 'PostgreSQL', 'Redis', 'Cloudflare', 'GraphQL'];

export default function EcommercePage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="product-deploy-page" style={{ '--product-accent': '#FF8F00', '--product-accent-rgb': '255, 143, 0' }}>
      <section className="pdp-hero">
        <div className="pdp-hero-bg" style={{ background: 'radial-gradient(ellipse at 30% 20%, rgba(255,143,0,0.12) 0%, transparent 60%)' }} />
        <div className="pdp-hero-content">
          <span className="pdp-tag mono">E-COMMERCE PLATFORM</span>
          <h1 className="pdp-title">E-Commerce <span style={{ color: '#FF8F00' }}>Starter</span></h1>
          <p className="pdp-subtitle">Full-featured online store with cart, checkout, payment gateway, and inventory management — launch your business online instantly.</p>
          <div className="pdp-hero-actions">
            <Link to="/contact" className="btn btn-primary pdp-cta" style={{ background: '#FF8F00', color: '#2e1500' }}>REQUEST DEMO →</Link>
            <Link to="/products" className="btn btn-ghost">← BACK TO PRODUCTS</Link>
          </div>
          <div className="pdp-hero-stats">
            <div className="pdp-stat"><span className="pdp-stat-num" style={{ color: '#FF8F00' }}>100K</span><span className="pdp-stat-label mono">PRODUCTS HANDLED</span></div>
            <div className="pdp-stat"><span className="pdp-stat-num" style={{ color: '#FF8F00' }}>3s</span><span className="pdp-stat-label mono">AVG LOAD TIME</span></div>
            <div className="pdp-stat"><span className="pdp-stat-num" style={{ color: '#FF8F00' }}>PCI</span><span className="pdp-stat-label mono">DSS COMPLIANT</span></div>
          </div>
        </div>
      </section>

      <section className="pdp-screenshot-section">
        <div className="pdp-screenshot-wrapper" style={{ boxShadow: '0 30px 80px rgba(255,143,0,0.15)' }}>
          <div className="pdp-screenshot-topbar"><div className="pdp-dots"><span /><span /><span /></div><span className="mono" style={{ fontSize: '0.6rem', color: 'var(--outline)' }}>AMBER COMMERCE — ADMIN DASHBOARD</span></div>
          <img src={screenshotUrl} alt="E-Commerce Dashboard" className="pdp-screenshot" loading="lazy" />
        </div>
      </section>

      <section className="pdp-features-section">
        <div className="pdp-section-header">
          <span className="pdp-section-tag mono" style={{ color: '#FF8F00' }}>CORE MODULES</span>
          <h2 className="pdp-section-title">Complete <span style={{ color: '#FF8F00' }}>Commerce</span> Engine</h2>
        </div>
        <div className="pdp-features-grid">
          {features.map((f, i) => (
            <div key={i} className="pdp-feature-card" style={{ '--card-accent': '#FF8F00' }}>
              <div className="pdp-feature-icon">{f.icon}</div>
              <h3 className="pdp-feature-title">{f.title}</h3>
              <p className="pdp-feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pdp-tech-section">
        <div className="pdp-section-header">
          <span className="pdp-section-tag mono" style={{ color: '#FF8F00' }}>TECHNOLOGY</span>
          <h2 className="pdp-section-title">Built With <span style={{ color: '#FF8F00' }}>Modern</span> Stack</h2>
        </div>
        <div className="pdp-tech-pills">
          {techStack.map((t, i) => <span key={i} className="pdp-tech-pill" style={{ borderColor: 'rgba(255,143,0,0.3)', color: '#FF8F00' }}>{t}</span>)}
        </div>
      </section>

      <section className="pdp-cta-section" style={{ background: 'linear-gradient(135deg, rgba(255,143,0,0.08), transparent)' }}>
        <h2 className="pdp-cta-title">Launch Your <span style={{ color: '#FF8F00' }}>Store</span> Today</h2>
        <p className="pdp-cta-desc">From product listing to payment processing — get selling in days.</p>
        <Link to="/contact" className="btn btn-primary btn-large" style={{ background: '#FF8F00', color: '#2e1500' }}>START YOUR PROJECT →</Link>
      </section>
    </div>
  );
}
