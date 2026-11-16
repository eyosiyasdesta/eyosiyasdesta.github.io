import React from 'react';
import { ArrowDown } from 'lucide-react';

export default function Hero({ personal }) {
  return (
    <>
      <section id="home" className="hero">
        <div className="page-width hero-container">
          {/* Left Column: Text, Name, Buttons, Scroll Cue */}
          <div className="hero-text-col">
            <h1 className="hero-name hero-item">
              <span>EYOSIYAS</span>
              <span>DESTA</span>
            </h1>

            <p className="hero-copy hero-item">
              Software engineering student at Adama Science and Technology University. Backend systems, Java &amp; Spring Boot, relational databases, structured RESTful APIs, and full-stack development.
            </p>

            <p className="availability hero-item">
              <span className="status-dot"></span> OPEN TO REMOTE &amp; INTERNATIONAL ROLES
            </p>

            <div className="hero-actions hero-item">
              <a className="button button-primary" href="#projects">
                View projects <ArrowDown size={14} />
              </a>
              <a className="button button-outline" href="#about">
                Read story
              </a>
            </div>

            <div className="scroll-cue-wrapper hero-item">
              <a className="scroll-cue" href="#about" aria-label="Scroll to explore">
                <ArrowDown size={14} /> SCROLL TO EXPLORE
              </a>
            </div>
          </div>

          {/* Right Column: Photo with Left-edge fade & 15% reduction for perfect framing */}
          <div className="hero-photo-wrap">
            <div className="hero-photo-inner">
              <img
                src="/images/profile.png"
                alt="Eyosiyas Desta"
                className="hero-photo-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Info Strip: Placed fully BELOW the hero so it never overlaps photo or text */}
      <section className="info-strip-section" aria-label="Professional Summary">
        <div className="page-width info-strip-grid">
          <div className="info-cell">
            <span className="info-label">Role</span>
            <strong className="info-val">Software Engineering Student</strong>
          </div>
          <div className="info-cell">
            <span className="info-label">Focus</span>
            <strong className="info-val">Backend &amp; Full-Stack</strong>
          </div>
          <div className="info-cell">
            <span className="info-label">Institution</span>
            <strong className="info-val">ASTU <em>(Adama, Ethiopia)</em></strong>
          </div>
          <div className="info-cell">
            <span className="info-label">Core stack</span>
            <strong className="info-val">Java, Spring Boot, Node.js, PostgreSQL</strong>
          </div>
        </div>
      </section>
    </>
  );
}
