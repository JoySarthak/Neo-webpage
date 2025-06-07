
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const About = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section 
      ref={sectionRef}
      id="about" 
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Crafting digital solutions with passion and precision
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card 
            ref={cardRef}
            className={`hover-scale transition-all duration-800 delay-400 hover:shadow-lg ${
              cardVisible 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-12'
            }`}
          >
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className={`transition-all duration-600 delay-600 ${
                  cardVisible 
                    ? 'opacity-100 transform translate-x-0' 
                    : 'opacity-0 transform -translate-x-8'
                }`}>
                  <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
                    alt="Workspace"
                    className="rounded-lg shadow-lg w-full h-64 object-cover"
                  />
                </div>
                
                <div className={`space-y-6 transition-all duration-600 delay-800 ${
                  cardVisible 
                    ? 'opacity-100 transform translate-x-0' 
                    : 'opacity-0 transform translate-x-8'
                }`}>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    With over 5 years of experience in web development, I specialize in creating 
                    robust, scalable applications using modern technologies like React, Node.js, 
                    and cloud platforms.
                  </p>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    I'm passionate about clean code, user experience, and staying current with 
                    the latest industry trends. When I'm not coding, you'll find me exploring 
                    new technologies or contributing to open-source projects.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-6 pt-6">
                    <div>
                      <h3 className="font-semibold text-primary mb-2">50+</h3>
                      <p className="text-muted-foreground">Projects Completed</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">5+</h3>
                      <p className="text-muted-foreground">Years Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
