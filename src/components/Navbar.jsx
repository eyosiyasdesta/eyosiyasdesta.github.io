import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';

export default function Navbar({ navLinks }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="header-inner page-width">
        <Logo />

        {/* Desktop Nav */}
        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a key={link.number} href={link.href} className="nav-link">
              <span className="nav-num">{link.number}</span>
              <span className="nav-label">{link.label}</span>
            </a>
          ))}
          <a href="#contact" className="nav-cta-btn">
            Get in touch <ArrowUpRight size={14} />
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="menu-button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="mobile-nav-drawer">
          <div className="mobile-nav-links">
            {navLinks.map((link) => (
              <a
                key={link.number}
                href={link.href}
                className="mobile-nav-link"
                onClick={() => setIsOpen(false)}
              >
                <span className="mobile-nav-num">{link.number}</span>
                <span className="mobile-nav-label">{link.label}</span>
              </a>
            ))}
            <a
              href="#contact"
              className="button button-primary mobile-cta"
              onClick={() => setIsOpen(false)}
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
