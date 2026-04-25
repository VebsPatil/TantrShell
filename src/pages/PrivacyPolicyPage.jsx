import React, { useEffect } from 'react';
import { SectionHeader } from '../components/SectionHeader';

const sections = [
  {
    title: 'Information We Collect',
    items: [
      { subtitle: 'Personal Information', text: 'When you contact us, subscribe to our newsletter, or use our services, we may collect your name, email address, phone number, company name, and billing information.' },
      { subtitle: 'Usage Data', text: 'We automatically collect information about how you interact with our website and services, including IP address, browser type, pages visited, time spent, and referring URLs.' },
      { subtitle: 'Cookies & Tracking', text: 'We use cookies and similar technologies to enhance your experience, analyze traffic, and personalize content. See our Cookie Policy for full details.' },
    ]
  },
  {
    title: 'How We Use Your Information',
    items: [
      { subtitle: 'Service Delivery', text: 'To provide, maintain, and improve our tech solutions, training programs, and products you have requested or purchased.' },
      { subtitle: 'Communication', text: 'To respond to your inquiries, send project updates, share relevant industry insights, and notify you about changes to our services.' },
      { subtitle: 'Analytics & Improvement', text: 'To understand usage patterns, optimize our website performance, and develop new features that better serve our clients.' },
      { subtitle: 'Legal Compliance', text: 'To comply with applicable laws, regulations, and legal processes, and to protect our rights and the rights of our users.' },
    ]
  },
  {
    title: 'Data Sharing & Disclosure',
    items: [
      { subtitle: 'Third-Party Service Providers', text: 'We may share data with trusted partners who assist us in operating our website, conducting business, or servicing you — provided they agree to keep this information confidential.' },
      { subtitle: 'Legal Requirements', text: 'We may disclose your information when required by law, subpoena, or other legal process, or when we believe disclosure is necessary to protect our rights or safety.' },
      { subtitle: 'Business Transfers', text: 'In the event of a merger, acquisition, or sale of assets, your personal information may be transferred as part of that transaction.' },
    ]
  },
  {
    title: 'Data Security',
    items: [
      { subtitle: 'Encryption', text: 'All data transmitted between your browser and our servers is encrypted using industry-standard TLS/SSL protocols.' },
      { subtitle: 'Access Controls', text: 'We implement strict access controls and authentication mechanisms to ensure only authorized personnel can access personal data.' },
      { subtitle: 'Regular Audits', text: 'We conduct periodic security assessments and vulnerability testing to maintain the integrity of our systems.' },
    ]
  },
  {
    title: 'Your Rights',
    items: [
      { subtitle: 'Access & Portability', text: 'You have the right to request a copy of the personal data we hold about you in a structured, commonly used format.' },
      { subtitle: 'Correction & Deletion', text: 'You may request correction of inaccurate data or deletion of your personal information, subject to legal retention requirements.' },
      { subtitle: 'Opt-Out', text: 'You can unsubscribe from marketing communications at any time by clicking the unsubscribe link in our emails or contacting us directly.' },
    ]
  },
];

export default function PrivacyPolicyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.legal-section').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="privacy-policy" className="section section-legal" style={{ paddingTop: '8rem' }}>
      <SectionHeader tag="LEGAL // PRIVACY" title="PRIVACY" accentWord="POLICY" desc="Last updated: April 2026 — Your privacy matters to us. This policy explains how TantrShell collects, uses, and protects your information." />

      <div className="legal-container">
        {sections.map((section, i) => (
          <div key={i} className="legal-section" data-animate="">
            <div className="legal-section-header">
              <span className="legal-section-number mono">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="legal-section-title">{section.title}</h3>
            </div>
            <div className="legal-items">
              {section.items.map((item, j) => (
                <div key={j} className="legal-item">
                  <h4 className="legal-item-subtitle">{item.subtitle}</h4>
                  <p className="legal-item-text">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="legal-section" data-animate="">
          <div className="legal-section-header">
            <span className="legal-section-number mono">06</span>
            <h3 className="legal-section-title">Contact Us</h3>
          </div>
          <div className="legal-items">
            <div className="legal-item">
              <p className="legal-item-text">
                If you have any questions about this Privacy Policy or our data practices, please contact us at{' '}
                <a href="mailto:privacy@tantrshell.com" className="legal-link">privacy@tantrshell.com</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
