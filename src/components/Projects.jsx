import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import ProjectModal from './ProjectModal';

export default function Projects({ projects }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="content-section page-width">
      <div className="section-label">
        <span>02</span>
        Selected work
      </div>

      <div className="section-heading-row">
        <h2>Things I have built.</h2>
        <p>Backend and full-stack projects, each with source code. Click any project to view architecture &amp; details.</p>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article
            key={project.id}
            className="project-card clickable-card"
            onClick={() => setSelectedProject(project)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setSelectedProject(project);
              }
            }}
          >
            <div className="project-topline">
              <span>{project.number}</span>
              <div className="project-top-right">
                <span className="card-click-hint">Click for details →</span>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} on GitHub`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <GithubIcon size={18} />
                </a>
              </div>
            </div>

            <h3>{project.title}</h3>
            <p>{project.tagline || project.description}</p>

            <div className="tag-row">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                GitHub <ArrowUpRight size={14} />
              </a>
              <span className="project-view-link">
                View description <ArrowUpRight size={14} />
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Conditionally rendered modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
