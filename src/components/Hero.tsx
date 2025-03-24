
import React, { useEffect, useRef } from 'react';
import { ChevronDown, Code, Globe, Layers } from 'lucide-react';

const Hero = () => {
  const circleRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!circleRef.current) return;
      
      const x = e.clientX;
      const y = e.clientY;
      
      // Apply a subtle parallax effect to the circle
      const moveX = (x - window.innerWidth / 2) * 0.05;
      const moveY = (y - window.innerHeight / 2) * 0.05;
      
      circleRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background elements */}
      <div className="absolute inset-0 bg-severance-offwhite z-0" />
      
      {/* Blue Circle - Inspired by Severance balloon */}
      <div 
        ref={circleRef}
        className="absolute right-[10%] top-[35%] w-[300px] h-[300px] bg-severance-blue/40 rounded-full blur-3xl opacity-50 animate-pulse-slow z-10"
      />
      
      {/* Red Circle - Inspired by red ball in Severance */}
      <div 
        className="absolute left-[15%] bottom-[25%] w-[180px] h-[180px] bg-severance-red/30 rounded-full blur-3xl opacity-50 animate-float z-10"
      />
      
      {/* Content */}
      <div className="container relative z-20 px-6 md:px-12">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 bg-severance-navy/5 rounded-full">
            <span className="h-2 w-2 rounded-full bg-severance-green animate-pulse"></span>
            <span className="text-sm font-mono text-severance-navy/80">Available for work</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-mono font-medium tracking-tighter text-severance-navy mb-6">
            <span className="reveal-text delay-100">Frontend Developer</span>
          </h1>
          
          <p className="max-w-2xl text-severance-navy/70 mb-10 text-xl">
            Specialized in creating seamless user experiences with 
            <span className="text-severance-navy font-medium"> React</span>, 
            <span className="text-severance-navy font-medium"> Next.js</span>, and
            <span className="text-severance-navy font-medium"> React Native</span>. 
            Bringing corporate precision with a touch of innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#projects" 
              className="px-8 py-3 bg-severance-navy text-white font-mono rounded-sm hover:bg-severance-navy/90 transition-colors"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 border border-severance-navy/20 text-severance-navy font-mono rounded-sm hover:bg-severance-navy/5 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      {/* Tech Icons */}
      <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-8 opacity-80">
        <div className="flex flex-col items-center gap-2">
          <div className="p-3 bg-white/80 rounded-full shadow-sm">
            <Code size={20} className="text-severance-blue" />
          </div>
          <span className="text-xs font-mono text-severance-navy/60">React</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="p-3 bg-white/80 rounded-full shadow-sm">
            <Globe size={20} className="text-severance-blue" />
          </div>
          <span className="text-xs font-mono text-severance-navy/60">Next.js</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="p-3 bg-white/80 rounded-full shadow-sm">
            <Layers size={20} className="text-severance-blue" />
          </div>
          <span className="text-xs font-mono text-severance-navy/60">React Native</span>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <a 
          href="#about" 
          className="animate-bounce p-2"
          aria-label="Scroll down"
        >
          <ChevronDown className="text-severance-navy/50" size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
