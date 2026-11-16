import React from 'react';
import { BookOpen, GraduationCap, MapPin, Compass } from 'lucide-react';

export default function About({ about }) {
  const getIcon = (idx) => {
    switch (idx) {
      case 0: return <GraduationCap size={18} />;
      case 1: return <BookOpen size={18} />;
      case 2: return <MapPin size={18} />;
      default: return <Compass size={18} />;
    }
  };

  return (
    <section id="about" className="content-section page-width">
      <div className="section-label">
        <span className="section-number">01</span>
        <span className="section-title-tag">ABOUT BACKGROUND</span>
      </div>

      <div className="about-grid">
        <div className="about-lead">
          <h2 className="about-heading">{about.headline}</h2>
        </div>

        <div className="about-content">
          <div className="about-paragraphs">
            {about.paragraphs.map((p, idx) => (
              <p key={idx} className="about-text">{p}</p>
            ))}
          </div>

          <div className="about-details-list">
            {about.details.map((detail, idx) => (
              <div key={idx} className="about-detail-item">
                <div className="about-detail-icon">
                  {getIcon(idx)}
                </div>
                <div>
                  <span className="about-detail-label">{detail.label}</span>
                  <strong className="about-detail-value">{detail.value}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
