import React from 'react';

export default function About({ about }) {
  return (
    <section id="about" className="content-section page-width section-reveal">
      <div className="section-label">
        <span>01</span>
        About background
      </div>

      <div className="about-grid">
        <h2>{about.headline}</h2>

        <div className="about-copy">
          {about.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}

          <div className="detail-list">
            {about.details.map((detail, idx) => (
              <div key={idx}>
                <span>{detail.label}</span>
                <strong>{detail.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
