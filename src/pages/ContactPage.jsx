import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import SEOHead from '../components/SEOHead';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function ContactPage() {
  const formRef = useRef(null);
  const [btnText, setBtnText] = useState('LAUNCH PROJECT →');
  const [btnStyle, setBtnStyle] = useState({});
  const [sending, setSending] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;

    setSending(true);
    setBtnText('SENDING...');
    setBtnStyle({ opacity: 0.7 });

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );

      // Success
      setBtnText('MESSAGE SENT ✓');
      setBtnStyle({ background: '#00ff88', color: '#0A0A0F' });
      formRef.current.reset();

      setTimeout(() => {
        setBtnText('LAUNCH PROJECT →');
        setBtnStyle({});
        setSending(false);
      }, 3000);

    } catch (error) {
      console.error('EmailJS Error:', error);
      setBtnText('FAILED — TRY AGAIN');
      setBtnStyle({ background: '#ff4444', color: '#fff' });

      setTimeout(() => {
        setBtnText('LAUNCH PROJECT →');
        setBtnStyle({});
        setSending(false);
      }, 3000);
    }
  };

  return (
    <section id="contact" className="section section-contact" style={{ paddingTop: '8rem' }}>
      <SEOHead
        title="Contact Us — Start Your Project with TantrShell"
        description="Get in touch with TantrShell to launch your next tech project. We build custom software, ERP systems, AI bots, and more. Response time under 24 hours."
        keywords="contact TantrShell, hire software developers India, project inquiry, tech consultation, business automation quote, custom software quote, Pune software company contact"
        canonical="/contact"
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://tantrshell.online/" },
              { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://tantrshell.online/contact" }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact TantrShell",
            "description": "Reach out to start your project or get a free consultation.",
            "url": "https://tantrshell.online/contact"
          }
        ]}
      />
      <div className="contact-bg-text">TANTRSHELL</div>
      <div className="contact-content visible">
        <span className="section-tag mono">05 // LET'S BUILD</span>
        <h2 className="contact-title">READY TO<br /><span className="accent">BUILD?</span></h2>
        <p className="contact-desc">Tell us about your project. Let's create something powerful together.</p>
        <form ref={formRef} id="contact-form" className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label className="mono">NAME</label>
              <input type="text" name="from_name" placeholder="Your name" required />
            </div>
            <div className="form-group">
              <label className="mono">EMAIL</label>
              <input type="email" name="from_email" placeholder="your@email.com" required />
            </div>
          </div>
          <div className="form-group">
            <label className="mono">PROJECT TYPE</label>
            <select name="project_type">
              <option value="">Select a service</option>
              <option value="Business Tech Solution">Business Tech Solution</option>
              <option value="Prebuilt Product">Prebuilt Product</option>
              <option value="Industry Training">Industry Training</option>
              <option value="Digital Consulting">Digital Consulting</option>
              <option value="AI Integration">AI Integration</option>
              <option value="White-Label SaaS">White-Label SaaS</option>
            </select>
          </div>
          <div className="form-group">
            <label className="mono">MESSAGE</label>
            <textarea name="message" placeholder="Tell us about your project..." rows="4"></textarea>
          </div>
          <button type="submit" className="btn btn-primary btn-large" id="contact-submit" style={btnStyle} disabled={sending}>
            {btnText}
          </button>
        </form>
        <div className="contact-info mono">
          <span>STATUS: ONLINE</span>
          <span className="accent">●</span>
          <span>RESPONSE: &lt; 24H</span>
          <span className="accent">●</span>
          <span>hr.tantrshell@gmail.com</span>
        </div>
      </div>
    </section>
  );
}
