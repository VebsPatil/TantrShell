import { Link } from 'react-router-dom';
import MathCanvas from '../components/MathCanvas';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollAnimation';
import './About.css';

const About = () => {
  const values = [
    { icon: '💡', title: 'Innovation', desc: 'We stay ahead of the curve with cutting-edge technology and creative solutions.' },
    { icon: '💰', title: 'Affordability', desc: 'Enterprise-quality tech at prices that startups and small businesses can afford.' },
    { icon: '🔧', title: 'Customization', desc: 'Every solution is tunable to perfectly match your brand and business needs.' },
    { icon: '🤝', title: 'Partnership', desc: 'We\'re not vendors — we\'re your long-term technology partner invested in your success.' },
  ];

  const team = [
    { name: 'Yash Gupta', role: 'Founder & CEO', emoji: '👨‍💻' },
    { name: 'Ananya Rao', role: 'Head of Engineering', emoji: '👩‍💻' },
    { name: 'Vikram Singh', role: 'Head of Design', emoji: '🎨' },
    { name: 'Neha Patel', role: 'Head of Training', emoji: '📚' },
    { name: 'Arjun Kumar', role: 'Head of Sales', emoji: '📈' },
    { name: 'Meera Joshi', role: 'Head of Operations', emoji: '⚙️' },
  ];

  const timeline = [
    { year: '2024', event: 'TantrShell founded with a vision to democratize technology' },
    { year: '2024', event: 'Launched first 5 prebuilt products' },
    { year: '2025', event: 'Training academy launched — 300+ students enrolled' },
    { year: '2025', event: 'Reached 200+ clients milestone' },
    { year: '2026', event: 'Expanded AI integration services' },
    { year: '2026', event: 'White-label SaaS platform launched' },
  ];

  const customers = [
    '🏥 Clinics & Hospitals', '🎓 Schools & Coaching', '🏭 Small Manufacturers',
    '🍕 Restaurants', '🛍️ Retailers', '💼 Service Providers',
    '🌱 Startups', '🏢 Local Businesses', '🤲 NGOs',
    '👤 Freelancers', '🏗️ Agencies', '🏋️ Fitness Centers',
  ];

  const [valRef, valVisible] = useStaggerReveal(values.length, 150);
  const [teamRef, teamVisible] = useStaggerReveal(team.length, 100);
  const [timeRef, timeVisible] = useScrollReveal();

  return (
    <div className="page-enter">
      <section className="about-hero" id="about-hero">
        <MathCanvas variant="lissajous" opacity={0.1} />
        <div className="container about-hero-content">
          <span className="badge">About Us</span>
          <h1>Building the Future<br /><span className="hero-accent">Together</span></h1>
          <p>We believe every business deserves access to world-class technology — fast, affordable, and customizable.</p>
        </div>
      </section>

      {/* Mission */}
      <section className="mission-section section" id="mission">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-card">
              <h3>Our Mission</h3>
              <p>To make technology affordable, fast to deploy, and easy to customize for startups, small businesses, and growing companies worldwide.</p>
            </div>
            <div className="mission-card">
              <h3>Our Vision</h3>
              <p>To become the go-to technology partner for businesses that want to grow without the complexity of building an in-house tech team.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section section" id="values">
        <div className="container">
          <div className="section-header">
            <span className="badge">Our Values</span>
            <h2>What Drives Us</h2>
          </div>
          <div className="grid grid-4">
            {values.map((v, i) => (
              <div
                key={i}
                ref={valRef(i)}
                className={`card value-card ${valVisible.has(i) ? 'visible' : ''}`}
              >
                <div className="card-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="team-section section" id="team">
        <div className="container">
          <div className="section-header">
            <span className="badge">Team</span>
            <h2>Meet the People Behind TantrShell</h2>
          </div>
          <div className="team-grid grid grid-3">
            {team.map((t, i) => (
              <div
                key={i}
                ref={teamRef(i)}
                className={`team-card ${teamVisible.has(i) ? 'visible' : ''}`}
              >
                <div className="team-avatar">{t.emoji}</div>
                <h3>{t.name}</h3>
                <p>{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline-section section" id="timeline" ref={timeRef}>
        <div className="container">
          <div className="section-header">
            <span className="badge">Journey</span>
            <h2>Our Story So Far</h2>
          </div>
          <div className={`timeline ${timeVisible ? 'visible' : ''}`}>
            {timeline.map((t, i) => (
              <div key={i} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-content">
                  <span className="timeline-year">{t.year}</span>
                  <p>{t.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Customers */}
      <section className="customers-section section" id="customers">
        <div className="container text-center">
          <div className="section-header">
            <span className="badge">Who We Serve</span>
            <h2>Our Target Customers</h2>
          </div>
          <div className="customers-grid">
            {customers.map((c, i) => (
              <span key={i} className="customer-tag">{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta section">
        <div className="container">
          <div className="cta-card">
            <MathCanvas variant="fibonacci" opacity={0.06} />
            <div className="cta-content">
              <h2>Want to Join Our Journey?</h2>
              <p>Whether you're a client, partner, or future team member — we'd love to hear from you.</p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn btn-primary btn-lg">Get in Touch</Link>
                <Link to="/training" className="btn btn-outline-orange btn-lg">Join Training</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
