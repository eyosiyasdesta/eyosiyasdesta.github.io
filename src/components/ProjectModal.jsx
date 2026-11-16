import React, { useEffect } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    // Only lock scroll when modal is mounted
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <div className="modal-top">
          <div className="modal-meta-left">
            <span className="modal-num">{project.number}</span>
            <div>
              <span className="modal-cat">{project.category}</span>
              <h3 className="modal-title">{project.title}</h3>
            </div>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Close dialog">
            <X size={18} />
          </button>
        </div>

        <div className="modal-content">
          <p className="modal-tagline">{project.tagline}</p>
          <p className="modal-overview">{project.overview}</p>

          <div className="modal-details-block">
            <h4>System Architecture &amp; Key Decisions</h4>
            <ul className="modal-bullets">
              {project.architecture.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="modal-tech-box">
            <div>
              <span className="tech-heading">Backend</span>
              <p>{project.backendDetails}</p>
            </div>
            <div>
              <span className="tech-heading">Frontend / Client</span>
              <p>{project.frontendDetails}</p>
            </div>
          </div>

          <div className="tag-row modal-tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="modal-actions">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <GithubIcon size={16} /> GitHub
          </a>
          {project.liveUrl && project.liveUrl !== '#contact' && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="button button-primary"
            >
              Live demo <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
