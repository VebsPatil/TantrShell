import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

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
          <span>hello@tantrshell.com</span>
        </div>
      </div>
    </section>
  );
}
