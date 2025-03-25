import { SKILLS } from "../constants";

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="section-heading">Technical Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {SKILLS.map((category, index) => (
            <div
              key={index}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3 className="font-mono text-lg text-severance-navy font-medium mb-6">
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-mono text-severance-navy/80">
                        {skill.name}
                      </span>
                      <span className="text-xs font-mono text-severance-navy/60">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="h-1 bg-severance-lightgray rounded-full overflow-hidden">
                      <div
                        className="h-full bg-severance-blue"
                        style={{
                          width: `${skill.level}%`,
                          transition: "width 1s ease-in-out",
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="font-mono text-lg text-severance-navy font-medium mb-6">
            Other Skills
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "RESTful APIs",
              "Responsive Design",
              "Performance Optimization",
              "CI/CD",
              "Agile Development",
              "UI/UX Principles",
            ].map((skill, index) => (
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
