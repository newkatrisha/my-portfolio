
import React from 'react';
import { FileCode, Monitor, Laptop } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-up">
            <h2 className="section-heading">About Me</h2>
            
            <p className="text-severance-navy/80 mb-6">
              I'm a passionate frontend developer with a keen eye for detail and a commitment to creating 
              clean, efficient, and intuitive user interfaces. With a background in modern JavaScript frameworks 
              and a deep understanding of responsive design principles, I bring ideas to life through code.
            </p>
            
            <p className="text-severance-navy/80 mb-6">
              My approach combines technical precision with creative problem-solving, ensuring that each 
              project not only functions flawlessly but also delivers an exceptional user experience. 
              I specialize in React, Next.js, and React Native development, crafting seamless experiences 
              across web and mobile platforms.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <div className="severance-card">
                <Monitor className="text-severance-blue mb-4" size={24} />
                <h3 className="font-mono text-severance-navy font-medium mb-2">Web Development</h3>
                <p className="text-sm text-severance-navy/70">Creating responsive, accessible web applications</p>
              </div>
              
              <div className="severance-card">
                <Laptop className="text-severance-blue mb-4" size={24} />
                <h3 className="font-mono text-severance-navy font-medium mb-2">Mobile Apps</h3>
                <p className="text-sm text-severance-navy/70">Building native-like experiences with React Native</p>
              </div>
              
              <div className="severance-card">
                <FileCode className="text-severance-blue mb-4" size={24} />
                <h3 className="font-mono text-severance-navy font-medium mb-2">Clean Code</h3>
                <p className="text-sm text-severance-navy/70">Writing maintainable, scalable, and efficient code</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative z-10 bg-white p-4 border border-severance-lightgray rounded-sm">
              <div className="aspect-video bg-severance-navy/5 rounded-sm relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952" 
                  alt="Developer photo" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-severance-navy/10"></div>
                <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm p-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-mono text-severance-navy font-medium">MDR // Developer</div>
                      <div className="text-xs text-severance-navy/60">Clean code enthusiast</div>
                    </div>
                    <div className="h-10 w-10 bg-severance-red rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-mono">INNIE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-6 -right-6 w-full h-full border border-severance-blue z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
