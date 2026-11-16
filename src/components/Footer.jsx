import React from 'react';

export default function Footer({ personal }) {
  return (
    <footer className="page-width footer">
      <span>© 2026 {personal.name}</span>
      <span>Built with care / {personal.location}</span>
    </footer>
  );
}
