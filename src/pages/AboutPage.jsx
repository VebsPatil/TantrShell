import React, { useEffect } from 'react';
import { SectionHeader } from '../components/SectionHeader';

const features = [
  { title: 'Digital Transformation', desc: "Help businesses identify what to automate, what software they need, and where they're losing time or money.",
    icon: <><path d="M24 4L44 14V34L24 44L4 34V14L24 4Z"/><path d="M24 4V44"/><path d="M4 14L44 34"/><path d="M44 14L4 34"/></> },
  { title: 'AI Integration', desc: 'Chatbots, document analysis, lead sorting, auto-replies, smart recommendations, and voice assistants.',
    icon: <><circle cx="24" cy="24" r="20"/><path d="M24 4C28 12 28 36 24 44"/><path d="M24 4C20 12 20 36 24 44"/><path d="M4 24H44"/><path d="M8 14H40"/><path d="M8 34H40"/></> },
  { title: 'Business Automation', desc: 'Automated lead follow-up, invoices, email campaigns, appointment reminders, and inventory alerts.',
    icon: <><path d="M24 4L40 14V34L24 44L8 34V14L24 4Z"/><path d="M24 14L34 20V32L24 38L14 32V20L24 14Z"/><circle cx="24" cy="26" r="4" fill="#FF4D00" opacity="0.4"/></> },
  { title: 'White-Label SaaS', desc: 'Build once, let many businesses use it under their own brand. Scalable multi-tenant architecture.',
    icon: <><rect x="6" y="6" width="16" height="16"/><rect x="26" y="6" width="16" height="16"/><rect x="6" y="26" width="16" height="16"/><rect x="26" y="26" width="16" height="16"/><circle cx="14" cy="14" r="3" fill="#FF4D00" opacity="0.4"/><circle cx="34" cy="34" r="3" fill="#FF4D00" opacity="0.4"/></> },
  { title: 'Maintenance & Support', desc: 'Ongoing bug fixes, updates, backups, security patching, and performance optimization.',
    icon: <><path d="M4 40L16 20L24 28L36 8L44 16"/><circle cx="16" cy="20" r="3" fill="#FF4D00" opacity="0.4"/><circle cx="36" cy="8" r="3" fill="#FF4D00" opacity="0.4"/></> },
  { title: 'Talent Pipeline', desc: 'Training-to-hiring program where students learn, top performers work on projects, and businesses get trained talent.',
    icon: <><path d="M24 4V20L36 28V44"/><path d="M24 20L12 28V44"/><circle cx="24" cy="4" r="3"/><circle cx="36" cy="44" r="3"/><circle cx="12" cy="44" r="3"/></> },
];

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          const idx = Array.from(e.target.parentElement.children).indexOf(e.target);
          e.target.style.transitionDelay = `${idx * 0.1}s`;
        }
      });
    }, { threshold: 0.15 });
    document.querySelectorAll('.about-feature').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <section id="about" className="section section-about" style={{ paddingTop: '8rem' }}>
        <SectionHeader tag="04 // WHY TANTRSHELL" title="TECHNOLOGY" accentWord="REIMAGINED" />
        <div className="about-grid">
          {features.map((f, i) => (
            <div key={i} className="about-feature" data-animate="">
              <div className="about-icon">
                <svg viewBox="0 0 48 48" fill="none" stroke="#FF4D00" strokeWidth="1.5">{f.icon}</svg>
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
        <div className="about-marquee">
          <div className="marquee-inner">
            {['STARTUPS','LOCAL BUSINESSES','CLINICS','SCHOOLS','MANUFACTURERS','RESTAURANTS','RETAILERS','NGOS','AGENCIES','FREELANCERS',
              'STARTUPS','LOCAL BUSINESSES','CLINICS','SCHOOLS','MANUFACTURERS','RESTAURANTS','RETAILERS','NGOS','AGENCIES','FREELANCERS']
              .map((item, i) => (
                <React.Fragment key={i}>
                  <span>{item}</span><span className="dot">●</span>
                </React.Fragment>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
