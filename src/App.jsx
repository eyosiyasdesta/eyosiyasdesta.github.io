import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Toolkit from './components/Toolkit';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { portfolioData } from './data/portfolioData';

export default function App() {
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
