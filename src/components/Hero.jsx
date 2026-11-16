import React from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, Terminal } from 'lucide-react';

export default function Hero({ personal }) {
  return (
    <section id="home" className="hero-section">
      {/* Background with user photo & contrast gradient overlay */}
      <div className="hero-backdrop" aria-hidden="true">
        <div
          className="hero-bg-image"
          style={{ backgroundImage: `url('/images/profile.png')` }}
        />
        {/* Multi-layered gradient wash to guarantee 100% font visibility */}
        <div className="hero-gradient-left" />
        <div className="hero-gradient-radial" />
        <div className="hero-gradient-bottom" />
        <div className="hero-noise-grid" />
      </div>

      <div className="page-width hero-content">
        {/* Availability Badge */}
        <div className="hero-badge-wrap">
          <div className="hero-badge">
            <span className="hero-status-pulse">
              <span className="pulse-dot"></span>
              <span className="pulse-ring"></span>
            </span>
            <span className="hero-badge-text">{personal.availability}</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="hero-headline">
          I build dependable software <br />
          <span className="hero-headline-accent">from the inside out.</span>
        </h1>

        {/* Description / Subtitle with high contrast */}
        <p className="hero-subhead">
          {personal.heroSubhead}
        </p>

        {/* Action CTAs */}
        <div className="hero-actions">
          <a href="#projects" className="button button-primary">
            Explore Projects <ArrowUpRight size={16} />
          </a>
          <a href="#about" className="button button-outline">
            Read Background Story
          </a>
        </div>

        {/* Meta Bar */}
        <div className="hero-meta-grid">
          <div className="meta-card">
            <span className="meta-label">ROLE</span>
            <strong className="meta-val">Software Engineering Student</strong>
          </div>
          <div className="meta-card">
            <span className="meta-label">FOCUS</span>
            <strong className="meta-val">Backend & Distributed Systems</strong>
          </div>
          <div className="meta-card">
            <span className="meta-label">INSTITUTION</span>
            <strong className="meta-val">ASTU <span className="meta-sub">(Adama, Ethiopia)</span></strong>
          </div>
          <div className="meta-card">
            <span className="meta-label">CORE STACK</span>
            <strong className="meta-val meta-stack">Java • Spring Boot • Node.js • PostgreSQL</strong>
          </div>
        </div>

        {/* Scroll cue */}
        <a href="#about" className="scroll-cue" aria-label="Scroll to about section">
          <ArrowDown size={15} />
          <span>SCROLL TO EXPLORE</span>
        </a>
      </div>
    </section>
  );
}
