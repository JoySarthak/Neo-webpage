import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background via-background to-muted/20 pt-16">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face" alt="Profile" className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-primary/20 shadow-lg" />
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Sarthak Dutta</h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Full Stack Developer & Digital Creative
          </p>
          
          <p className="text-lg text-muted-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating exceptional digital experiences with clean code and innovative solutions. 
            Specialized in modern web technologies and user-centered design.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" onClick={() => scrollToSection('projects')} className="hover-scale">
              View My Work
            </Button>
            <Button variant="outline" size="lg" onClick={() => scrollToSection('contact')} className="hover-scale">
              Get In Touch
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover-scale">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover-scale">
              <Linkedin size={24} />
            </a>
            <a href="mailto:contact@johndoe.com" className="text-muted-foreground hover:text-primary transition-colors hover-scale">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
      
      <button onClick={() => scrollToSection('about')} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-muted-foreground hover:text-primary transition-colors">
        <ChevronDown size={32} />
      </button>
    </section>;
};
export default Hero;