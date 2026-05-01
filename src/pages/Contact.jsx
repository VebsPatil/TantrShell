import { useState } from 'react';
import MathCanvas from '../components/MathCanvas';
import { useScrollReveal } from '../hooks/useScrollAnimation';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', service: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const faqs = [
    { q: 'How quickly can you start a project?', a: 'We can typically start within 1-2 weeks of signing. For urgent projects, we offer expedited timelines.' },
    { q: 'Do you work with international clients?', a: 'Yes! We work with clients globally and can accommodate different time zones for meetings.' },
    { q: 'What if I need changes after delivery?', a: 'All our projects come with a revision period included. We also offer maintenance plans for ongoing changes.' },
    { q: 'Can I see a demo of your prebuilt products?', a: 'Absolutely! Book a demo call and we\'ll walk you through any product live.' },
  ];

  const [faqOpen, setFaqOpen] = useState(null);
  const [formRef, formVisible] = useScrollReveal();
  const [faqRef, faqVisible] = useScrollReveal();

  return (
    <div className="page-enter">
      <section className="contact-hero" id="contact-hero">
        <MathCanvas variant="flowfield" opacity={0.08} />
        <div className="container contact-hero-content">
          <span className="badge">Contact Us</span>
          <h1>Let's Build<br /><span className="hero-accent">Something Great</span></h1>
          <p>Have a project in mind? Need a demo? Or just want to chat about tech? We're here for you.</p>
        </div>
      </section>

      <section className="contact-main section" id="contact-form-section" ref={formRef}>
        <div className="container">
          <div className={`contact-grid ${formVisible ? 'visible' : ''}`}>
            <div className="contact-form-wrapper">
              <h2>Send Us a Message</h2>
              <p>Fill out the form and we'll get back to you within 24 hours.</p>
              
              {submitted ? (
                <div className="success-message">
                  <span className="success-icon">✓</span>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. We'll respond within 24 hours.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} id="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@company.com" required />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone</label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="company">Company</label>
                      <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Your Company" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="service">Service Interested In</label>
                    <select id="service" name="service" value={formData.service} onChange={handleChange}>
                      <option value="">Select a service</option>
                      <option value="custom-dev">Custom Development</option>
                      <option value="prebuilt">Prebuilt Products</option>
                      <option value="training">Training Programs</option>
                      <option value="ai">AI Integration</option>
                      <option value="automation">Business Automation</option>
                      <option value="consulting">Consulting</option>
                      <option value="support">Maintenance & Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project..." rows={5} required></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg submit-btn" id="submit-form">
                    Send Message <span>→</span>
                  </button>
                </form>
              )}
            </div>

            <div className="contact-info-side">
              <div className="info-card">
                <h3>Get in Touch</h3>
                <div className="info-items">
                  <div className="info-item">
                    <span className="info-icon">📧</span>
                    <div>
                      <span className="info-label">Email</span>
                      <span className="info-value">hello@tantrshell.com</span>
                    </div>
                  </div>
                  <div className="info-item">
                    <span className="info-icon">📞</span>
                    <div>
                      <span className="info-label">Phone</span>
                      <span className="info-value">+91 98765 43210</span>
                    </div>
                  </div>
                  <div className="info-item">
                    <span className="info-icon">📍</span>
                    <div>
                      <span className="info-label">Office</span>
                      <span className="info-value">Sector 62, Noida, UP, India</span>
                    </div>
                  </div>
                  <div className="info-item">
                    <span className="info-icon">⏰</span>
                    <div>
                      <span className="info-label">Business Hours</span>
                      <span className="info-value">Mon - Sat, 9:00 AM - 7:00 PM IST</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="info-card social-card">
                <h3>Follow Us</h3>
                <div className="social-links-contact">
                  <a href="#" className="social-link-lg">𝕏 Twitter</a>
                  <a href="#" className="social-link-lg">in LinkedIn</a>
                  <a href="#" className="social-link-lg">⌨ GitHub</a>
                  <a href="#" className="social-link-lg">◻ Instagram</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="contact-faq section" id="contact-faq" ref={faqRef}>
        <div className="container">
          <div className="section-header">
            <span className="badge">FAQ</span>
            <h2>Common Questions</h2>
          </div>
          <div className={`faq-list ${faqVisible ? 'visible' : ''}`}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`faq-item ${faqOpen === i ? 'open' : ''}`}
                onClick={() => setFaqOpen(faqOpen === i ? null : i)}
              >
                <div className="faq-question">
                  <span>{faq.q}</span>
                  <span className="faq-toggle">{faqOpen === i ? '−' : '+'}</span>
                </div>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
