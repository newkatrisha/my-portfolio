
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "React Native", level: 80 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 95 },
        { name: "HTML/CSS", level: 90 },
      ]
    },
    {
      title: "Libraries & Frameworks",
      skills: [
        { name: "Redux", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Styled Components", level: 80 },
        { name: "Material UI", level: 75 },
        { name: "Framer Motion", level: 70 },
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "Webpack", level: 75 },
        { name: "Vite", level: 80 },
        { name: "Jest", level: 70 },
        { name: "Vercel", level: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="section-heading">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3 className="font-mono text-lg text-severance-navy font-medium mb-6">{category.title}</h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-mono text-severance-navy/80">{skill.name}</span>
                      <span className="text-xs font-mono text-severance-navy/60">{skill.level}%</span>
                    </div>
                    
                    <div className="h-1 bg-severance-lightgray rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-severance-blue"
                        style={{ 
                          width: `${skill.level}%`,
                          transition: 'width 1s ease-in-out'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional skills badges */}
        <div className="mt-16 text-center">
          <h3 className="font-mono text-lg text-severance-navy font-medium mb-6">Other Skills</h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {["RESTful APIs", "GraphQL", "Responsive Design", "Progressive Web Apps", "Performance Optimization", "CI/CD", "Agile Development", "UI/UX Principles"].map((skill, index) => (
              <span key={index} className="badge">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
