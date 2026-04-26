import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ImageSlider from '../../components/ImageSlider';

const screenshots = [
  { src: 'https://lh3.googleusercontent.com/aida/ADBb0ui_H2Xwwv-iqye_TcZ6Bhq5MMFne4SdBDmvRCmR0t4rIscccxhl-hOhNDrkMm8MTqPotDxIUIvd94gISyE3XUNC8Msm_aVjh-z9ZAwRgNoH9d1z_nh-EFWQq8ZpKsMHBfuL_Jq1azEWp5W6j7zQWqPNOCKQsIl1OvMQIlVM98RIK8rQ7BlINdkUrNG_ELlCgN-CswvQLy2WbCa9qECSPlqzDLr6AcruSmMBRbBhxtWlC354RntwLpi0lIE', alt: 'Billing Dashboard' },
  { src: 'https://lh3.googleusercontent.com/aida/ADBb0ui_H2Xwwv-iqye_TcZ6Bhq5MMFne4SdBDmvRCmR0t4rIscccxhl-hOhNDrkMm8MTqPotDxIUIvd94gISyE3XUNC8Msm_aVjh-z9ZAwRgNoH9d1z_nh-EFWQq8ZpKsMHBfuL_Jq1azEWp5W6j7zQWqPNOCKQsIl1OvMQIlVM98RIK8rQ7BlINdkUrNG_ELlCgN-CswvQLy2WbCa9qECSPlqzDLr6AcruSmMBRbBhxtWlC354RntwLpi0lIE', alt: 'Invoice Generator' },
  { src: 'https://lh3.googleusercontent.com/aida/ADBb0ui_H2Xwwv-iqye_TcZ6Bhq5MMFne4SdBDmvRCmR0t4rIscccxhl-hOhNDrkMm8MTqPotDxIUIvd94gISyE3XUNC8Msm_aVjh-z9ZAwRgNoH9d1z_nh-EFWQq8ZpKsMHBfuL_Jq1azEWp5W6j7zQWqPNOCKQsIl1OvMQIlVM98RIK8rQ7BlINdkUrNG_ELlCgN-CswvQLy2WbCa9qECSPlqzDLr6AcruSmMBRbBhxtWlC354RntwLpi0lIE', alt: 'Financial Reports' },
];

const features = [
  { icon: '/icons/billing/auto-invoicing.png', title: 'Auto Invoicing', desc: 'Generate professional invoices automatically with customizable templates, branding, and batch processing.' },
  { icon: '/icons/billing/gst-tax.png', title: 'GST/Tax Engine', desc: 'Built-in GST, VAT, and sales tax calculation with compliance-ready reporting and e-filing integration.' },
  { icon: '/icons/billing/payment-tracking.png', title: 'Payment Tracking', desc: 'Real-time payment status updates, aging reports, automated reminders for overdue invoices, and reconciliation.' },
  { icon: '/icons/billing/financial-reports.png', title: 'Financial Reports', desc: 'Profit & loss, balance sheet, cash flow statements, and custom report builder with PDF/Excel export.' },
  { icon: '/icons/billing/recurring-billing.png', title: 'Recurring Billing', desc: 'Subscription management, automatic renewal, proration support, and dunning management for failed payments.' },
  { icon: '/icons/billing/multi-currency.png', title: 'Multi-Currency', desc: 'Support for 50+ currencies, real-time exchange rates, and localized invoice formatting for global commerce.' },
];

const techStack = ['React', 'Node.js', 'PostgreSQL', 'Tally API', 'PDF.js', 'Cron'];

export default function BillingPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="product-deploy-page" style={{ '--product-accent': '#FFD700', '--product-accent-rgb': '255, 215, 0' }}>
      <section className="pdp-hero">
        <div className="pdp-hero-bg" style={{ background: 'radial-gradient(ellipse at 30% 20%, rgba(255,215,0,0.1) 0%, transparent 60%)' }} />
        <div className="pdp-hero-content">
          <span className="pdp-tag mono">HR & FINANCE</span>
          <h1 className="pdp-title">Billing & <span style={{ color: '#FFD700' }}>Invoicing</span></h1>
          <p className="pdp-subtitle">Automated invoicing, tax calculation, payment tracking, and financial reporting — your complete billing command center.</p>
          <div className="pdp-hero-actions">
            <Link to="/contact" className="btn btn-primary pdp-cta" style={{ background: '#FFD700', color: '#3a3000' }}>REQUEST DEMO →</Link>
            <Link to="/products" className="btn btn-ghost">← BACK TO PRODUCTS</Link>
          </div>
          <div className="pdp-hero-stats">
            <div className="pdp-stat"><span className="pdp-stat-num" style={{ color: '#FFD700' }}>₹50Cr+</span><span className="pdp-stat-label mono">INVOICED</span></div>
            <div className="pdp-stat"><span className="pdp-stat-num" style={{ color: '#FFD700' }}>100%</span><span className="pdp-stat-label mono">GST COMPLIANT</span></div>
            <div className="pdp-stat"><span className="pdp-stat-num" style={{ color: '#FFD700' }}>30s</span><span className="pdp-stat-label mono">INVOICE GEN</span></div>
          </div>
        </div>
      </section>

      <section className="pdp-screenshot-section">
        <div className="pdp-screenshot-wrapper" style={{ boxShadow: '0 30px 80px rgba(255,215,0,0.12)' }}>
          <div className="pdp-screenshot-topbar"><div className="pdp-dots"><span /><span /><span /></div><span className="mono" style={{ fontSize: '0.6rem', color: 'var(--outline)' }}>THE VAULT — BILLING DASHBOARD</span></div>
          <ImageSlider images={screenshots} />
        </div>
      </section>

      <section className="pdp-features-section">
        <div className="pdp-section-header">
          <span className="pdp-section-tag mono" style={{ color: '#FFD700' }}>CORE MODULES</span>
          <h2 className="pdp-section-title">Complete <span style={{ color: '#FFD700' }}>Financial</span> Control</h2>
        </div>
        <div className="pdp-features-grid">
          {features.map((f, i) => (
            <div key={i} className="pdp-feature-card" style={{ '--card-accent': '#FFD700' }}>
              <div className="pdp-feature-icon"><img src={f.icon} alt={f.title} /></div>
              <h3 className="pdp-feature-title">{f.title}</h3>
              <p className="pdp-feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pdp-tech-section">
        <div className="pdp-section-header">
          <span className="pdp-section-tag mono" style={{ color: '#FFD700' }}>TECHNOLOGY</span>
          <h2 className="pdp-section-title">Built With <span style={{ color: '#FFD700' }}>Modern</span> Stack</h2>
        </div>
        <div className="pdp-tech-pills">
          {techStack.map((t, i) => <span key={i} className="pdp-tech-pill" style={{ borderColor: 'rgba(255,215,0,0.3)', color: '#FFD700' }}>{t}</span>)}
        </div>
      </section>

      <section className="pdp-cta-section" style={{ background: 'linear-gradient(135deg, rgba(255,215,0,0.06), transparent)' }}>
        <h2 className="pdp-cta-title">Master Your <span style={{ color: '#FFD700' }}>Finances</span></h2>
        <p className="pdp-cta-desc">From invoicing to tax filing — automate your entire billing workflow.</p>
        <Link to="/contact" className="btn btn-primary btn-large" style={{ background: '#FFD700', color: '#3a3000' }}>START YOUR PROJECT →</Link>
      </section>
    </div>
  );
}
