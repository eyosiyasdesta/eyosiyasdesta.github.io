import React from 'react';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact({ personal }) {
  return (
    <section id="contact" className="contact-section page-width">
      <div className="section-label">
        <span>04</span>
        Contact
      </div>

      <div className="contact-inner">
        <h2>Have a problem worth solving?</h2>
        <p>
          Tell me what you are working on. I am open to thoughtful conversations and new opportunities.
        </p>

        <div className="contact-actions">
          <a
            className="button button-primary"
            href={`mailto:${personal.email}`}
          >
            <Mail size={16} /> Email me
          </a>
          <a
            className="social-link"
            href={personal.github}
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon size={18} /> GitHub
          </a>
          <a
            className="social-link"
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinIcon size={18} /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
