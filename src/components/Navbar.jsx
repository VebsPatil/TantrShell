import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/products', label: 'Products' },
    { to: '/training', label: 'Training' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`} id="main-nav">
      <div className="navbar-inner container">
        <Link to="/" className="navbar-logo" id="nav-logo">
          <img src="/logo.png" alt="TantrShell" className="logo-img" />
          <span className="logo-text">Tantr<span className="logo-accent">Shell</span></span>
        </Link>

        <ul className={`navbar-links ${menuOpen ? 'active' : ''}`} id="nav-links">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`nav-link ${location.pathname === to ? 'nav-link-active' : ''}`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li className="nav-cta-mobile">
            <Link to="/contact" className="btn btn-primary">Get Started</Link>
          </li>
        </ul>

        <Link to="/contact" className="btn btn-primary nav-cta-desktop" id="nav-cta">
          Get Started
        </Link>

        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          id="hamburger-btn"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
