import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ImageSlider from '../../components/ImageSlider';
import FeatureIcon from '../../components/FeatureIcon';

const screenshots = [
  { src: 'https://lh3.googleusercontent.com/aida/ADBb0uh_GQdfwnnPCJ9S3sS4JzrA8mzLZ6SYyfYCqXovdDhUkP-obYLxfN5f_kG4I0uLd2avZrw0P7ERYnGD_8ArJWEFeu6CtezyJCeKNGl_IhsOfmy6cmF1IE92lc5q9K-Uee-IZO04QQGX1qqMadOuK4tOGu2GceS_3P9gdqicwlZfV3aGMQyoLzuwAdmjlmeUqWZQqgMTCeMVzOvMkfso5m2kX2zD9iaeOmz4w4AX3k6BvizqF3FYl5WUwwU', alt: 'Academic Dashboard' },
  { src: 'https://lh3.googleusercontent.com/aida/ADBb0uh_GQdfwnnPCJ9S3sS4JzrA8mzLZ6SYyfYCqXovdDhUkP-obYLxfN5f_kG4I0uLd2avZrw0P7ERYnGD_8ArJWEFeu6CtezyJCeKNGl_IhsOfmy6cmF1IE92lc5q9K-Uee-IZO04QQGX1qqMadOuK4tOGu2GceS_3P9gdqicwlZfV3aGMQyoLzuwAdmjlmeUqWZQqgMTCeMVzOvMkfso5m2kX2zD9iaeOmz4w4AX3k6BvizqF3FYl5WUwwU', alt: 'Student Management' },
  { src: 'https://lh3.googleusercontent.com/aida/ADBb0uh_GQdfwnnPCJ9S3sS4JzrA8mzLZ6SYyfYCqXovdDhUkP-obYLxfN5f_kG4I0uLd2avZrw0P7ERYnGD_8ArJWEFeu6CtezyJCeKNGl_IhsOfmy6cmF1IE92lc5q9K-Uee-IZO04QQGX1qqMadOuK4tOGu2GceS_3P9gdqicwlZfV3aGMQyoLzuwAdmjlmeUqWZQqgMTCeMVzOvMkfso5m2kX2zD9iaeOmz4w4AX3k6BvizqF3FYl5WUwwU', alt: 'Fee Collection' },
];

const features = [
  { icon: '/icons/school/student-records.png', title: 'Student Records', desc: 'Complete student profiles with enrollment data, academic history, health records, and parent/guardian contact management.' },
  { icon: '/icons/school/attendance.png', title: 'Attendance Tracking', desc: 'Digital roll call, biometric integration, absence notifications, and detailed attendance analytics with trend visualization.' },
  { icon: '/icons/school/grade.png', title: 'Grade Management', desc: 'Flexible grading systems, report card generation, GPA calculation, and academic performance tracking across terms.' },
  { icon: '/icons/school/fee-collection.png', title: 'Fee Collection', desc: 'Online fee payment, installment plans, receipt generation, defaulter tracking, and financial reconciliation.' },
  { icon: '/icons/school/parent-portal.png', title: 'Parent Portal', desc: 'Dedicated parent communication hub with announcements, progress reports, teacher messaging, and event calendars.' },
  { iconSvg: 'smart-calendar', title: 'Timetable Engine', desc: 'Automated timetable generation, teacher assignment, room allocation, and conflict-free scheduling algorithms.' },
];

const techStack = ['React', 'Node.js', 'MongoDB', 'Express', 'PWA', 'WebSocket'];

export default function SchoolERPPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="product-deploy-page" style={{ '--product-accent': '#818CF8', '--product-accent-rgb': '129, 140, 248' }}>
      <section className="pdp-hero">
        <div className="pdp-hero-bg" style={{ background: 'radial-gradient(ellipse at 30% 20%, rgba(129,140,248,0.12) 0%, transparent 60%)' }} />
        <div className="pdp-hero-content">
          <span className="pdp-tag mono">EDUCATION ERP</span>
          <h1 className="pdp-title">School <span style={{ color: '#818CF8' }}>ERP</span> System</h1>
          <p className="pdp-subtitle">Student management, attendance, grading, fee collection, and parent communication — everything a modern school needs in one platform.</p>
          <div className="pdp-hero-actions">
            <Link to="/contact" className="btn btn-primary pdp-cta" style={{ background: '#818CF8', color: '#0c1889' }}>REQUEST DEMO →</Link>
            <Link to="/products" className="btn btn-ghost">← BACK TO PRODUCTS</Link>
          </div>
          <div className="pdp-hero-stats">
            <div className="pdp-stat"><span className="pdp-stat-num" style={{ color: '#818CF8' }}>10K+</span><span className="pdp-stat-label mono">STUDENTS</span></div>
            <div className="pdp-stat"><span className="pdp-stat-num" style={{ color: '#818CF8' }}>98%</span><span className="pdp-stat-label mono">ADOPTION RATE</span></div>
            <div className="pdp-stat"><span className="pdp-stat-num" style={{ color: '#818CF8' }}>K-12</span><span className="pdp-stat-label mono">SUPPORTED</span></div>
          </div>
        </div>
      </section>

      <section className="pdp-screenshot-section">
        <div className="pdp-screenshot-wrapper" style={{ boxShadow: '0 30px 80px rgba(129,140,248,0.15)' }}>
          <div className="pdp-screenshot-topbar"><div className="pdp-dots"><span /><span /><span /></div><span className="mono" style={{ fontSize: '0.6rem', color: 'var(--outline)' }}>SCHOLARPULSE — ACADEMIC DASHBOARD</span></div>
          <ImageSlider images={screenshots} />
        </div>
      </section>

      <section className="pdp-features-section">
        <div className="pdp-section-header">
          <span className="pdp-section-tag mono" style={{ color: '#818CF8' }}>CORE MODULES</span>
          <h2 className="pdp-section-title">Complete <span style={{ color: '#818CF8' }}>Academic</span> Suite</h2>
        </div>
        <div className="pdp-features-grid">
          {features.map((f, i) => (
            <div key={i} className="pdp-feature-card" style={{ '--card-accent': '#818CF8' }}>
              <div className="pdp-feature-icon">
                {f.icon ? <img src={f.icon} alt={f.title} /> : <FeatureIcon name={f.iconSvg} color="#818CF8" />}
              </div>
              <h3 className="pdp-feature-title">{f.title}</h3>
              <p className="pdp-feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pdp-tech-section">
        <div className="pdp-section-header">
          <span className="pdp-section-tag mono" style={{ color: '#818CF8' }}>TECHNOLOGY</span>
          <h2 className="pdp-section-title">Built With <span style={{ color: '#818CF8' }}>Modern</span> Stack</h2>
        </div>
        <div className="pdp-tech-pills">
          {techStack.map((t, i) => <span key={i} className="pdp-tech-pill" style={{ borderColor: 'rgba(129,140,248,0.3)', color: '#818CF8' }}>{t}</span>)}
        </div>
      </section>

      <section className="pdp-cta-section" style={{ background: 'linear-gradient(135deg, rgba(129,140,248,0.08), transparent)' }}>
        <h2 className="pdp-cta-title">Transform Your <span style={{ color: '#818CF8' }}>School</span> Operations</h2>
        <p className="pdp-cta-desc">Deploy a complete School ERP in days. From admissions to alumni.</p>
        <Link to="/contact" className="btn btn-primary btn-large" style={{ background: '#818CF8', color: '#0c1889' }}>START YOUR PROJECT →</Link>
      </section>
    </div>
  );
}
