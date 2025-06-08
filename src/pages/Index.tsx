
import React from 'react';
import Navigation from '../components/portfolio/Navigation';
import Hero from '../components/portfolio/Hero';
import About from '../components/portfolio/About';
import Skills from '../components/portfolio/Skills';
import Projects from '../components/portfolio/Projects';
import Experience from '../components/portfolio/Experience';
import Contact from '../components/portfolio/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div id="hero">
        <Hero />
      </div>
      <div id="about" className="page-section">
        <About />
      </div>
      <div id="skills" className="page-section">
        <Skills />
      </div>
      <div id="projects" className="page-section">
        <Projects />
      </div>
      <div id="experience" className="page-section">
        <Experience />
      </div>
      <div id="contact" className="page-section">
        <Contact />
      </div>
    </div>
  );
};

export default Index;
