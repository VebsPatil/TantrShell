import { Link } from 'react-router-dom';
import MathCanvas from '../components/MathCanvas';
import { useStaggerReveal, useScrollReveal } from '../hooks/useScrollAnimation';
import './Products.css';

const Products = () => {
  const products = [
    { icon: '🏥', name: 'Hospital Management', desc: 'Patient records, appointments, billing, pharmacy & reports.', price: 'From $999' },
    { icon: '🎓', name: 'School Management', desc: 'Admissions, attendance, grades, timetable & parent portal.', price: 'From $799' },
    { icon: '🛒', name: 'E-Commerce Starter', desc: 'Product catalog, cart, payments, orders & admin dashboard.', price: 'From $599' },
    { icon: '💼', name: 'Job Portal', desc: 'Job listings, applications, resume parsing & recruiter panel.', price: 'From $699' },
    { icon: '📅', name: 'Appointment Booking', desc: 'Calendar, bookings, reminders, payments & multi-staff.', price: 'From $499' },
    { icon: '📝', name: 'Billing & Invoicing', desc: 'Invoice generation, payment tracking, GST/tax & reports.', price: 'From $399' },
    { icon: '🍕', name: 'Restaurant Ordering', desc: 'Menu management, online orders, kitchen display & delivery.', price: 'From $599' },
    { icon: '🚚', name: 'Delivery Tracking', desc: 'Real-time tracking, route optimization, driver app & notifications.', price: 'From $699' },
    { icon: '👥', name: 'HR Management', desc: 'Employee records, leave, payroll, attendance & recruitment.', price: 'From $799' },
    { icon: '📦', name: 'Inventory Tracker', desc: 'Stock levels, purchase orders, suppliers & barcode support.', price: 'From $499' },
  ];

  const customizations = [
    { icon: '🎨', label: 'Branding & Colors' },
    { icon: '⚙️', label: 'Feature Toggles' },
    { icon: '💳', label: 'Payment Methods' },
    { icon: '🌍', label: 'Language Support' },
    { icon: '📊', label: 'Dashboard Modules' },
    { icon: '📄', label: 'Report Formats' },
    { icon: '👤', label: 'User Roles' },
    { icon: '🔔', label: 'Notifications' },
    { icon: '🔄', label: 'Automation Flows' },
  ];

  const [prodRef, prodVisible] = useStaggerReveal(products.length, 80);
  const [tunRef, tunVisible] = useScrollReveal();

  return (
    <div className="page-enter">
      <section className="products-hero" id="products-hero">
        <MathCanvas variant="fibonacci" opacity={0.1} />
        <div className="container products-hero-content">
          <span className="badge">Our Products</span>
          <h1>Ready-to-Deploy<br /><span className="hero-accent">Solutions</span></h1>
          <p>Prebuilt, battle-tested products that you can deploy in days, not months. Fully customizable to match your brand.</p>
        </div>
      </section>

      <section className="products-grid-section section" id="products-grid">
        <div className="container">
          <div className="section-header">
            <span className="badge">Product Catalog</span>
            <h2>Prebuilt Products</h2>
            <p>Each product comes with full documentation, support, and customization options.</p>
          </div>
          <div className="products-grid grid grid-2">
            {products.map((p, i) => (
              <div
                key={i}
                ref={prodRef(i)}
                className={`product-card ${prodVisible.has(i) ? 'visible' : ''}`}
              >
                <div className="product-icon">{p.icon}</div>
                <div className="product-info">
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                </div>
                <div className="product-footer">
                  <span className="product-price">{p.price}</span>
                  <Link to="/contact" className="btn btn-outline-orange">Learn More</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tunable-section section" id="tunable" ref={tunRef}>
        <div className="container">
          <div className={`tunable-inner ${tunVisible ? 'visible' : ''}`}>
            <div className="tunable-info">
              <span className="badge">Our Edge</span>
              <h2>Fully Tunable Products</h2>
              <p>Instead of building from zero, customize our prebuilt products to match your exact needs. Change anything — from branding to automation flows.</p>
              <Link to="/contact" className="btn btn-primary btn-lg">Request Customization</Link>
            </div>
            <div className="customization-grid">
              {customizations.map((c, i) => (
                <div key={i} className="custom-item">
                  <span className="custom-icon">{c.icon}</span>
                  <span className="custom-label">{c.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="delivery-section section" id="delivery-options">
        <div className="container text-center">
          <div className="section-header">
            <span className="badge">Delivery Options</span>
            <h2>How You Can Get Our Products</h2>
          </div>
          <div className="delivery-grid grid grid-4">
            {[
              { icon: '📥', title: 'Downloadable', desc: 'Get the source code and deploy on your own infrastructure.' },
              { icon: '🔑', title: 'License-Based', desc: 'Use under license with regular updates and support included.' },
              { icon: '🏷️', title: 'White-Label', desc: 'Rebrand our products as your own and sell to your clients.' },
              { icon: '🎯', title: 'Custom-Tuned', desc: 'We customize and deploy it tailored to your specific needs.' },
            ].map((d, i) => (
              <div key={i} className="card delivery-card">
                <div className="card-icon">{d.icon}</div>
                <h3>{d.title}</h3>
                <p>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
