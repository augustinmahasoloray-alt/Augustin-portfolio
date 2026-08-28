import React, { useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import ProjectModal from "./ProjectModal.jsx";
import { Reveal, StaggerContainer, StaggerItem } from "./AnimatedReveal.jsx";

export default function Projects({ projects = [] }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const handleVisitSite = (e, link) => {
    e.stopPropagation();
    if (link && link !== "#") {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="projets" className="py-20 md:py-28 bg-white dark:bg-[#0e111b] relative border-y border-neutral-100 dark:border-neutral-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        <Reveal yOffset={20}>
          <div className="flex flex-col items-start mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-accent dark:bg-accent-dark rounded-full"></span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent dark:text-accent-dark">
                Réalisations phares
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-neutral-900 dark:text-white tracking-tight">
              Projets & Développements<span className="text-accent dark:text-accent-dark">.</span>
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm sm:text-base mt-2 max-w-2xl">
              Une sélection d'applications complètes illustrant la maîtrise de l'écosystème web moderne, de la base de données à l'interface client.
            </p>
          </div>
        </Reveal>

        <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <StaggerItem key={project.id} yOffset={28}>
              <div
                onClick={() => openModal(project)}
                className="group h-full rounded-3xl bg-[#FAFAFA] dark:bg-[#121524] border border-neutral-200/80 dark:border-neutral-800 hover:border-accent/40 dark:hover:border-accent-dark/40 p-6 sm:p-7 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Image */}
                  <div className="w-full h-44 sm:h-52 rounded-2xl mb-6 relative overflow-hidden shadow-sm border border-neutral-200/60 dark:border-neutral-800">
                    <img
                      src={project.image}
                      alt={`Aperçu du site ${project.title}`}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/10 pointer-events-none" />

                    {/* Top Row: type + visit button */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/90 dark:bg-black/60 backdrop-blur-sm text-neutral-800 dark:text-white">
                        {project.type}
                      </span>

                      {project.link && project.link !== "#" && (
                        <button
                          onClick={(e) => handleVisitSite(e, project.link)}
                          aria-label={`Visiter le site ${project.title}`}
                          className="w-8 h-8 rounded-full bg-white/90 dark:bg-black/60 backdrop-blur-sm flex items-center justify-center text-neutral-800 dark:text-white hover:bg-accent dark:hover:bg-accent-dark hover:text-white dark:hover:text-white transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      )}
                    </div>

                    {/* Bottom Title */}
                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <span className="text-[11px] uppercase tracking-wider font-semibold text-white/80">
                        {project.category}
                      </span>
                      <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight drop-shadow-sm">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-display font-bold text-lg text-neutral-900 dark:text-white group-hover:text-accent dark:group-hover:text-accent-dark transition-colors mb-2">
                      {project.subtitle}
                    </h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-200/70 dark:border-neutral-800 flex items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies?.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-white dark:bg-[#181c2f] border border-neutral-200/70 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {(project.technologies?.length || 0) > 3 && (
                      <span className="text-[11px] font-medium px-1.5 py-0.5 text-neutral-400 dark:text-neutral-500">
                        +{(project.technologies?.length || 0) - 3}
                      </span>
                    )}
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-bold text-accent dark:text-accent-dark group-hover:translate-x-0.5 transition-transform shrink-0">
                    <span>Détails</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
}