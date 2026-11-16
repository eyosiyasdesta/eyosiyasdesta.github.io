import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Server, Layers, Cpu } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title-wrap">
            <span className="modal-project-number">{project.number}</span>
            <div>
              <span className="modal-category">{project.category}</span>
              <h3 id="modal-title" className="modal-title">{project.title}</h3>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close project modal">
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          <div className="modal-summary-card">
            <p className="modal-tagline">{project.tagline}</p>
            <p className="modal-overview">{project.overview}</p>
          </div>

          {/* Architecture Highlights */}
          <div className="modal-section">
            <h4 className="modal-section-title">
              <Cpu size={18} className="modal-icon" /> System Architecture & Key Decisions
            </h4>
            <ul className="modal-arch-list">
              {project.architecture.map((item, idx) => (
                <li key={idx} className="modal-arch-item">
                  <CheckCircle2 size={16} className="modal-check-icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Breakdown Grid */}
          <div className="modal-tech-grid">
            <div className="modal-tech-card">
              <div className="modal-tech-card-header">
                <Server size={16} />
                <h5>Backend Engineering</h5>
              </div>
              <p>{project.backendDetails}</p>
            </div>

            <div className="modal-tech-card">
              <div className="modal-tech-card-header">
                <Layers size={16} />
                <h5>Frontend & Interface</h5>
              </div>
              <p>{project.frontendDetails}</p>
            </div>
          </div>

          {/* Tags */}
          <div className="modal-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="tech-badge">{tag}</span>
            ))}
          </div>
        </div>

        {/* Modal Footer / Actions */}
        <div className="modal-footer">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="button button-outline"
          >
            <GithubIcon size={16} /> Source Code
          </a>
          <a
            href={project.liveUrl}
            className="button button-primary"
            onClick={(e) => {
              if (project.liveUrl.startsWith('#')) {
                onClose();
              }
            }}
          >
            Live Demo / Details <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
