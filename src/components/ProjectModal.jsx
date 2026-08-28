import React from "react";
import { X, ExternalLink, CheckCircle, Globe } from "lucide-react";
import { motion } from "motion/react";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-900/70 dark:bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        id="project-modal-content"
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#121524] rounded-3xl p-6 sm:p-8 shadow-2xl border border-neutral-100 dark:border-neutral-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Fermer la boîte de dialogue"
          className="absolute top-5 right-5 p-2 rounded-xl text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Tag */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 dark:bg-accent-dark/25 text-accent dark:text-accent-dark-light text-xs font-bold uppercase tracking-wider mb-3">
          <span>{project.category}</span>
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-2xl sm:text-3xl text-neutral-900 dark:text-white mb-1">
          {project.title}
        </h3>
        <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-6">
          {project.subtitle}
        </p>

        {/* Visual Banner */}
        <div className="w-full h-48 sm:h-56 rounded-2xl mb-6 relative overflow-hidden shadow-inner border border-neutral-200/60 dark:border-neutral-800">
          <img
            src={project.image}
            alt={`Aperçu du site ${project.title}`}
            className="w-full h-full object-cover object-top"
          />

          {/* Overlay pour lisibilité des badges */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/10 pointer-events-none" />

          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs text-white">
              {project.type}
            </span>
            <span className="text-xs text-white/80 font-mono">Augustin • Projets</span>
          </div>

          <div className="absolute bottom-4 left-4 right-4 z-10">
            <div className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-white drop-shadow-sm">
              {project.title}
            </div>
            <p className="text-xs sm:text-sm text-white/90 font-medium mt-1">
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-2">
            Description du Projet
          </h4>
          <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Key Highlights */}
        {Array.isArray(project.highlights) && project.highlights.length > 0 && (
          <div className="mb-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-3">
              Points Clés & Fonctionnalités
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 bg-neutral-50 dark:bg-[#181c2f] p-3 rounded-xl border border-neutral-100 dark:border-neutral-800"
                >
                  <CheckCircle className="w-4 h-4 text-accent dark:text-accent-dark shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technologies used */}
        {Array.isArray(project.technologies) && project.technologies.length > 0 && (
          <div className="mb-8">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-3">
              Stack Technologique
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-accent/10 dark:bg-accent-dark/25 text-accent dark:text-accent-dark-light border border-accent/20 dark:border-accent-dark/40"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-neutral-100 dark:border-neutral-800">
          <button
            onClick={onClose}
            className="px-5 py-2.5 text-sm font-semibold text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-xl transition-colors cursor-pointer"
          >
            Fermer
          </button>

          {project.link && project.link !== "#" && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-accent dark:text-accent-dark bg-accent/10 dark:bg-accent-dark/25 hover:bg-accent/20 dark:hover:bg-accent-dark/40 border border-accent/20 dark:border-accent-dark/40 rounded-xl transition-all"
            >
              <Globe className="w-4 h-4" />
              <span>Visiter le site</span>
            </a>
          )}

          <a
            href="#contact"
            onClick={onClose}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-accent hover:bg-accent-hover dark:bg-accent-dark dark:hover:bg-accent-dark-hover rounded-xl shadow-sm transition-all"
          >
            <span>Discuter de ce projet</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}