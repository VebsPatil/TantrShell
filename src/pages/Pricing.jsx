import { useState } from 'react';
import { Link } from 'react-router-dom';
import MathCanvas from '../components/MathCanvas';
import { useScrollReveal } from '../hooks/useScrollAnimation';
import './Pricing.css';

const Pricing = () => {
  const [annual, setAnnual] = useState(false);

  const plans = [
    {
      name: 'Starter',
      desc: 'For small businesses getting started online.',
      monthly: 49,
      annually: 39,
      features: [
        'Website Hosting',
        'Basic Maintenance',
        'SSL Certificate',
        'Monthly Backups',
        'Email Support',
        '1 Feature Update / month',
      ],
    },
    {
      name: 'Growth',
      desc: 'For growing businesses that need more.',
      monthly: 149,
      annually: 119,
      popular: true,
      features: [
        'Everything in Starter',
        'Priority Support',
        'Weekly Backups',
        'Feature Upgrades',
        'Analytics Dashboard',
        'Performance Monitoring',
        '3 Feature Updates / month',
        'A/B Testing Tools',
      ],
    },
    {
      name: 'Enterprise',
      desc: 'For businesses that need a full tech team.',
      monthly: 499,
      annually: 399,
      features: [
        'Everything in Growth',
        'Dedicated Account Manager',
        'Custom Development',
        'Daily Backups',
        'Advanced Security',
        'SLA Guarantee',
        'Unlimited Updates',
        'White-Label Options',
        'API Access',
        'On-site Support',
      ],
    },
  ];

  const faqs = [
    { q: 'Can I switch plans later?', a: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.' },
    { q: 'Do you offer custom development separately?', a: 'Absolutely. Custom projects are quoted separately based on scope and complexity. Contact us for a free estimate.' },
    { q: 'What payment methods do you accept?', a: 'We accept credit/debit cards, bank transfers, UPI, and net banking. Enterprise clients can also pay via invoice.' },
    { q: 'Is there a setup fee?', a: 'No setup fees for any plan. You only pay the monthly or annual subscription.' },
    { q: 'Can I cancel anytime?', a: 'Yes, no lock-in contracts. You can cancel your subscription at any time from your dashboard.' },
    { q: 'Do you offer discounts for NGOs or startups?', a: 'Yes! We offer up to 30% discount for registered NGOs and early-stage startups. Contact us for details.' },
  ];

  const [faqOpen, setFaqOpen] = useState(null);
  const [plansRef, plansVisible] = useScrollReveal();
  const [faqRef, faqVisible] = useScrollReveal();

  return (
    <div className="page-enter">
      <section className="pricing-hero" id="pricing-hero">
        <MathCanvas variant="sinemesh" opacity={0.08} />
        <div className="container pricing-hero-content">
          <span className="badge">Pricing</span>
          <h1>Simple, Transparent<br /><span className="hero-accent">Pricing</span></h1>
          <p>No hidden fees. No surprises. Choose the plan that fits your business.</p>
        </div>
      </section>

      <section className="pricing-plans-section section" id="pricing-plans" ref={plansRef}>
        <div className="container">
          <div className="billing-toggle">
            <span className={!annual ? 'active' : ''}>Monthly</span>
            <button
              className={`toggle-btn ${annual ? 'active' : ''}`}
              onClick={() => setAnnual(!annual)}
              id="billing-toggle"
              aria-label="Toggle billing period"
            >
              <span className="toggle-knob"></span>
            </button>
            <span className={annual ? 'active' : ''}>
              Annual <span className="save-badge">Save 20%</span>
            </span>
          </div>

          <div className={`pricing-grid grid grid-3 ${plansVisible ? 'visible' : ''}`}>
            {plans.map((plan, i) => (
              <div key={i} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && <span className="popular-badge">Most Popular</span>}
                <h3>{plan.name}</h3>
                <p className="plan-desc">{plan.desc}</p>
                <div className="plan-price">
                  <span className="currency">$</span>
                  <span className="amount">{annual ? plan.annually : plan.monthly}</span>
                  <span className="period">/month</span>
                </div>
                <ul className="plan-features">
                  {plan.features.map((f, j) => (
                    <li key={j}><span className="check-icon">✓</span> {f}</li>
                  ))}
                </ul>
                <Link to="/contact" className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline-orange'} plan-btn`}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="comparison-section section" id="comparison">
        <div className="container">
          <div className="section-header">
            <span className="badge">Compare</span>
            <h2>Feature Comparison</h2>
          </div>
          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Starter</th>
                  <th className="highlight-col">Growth</th>
                  <th>Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Website Hosting', '✓', '✓', '✓'],
                  ['SSL Certificate', '✓', '✓', '✓'],
                  ['Backups', 'Monthly', 'Weekly', 'Daily'],
                  ['Feature Updates', '1/month', '3/month', 'Unlimited'],
                  ['Support', 'Email', 'Priority', 'Dedicated'],
                  ['Analytics', '—', '✓', '✓'],
                  ['Custom Dev', '—', '—', '✓'],
                  ['White-Label', '—', '—', '✓'],
                  ['API Access', '—', '—', '✓'],
                  ['SLA', '—', '—', '✓'],
                ].map(([feature, ...vals], i) => (
                  <tr key={i}>
                    <td>{feature}</td>
                    {vals.map((v, j) => (
                      <td key={j} className={j === 1 ? 'highlight-col' : ''}>{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section section" id="faq" ref={faqRef}>
        <div className="container">
          <div className="section-header">
            <span className="badge">FAQ</span>
            <h2>Frequently Asked Questions</h2>
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

      {/* CTA */}
      <section className="pricing-cta section" id="pricing-cta">
        <div className="container">
          <div className="cta-card">
            <MathCanvas variant="lissajous" opacity={0.06} />
            <div className="cta-content">
              <h2>Need Something Custom?</h2>
              <p>Book a free consultation to discuss your project requirements and get a personalized quote.</p>
              <Link to="/contact" className="btn btn-primary btn-lg">Book Free Consultation</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
