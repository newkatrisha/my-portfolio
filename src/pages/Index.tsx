import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  // Add subtle scroll reveal animations with a more reliable approach
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const handleIntersect = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Instead of adding classes that might conflict with existing Tailwind animations,
          // we'll directly modify the opacity to make elements visible
          entry.target.classList.remove("opacity-0");
          entry.target.classList.add("animate-fade-up");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Target section content elements but don't set them to opacity-0 here
    // as it's causing content to remain invisible
    const elements = document.querySelectorAll(
      "section > div > *:not(.animate-fade-up)"
    );
    elements.forEach((el) => {
      if (!el.classList.contains("animate-fade-up")) {
        // We'll add opacity-0 only if it's not already animated
        el.classList.add("opacity-0");
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <WorkExperience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
