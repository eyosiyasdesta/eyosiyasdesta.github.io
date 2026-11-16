import React from 'react';

export default function Toolkit({ toolkit }) {
  return (
    <section id="toolkit" className="content-section page-width section-reveal">
      <div className="section-label">
        <span>03</span>
        Toolkit
      </div>

      <div className="toolkit-grid">
        <h2>Tools I use to make ideas work.</h2>

        <div className="skill-groups">
          {toolkit.map((group) => (
            <div key={group.category} className="skill-group">
              <span>{group.category}</span>
              <div>
                {group.skills.map((skill) => (
                  <b key={skill}>{skill}</b>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
