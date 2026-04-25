import React, { useEffect } from 'react';
import { SectionHeader } from '../components/SectionHeader';

const sections = [
  {
    title: 'Acceptance of Terms',
    items: [
      { subtitle: 'Agreement', text: 'By accessing or using TantrShell\'s website, products, or services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.' },
      { subtitle: 'Eligibility', text: 'You must be at least 18 years old or have the legal capacity to enter into a binding agreement in your jurisdiction to use our services.' },
      { subtitle: 'Modifications', text: 'We reserve the right to update these terms at any time. Continued use of our services after changes constitutes acceptance of the revised terms.' },
    ]
  },
  {
    title: 'Services Description',
    items: [
      { subtitle: 'Tech Solutions', text: 'TantrShell provides custom software development, AI integration, business automation, and digital transformation consulting services tailored to your business needs.' },
      { subtitle: 'Training Programs', text: 'We offer structured training tracks in web development, AI/ML, mobile development, and other emerging technologies with hands-on project experience.' },
      { subtitle: 'Products', text: 'Our pre-built SaaS products and white-label solutions are provided as-is with regular updates, maintenance, and technical support as specified in your service agreement.' },
    ]
  },
  {
    title: 'Client Responsibilities',
    items: [
      { subtitle: 'Accurate Information', text: 'You agree to provide accurate, current, and complete information when engaging our services, and to update such information as necessary.' },
      { subtitle: 'Authorized Use', text: 'You shall not use our services for any unlawful purpose, to infringe on intellectual property rights, or to transmit harmful or malicious code.' },
      { subtitle: 'Account Security', text: 'You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.' },
      { subtitle: 'Cooperation', text: 'For project-based services, timely provision of required materials, feedback, and approvals is essential for successful delivery.' },
    ]
  },
  {
    title: 'Intellectual Property',
    items: [
      { subtitle: 'TantrShell IP', text: 'All pre-existing intellectual property, frameworks, tools, and methodologies owned by TantrShell remain our exclusive property unless explicitly transferred in writing.' },
      { subtitle: 'Client IP', text: 'Upon full payment, custom work product created specifically for you will be assigned to you, unless otherwise agreed in the project scope.' },
      { subtitle: 'License Grants', text: 'For SaaS products, we grant you a non-exclusive, non-transferable license to use the software for the duration of your subscription.' },
    ]
  },
  {
    title: 'Payment Terms',
    items: [
      { subtitle: 'Invoicing', text: 'Payment terms, milestones, and schedules are outlined in individual project agreements. Standard payment terms are Net 15 from invoice date.' },
      { subtitle: 'Late Payments', text: 'Overdue invoices may accrue interest at 1.5% per month. We reserve the right to suspend services for accounts more than 30 days overdue.' },
      { subtitle: 'Refund Policy', text: 'Refunds for pre-built products are available within 14 days of purchase if the product has not been substantially customized or deployed.' },
    ]
  },
  {
    title: 'Limitation of Liability',
    items: [
      { subtitle: 'Warranty Disclaimer', text: 'Our services are provided "as is" and "as available." We make no warranties, express or implied, regarding the suitability, reliability, or accuracy of our services.' },
      { subtitle: 'Liability Cap', text: 'TantrShell\'s total liability for any claim arising from these terms shall not exceed the amount paid by you for the specific service giving rise to the claim.' },
      { subtitle: 'Exclusions', text: 'We shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities.' },
    ]
  },
  {
    title: 'Termination',
    items: [
      { subtitle: 'By You', text: 'You may terminate your engagement with us at any time by providing written notice. You remain responsible for payment of services rendered prior to termination.' },
      { subtitle: 'By Us', text: 'We may suspend or terminate your access to our services if you violate these terms, fail to make timely payments, or engage in conduct harmful to our business.' },
      { subtitle: 'Survival', text: 'Provisions relating to intellectual property, limitation of liability, and dispute resolution shall survive termination of these terms.' },
    ]
  },
  {
    title: 'Governing Law & Disputes',
    items: [
      { subtitle: 'Jurisdiction', text: 'These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Pune, Maharashtra.' },
      { subtitle: 'Dispute Resolution', text: 'Before initiating legal proceedings, both parties agree to attempt resolution through good-faith negotiation and, if necessary, mediation.' },
    ]
  },
];

export default function TermsOfServicePage() {
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
    <section id="terms-of-service" className="section section-legal" style={{ paddingTop: '8rem' }}>
      <SectionHeader tag="LEGAL // TERMS" title="TERMS OF" accentWord="SERVICE" desc="Last updated: April 2026 — Please read these terms carefully before using TantrShell's services." />

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
      </div>
    </section>
  );
}
