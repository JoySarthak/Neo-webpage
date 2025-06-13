
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Github, Linkedin, Mail, Facebook, Twitter, Instagram, Unlock } from 'lucide-react';

const Hero = () => {
  const [imageAnimation, setImageAnimation] = useState('animate-spin-to-appear');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showUnlockButton, setShowUnlockButton] = useState(true);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const handleUnlock = () => {
    setIsUnlocked(true);
    setShowUnlockButton(false);
    
    // Trigger the page unlock animation
    document.body.classList.add('page-unlocked');
  };

  useEffect(() => {
    // Only start image cycling after unlock
    if (!isUnlocked) return;
    
    // Cycle through the animations every 6 seconds
    const interval = setInterval(() => {
      setImageAnimation('animate-spin-to-fade');
      
      setTimeout(() => {
        setImageAnimation('animate-spin-to-appear');
      }, 2000);
    }, 6000);

    return () => clearInterval(interval);
  }, [isUnlocked]);

  return (
    <>
      {/* Central Unlock Button Overlay */}
      {showUnlockButton && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
          <div className="relative">
            {/* Pulsing rings around the button */}
            <div className="absolute inset-0 animate-ping">
              <div className="w-32 h-32 rounded-full border-2 border-primary/30"></div>
            </div>
            <div className="absolute inset-0 animate-pulse animation-delay-300">
              <div className="w-40 h-40 -m-4 rounded-full border border-primary/20"></div>
            </div>
            <div className="absolute inset-0 animate-pulse animation-delay-700">
              <div className="w-48 h-48 -m-8 rounded-full border border-primary/10"></div>
            </div>
            
            {/* Central unlock button */}
            <button
              onClick={handleUnlock}
              className="relative w-32 h-32 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-primary-foreground hover:scale-110 transition-all duration-300 animate-glow shadow-2xl group"
            >
              <Unlock size={48} className="group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent"></div>
            </button>
            
            {/* Unlock text */}
            <p className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-muted-foreground animate-pulse">
              Click to unlock portfolio
            </p>
          </div>
        </div>
      )}

      <section className={`min-h-screen flex items-center justify-center relative bg-background pt-16 page-section ${isUnlocked ? 'unlocked' : ''}`}>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-left space-y-6 content-slide-left">
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground animate-fade-in-left opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                  Hello, It's Me
                </p>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground animate-fade-in-left opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                  John Kendric
                </h1>
                
                <div className="text-2xl md:text-3xl animate-fade-in-left opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                  <span className="text-foreground">And I'm a </span>
                  <span className="text-primary font-semibold animate-typewriter inline-block">Frontend Developer</span>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg animate-fade-in-left opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Possimus nulla 
                sed scope rerum, animi molestae quibusdam.
              </p>
              
              {/* Social Icons */}
              <div className="flex space-x-4 animate-fade-in-left opacity-0" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center hover:scale-110"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center hover:scale-110"
                >
                  <Twitter size={20} />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center hover:scale-110"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center hover:scale-110"
                >
                  <Linkedin size={20} />
                </a>
              </div>
              
              {/* Download CV Button */}
              <div className="pt-4 animate-fade-in-left opacity-0" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-semibold animate-glow"
                  onClick={() => scrollToSection('contact')}
                >
                  Download CV
                </Button>
              </div>
            </div>

            {/* Right side - Profile image with geometric shape */}
            <div className="relative flex justify-center animate-fade-in-right opacity-0 content-slide-right" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              <div className="relative">
                {/* Geometric background shape */}
                <div className="absolute inset-0 bg-primary/20 rounded-3xl transform rotate-12 scale-110 animate-glow"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 rounded-3xl transform -rotate-6 scale-105"></div>
                
                {/* Profile image with spin animations */}
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face"
                  alt="John Kendric"
                  className={`relative w-80 h-96 object-cover rounded-3xl shadow-2xl border-4 border-primary/30 ${imageAnimation}`}
                />
                
                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-3xl border-2 border-primary/50 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
        
        <button 
          onClick={() => scrollToSection('about')} 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-primary hover:text-primary/80 transition-colors"
        >
          <ChevronDown size={32} />
        </button>
      </section>
    </>
  );
};

export default Hero;
