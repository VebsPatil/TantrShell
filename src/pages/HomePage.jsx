import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import HeroScene from '../components/HeroScene';

export default function HomePage({ loaded }) {
  useEffect(() => {
    if (!loaded) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.to('.hero-top-label', { opacity: 1, y: 0, duration: 0.6 })
      .to('.line-1', { opacity: 1, y: 0, duration: 0.8 }, '-=0.3')
      .to('.line-2', { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
      .to('.line-3', { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
      .to('.hero-subtitle', { opacity: 1, y: 0, duration: 0.6 }, '-=0.3')
      .to('.hero-actions', { opacity: 1, y: 0, duration: 0.6 }, '-=0.2')
      .to('.hero-stats', { opacity: 1, y: 0, duration: 0.6 }, '-=0.2');

    document.querySelectorAll('.stat-number').forEach(counter => {
      const target = parseInt(counter.dataset.count);
      gsap.to(counter, {
        textContent: target, duration: 2, delay: 1.5,
        snap: { textContent: 1 }, ease: 'power2.out',
      });
    });

    // Scroll parallax
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroTitle = document.querySelector('.hero-title');
      if (heroTitle && scrollY < window.innerHeight) {
        heroTitle.style.transform = `translateY(${scrollY * 0.3}px)`;
        heroTitle.style.opacity = 1 - (scrollY / (window.innerHeight * 0.7));
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Reveal observer
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          if (e.target.classList.contains('about-feature')) {
            const idx = Array.from(e.target.parentElement.children).indexOf(e.target);
            e.target.style.transitionDelay = `${idx * 0.1}s`;
          }
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.section-header, .services-grid, .products-categories, .products-grid, .training-content, .contact-content, .about-feature')
      .forEach(el => obs.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      obs.disconnect();
    };
  }, [loaded]);

  return (
    <>
      {/* Hero */}
      <section id="hero" className="section section-hero">
        <HeroScene />
        <div className="hero-content">
          <div className="hero-top-label mono">
            <span className="status-dot"></span>
            VER_1.0_STABLE // DEPLOY_READY
          </div>
          <h1 className="hero-title">
            <span className="hero-line line-1">SMART TECH.</span>
            <span className="hero-line line-2">READY TO</span>
            <span className="hero-line line-3"><span className="accent">DEPLOY.</span></span>
          </h1>
          <p className="hero-subtitle">Build, Launch, Train &amp; Scale with<br />ready-made digital solutions.</p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary" id="hero-cta">LAUNCH PROJECT →</Link>
            <Link to="/solutions" className="btn btn-ghost" id="hero-explore">EXPLORE SERVICES</Link>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number" data-count="50">0</span><span className="accent">+</span>
              <span className="stat-label mono">PREBUILT PRODUCTS</span>
            </div>
            <div className="stat">
              <span className="stat-number" data-count="200">0</span><span className="accent">+</span>
              <span className="stat-label mono">CLIENTS SERVED</span>
            </div>
            <div className="stat">
              <span className="stat-number" data-count="99">0</span><span className="stat-suffix">.9%</span>
              <span className="stat-label mono">UPTIME GUARANTEE</span>
            </div>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <span className="mono">SCROLL TO EXPLORE</span>
          <div className="scroll-arrow">↓</div>
        </div>
        <div className="hero-coords mono">
          <span>LAT: 28.6139° N</span>
          <span>LONG: 77.2090° E</span>
        </div>
      </section>

      {/* Services Preview */}
      <section id="services" className="section section-services">
        <div className="section-header">
          <span className="section-tag mono">01 // WHAT WE BUILD</span>
          <h2 className="section-title">CORE <span className="accent">SERVICES</span></h2>
          <p className="section-desc">Complete technology partner for businesses that don't want to hire a full in-house tech team.</p>
        </div>
        <div className="services-grid">
          <div className="service-card" data-index="01">
            <div className="service-number mono">01</div>
            <div className="service-icon">
              <svg viewBox="0 0 48 48" fill="none" stroke="#FF4D00" strokeWidth="1.5">
                <path d="M8 12L24 4L40 12V36L24 44L8 36V12Z" />
                <path d="M24 4V44M8 12L40 36M40 12L8 36" />
              </svg>
            </div>
            <h3 className="service-title">Business Tech Solutions</h3>
            <p className="service-desc">Websites, dashboards, CRM systems, mobile apps, AI assistants, and internal tools — tailored to your needs.</p>
            <div className="service-tags mono">
              <span>WEBSITES</span><span>CRM</span><span>MOBILE</span><span>AI</span>
            </div>
          </div>
          <div className="service-card" data-index="02">
            <div className="service-number mono">02</div>
            <div className="service-icon">
              <svg viewBox="0 0 48 48" fill="none" stroke="#FF4D00" strokeWidth="1.5">
                <circle cx="24" cy="20" r="12" />
                <path d="M16 36L14 44H34L32 36" />
                <path d="M18 20L22 24L30 16" />
              </svg>
            </div>
            <h3 className="service-title">Industry Training</h3>
            <p className="service-desc">Practical training in web development, AI tools, cloud, cybersecurity, and product management.</p>
            <div className="service-tags mono">
              <span>WEB DEV</span><span>AI/ML</span><span>CLOUD</span><span>SECURITY</span>
            </div>
          </div>
          <div className="service-card" data-index="03">
            <div className="service-number mono">03</div>
            <div className="service-icon">
              <svg viewBox="0 0 48 48" fill="none" stroke="#FF4D00" strokeWidth="1.5">
                <rect x="8" y="8" width="32" height="32" rx="2" />
                <path d="M8 16H40M16 8V40" />
                <circle cx="30" cy="28" r="6" />
                <path d="M34 32L40 38" />
              </svg>
            </div>
            <h3 className="service-title">Prebuilt Projects</h3>
            <p className="service-desc">Ready-to-use project kits — Hospital ERP, School Management, E-Commerce, Job Portal, and more.</p>
            <div className="service-tags mono">
              <span>HEALTHCARE</span><span>EDUCATION</span><span>E-COMMERCE</span>
            </div>
          </div>
          <div className="service-card" data-index="04">
            <div className="service-number mono">04</div>
            <div className="service-icon">
              <svg viewBox="0 0 48 48" fill="none" stroke="#FF4D00" strokeWidth="1.5">
                <path d="M12 8V40M24 14V40M36 4V40" />
                <circle cx="12" cy="28" r="4" fill="#FF4D00" opacity="0.3" />
                <circle cx="24" cy="20" r="4" fill="#FF4D00" opacity="0.3" />
                <circle cx="36" cy="32" r="4" fill="#FF4D00" opacity="0.3" />
              </svg>
            </div>
            <h3 className="service-title">Tunable Products</h3>
            <p className="service-desc">Customizable white-label solutions. Adjust branding, features, payments, languages, and automation flows.</p>
            <div className="service-tags mono">
              <span>WHITE-LABEL</span><span>CUSTOM</span><span>SCALABLE</span>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
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
    </>
  );
}
