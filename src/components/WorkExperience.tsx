import { EXPERIENCE } from "@/constants";
import { Calendar, Building, ArrowUpRight } from "lucide-react";

const WorkExperience = () => {
  return (
    <section id="experience" className="py-24 bg-severance-offwhite">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="section-heading">Work Experience</h2>

        <div className="space-y-8">
          {EXPERIENCE.map((job, index) => (
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
                        <img
                          src={job.logo}
                          alt={`${job.company} logo`}
                          className="w-8 h-8 object-contain"
                        />
                      ) : (
                        <Building className="text-severance-blue" size={24} />
                      )}
                    </div>
                    <div>
                      <h3 className="font-mono text-lg text-severance-navy font-medium">
                        {job.title}
                      </h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-severance-navy/80">
                          {job.company}
                        </span>
                        <span className="text-severance-navy/40">•</span>
                        <span className="text-severance-navy/60 text-sm">
                          {job.location}
                        </span>
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
                      <ArrowUpRight
                        size={16}
                        className="text-severance-blue mt-1 flex-shrink-0"
                      />
                      <span className="text-sm text-severance-navy/80">
                        {highlight}
                      </span>
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
