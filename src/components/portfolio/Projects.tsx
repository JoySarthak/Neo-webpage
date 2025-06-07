
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Projects = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollAnimation({ threshold: 0.1 });

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and payment processing.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "Analytics Dashboard",
      description: "Data visualization dashboard with interactive charts, real-time metrics, and comprehensive reporting capabilities for business intelligence.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      technologies: ["React", "D3.js", "Python", "PostgreSQL"],
      github: "https://github.com",
      live: "https://example.com"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className={`py-24 bg-muted/10 transition-all duration-1000 ${
        sectionVisible 
          ? 'opacity-100 transform translate-y-0' 
          : 'opacity-0 transform translate-y-12'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-800 delay-200 ${
          sectionVisible 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work and personal projects
          </p>
        </div>
        
        <div 
          ref={projectsRef}
          className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-7xl mx-auto"
        >
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className={`overflow-hidden hover-scale transition-all duration-600 hover:shadow-lg group ${
                projectsVisible 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'opacity-0 transform translate-y-12'
              }`}
              style={{ transitionDelay: `${400 + index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <Button variant="outline" size="sm" asChild className="hover-scale">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild className="hover-scale">
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
