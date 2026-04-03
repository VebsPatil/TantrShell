import { Link } from 'react-router-dom';
import MathCanvas from '../components/MathCanvas';
import { useStaggerReveal } from '../hooks/useScrollAnimation';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: '🖥️',
      title: 'Business Tech Solutions',
      desc: 'We build tailor-made solutions that fit your business perfectly.',
      items: ['Websites & Web Apps', 'Admin Dashboards', 'CRM Systems', 'Booking Systems', 'Inventory Management', 'ERP Modules', 'Mobile Apps', 'Internal Tools', 'AI-Powered Assistants'],
    },
    {
      icon: '🔄',
      title: 'Digital Transformation',
      desc: 'Consulting to identify what to automate, what software you need, and where you\'re losing time or money.',
      items: ['Workflow Analysis', 'Process Automation', 'Software Selection', 'ROI Assessment', 'Digital Strategy', 'Change Management'],
    },
    {
      icon: '🤖',
      title: 'AI Integration',
      desc: 'Add intelligent features to your business operations with cutting-edge AI.',
      items: ['Chatbot Support', 'Document Analysis', 'Lead Sorting', 'Auto-Replies', 'Smart Recommendations', 'Report Generation', 'Voice Assistants'],
    },
    {
      icon: '🛡️',
      title: 'Maintenance & Support',
      desc: 'Keep your systems running smoothly with ongoing technical support.',
      items: ['Bug Fixing', 'Regular Updates', 'Backup Management', 'Security Patching', 'Performance Optimization', '24/7 Monitoring'],
    },
    {
      icon: '⚡',
      title: 'Business Automation',
      desc: 'Automate repetitive tasks and free your team to focus on growth.',
      items: ['Lead Follow-up', 'Invoice Generation', 'Email Campaigns', 'Appointment Reminders', 'Customer Onboarding', 'Inventory Alerts'],
    },
    {
      icon: '🚀',
      title: 'Branding & Launch',
      desc: 'From logo to launch strategy — we help you make a powerful first impression.',
      items: ['Logo Design', 'Landing Pages', 'Pitch Decks', 'Product Demos', 'Onboarding Flows', 'Launch Strategy'],
    },
  ];

  const [setRef, visibleItems] = useStaggerReveal(services.length, 120);

  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="services-hero" id="services-hero">
        <MathCanvas variant="flowfield" opacity={0.08} />
        <div className="container services-hero-content">
          <span className="badge">Our Services</span>
          <h1>End-to-End Tech<br /><span className="hero-accent">Solutions</span></h1>
          <p>From custom development to AI integration — everything your business needs under one roof.</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section section" id="services-grid">
        <div className="container">
          <div className="services-list">
            {services.map((s, i) => (
              <div
                key={i}
                ref={setRef(i)}
                className={`service-block ${visibleItems.has(i) ? 'visible' : ''} ${i % 2 === 1 ? 'reverse' : ''}`}
              >
                <div className="service-info">
                  <div className="service-icon-large">{s.icon}</div>
                  <h2>{s.title}</h2>
                  <p className="service-desc">{s.desc}</p>
                  <ul className="service-items">
                    {s.items.map((item, j) => (
                      <li key={j}>
                        <span className="check-icon">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn btn-primary">Get a Quote</Link>
                </div>
                <div className="service-visual">
                  <div className="service-visual-inner">
                    <div className="sv-circle sv-circle-1"></div>
                    <div className="sv-circle sv-circle-2"></div>
                    <div className="sv-icon">{s.icon}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta section" id="services-cta">
        <div className="container">
          <div className="cta-card">
            <MathCanvas variant="sinemesh" opacity={0.06} />
            <div className="cta-content">
              <h2>Need a Custom Solution?</h2>
              <p>Tell us about your project and get a tailored proposal within 24 hours.</p>
              <Link to="/contact" className="btn btn-primary btn-lg">Talk to Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
