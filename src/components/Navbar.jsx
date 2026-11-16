import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Navbar({ navLinks }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <Logo />

      {/* Desktop Nav */}
      <nav className="desktop-nav" aria-label="Main navigation">
        {navLinks.map((link) => (
          <a key={link.number} href={link.href}>
            <span className="nav-number">{link.number}</span>
            {link.label}
          </a>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="menu-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="mobile-nav">
          {navLinks.map((link) => (
            <a
              key={link.number}
              href={link.href}
              onClick={() => setIsOpen(false)}
            >
              <span>{link.number}</span>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
