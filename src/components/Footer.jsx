import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="main-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <span className="footer-logo">TANTR<span className="accent">SHELL</span></span>
          <p className="mono">Smart, customizable tech products.<br />Built for businesses that mean it.</p>
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <span className="footer-col-title mono">SERVICES</span>
            <Link to="/solutions">Tech Solutions</Link>

            <Link to="/products">Products</Link>

          </div>
          <div className="footer-col">
            <span className="footer-col-title mono">COMPANY</span>
            <Link to="/about">About</Link>
            <Link to="/careers">Careers</Link>

            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer-col">
            <span className="footer-col-title mono">LEGAL</span>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/cookies">Cookie Policy</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="mono">© 2026 TANTRSHELL. ALL RIGHTS RESERVED.</span>
        <span className="mono footer-tagline">PERFORMANCE IS CULTURE //</span>
      </div>
    </footer>
  );
}
