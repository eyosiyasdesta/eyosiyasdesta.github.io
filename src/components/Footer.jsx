import React from 'react';
import Logo from './Logo';
import { ArrowUp } from 'lucide-react';

export default function Footer({ personal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="page-width footer-inner">
        <div className="footer-left">
          <Logo size="small" showSubtitle={false} />
          <span className="footer-copy">© 2026 {personal.name}</span>
        </div>

        <div className="footer-center">
          <span className="footer-location">
            Engineered with care • {personal.location}
          </span>
        </div>

        <div className="footer-right">
          <button onClick={scrollToTop} className="back-to-top-btn" aria-label="Scroll back to top">
            Back to top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
