import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { SectionHeader } from '../components/SectionHeader';

const allProducts = [
  { title: 'Hospital Management', desc: 'Complete patient records, appointments, billing, pharmacy, and lab management system.', category: 'healthcare', status: 'READY', price: '$2,499' },
  { title: 'School ERP System', desc: 'Student management, attendance, grading, fee collection, and parent communication portal.', category: 'education', status: 'READY', price: '$1,999' },
  { title: 'E-Commerce Starter', desc: 'Full-featured online store with cart, checkout, payment gateway, and inventory management.', category: 'ecommerce', status: 'POPULAR', price: '$1,499' },
  { title: 'HR Management Suite', desc: 'Employee records, payroll, leave management, performance tracking, and recruitment pipeline.', category: 'hr', status: 'READY', price: '$1,799' },
  { title: 'Booking Engine', desc: 'Multi-service appointment booking with calendar, notifications, and payment integration.', category: 'service', status: 'NEW', price: '$999' },
  { title: 'Billing & Invoicing', desc: 'Automated invoicing, tax calculation, payment tracking, and financial reporting dashboard.', category: 'hr', status: 'READY', price: '$899' },
  { title: 'CRM Mini-Suite', desc: 'Lead management, pipeline tracking, customer communication, and analytics dashboard.', category: 'service', status: 'POPULAR', price: '$1,299' },
  { title: 'AI Support Bot', desc: 'Intelligent chatbot with document analysis, auto-replies, and smart recommendations.', category: 'service', status: 'NEW', price: '$799' },
];

const categories = [
  { key: 'all', label: 'ALL' },
  { key: 'healthcare', label: 'HEALTHCARE' },
  { key: 'education', label: 'EDUCATION' },
  { key: 'ecommerce', label: 'E-COMMERCE' },
  { key: 'hr', label: 'HR & FINANCE' },
  { key: 'service', label: 'SERVICES' },
];

export default function ProductsPage() {
  const [active, setActive] = useState('all');

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const filtered = allProducts.filter(p => active === 'all' || p.category === active);

  const handleCategory = (cat) => {
    setActive(cat);
    // Animate cards in after filter
    setTimeout(() => {
      document.querySelectorAll('.product-card').forEach(card => {
        gsap.from(card, { opacity: 0, y: 20, duration: 0.4, ease: 'power2.out' });
      });
    }, 10);
  };

  return (
    <section id="products" className="section section-products" style={{ paddingTop: '8rem' }}>
      <SectionHeader tag="02 // READY TO DEPLOY" title="PRODUCT" accentWord="CATALOG" desc="50+ prebuilt, production-ready solutions that can be deployed in days, not months." />
      <div className="products-categories visible">
        {categories.map(c => (
          <button key={c.key} className={`category-pill${active === c.key ? ' active' : ''}`} onClick={() => handleCategory(c.key)}>
            {c.label}
          </button>
        ))}
      </div>
      <div className="products-grid visible">
        {filtered.map((p, i) => (
          <div key={i} className="product-card" data-category={p.category}>
            <div className="product-status mono">{p.status}</div>
            <h3 className="product-title">{p.title}</h3>
            <p className="product-desc">{p.desc}</p>
            <div className="product-footer">
              <span className="product-price mono">FROM {p.price}</span>
              <button className="btn btn-small">DEPLOY →</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
