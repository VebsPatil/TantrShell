import React, { useEffect, useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';

const perks = [
  { icon: '◆', title: 'Remote-First', desc: 'Work from anywhere — home, café, or co-working space. We care about output, not office hours.' },
  { icon: '◇', title: 'Growth Budget', desc: '₹25,000/year for courses, conferences, books, and certifications to fuel your growth.' },
  { icon: '▪', title: 'Flexible Hours', desc: 'Async-first culture. Set your own schedule around core collaboration hours.' },
  { icon: '▫', title: 'Equity Options', desc: 'Early team members get meaningful equity stakes in the company.' },
  { icon: '●', title: 'Health Coverage', desc: 'Comprehensive health insurance for you and your family from day one.' },
  { icon: '○', title: 'Paid Time Off', desc: 'Unlimited PTO policy — we trust you to balance work and rest responsibly.' },
];

const openings = [
  {
    id: 'fe-01',
    title: 'Senior Full-Stack Developer',
    department: 'ENGINEERING',
    location: 'Remote / Pune',
    type: 'Full-Time',
    description: 'Build and scale our SaaS products and client solutions. You\'ll architect systems, mentor juniors, and drive technical decisions across the stack.',
    requirements: ['3+ years with React, Node.js, or Python', 'Experience with cloud platforms (AWS/GCP)', 'Strong database design skills', 'API design & microservices architecture'],
  },
  {
    id: 'fe-02',
    title: 'AI / ML Engineer',
    department: 'AI LABS',
    location: 'Remote / Pune',
    type: 'Full-Time',
    description: 'Research, prototype, and deploy AI-powered features into our products — from NLP chatbots to predictive analytics engines for our clients.',
    requirements: ['Experience with TensorFlow/PyTorch', 'NLP or Computer Vision expertise', 'Python proficiency', 'Familiarity with MLOps pipelines'],
  },
  {
    id: 'fe-03',
    title: 'UI/UX Designer',
    department: 'DESIGN',
    location: 'Remote',
    type: 'Full-Time',
    description: 'Craft premium, user-centered interfaces for our products and client projects. You\'ll own the entire design lifecycle from research to polished prototypes.',
    requirements: ['Portfolio showcasing product design', 'Proficiency in Figma & prototyping tools', 'Understanding of design systems', 'Experience with user research'],
  },
  {
    id: 'fe-04',
    title: 'Business Development Lead',
    department: 'GROWTH',
    location: 'Pune',
    type: 'Full-Time',
    description: 'Identify and close new business opportunities, build strategic partnerships, and drive revenue growth across our solutions and training verticals.',
    requirements: ['2+ years in B2B sales or BD', 'Strong communication & presentation skills', 'Understanding of tech services market', 'CRM & pipeline management experience'],
  },
  {
    id: 'fe-05',
    title: 'Technical Content Writer',
    department: 'MARKETING',
    location: 'Remote',
    type: 'Contract / Part-Time',
    description: 'Create compelling technical blog posts, case studies, product documentation, and thought leadership content that positions TantrShell as an industry authority.',
    requirements: ['Strong technical writing portfolio', 'Understanding of SaaS and tech landscape', 'SEO content optimization skills', 'Ability to simplify complex topics'],
  },
  {
    id: 'fe-06',
    title: 'DevOps Engineer',
    department: 'ENGINEERING',
    location: 'Remote / Pune',
    type: 'Full-Time',
    description: 'Build and maintain our CI/CD pipelines, infrastructure automation, monitoring, and deployment workflows across multiple client environments.',
    requirements: ['Docker, Kubernetes experience', 'CI/CD pipeline design (GitHub Actions, Jenkins)', 'Cloud infrastructure (AWS/GCP/Azure)', 'Infrastructure as Code (Terraform/Pulumi)'],
  },
];

export default function CareersPage() {
  const [expandedJob, setExpandedJob] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.career-perk, .job-listing-wrapper, .careers-intro').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const handleApply = (e, jobTitle) => {
    e.preventDefault();
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSchCp81DoQKwb-acCPEHUHxqRkkLAYayAcyiMLj33FlDRuE6A/viewform?usp=publish-editor', '_blank');
  };

  return (
    <section id="careers" className="section section-careers" style={{ paddingTop: '8rem' }}>
      <SectionHeader tag="TEAM // JOIN US" title="BUILD THE" accentWord="FUTURE" desc="We're looking for passionate builders who thrive on challenges and want to create technology that transforms businesses." />

      {/* Culture Intro */}
      <div className="careers-intro" data-animate="">
        <div className="careers-intro-inner">
          <div className="careers-intro-text">
            <h3>We Build <span className="accent">Differently</span></h3>
            <p>
              At TantrShell, we're not just writing code — we're engineering the backbone of businesses.
              Our team is small, nimble, and deeply passionate about creating technology that makes a real impact.
              We value ownership, curiosity, and the kind of craftsmanship that turns good products into great ones.
            </p>
          </div>
          <div className="careers-stats">
            <div className="careers-stat">
              <span className="careers-stat-number">15<span className="accent">+</span></span>
              <span className="careers-stat-label mono">TEAM MEMBERS</span>
            </div>
            <div className="careers-stat">
              <span className="careers-stat-number">4<span className="accent">+</span></span>
              <span className="careers-stat-label mono">COUNTRIES</span>
            </div>
            <div className="careers-stat">
              <span className="careers-stat-number">90<span className="accent">%</span></span>
              <span className="careers-stat-label mono">REMOTE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Perks */}
      <div className="careers-perks-section">
        <h3 className="careers-section-title">Why <span className="accent">TantrShell</span>?</h3>
        <div className="careers-perks-grid">
          {perks.map((perk, i) => (
            <div key={i} className="career-perk" data-animate="" style={{ transitionDelay: `${i * 0.08}s` }}>
              <span className="career-perk-icon">{perk.icon}</span>
              <h4>{perk.title}</h4>
              <p>{perk.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Open Positions */}
      <div className="careers-openings-section">
        <h3 className="careers-section-title">Open <span className="accent">Positions</span></h3>
        <div className="job-listings">
          {openings.map((job, i) => (
            <div key={job.id} className="job-listing-wrapper" style={{ transitionDelay: `${i * 0.06}s` }}>
              <div
                className={`job-listing ${expandedJob === job.id ? 'expanded' : ''}`}
              >
                <div className="job-listing-header" onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}>
                  <div className="job-listing-info">
                    <span className="job-department mono">{job.department}</span>
                    <h4 className="job-title">{job.title}</h4>
                    <div className="job-meta">
                      <span className="job-meta-item mono">{job.location}</span>
                      <span className="job-meta-dot">·</span>
                      <span className="job-meta-item mono">{job.type}</span>
                    </div>
                  </div>
                  <span className="job-expand-icon">{expandedJob === job.id ? '−' : '+'}</span>
                </div>
                {expandedJob === job.id && (
                  <div className="job-listing-details">
                    <p className="job-description">{job.description}</p>
                    <div className="job-requirements">
                      <span className="job-requirements-label mono">REQUIREMENTS</span>
                      <ul>
                        {job.requirements.map((req, j) => (
                          <li key={j}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    <a href="#" onClick={(e) => handleApply(e, job.title)} className="btn btn-primary btn-small">
                      APPLY NOW →
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* General Application CTA */}
      <div className="careers-cta">
        <h3>Don't see your role?</h3>
        <p>We're always looking for exceptional talent. Send us your portfolio and tell us how you'd contribute.</p>
        <a href="#" onClick={(e) => handleApply(e, '')} className="btn btn-ghost">
          SEND OPEN APPLICATION →
        </a>
      </div>
    </section>
  );
}
