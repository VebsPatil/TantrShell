import React, { useState, useEffect } from 'react';

export default function ContactPage() {
  const [btnText, setBtnText] = useState('LAUNCH PROJECT →');
  const [btnStyle, setBtnStyle] = useState({});

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setBtnText('SENDING...');
    setBtnStyle({ opacity: 0.7 });

    setTimeout(() => {
      setBtnText('MESSAGE SENT ✓');
      setBtnStyle({ background: '#00ff88', color: '#0A0A0F' });

      setTimeout(() => {
        setBtnText('LAUNCH PROJECT →');
        setBtnStyle({});
        e.target.reset();
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="section section-contact" style={{ paddingTop: '8rem' }}>
      <div className="contact-bg-text">TANTRSHELL</div>
      <div className="contact-content visible">
        <span className="section-tag mono">05 // LET'S BUILD</span>
        <h2 className="contact-title">READY TO<br /><span className="accent">BUILD?</span></h2>
        <p className="contact-desc">Tell us about your project. Let's create something powerful together.</p>
        <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label className="mono">NAME</label>
              <input type="text" id="contact-name" placeholder="Your name" required />
            </div>
            <div className="form-group">
              <label className="mono">EMAIL</label>
              <input type="email" id="contact-email" placeholder="your@email.com" required />
            </div>
          </div>
          <div className="form-group">
            <label className="mono">PROJECT TYPE</label>
            <select id="contact-type">
              <option value="">Select a service</option>
              <option value="tech-solution">Business Tech Solution</option>
              <option value="prebuilt">Prebuilt Product</option>
              <option value="training">Industry Training</option>
              <option value="consulting">Digital Consulting</option>
              <option value="ai-integration">AI Integration</option>
              <option value="whitelabel">White-Label SaaS</option>
            </select>
          </div>
          <div className="form-group">
            <label className="mono">MESSAGE</label>
            <textarea id="contact-message" placeholder="Tell us about your project..." rows="4"></textarea>
          </div>
          <button type="submit" className="btn btn-primary btn-large" id="contact-submit" style={btnStyle}>
            {btnText}
          </button>
        </form>
        <div className="contact-info mono">
          <span>STATUS: ONLINE</span>
          <span className="accent">●</span>
          <span>RESPONSE: &lt; 24H</span>
          <span className="accent">●</span>
          <span>hello@tantrshell.com</span>
        </div>
      </div>
    </section>
  );
}
