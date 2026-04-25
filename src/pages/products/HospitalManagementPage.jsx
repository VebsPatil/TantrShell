import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const screenshotUrl = 'https://lh3.googleusercontent.com/aida/ADBb0uhpCc-9zOLray3zmcAbur5LPlWEEozDs8V3rHfbkJFRLWRfRCPqjYlb5bxAxSg6DXfGFtskrcDE5YhCyMeBPD7F4MGOF8v_5fETtdqbCKS7FpTsETXWx-sxErgd3EuC2XpeeFBe6sKChiJ7oUzFcHf-qIrZ1ECmyQJ2ycZzwCBtRz2OPO0axQFezIz247F8q1Nz4WXorCv3OtOdaYeOdfFjMlE2GGlFvK18unNQc0K7XAhClc_WkhMUQA';

const features = [
  { icon: '🏥', title: 'Patient Records', desc: 'Complete patient history with demographics, medical history, allergies, and treatment timelines in a unified digital record.' },
  { icon: '📅', title: 'Appointment Scheduling', desc: 'Smart calendar system with automated reminders, multi-doctor scheduling, and conflict detection.' },
  { icon: '💊', title: 'Pharmacy Management', desc: 'Real-time inventory tracking, auto-reorder alerts, prescription management, and drug interaction warnings.' },
  { icon: '🧪', title: 'Lab Integration', desc: 'Seamless lab test ordering, automated result collection, critical value flagging, and report generation.' },
  { icon: '💰', title: 'Billing & Insurance', desc: 'Automated invoicing, insurance claim processing, payment tracking, and financial analytics dashboard.' },
  { icon: '📊', title: 'Analytics Dashboard', desc: 'Real-time ward occupancy, revenue metrics, patient flow analysis, and operational KPIs at a glance.' },
];

const techStack = ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'REST API'];

export default function HospitalManagementPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="product-deploy-page" style={{ '--product-accent': '#00CED1', '--product-accent-rgb': '0, 206, 209' }}>
      {/* Hero */}
      <section className="pdp-hero">
        <div className="pdp-hero-bg" style={{ background: 'radial-gradient(ellipse at 30% 20%, rgba(0,206,209,0.12) 0%, transparent 60%)' }} />
        <div className="pdp-hero-content">
          <span className="pdp-tag mono">HEALTHCARE ERP</span>
          <h1 className="pdp-title">Hospital <span style={{ color: '#00CED1' }}>Management</span> System</h1>
          <p className="pdp-subtitle">Complete patient records, appointments, billing, pharmacy, and lab management — all in one production-ready system designed for modern healthcare.</p>
          <div className="pdp-hero-actions">
            <Link to="/contact" className="btn btn-primary pdp-cta" style={{ background: '#00CED1', color: '#003738' }}>REQUEST DEMO →</Link>
            <Link to="/products" className="btn btn-ghost">← BACK TO PRODUCTS</Link>
          </div>
          <div className="pdp-hero-stats">
            <div className="pdp-stat"><span className="pdp-stat-num" style={{ color: '#00CED1' }}>50K+</span><span className="pdp-stat-label mono">PATIENTS MANAGED</span></div>
            <div className="pdp-stat"><span className="pdp-stat-num" style={{ color: '#00CED1' }}>99.9%</span><span className="pdp-stat-label mono">UPTIME</span></div>
            <div className="pdp-stat"><span className="pdp-stat-num" style={{ color: '#00CED1' }}>HIPAA</span><span className="pdp-stat-label mono">COMPLIANT</span></div>
          </div>
        </div>
      </section>

      {/* Screenshot */}
      <section className="pdp-screenshot-section">
        <div className="pdp-screenshot-wrapper" style={{ boxShadow: '0 30px 80px rgba(0,206,209,0.15)' }}>
          <div className="pdp-screenshot-topbar">
            <div className="pdp-dots"><span /><span /><span /></div>
            <span className="mono" style={{ fontSize: '0.6rem', color: 'var(--outline)' }}>CLINICAL DASHBOARD — LUMINARY HEALTH</span>
          </div>
          <img src={screenshotUrl} alt="Hospital Management System Dashboard" className="pdp-screenshot" loading="lazy" />
        </div>
      </section>

      {/* Features */}
      <section className="pdp-features-section">
        <div className="pdp-section-header">
          <span className="pdp-section-tag mono" style={{ color: '#00CED1' }}>CORE MODULES</span>
          <h2 className="pdp-section-title">Everything Your Hospital <span style={{ color: '#00CED1' }}>Needs</span></h2>
        </div>
        <div className="pdp-features-grid">
          {features.map((f, i) => (
            <div key={i} className="pdp-feature-card" style={{ '--card-accent': '#00CED1' }}>
              <div className="pdp-feature-icon">{f.icon}</div>
              <h3 className="pdp-feature-title">{f.title}</h3>
              <p className="pdp-feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="pdp-tech-section">
        <div className="pdp-section-header">
          <span className="pdp-section-tag mono" style={{ color: '#00CED1' }}>TECHNOLOGY</span>
          <h2 className="pdp-section-title">Built With <span style={{ color: '#00CED1' }}>Modern</span> Stack</h2>
        </div>
        <div className="pdp-tech-pills">
          {techStack.map((t, i) => <span key={i} className="pdp-tech-pill" style={{ borderColor: 'rgba(0,206,209,0.3)', color: '#00CED1' }}>{t}</span>)}
        </div>
      </section>

      {/* CTA */}
      <section className="pdp-cta-section" style={{ background: 'linear-gradient(135deg, rgba(0,206,209,0.08), transparent)' }}>
        <h2 className="pdp-cta-title">Ready to Modernize Your <span style={{ color: '#00CED1' }}>Healthcare</span>?</h2>
        <p className="pdp-cta-desc">Deploy a production-ready Hospital Management System in days, not months.</p>
        <Link to="/contact" className="btn btn-primary btn-large" style={{ background: '#00CED1', color: '#003738' }}>START YOUR PROJECT →</Link>
      </section>
    </div>
  );
}
