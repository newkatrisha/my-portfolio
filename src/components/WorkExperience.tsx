import React from 'react';
import { Briefcase, Calendar, Building, ArrowUpRight } from 'lucide-react';

const WorkExperience = () => {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Lumon Industries",
      location: "Kier, NY",
      period: "2020 - Present",
      description: "Lead frontend developer for corporate efficiency dashboard projects. Implemented data visualization tools that increased department productivity by 34%. Supervised a team of 5 junior developers.",
      highlights: [
        "Developed real-time data visualization dashboards using React and D3.js",
        "Implemented micro-frontend architecture for improved team workflow",
        "Reduced application load time by 45% through code optimization"
      ],
      logo: "/lumon-logo.png" // Replace with an actual logo or leave as is
    },
    {
      title: "Frontend Developer",
      company: "Cobel Consulting",
      location: "San Francisco, CA",
      period: "2018 - 2020",
      description: "Responsible for building responsive web applications and implementing new features for client projects. Created modular component libraries used across multiple projects.",
      highlights: [
        "Built a component library used across 12+ client projects",
        "Integrated third-party APIs for payment processing and data analysis",
        "Collaborated with UX designers to implement pixel-perfect interfaces"
      ],
      logo: "/cobel-logo.png" // Replace with an actual logo or leave as is
    },
    {
      title: "Junior Web Developer",
      company: "TechStart Solutions",
      location: "Boston, MA",
      period: "2016 - 2018",
      description: "Developed and maintained client websites. Collaborated with the design team to implement responsive layouts and interactive features.",
      highlights: [
        "Developed 15+ client websites using modern front-end technologies",
        "Implemented responsive design principles for mobile-first experiences",
        "Optimized website performance and accessibility"
      ],
      logo: "/techstart-logo.png" // Replace with an actual logo or leave as is
    }
  ];

  return (
    <section id="experience" className="py-24 bg-severance-offwhite">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="section-heading">Work Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((job, index) => (
            <div 
              key={index} 
              className="bg-white border border-severance-lightgray rounded-sm overflow-hidden transition-all duration-300 hover:shadow-md animate-fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div className="flex items-start space-x-4 mb-4 md:mb-0">
                    <div className="w-12 h-12 bg-severance-navy/5 rounded-sm flex items-center justify-center flex-shrink-0">
                      {job.logo ? (
                        <img src={job.logo} alt={`${job.company} logo`} className="w-8 h-8 object-contain" />
                      ) : (
                        <Building className="text-severance-blue" size={24} />
                      )}
                    </div>
                    <div>
                      <h3 className="font-mono text-lg text-severance-navy font-medium">{job.title}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-severance-navy/80">{job.company}</span>
                        <span className="text-severance-navy/40">•</span>
                        <span className="text-severance-navy/60 text-sm">{job.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 font-mono text-sm text-severance-navy/60">
                    <Calendar size={14} className="text-severance-blue" />
                    <span>{job.period}</span>
                  </div>
                </div>
                
                <p className="text-severance-navy/70 mb-4">{job.description}</p>
                
                <ul className="space-y-2">
                  {job.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start space-x-2">
                      <ArrowUpRight size={16} className="text-severance-blue mt-1 flex-shrink-0" />
                      <span className="text-sm text-severance-navy/80">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience; 