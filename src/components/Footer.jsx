import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-wave">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z" fill="var(--brown)" />
        </svg>
      </div>
      <div className="footer-body">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <img src="/logo.png" alt="TantrShell" className="logo-img footer-logo-img" />
                <span className="logo-text">Tantr<span className="logo-accent">Shell</span></span>
              </div>
              <p>Smart tech products and training for businesses that want to grow faster without the complexity.</p>
              <div className="footer-social">
                <a href="#" aria-label="Twitter" className="social-link">𝕏</a>
                <a href="#" aria-label="LinkedIn" className="social-link">in</a>
                <a href="#" aria-label="GitHub" className="social-link">⌨</a>
                <a href="#" aria-label="Instagram" className="social-link">◻</a>
              </div>
            </div>

            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/training">Training</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Solutions</h4>
              <ul>
                <li><Link to="/products">Prebuilt Products</Link></li>
                <li><Link to="/services">AI Integration</Link></li>
                <li><Link to="/services">Automation</Link></li>
                <li><Link to="/services">Consulting</Link></li>
                <li><Link to="/products">White-Label SaaS</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Stay Updated</h4>
              <p className="footer-newsletter-text">Get the latest on tech solutions and training programs.</p>
              <form className="footer-newsletter" onSubmit={e => e.preventDefault()}>
                <input type="email" placeholder="Your email" aria-label="Email for newsletter" id="newsletter-email" />
                <button type="submit" className="btn btn-primary" id="newsletter-submit">→</button>
              </form>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2026 TantrShell. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
