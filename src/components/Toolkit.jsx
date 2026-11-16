import React from 'react';
import { Server, Database, Layout, Cpu, Check } from 'lucide-react';

export default function Toolkit({ toolkit }) {
  const getGroupIcon = (iconName) => {
    switch (iconName) {
      case 'Server': return <Server size={20} />;
      case 'Database': return <Database size={20} />;
      case 'Layout': return <Layout size={20} />;
      default: return <Cpu size={20} />;
    }
  };

  return (
    <section id="toolkit" className="content-section page-width">
      <div className="section-label">
        <span className="section-number">03</span>
        <span className="section-title-tag">TOOLKIT & STACK</span>
      </div>

      <div className="toolkit-grid">
        <div className="toolkit-lead">
          <h2 className="toolkit-heading">Tools I use to make ideas work.</h2>
          <p className="toolkit-subheading">
            Focused on production reliability, predictable latency, and clean code across JVM and Node.js ecosystems.
          </p>
        </div>

        <div className="toolkit-groups">
          {toolkit.map((group) => (
            <div key={group.category} className="toolkit-card">
              <div className="toolkit-card-header">
                <div className="toolkit-card-icon">
                  {getGroupIcon(group.icon)}
                </div>
                <h3 className="toolkit-card-title">{group.category}</h3>
              </div>
              <div className="toolkit-chips">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`toolkit-chip ${skill === 'Node.js' || skill === 'Spring Boot' || skill === 'Java' ? 'toolkit-chip-highlight' : ''}`}
                  >
                    <Check size={12} className="chip-check" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
