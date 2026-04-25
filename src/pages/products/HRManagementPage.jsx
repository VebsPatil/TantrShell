import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const screenshotUrl = 'https://lh3.googleusercontent.com/aida/ADBb0uiEI5X_9Y_CTkoWKjSMK2Blk-qsovaBjzEcKBC9RDQMY4zS7Oc6u4Xf3Mk76tim8inO6kMSJCRfSgmiC5UYqQjcwCM1B_INsQZ0uivMhXbCbDqP-5sgPO1DCKEFhu2QWi5-Tvb9YUQMlmOdrq83qU4ielYLI7gWaCOs4fLmd2FqMoFn7NkPzQZHVI6JR2nkjAw2t6eS8w4WvYlCHNKOyhSzvEcpuWPks8p63SN3GI74gKHJsxWTIN5vHw';

const features = [
  { icon: '👤', title: 'Employee Directory', desc: 'Centralized employee profiles with org charts, role history, document management, and emergency contacts.' },
  { icon: '💵', title: 'Payroll Processing', desc: 'Automated salary calculation, tax deductions, bank transfers, and payslip generation with compliance checks.' },
  { icon: '🏖️', title: 'Leave Management', desc: 'Leave requests, approval workflows, balance tracking, holiday calendars, and comp-off management.' },
  { icon: '⭐', title: 'Performance Reviews', desc: '360-degree feedback, goal setting, KPI tracking, review cycles, and performance improvement plans.' },
  { icon: '🎯', title: 'Recruitment Pipeline', desc: 'Job posting, applicant tracking, interview scheduling, offer management, and onboarding workflows.' },
  { icon: '📊', title: 'HR Analytics', desc: 'Attrition analysis, headcount trends, compensation benchmarking, and diversity reports.' },
];

const techStack = ['React', 'Python', 'PostgreSQL', 'Celery', 'Docker', 'REST API'];

export default function HRManagementPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="product-deploy-page" style={{ '--product-accent': '#10B981', '--product-accent-rgb': '16, 185, 129' }}>
      <section className="pdp-hero">
        <div className="pdp-hero-bg" style={{ background: 'radial-gradient(ellipse at 30% 20%, rgba(16,185,129,0.12) 0%, transparent 60%)' }} />
        <div className="pdp-hero-content">
          <span className="pdp-tag mono">HR & FINANCE</span>
          <h1 className="pdp-title">HR Management <span style={{ color: '#10B981' }}>Suite</span></h1>
          <p className="pdp-subtitle">Employee records, payroll, leave management, performance tracking, and recruitment pipeline — your complete HR command center.</p>
          <div className="pdp-hero-actions">
            <Link to="/contact" className="btn btn-primary pdp-cta" style={{ background: '#10B981', color: '#003824' }}>REQUEST DEMO →</Link>
            <Link to="/products" className="btn btn-ghost">← BACK TO PRODUCTS</Link>
          </div>
          <div className="pdp-hero-stats">
            <div className="pdp-stat"><span className="pdp-stat-num" style={{ color: '#10B981' }}>5K+</span><span className="pdp-stat-label mono">EMPLOYEES</span></div>
            <div className="pdp-stat"><span className="pdp-stat-num" style={{ color: '#10B981' }}>₹0</span><span className="pdp-stat-label mono">PAYROLL ERRORS</span></div>
            <div className="pdp-stat"><span className="pdp-stat-num" style={{ color: '#10B981' }}>ISO</span><span className="pdp-stat-label mono">27001 READY</span></div>
          </div>
        </div>
      </section>

      <section className="pdp-screenshot-section">
        <div className="pdp-screenshot-wrapper" style={{ boxShadow: '0 30px 80px rgba(16,185,129,0.15)' }}>
          <div className="pdp-screenshot-topbar"><div className="pdp-dots"><span /><span /><span /></div><span className="mono" style={{ fontSize: '0.6rem', color: 'var(--outline)' }}>EMERALD CORE — HR DASHBOARD</span></div>
          <img src={screenshotUrl} alt="HR Management Dashboard" className="pdp-screenshot" loading="lazy" />
        </div>
      </section>

      <section className="pdp-features-section">
        <div className="pdp-section-header">
          <span className="pdp-section-tag mono" style={{ color: '#10B981' }}>CORE MODULES</span>
          <h2 className="pdp-section-title">Complete <span style={{ color: '#10B981' }}>People</span> Operations</h2>
        </div>
        <div className="pdp-features-grid">
          {features.map((f, i) => (
            <div key={i} className="pdp-feature-card" style={{ '--card-accent': '#10B981' }}>
              <div className="pdp-feature-icon">{f.icon}</div>
              <h3 className="pdp-feature-title">{f.title}</h3>
              <p className="pdp-feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pdp-tech-section">
        <div className="pdp-section-header">
          <span className="pdp-section-tag mono" style={{ color: '#10B981' }}>TECHNOLOGY</span>
          <h2 className="pdp-section-title">Built With <span style={{ color: '#10B981' }}>Modern</span> Stack</h2>
        </div>
        <div className="pdp-tech-pills">
          {techStack.map((t, i) => <span key={i} className="pdp-tech-pill" style={{ borderColor: 'rgba(16,185,129,0.3)', color: '#10B981' }}>{t}</span>)}
        </div>
      </section>

      <section className="pdp-cta-section" style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.08), transparent)' }}>
        <h2 className="pdp-cta-title">Streamline Your <span style={{ color: '#10B981' }}>HR</span> Operations</h2>
        <p className="pdp-cta-desc">From hiring to retiring — manage your entire workforce effortlessly.</p>
        <Link to="/contact" className="btn btn-primary btn-large" style={{ background: '#10B981', color: '#003824' }}>START YOUR PROJECT →</Link>
      </section>
    </div>
  );
}
