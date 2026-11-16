import React from 'react';

export default function Logo({ size = 'default', showSubtitle = true }) {
  const isLarge = size === 'large';

  return (
    <a href="#home" className="logo-container" aria-label="Eyosiyas Desta Portfolio Home">
      <div className={`ed-monogram ${isLarge ? 'ed-monogram-lg' : ''}`}>
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="ed-svg"
          aria-hidden="true"
        >
          {/* Subtle outer tech frame */}
          <rect
            x="2"
            y="2"
            width="44"
            height="44"
            rx="10"
            stroke="url(#ed-border-gradient)"
            strokeWidth="1.5"
            className="ed-border"
          />

          {/* Letter E */}
          <path
            d="M 12 12 H 24 M 12 12 V 36 M 12 24 H 22 M 12 36 H 24"
            stroke="currentColor"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Letter D (distinct and interlocking) */}
          <path
            d="M 24 12 H 30 C 36 12 39 16 39 24 C 39 32 36 36 30 36 H 24 V 12 Z"
            stroke="url(#ed-accent-gradient)"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Center precision node */}
          <circle cx="24" cy="24" r="1.8" fill="#F59E0B" />

          <defs>
            <linearGradient id="ed-border-gradient" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F59E0B" stopOpacity="0.8" />
              <stop offset="0.5" stopColor="#38BDF8" stopOpacity="0.4" />
              <stop offset="1" stopColor="#1E293B" stopOpacity="0.9" />
            </linearGradient>
            <linearGradient id="ed-accent-gradient" x1="24" y1="12" x2="39" y2="36" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F59E0B" />
              <stop offset="1" stopColor="#38BDF8" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="logo-text">
        <span className="logo-name">EYOSIYAS DESTA</span>
        {showSubtitle && <span className="logo-tag">BACKEND • SYSTEMS</span>}
      </div>
    </a>
  );
}
