import React, { useEffect } from 'react';
import { SectionHeader } from '../components/SectionHeader';

const services = [
  { id: '01', title: 'Business Tech Solutions', desc: 'Websites, dashboards, CRM systems, mobile apps, AI assistants, and internal tools — tailored to your needs.', tags: ['WEBSITES','CRM','MOBILE','AI'],
    icon: <svg viewBox="0 0 48 48" fill="none" stroke="#FF4D00" strokeWidth="1.5"><path d="M8 12L24 4L40 12V36L24 44L8 36V12Z"/><path d="M24 4V44M8 12L40 36M40 12L8 36"/></svg> },
  { id: '02', title: 'Industry Training', desc: 'Practical training in web development, AI tools, cloud, cybersecurity, and product management.', tags: ['WEB DEV','AI/ML','CLOUD','SECURITY'],
    icon: <svg viewBox="0 0 48 48" fill="none" stroke="#FF4D00" strokeWidth="1.5"><circle cx="24" cy="20" r="12"/><path d="M16 36L14 44H34L32 36"/><path d="M18 20L22 24L30 16"/></svg> },
  { id: '03', title: 'Prebuilt Projects', desc: 'Ready-to-use project kits — Hospital ERP, School Management, E-Commerce, Job Portal, and more.', tags: ['HEALTHCARE','EDUCATION','E-COMMERCE'],
    icon: <svg viewBox="0 0 48 48" fill="none" stroke="#FF4D00" strokeWidth="1.5"><rect x="8" y="8" width="32" height="32" rx="2"/><path d="M8 16H40M16 8V40"/><circle cx="30" cy="28" r="6"/><path d="M34 32L40 38"/></svg> },
  { id: '04', title: 'Tunable Products', desc: 'Customizable white-label solutions. Adjust branding, features, payments, languages, and automation flows.', tags: ['WHITE-LABEL','CUSTOM','SCALABLE'],
    icon: <svg viewBox="0 0 48 48" fill="none" stroke="#FF4D00" strokeWidth="1.5"><path d="M12 8V40M24 14V40M36 4V40"/><circle cx="12" cy="28" r="4" fill="#FF4D00" opacity="0.3"/><circle cx="24" cy="20" r="4" fill="#FF4D00" opacity="0.3"/><circle cx="36" cy="32" r="4" fill="#FF4D00" opacity="0.3"/></svg> },
];

export default function SolutionsPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <section id="solutions" className="section section-services" style={{ paddingTop: '8rem' }}>
      <SectionHeader tag="01 // WHAT WE BUILD" title="CORE" accentWord="SERVICES" desc="Complete technology partner for businesses that don't want to hire a full in-house tech team." />
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
  );
}
