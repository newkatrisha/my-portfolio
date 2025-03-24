
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Efficiency Dashboard",
      description: "A corporate dashboard for monitoring team performance metrics with real-time data visualization.",
      tags: ["React", "TypeScript", "D3.js"],
      imageUrl: "https://placehold.co/600x400/e2e8f0/1e293b?text=Dashboard",
      demoUrl: "#",
      repoUrl: "#"
    },
    {
      title: "Mobile Commerce App",
      description: "A cross-platform shopping application with personalized recommendations and secure checkout.",
      tags: ["React Native", "Redux", "Firebase"],
      imageUrl: "https://placehold.co/600x400/e2e8f0/1e293b?text=Mobile+App",
      demoUrl: "#",
      repoUrl: "#"
    },
    {
      title: "Content Management System",
      description: "A full-featured CMS built with Next.js offering real-time collaboration and version control.",
      tags: ["Next.js", "Prisma", "PostgreSQL"],
      imageUrl: "https://placehold.co/600x400/e2e8f0/1e293b?text=CMS",
      demoUrl: "#",
      repoUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-severance-offwhite">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="section-heading mb-12">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white border border-severance-lightgray rounded-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-video bg-severance-navy/5 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-severance-navy/80 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <a 
                      href={project.demoUrl} 
                      className="p-2 bg-white rounded-full text-severance-navy hover:bg-severance-blue hover:text-white transition-colors duration-200"
                      aria-label="Live demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a 
                      href={project.repoUrl} 
                      className="p-2 bg-white rounded-full text-severance-navy hover:bg-severance-blue hover:text-white transition-colors duration-200"
                      aria-label="GitHub repository"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-mono text-lg text-severance-navy font-medium mb-2">{project.title}</h3>
                <p className="text-severance-navy/70 text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="badge">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
