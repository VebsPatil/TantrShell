import { Link } from 'react-router-dom';
import MathCanvas from '../components/MathCanvas';
import { useAnimatedCounter, useScrollReveal, useStaggerReveal } from '../hooks/useScrollAnimation';
import './Home.css';

const Home = () => {
  const [statsRef1, count1] = useAnimatedCounter(500, 2000);
  const [statsRef2, count2] = useAnimatedCounter(200, 2000);
  const [statsRef3, count3] = useAnimatedCounter(50, 2000);
  const [statsRef4, count4] = useAnimatedCounter(98, 2000);

  const [featRef, featVisible] = useStaggerReveal(6, 150);
  const [testRef, testVisible] = useScrollReveal();
  const [ctaRef, ctaVisible] = useScrollReveal();

  const features = [
    { icon: '🖥️', title: 'Business Tech Solutions', desc: 'Websites, dashboards, CRMs, ERPs, mobile apps and AI assistants — tailored to your business.' },
    { icon: '🎓', title: 'Industry Training', desc: 'Practical courses in web dev, AI, cloud, cybersecurity and more for teams and individuals.' },
    { icon: '📦', title: 'Prebuilt Products', desc: 'Ready-to-deploy systems for hospitals, schools, e-commerce, HR, billing and beyond.' },
    { icon: '🔧', title: 'Tunable Solutions', desc: 'Customize branding, features, payments, languages and workflows in our prebuilt products.' },
    { icon: '🤖', title: 'AI Integration', desc: 'Smart chatbots, document analysis, lead sorting, auto-replies and voice assistants.' },
    { icon: '⚡', title: 'Business Automation', desc: 'Automate invoices, emails, appointments, onboarding and inventory alerts.' },
  ];

  const testimonials = [
    { name: 'Arjun Mehta', role: 'Founder, ClinicPro', text: 'TantrShell delivered our hospital management system in 3 weeks. What would have taken months with a traditional agency.' },
    { name: 'Priya Sharma', role: 'CEO, EduLabs', text: 'The training program upskilled our entire dev team. The prebuilt school system was exactly what we needed.' },
    { name: 'Rahul Verma', role: 'CTO, QuickRetail', text: 'Their tunable products saved us 70% on development costs. The customization options are incredible.' },
  ];

  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="hero" id="hero">
        <MathCanvas variant="lissajous" opacity={0.12} />
        <div className="hero-bg-shapes">
          <div className="hero-shape hero-shape-1"></div>
          <div className="hero-shape hero-shape-2"></div>
          <div className="hero-shape hero-shape-3"></div>
        </div>
        <div className="container hero-content">
          <span className="hero-badge">🚀 Next-Gen Tech Partner</span>
          <h1>
            We Solve.<br />
            Your Problems.<br />
            <span className="hero-accent">Built for You.</span>
          </h1>
          <p className="hero-subtitle">
            We build, launch, train, and scale businesses with ready-made digital solutions —
            affordable, fast to deploy, and infinitely customizable.
          </p>
          <div className="hero-ctas">
            <Link to="/services" className="btn btn-primary btn-lg" id="hero-explore">
              Explore Solutions
              <span className="btn-arrow">→</span>
            </Link>
            <Link to="/contact" className="btn btn-secondary btn-lg" id="hero-demo">
              Book a Demo
            </Link>
          </div>
          <div className="hero-trust">
            <span>Trusted by 200+ companies</span>
            <div className="hero-dots">
              {[1, 2, 3, 4, 5].map(i => <span key={i} className="trust-dot" style={{ animationDelay: `${i * 0.2}s` }}></span>)}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section" id="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item" ref={statsRef1}>
              <span className="stat-number">{count1}+</span>
              <span className="stat-label">Projects Delivered</span>
            </div>
            <div className="stat-item" ref={statsRef2}>
              <span className="stat-number">{count2}+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
            <div className="stat-item" ref={statsRef3}>
              <span className="stat-number">{count3}+</span>
              <span className="stat-label">Prebuilt Products</span>
            </div>
            <div className="stat-item" ref={statsRef4}>
              <span className="stat-number">{count4}%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features-section section" id="features">
        <div className="container">
          <div className="section-header">
            <span className="badge">What We Do</span>
            <h2>Complete Technology Partner</h2>
            <p>Everything your business needs to thrive in the digital age — built fast, priced right, and fully customizable.</p>
          </div>
          <div className="features-grid grid grid-3">
            {features.map((f, i) => (
              <div
                key={i}
                ref={featRef(i)}
                className={`card feature-card ${featVisible.has(i) ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="card-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
                <Link to="/services" className="feature-link">Learn more →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="how-section section" id="how-it-works">
        <div className="container">
          <div className="section-header">
            <span className="badge">How It Works</span>
            <h2>From Idea to Launch</h2>
          </div>
          <div className="how-steps">
            {[
              { num: '01', title: 'Consult', desc: 'Tell us what your business needs. We analyze your workflow and identify the right tech stack.' },
              { num: '02', title: 'Choose', desc: 'Pick from our prebuilt products or request a custom solution. We customize it to fit your brand.' },
              { num: '03', title: 'Deploy', desc: 'We launch your solution quickly with training included so your team can hit the ground running.' },
              { num: '04', title: 'Scale', desc: 'Grow with ongoing support, feature upgrades, automation, and performance optimization.' },
            ].map((step, i) => (
              <div key={i} className="how-step">
                <div className="step-number">{step.num}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section section" id="testimonials" ref={testRef}>
        <MathCanvas variant="fourier" opacity={0.06} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-header">
            <span className="badge">Testimonials</span>
            <h2>What Our Clients Say</h2>
          </div>
          <div className={`testimonials-grid grid grid-3 ${testVisible ? 'visible' : ''}`}>
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card" style={{ animationDelay: `${i * 0.2}s` }}>
                <div className="testimonial-stars">{'★'.repeat(5)}</div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{t.name[0]}</div>
                  <div>
                    <span className="author-name">{t.name}</span>
                    <span className="author-role">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section section" id="cta-section" ref={ctaRef}>
        <div className={`container cta-inner ${ctaVisible ? 'visible' : ''}`}>
          <div className="cta-card">
            <MathCanvas variant="fibonacci" opacity={0.08} />
            <div className="cta-content">
              <h2>Ready to Transform Your Business?</h2>
              <p>Join 200+ companies already using TantrShell to build smarter, launch faster, and scale effortlessly.</p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn btn-primary btn-lg">Start Your Project</Link>
                <Link to="/pricing" className="btn btn-outline-orange btn-lg">View Pricing</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
