import { CONTACT_INFO, SOCIAL_LINKS } from "@/constants";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-severance-offwhite">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="section-heading">Contact</h2>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-severance-navy/80 text-xl max-w-2xl mx-auto">
              I'm always open to discussing new projects, opportunities or
              partnerships. Feel free to reach out through any of the channels
              below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white border border-severance-lightgray p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center cursor-pointer">
              <div className="p-4 bg-severance-navy/5 rounded-full mb-4">
                <Mail size={28} className="text-severance-blue" />
              </div>
              <h3 className="font-mono text-severance-navy font-medium mb-2">
                Email
              </h3>
              <p className="text-severance-navy/70">{CONTACT_INFO.email}</p>
            </div>

            <div className="bg-white border border-severance-lightgray p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
              <div className="p-4 bg-severance-navy/5 rounded-full mb-4">
                <Phone size={28} className="text-severance-blue" />
              </div>
              <h3 className="font-mono text-severance-navy font-medium mb-2">
                Phone
              </h3>
              <p className="text-severance-navy/70">{CONTACT_INFO.phone}</p>
            </div>

            <div className="bg-white border border-severance-lightgray p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
              <div className="p-4 bg-severance-navy/5 rounded-full mb-4">
                <MapPin size={28} className="text-severance-blue" />
              </div>
              <h3 className="font-mono text-severance-navy font-medium mb-2">
                Location
              </h3>
              <p className="text-severance-navy/70">{CONTACT_INFO.location}</p>
            </div>
          </div>

          {/* Connect Section */}
          <div className="bg-white border border-severance-lightgray p-8 md:p-10 rounded-sm shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-severance-blue"></div>
            <div className="relative">
              <h3 className="font-mono text-severance-navy font-medium mb-6 text-xl">
                Connect with me
              </h3>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <p className="text-severance-navy/80 max-w-md mb-6 md:mb-0">
                  I'm also available through social platforms. Feel free to
                  connect and send a message.
                </p>

                <div className="flex space-x-4">
                  <a
                    href={SOCIAL_LINKS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-severance-navy text-white rounded-sm hover:bg-severance-blue transition-colors"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-severance-navy text-white rounded-sm hover:bg-severance-blue transition-colors"
                  >
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Availability Badge */}
          <div className="mt-12 text-center">
            <span className="inline-flex items-center px-4 py-2 bg-severance-green/10 text-severance-green rounded-full font-mono text-sm">
              <span className="w-2 h-2 bg-severance-green rounded-full mr-2"></span>
              Currently available for new opportunities
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
