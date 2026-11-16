import React, { useState } from 'react';
import { ArrowUpRight, Info, Layers, Eye } from 'lucide-react';
import { GithubIcon } from './Icons';
import ProjectModal from './ProjectModal';

export default function Projects({ projects }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="content-section page-width">
      <div className="section-label">
        <span className="section-number">02</span>
        <span className="section-title-tag">SELECTED WORK</span>
      </div>

      <div className="section-heading-row">
        <div>
          <h2 className="section-heading">Things I have built.</h2>
          <p className="section-subheading">
            Backend architectures, Node.js REST services, and full-stack systems. Click any card to inspect full technical architecture and implementation details.
          </p>
        </div>
        <div className="projects-count-badge">
          <span>{projects.length} PROJECTS FEATURED</span>
        </div>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article
            key={project.id}
            className="project-card interactive-card"
            onClick={() => setSelectedProject(project)}
            tabIndex={0}
            role="button"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setSelectedProject(project);
              }
            }}
          >
            {/* Top row */}
            <div className="project-topline">
              <span className="project-num">{project.number}</span>
              <div className="project-badges">
                <span className="project-category-badge">{project.category}</span>
                <span className="project-inspect-hint">
                  <Eye size={13} /> Details
                </span>
              </div>
            </div>

            {/* Title & Tagline */}
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.tagline}</p>

            {/* Tags */}
            <div className="tag-row">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={`tag-pill ${tag === 'Node.js' || tag === 'Spring Boot' ? 'tag-pill-highlight' : ''}`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Card Footer */}
            <div className="project-card-footer">
              <span className="project-view-cta">
                View Architecture <Info size={14} />
              </span>
              <div className="project-quick-links" onClick={(e) => e.stopPropagation()}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} on GitHub`}
                  className="quick-icon-link"
                >
                  <GithubIcon size={17} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Render modal if a project is clicked */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
