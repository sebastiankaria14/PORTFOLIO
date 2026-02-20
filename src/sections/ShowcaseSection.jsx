import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from "../constants";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    // Animations for each project card
    gsap.fromTo(
      ".project-card",
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 85%",
          once: true, // Only animate once
        },
      }
    );
  }, []);

  return (
    <section id="work" ref={sectionRef} className="flex-center section-padding">
      <div className="w-full md:px-10 px-5">
        <TitleHeader
          title="My Projects"
          sub="🚀 Work & Creations"
        />
        
        <div className="projects-grid mt-20 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="project-card group">
              <div className="project-image-wrapper overflow-hidden rounded-t-2xl">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              
              <div className="project-content bg-black-200 p-6 rounded-b-2xl border border-black-300">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-white-50 mb-4 text-sm">
                  {project.description}
                </p>
                
                <div className="project-tech flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-black-300 text-white-800 rounded-full text-xs border border-black-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="project-links flex gap-4">
                  <a 
                    href={project.liveDemo} 
                    className="flex-1 text-center py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity text-sm font-medium"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.github} 
                    className="flex-1 text-center py-2 border border-white-500 text-white rounded-lg hover:bg-black-300 transition-colors text-sm font-medium"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
