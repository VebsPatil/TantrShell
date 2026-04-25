import React, { useEffect } from 'react';
import { SectionHeader } from '../components/SectionHeader';

const cookieTypes = [
  {
    name: 'Essential Cookies',
    description: 'These cookies are strictly necessary for the website to function and cannot be switched off. They are usually set in response to actions you take, such as setting your privacy preferences, logging in, or filling in forms.',
    examples: ['Session management', 'Security tokens', 'Load balancing', 'Cookie consent preferences'],
    retention: 'Session — Expires when browser closes',
    required: true,
  },
  {
    name: 'Performance Cookies',
    description: 'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us understand which pages are the most and least popular and see how visitors move around the site.',
    examples: ['Google Analytics', 'Page load times', 'Error reporting', 'A/B testing'],
    retention: 'Up to 2 years',
    required: false,
  },
  {
    name: 'Functional Cookies',
    description: 'These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.',
    examples: ['Language preferences', 'Region/timezone settings', 'User interface customization', 'Live chat services'],
    retention: 'Up to 1 year',
    required: false,
  },
  {
    name: 'Marketing Cookies',
    description: 'These cookies may be set through our site by our advertising partners. They may be used to build a profile of your interests and show you relevant advertisements on other sites.',
    examples: ['Retargeting campaigns', 'Social media pixels', 'Conversion tracking', 'Interest-based advertising'],
    retention: 'Up to 2 years',
    required: false,
  },
];

const sections = [
  {
    title: 'What Are Cookies?',
    text: 'Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently, provide analytical information, and help deliver personalized content and advertisements.'
  },
  {
    title: 'How We Use Cookies',
    text: 'TantrShell uses cookies to enhance your browsing experience, analyze website traffic, personalize content, and enable certain features. We use both first-party cookies (set by us) and third-party cookies (set by our partners and service providers).'
  },
  {
    title: 'Managing Your Preferences',
    text: 'Most web browsers allow you to control cookies through their settings. You can set your browser to refuse all cookies, accept only certain cookies, or alert you when a cookie is being set. Note that disabling essential cookies may affect the functionality of our website.'
  },
  {
    title: 'Updates to This Policy',
    text: 'We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our data practices. We encourage you to review this page periodically for the latest information on our cookie practices.'
  },
];

export default function CookiePolicyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.legal-section, .cookie-card').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="cookie-policy" className="section section-legal" style={{ paddingTop: '8rem' }}>
      <SectionHeader tag="LEGAL // COOKIES" title="COOKIE" accentWord="POLICY" desc="Last updated: April 2026 — This policy explains how TantrShell uses cookies and similar tracking technologies." />

      <div className="legal-container">
        {/* General sections */}
        {sections.slice(0, 2).map((section, i) => (
          <div key={i} className="legal-section" data-animate="">
            <div className="legal-section-header">
              <span className="legal-section-number mono">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="legal-section-title">{section.title}</h3>
            </div>
            <div className="legal-items">
              <div className="legal-item">
                <p className="legal-item-text">{section.text}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Cookie types grid */}
        <div className="legal-section" data-animate="">
          <div className="legal-section-header">
            <span className="legal-section-number mono">03</span>
            <h3 className="legal-section-title">Types of Cookies We Use</h3>
          </div>
          <div className="cookie-grid">
            {cookieTypes.map((cookie, i) => (
              <div key={i} className="cookie-card" data-animate="">
                <div className="cookie-card-header">
                  <h4 className="cookie-card-title">{cookie.name}</h4>
                  <span className={`cookie-badge mono ${cookie.required ? 'required' : 'optional'}`}>
                    {cookie.required ? 'REQUIRED' : 'OPTIONAL'}
                  </span>
                </div>
                <p className="cookie-card-desc">{cookie.description}</p>
                <div className="cookie-examples">
                  <span className="cookie-examples-label mono">EXAMPLES</span>
                  <div className="cookie-tags">
                    {cookie.examples.map((ex, j) => (
                      <span key={j} className="cookie-tag mono">{ex}</span>
                    ))}
                  </div>
                </div>
                <div className="cookie-retention">
                  <span className="cookie-retention-label mono">RETENTION</span>
                  <span className="cookie-retention-value">{cookie.retention}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Remaining sections */}
        {sections.slice(2).map((section, i) => (
          <div key={i} className="legal-section" data-animate="">
            <div className="legal-section-header">
              <span className="legal-section-number mono">{String(i + 4).padStart(2, '0')}</span>
              <h3 className="legal-section-title">{section.title}</h3>
            </div>
            <div className="legal-items">
              <div className="legal-item">
                <p className="legal-item-text">{section.text}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Contact */}
        <div className="legal-section" data-animate="">
          <div className="legal-section-header">
            <span className="legal-section-number mono">06</span>
            <h3 className="legal-section-title">Questions?</h3>
          </div>
          <div className="legal-items">
            <div className="legal-item">
              <p className="legal-item-text">
                For questions about our cookie practices, contact us at{' '}
                <a href="mailto:privacy@tantrshell.com" className="legal-link">privacy@tantrshell.com</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
