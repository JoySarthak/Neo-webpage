
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Experience = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: timelineRef, isVisible: timelineVisible } = useScrollAnimation({ threshold: 0.1 });

  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      description: "Leading frontend development for enterprise applications, mentoring junior developers, and implementing modern React architectures.",
      technologies: ["React", "TypeScript", "GraphQL", "AWS"]
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      description: "Built scalable web applications from scratch, designed RESTful APIs, and collaborated with cross-functional teams in an agile environment.",
      technologies: ["Vue.js", "Node.js", "MongoDB", "Docker"]
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency Pro",
      period: "2019 - 2020",
      description: "Developed responsive websites and interactive web applications for various clients, focusing on performance optimization and user experience.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Sass"]
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="experience" 
      className={`py-24 transition-all duration-1000 ${
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey and key milestones
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div ref={timelineRef} className="relative">
            {/* Timeline line */}
            <div className={`absolute left-8 top-0 bottom-0 w-px bg-border transition-all duration-1000 delay-400 ${
              timelineVisible 
                ? 'opacity-100 scale-y-100' 
                : 'opacity-0 scale-y-0'
            }`} style={{ transformOrigin: 'top' }} />
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={exp.title} 
                  className={`relative flex items-start transition-all duration-600 ${
                    timelineVisible 
                      ? 'opacity-100 transform translate-x-0' 
                      : 'opacity-0 transform -translate-x-8'
                  }`}
                  style={{ transitionDelay: `${600 + index * 200}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="relative flex items-center justify-center">
                    <div className={`w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border-4 border-background shadow-lg transition-all duration-400 ${
                      timelineVisible 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-0'
                    }`}
                    style={{ transitionDelay: `${800 + index * 200}ms` }}
                    >
                      <Briefcase size={20} className="text-primary" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="ml-8 flex-1">
                    <Card className={`hover-scale transition-all duration-600 hover:shadow-lg ${
                      timelineVisible 
                        ? 'opacity-100 transform translate-y-0' 
                        : 'opacity-0 transform translate-y-8'
                    }`}
                    style={{ transitionDelay: `${700 + index * 200}ms` }}
                    >
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold">{exp.title}</h3>
                            <p className="text-primary font-medium">{exp.company}</p>
                          </div>
                          <Badge variant="outline" className="mt-2 md:mt-0">
                            {exp.period}
                          </Badge>
                        </div>
                        
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {exp.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge 
                              key={tech} 
                              variant="secondary" 
                              className={`text-xs transition-all duration-300 ${
                                timelineVisible 
                                  ? 'opacity-100 transform scale-100' 
                                  : 'opacity-0 transform scale-90'
                              }`}
                              style={{ transitionDelay: `${900 + index * 200 + techIndex * 50}ms` }}
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
