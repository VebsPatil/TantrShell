import React, { useEffect } from 'react';
import SEOHead from '../components/SEOHead';
import { SectionHeader } from '../components/SectionHeader';
import './InternshipPage.css';

/* ── Data Definitions ── */

const details = [
  {
    label: 'DURATION',
    value: '1–3 Months',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    )
  },
  {
    label: 'MODE',
    value: 'Remote',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    )
  },
  {
    label: 'TYPE',
    value: 'Performance-based',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34" />
        <path d="M12 2a6 6 0 0 1 6 6v3c0 3-2.5 5.5-6 5.5S6 14 6 11V8a6 6 0 0 1 6-6z" />
      </svg>
    )
  }
];

const roles = [
  {
    title: 'Frontend Developer (React)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    desc: 'Craft interactive, pixel-perfect user interfaces. Master state management, component lifecycles, and modern responsive design systems using React.',
    tags: ['React', 'CSS3', 'Vite', 'HTML5', 'GSAP']
  },
  {
    title: 'Backend Developer (Node.js)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
    desc: 'Design and deploy robust server-side APIs and workflows. Work on database architecture, secure authentication, and optimized performance queries.',
    tags: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs']
  },
  {
    title: 'Full Stack Developer',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      </svg>
    ),
    desc: 'Bridge the gap between client experience and backend infrastructure. Own features end-to-end, managing frontend UI to backend queries.',
    tags: ['MERN', 'RESTful APIs', 'Database', 'Git', 'Deployments']
  },
  {
    title: 'AI/ML Intern',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" />
        <line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" />
        <line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" />
        <line x1="20" y1="15" x2="23" y2="15" />
        <line x1="1" y1="9" x2="4" y2="9" />
        <line x1="1" y1="15" x2="4" y2="15" />
      </svg>
    ),
    desc: 'Prototype next-generation intelligent features. Assist in integration of Large Language Models (LLMs), prompt building, and cleaning datasets.',
    tags: ['Python', 'LLMs', 'Prompt Engineering', 'NLP', 'Data Cleaning']
  }
];

const activities = [
  {
    num: '01',
    title: 'Work on Real-World Projects',
    desc: 'Get hands-on experience by building production-ready startup products that solve actual business challenges, rather than simple dummy assignments.'
  },
  {
    num: '02',
    title: 'Collaborate with Developers',
    desc: 'Engage in collaborative code reviews, technical standups, and architectural discussions. Experience how modern engineering teams operate.'
  },
  {
    num: '03',
    title: 'Use GitHub and Modern Tools',
    desc: 'Master professional version control, pull request workflows, automated testing frameworks, and advanced dev environments.'
  },
  {
    num: '04',
    title: 'Build Deployable Applications',
    desc: 'Follow the code all the way from initial development to live deployment, gaining key devops insights along the way.'
  }
];

const benefits = [
  {
    title: 'Hands-on Experience',
    desc: 'Gain solid practical experience by contributing to production web applications and business-critical systems.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="benefit-svg">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    )
  },
  {
    title: 'Certificate',
    desc: 'Earn an official internship completion certificate highlighting your contributions to live startup projects.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="benefit-svg">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    )
  },
  {
    title: 'Mentorship',
    desc: 'Learn directly from senior engineers who provide feedback, structural guidance, and guide your growth.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="benefit-svg">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  },
  {
    title: 'Opportunity for Full-time Role',
    desc: 'Top performers receive Pre-Placement Offers (PPO) to join TantrShell as full-time team members.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="benefit-svg">
        <path d="M4.5 16.5c-1.5 1.26-2 3-2 3s1.74-.5 3-2L18 5l-3-3-10.5 14.5z" />
        <path d="M12 5l3 3" />
        <path d="M19 9l1 1" />
        <path d="M20 8l1 1" />
        <path d="M21 7l1-1" />
      </svg>
    )
  }
];

export default function InternshipPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(
      '.intern-detail-card, .intern-role-card, .intern-activity-card, .intern-benefit-card, .internship-cta-block, .reveal-item'
    ).forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleApply = (e) => {
    e.preventDefault();
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLSchCp81DoQKwb-acCPEHUHxqRkkLAYayAcyiMLj33FlDRuE6A/viewform?usp=publish-editor',
      '_blank'
    );
  };

  return (
    <div className="internship-page-wrapper page-enter">
      <SEOHead
        title="Internship Program — Remote Tech Internships"
        description="Launch your software career with TantrShell's remote internship program. Gain hands-on experience on live startup projects, developer mentorship, and certificates."
        keywords="TantrShell internship, React internship, Node.js internship, developer internship, remote coding internship, startup projects, software intern Pune"
        canonical="/internship"
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://tantrshell.online/" },
              { "@type": "ListItem", "position": 2, "name": "Internship", "item": "https://tantrshell.online/internship" }
            ]
          }
        ]}
      />

      {/* Hero Section */}
      <section className="internship-hero-section">
        <div className="container">
          <div className="internship-hero-content text-center">
            <span className="hero-tag mono reveal-item visible">INTERNSHIP PROGRAM</span>
            <h1 className="hero-main-title reveal-item visible" style={{ animationDelay: '0.1s' }}>
              Start Your Tech Career <br className="desktop-only" />
              with <span className="accent">Real Projects</span>
            </h1>
            <p className="hero-subtext reveal-item visible" style={{ animationDelay: '0.2s' }}>
              Join TantrShell and work on live startup projects
            </p>
            <div className="hero-actions reveal-item visible" style={{ animationDelay: '0.3s' }}>
              <a href="#" onClick={handleApply} className="btn btn-primary btn-lg" id="internship-hero-cta">
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Internship Details Panel */}
      <section className="internship-details-section">
        <div className="container">
          <div className="internship-details-grid">
            {details.map((d, index) => (
              <div key={d.label} className="intern-detail-card" style={{ transitionDelay: `${index * 0.1}s` }}>
                <span className="detail-icon" aria-hidden="true">{d.icon}</span>
                <div className="detail-content">
                  <span className="detail-label mono">{d.label}</span>
                  <h3 className="detail-value">{d.value}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="internship-roles-section section">
        <div className="container">
          <SectionHeader
            tag="ROLES // TRACKS"
            title="Internship"
            accentWord="Roles"
            desc="Select from our core disciplines and start writing production-grade code on day one."
          />
          <div className="internship-roles-grid">
            {roles.map((role, index) => (
              <div key={role.title} className="intern-role-card" style={{ transitionDelay: `${index * 0.08}s` }}>
                <div className="role-card-header">
                  <span className="role-icon" aria-hidden="true">{role.icon}</span>
                  <h3 className="role-title">{role.title}</h3>
                </div>
                <p className="role-desc">{role.desc}</p>
                <div className="role-tags">
                  {role.tags.map((tag) => (
                    <span key={tag} className="role-tag mono">{tag}</span>
                  ))}
                </div>
                <a href="#" onClick={handleApply} className="role-card-cta mono" id={`role-apply-${index}`}>
                  APPLY FOR THIS ROLE →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Will Do Section */}
      <section className="internship-do-section section">
        <div className="container">
          <SectionHeader
            tag="PRACTICE // EXPERIENCE"
            title="What You"
            accentWord="Will Do"
            desc="We provide structured goals and active development. Here is how your daily routine will shape up."
          />
          <div className="internship-do-grid">
            {activities.map((act, index) => (
              <div key={act.title} className="intern-activity-card" style={{ transitionDelay: `${index * 0.08}s` }}>
                <div className="activity-index mono">{act.num}</div>
                <div className="activity-info">
                  <h3 className="activity-title">{act.title}</h3>
                  <p className="activity-desc">{act.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="internship-benefits-section section">
        <div className="container">
          <SectionHeader
            tag="VALUE // BENEFITS"
            title="Internship"
            accentWord="Benefits"
            desc="We invest in our interns. Enjoy robust benefits meant to prepare you for industry roles."
          />
          <div className="internship-benefits-grid">
            {benefits.map((ben, index) => (
              <div key={ben.title} className="intern-benefit-card" style={{ transitionDelay: `${index * 0.08}s` }}>
                <div className="benefit-icon-wrapper" aria-hidden="true">
                  {ben.icon}
                </div>
                <h3 className="benefit-title">{ben.title}</h3>
                <p className="benefit-desc">{ben.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}
