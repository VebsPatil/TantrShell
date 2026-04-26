import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader } from '../components/SectionHeader';

const services = [
  {
    id: '01', title: 'Business Tech Solutions', desc: 'Custom-built web apps, dashboards, CRM systems, and internal tools designed to solve real business problems and improve efficiency.', tags: ['WEBSITES', 'CRM', 'MOBILE', 'AI'],
    icon: <svg viewBox="0 0 48 48" fill="none" stroke="#FF4D00" strokeWidth="1.5"><path d="M8 12L24 4L40 12V36L24 44L8 36V12Z" /><path d="M24 4V44M8 12L40 36M40 12L8 36" /></svg>
  },
  {
    id: '02', title: 'Industry Training', desc: 'Practical training in web develoHands-on training programs in web development, AI tools, cloud, and cybersecurity — focused on real-world projects and job readiness.', tags: ['WEB DEV', 'AI/ML', 'CLOUD', 'SECURITY'],
    icon: <svg viewBox="0 0 48 48" fill="none" stroke="#FF4D00" strokeWidth="1.5"><circle cx="24" cy="20" r="12" /><path d="M16 36L14 44H34L32 36" /><path d="M18 20L22 24L30 16" /></svg>
  },
  {
    id: '03', title: 'Prebuilt Projects', desc: 'Ready-to-deploy solutions like ERP systems, school management, and e-commerce platforms to launch quickly with minimal cost.', tags: ['HEALTHCARE', 'EDUCATION', 'E-COMMERCE'],
    icon: <svg viewBox="0 0 48 48" fill="none" stroke="#FF4D00" strokeWidth="1.5"><rect x="8" y="8" width="32" height="32" rx="2" /><path d="M8 16H40M16 8V40" /><circle cx="30" cy="28" r="6" /><path d="M34 32L40 38" /></svg>
  },
  {
    id: '04', title: 'Tunable Products', desc: 'White-label software solutions that can be customized with your branding, features, and workflows.', tags: ['WHITE-LABEL', 'CUSTOM', 'SCALABLE'],
    icon: <svg viewBox="0 0 48 48" fill="none" stroke="#FF4D00" strokeWidth="1.5"><path d="M12 8V40M24 14V40M36 4V40" /><circle cx="12" cy="28" r="4" fill="#FF4D00" opacity="0.3" /><circle cx="24" cy="20" r="4" fill="#FF4D00" opacity="0.3" /><circle cx="36" cy="32" r="4" fill="#FF4D00" opacity="0.3" /></svg>
  },
];

const processes = [
  { id: '01', title: 'Requirement Analysis', desc: 'Understanding your business needs, goals, and technical requirements.' },
  { id: '02', title: 'Planning & Design', desc: 'Creating wireframes, system architecture, and project roadmaps.' },
  { id: '03', title: 'Development', desc: 'Writing clean, scalable code with modern frameworks and best practices.' },
  { id: '04', title: 'Testing', desc: 'Rigorous QA testing, security audits, and performance optimization.' },
  { id: '05', title: 'Deployment', desc: 'Smooth deployment to production environments with CI/CD pipelines.' },
  { id: '06', title: 'Support', desc: 'Continuous monitoring, maintenance, and feature updates.' },
];

export default function SolutionsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.process-step').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <section id="solutions" className="section section-services" style={{ paddingTop: '8rem' }}>
        <SectionHeader tag="01 // WHAT WE BUILD" title="CORE" accentWord="SERVICES" desc="From idea to scale, TantrShell delivers high-performance software, AI-powered systems, and scalable platforms that accelerate business growth." />
        <div className="services-grid visible">
          {services.map(s => (
            <div key={s.id} className="service-card" data-index={s.id}>
              <div className="service-number mono">{s.id}</div>
              <div className="service-icon">{s.icon}</div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <div className="service-tags mono">
                {s.tags.map(t => <span key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="process" className="section section-process">
        <SectionHeader tag="02 // HOW WE BUILD" title="OUR" accentWord="PROCESS" desc="We follow a structured and transparent process to ensure high-quality delivery, faster timelines, and complete client satisfaction." />
        <div className="process-grid">
          {processes.map((p, i) => (
            <div key={p.id} className="process-step" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="process-number">{p.id}</div>
              <h3 className="process-title">{p.title}</h3>
              <p className="process-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features / Benefits */}
      <section className="solutions-features-section">
        <div className="solutions-features-grid">
          <div className="solutions-feature-box">
            <h3>Who Is <span className="accent">This For?</span></h3>
            <ul className="solutions-feature-list">
              <li>Startups building their first product</li>
              <li>Businesses needing automation tools</li>
              <li>Companies looking to scale digitally</li>
              <li>Students and professionals upgrading skills</li>
            </ul>
          </div>
          <div className="solutions-feature-box">
            <h3>Why Our <span className="accent">Process Works</span></h3>
            <ul className="solutions-feature-list">
              <li>Clear communication at every step</li>
              <li>Agile development approach</li>
              <li>Regular progress updates</li>
              <li>Focus on scalability and performance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="solutions-cta">
        <h2 className="solutions-cta-title">Ready to <span className="accent">Build?</span></h2>
        <div className="solutions-cta-actions">
          <Link to="/contact" className="btn btn-primary">Get Started →</Link>
          <Link to="/contact" className="btn btn-ghost">Contact Us</Link>
        </div>
      </section>
    </>
  );
}
