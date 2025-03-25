import React from "react";
import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react";
import { SOCIAL_LINKS } from "@/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-severance-lightgray py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a
              href="#home"
              className="font-mono text-lg font-medium tracking-tight text-severance-navy"
            >
              <span className="text-severance-blue">KATIA</span>.DEV
            </a>
            <p className="text-sm text-severance-navy/60 mt-2">
              &copy; {currentYear} All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-severance-navy/60 hover:text-severance-blue transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-severance-navy/60 hover:text-severance-blue transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-severance-lightgray flex justify-center">
          <a
            href="#home"
            className="p-3 bg-severance-navy/5 rounded-full text-severance-navy hover:bg-severance-navy/10 transition-colors duration-200"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
