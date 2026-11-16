import React from 'react';
import { Mail, ArrowUpRight, MessageSquare, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact({ personal }) {
  return (
    <section id="contact" className="content-section contact-section page-width">
      <div className="section-label">
        <span className="section-number">04</span>
        <span className="section-title-tag">CONTACT & COLLABORATION</span>
      </div>

      <div className="contact-box">
        <div className="contact-glow" aria-hidden="true" />
        <div className="contact-inner">
          <div className="contact-status-tag">
            <span className="status-dot"></span>
            <span>AVAILABLE FOR BACKEND & FULL-STACK ROLES</span>
          </div>

          <h2 className="contact-heading">Have a problem worth solving?</h2>
          <p className="contact-subhead">
            Tell me what you are building. I am open to technical discussions, software engineering roles, and impactful backend projects.
          </p>

          <div className="contact-actions">
            <a
              href={`mailto:${personal.email}`}
              className="button button-primary contact-main-btn"
            >
              <Mail size={18} /> Email Me Directly
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="social-pill-btn"
            >
              <GithubIcon size={18} /> GitHub <ArrowUpRight size={13} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="social-pill-btn"
            >
              <LinkedinIcon size={18} /> LinkedIn <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
