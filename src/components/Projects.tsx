import { Github } from "lucide-react";
import { PROJECTS } from "@/constants";

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-severance-offwhite">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="section-heading mb-4">Projects</h2>
        <p className="text-severance-navy/70 text-center max-w-2xl mx-auto mb-12">
          Personal projects I'm currently developing to explore new technologies
          and build meaningful applications in my free time.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
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
                      href={project.repoUrl}
                      className="p-2 bg-white rounded-full text-severance-navy hover:bg-severance-blue hover:text-white transition-colors duration-200"
                      aria-label="GitHub repository"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-mono text-lg text-severance-navy font-medium mb-2">
                  {project.title}
                </h3>
                <p className="text-severance-navy/70 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="badge">
                      {tag}
                    </span>
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
