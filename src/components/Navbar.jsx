import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Navbar({ navLinks }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // If user lands at the top of the page but URL has a lingering hash like #contact, clean it
    if (window.scrollY < 100 && window.location.hash) {
      history.replaceState(null, '', window.location.pathname);
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (window.scrollY < 120) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // IntersectionObserver to accurately track active section
    const sectionIds = ['home', 'about', 'projects', 'toolkit', 'contact'];
    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observerCallback = (entries) => {
      // If at top, always prefer home
      if (window.scrollY < 120) {
        setActiveSection('home');
        return;
      }

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0
    });

    sectionElements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'site-header-scrolled' : ''}`}>
      <div className="site-header-inner page-width">
        <Logo />

        {/* Desktop Nav */}
        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.number}
                href={link.href}
                className={`nav-link ${isActive ? 'is-active' : ''}`}
                onClick={() => setActiveSection(sectionId)}
              >
                <span className="nav-number">{link.number}</span>
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="menu-button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="mobile-nav">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.number}
                href={link.href}
                className={`mobile-nav-link ${isActive ? 'is-active' : ''}`}
                onClick={() => {
                  setActiveSection(sectionId);
                  setIsOpen(false);
                }}
              >
                <span className="mobile-nav-num">{link.number}</span>
                {link.label}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}
