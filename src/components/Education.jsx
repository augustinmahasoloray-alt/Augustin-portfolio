import React from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "./AnimatedReveal.jsx";

export default function Education({ education = [] }) {
  return (
    <section id="formation" className="py-20 md:py-28 bg-white dark:bg-[#0e111b] relative border-y border-neutral-100 dark:border-neutral-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        {/* Section Header Tag */}
        <Reveal yOffset={20}>
          <div className="flex flex-col items-start mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-accent dark:bg-accent-dark rounded-full"></span>

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent dark:text-accent-dark">
                Parcours académique
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-neutral-900 dark:text-white tracking-tight">
              Formation & Diplômes<span className="text-accent dark:text-accent-dark">.</span>
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm sm:text-base mt-2 max-w-2xl">
              Un apprentissage continu alliant rigueur académique, projets d'ingénierie web concrets et méthodes agiles.
            </p>
          </div>
        </Reveal>

        {/* Education List Stagger */}
        <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((item) => (
            <StaggerItem key={item.id} yOffset={28}>
              <div
                className={`h-full p-6 sm:p-8 rounded-2xl bg-[#FAFAFA] dark:bg-[#121524] border transition-all duration-300 flex flex-col justify-between relative group ${
                  item.current
                    ? "border-accent/30 dark:border-accent-dark/40 shadow-[0_4px_25px_-4px_rgba(111,29,27,0.1)] dark:shadow-[0_4px_25px_-4px_rgba(77,144,142,0.2)] hover:shadow-lg hover:border-accent dark:hover:border-accent-dark"
                    : "border-neutral-200/80 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-sm"
                  }`}
              >
                <div>
                  {/* Header with Icon and Status */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white dark:bg-[#181c2f] border border-neutral-200/80 dark:border-neutral-700 shadow-xs flex items-center justify-center text-accent dark:text-accent-dark group-hover:scale-105 transition-transform">
                      <GraduationCap className="w-6 h-6" />
                    </div>

                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                        item.current
                          ? "bg-accent/10 dark:bg-accent-dark/25 text-accent dark:text-accent-dark-light border border-accent/20 dark:border-accent-dark/40"
                          : "bg-neutral-200/60 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                        }`}
                    >
                      {item.current && <span className="w-1.5 h-1.5 rounded-full bg-accent dark:bg-accent-dark"></span>}
                      {item.status}
                    </span>
                  </div>

                  {/* Degree Title */}
                  <h3 className="font-display font-bold text-xl text-neutral-900 dark:text-white mb-1 group-hover:text-accent dark:group-hover:text-accent-dark transition-colors">
                    {item.title}
                  </h3>

                  {/* Institution & Location */}
                  <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-4">
                    <span className="font-semibold text-neutral-700 dark:text-neutral-300">{item.institution}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {item.location}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-200/60 dark:border-neutral-800">
                  {item.tags?.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-white dark:bg-[#181c2f] border border-neutral-200/70 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
}