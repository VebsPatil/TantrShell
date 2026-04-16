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
            <Link to="/training">Training</Link>
            <Link to="/products">Products</Link>
            <Link to="/solutions">Consulting</Link>
          </div>
          <div className="footer-col">
            <span className="footer-col-title mono">COMPANY</span>
            <Link to="/about">About</Link>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer-col">
            <span className="footer-col-title mono">LEGAL</span>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
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
