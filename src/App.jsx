import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Toolkit from './components/Toolkit';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { portfolioData } from './data/portfolioData';

export default function App() {
  useEffect(() => {
    // Section reveal on scroll
    const reveals = document.querySelectorAll('.section-reveal');
    if (!reveals.length) return;

    const revealObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    reveals.forEach((r) => revealObserver.observe(r));

    return () => revealObserver.disconnect();
  }, []);

  return (
    <div className="portfolio-app">
      <Navbar navLinks={portfolioData.navigation} />
      <main>
        <Hero personal={portfolioData.personal} />
        <About about={portfolioData.about} />
        <Projects projects={portfolioData.projects} />
        <Toolkit toolkit={portfolioData.toolkit} />
        <Contact personal={portfolioData.personal} />
      </main>
      <Footer personal={portfolioData.personal} />
    </div>
  );
}
