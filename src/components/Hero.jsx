import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

export default function Hero({ personal }) {
  return (
    <section id="home" className="hero">
      {/* Background user portrait with soft wash */}
      <img
        src="/images/profile.png"
        alt="Eyosiyas Desta"
        className="hero-photo"
      />
      <div className="hero-wash" aria-hidden="true" />

      {/* Giant editorial watermark */}
      <div className="hero-watermark" aria-hidden="true">
        DESTA
      </div>

      <div className="page-width hero-content">
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
      </div>

      <a className="scroll-cue" href="#about" aria-label="Scroll to about">
        <ArrowDown size={14} /> Scroll to explore
      </a>

      {/* Hero Meta Bar */}
      <div className="hero-meta page-width">
        <div>
          <span>Role</span>
          <strong>Software Engineering Student</strong>
        </div>
        <div>
          <span>Focus</span>
          <strong>Backend &amp; Full-Stack</strong>
        </div>
        <div>
          <span>Institution</span>
          <strong>ASTU <em>(Adama, Ethiopia)</em></strong>
        </div>
        <div>
          <span>Core stack</span>
          <strong>Java, Spring Boot, Node.js, PostgreSQL</strong>
        </div>
      </div>
    </section>
  );
}
