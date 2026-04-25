import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ visible }) {
  const [navVisible, setNavVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (visible) setNavVisible(true);
  }, [visible]);

  useEffect(() => {
    let lastScrollY = 0;
    const handleScroll = () => {
      const y = window.scrollY;
      if (y > 100) {
        setNavVisible(y < lastScrollY);
      } else {
        setNavVisible(true);
      }
      lastScrollY = y;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { to: '/solutions', label: 'SOLUTIONS' },
    { to: '/products', label: 'PRODUCTS' },

    { to: '/about', label: 'ABOUT' },
  ];

  return (
    <nav id="main-nav" className={navVisible ? 'visible' : ''}>
      <div className="nav-left">
        <Link to="/" className="nav-logo" id="nav-logo">
          <svg viewBox="0 0 40 40" width="32" height="32" className="logo-icon">
            <polygon points="20,2 38,12 38,28 20,38 2,28 2,12" fill="none" stroke="#FF4D00" strokeWidth="2" />
            <polygon points="20,8 32,14 32,26 20,32 8,26 8,14" fill="none" stroke="#FF4D00" strokeWidth="1.5" opacity="0.6" />
            <circle cx="20" cy="20" r="4" fill="#FF4D00" />
          </svg>
          <span>TANTR<span className="accent">SHELL</span></span>
        </Link>
      </div>
      <div className="nav-center">
        {links.map(l => (
          <Link
            key={l.to}
            to={l.to}
            className={`nav-link${location.pathname === l.to ? ' active' : ''}`}
          >
            {l.label}
          </Link>
        ))}
      </div>
      <div className="nav-right">
        <Link to="/contact" className="nav-cta" id="nav-cta">CONTACT US →</Link>
      </div>
    </nav>
  );
}
