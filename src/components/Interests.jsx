import React from "react";
import { Palette, Camera, Atom, Compass, Trophy, Cpu, Lightbulb, Heart } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "./AnimatedReveal.jsx";

export default function Interests({ interests = [] }) {
  const getInterestIcon = (iconName, id) => {
    switch (iconName?.toLowerCase() || id?.toLowerCase()) {
      case "palette":
      case "peinture":
        return Palette;
      case "camera":
      case "photographie":
        return Camera;
      case "astronomie":
      case "atom":
      case "sciences":
        return Atom;
      case "sport":
        return Trophy;
      case "tech":
        return Cpu;
      default:
        return Lightbulb;
    }
  };

  return (
    <section id="interets" className="py-20 md:py-28 bg-white dark:bg-[#0e111b] relative border-t border-neutral-100 dark:border-neutral-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        {/* Section Header Tag */}
        <Reveal yOffset={20}>
          <div className="flex flex-col items-start mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-accent dark:bg-accent-dark rounded-full"></span>

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent dark:text-accent-dark">
                Centres d'intérêt & Valeurs
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-neutral-900 dark:text-white tracking-tight">
              Ce Qui M'Anime au Quotidien<span className="text-accent dark:text-accent-dark">.</span>
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm sm:text-base mt-2 max-w-2xl">
              Au-delà des lignes de code, mes passions forgent ma discipline, mon esprit d'équipe et ma soif d'apprendre.
            </p>
          </div>
        </Reveal>

        {/* Interests Cards Stagger */}
        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {interests.map((item) => {
            const Icon = getInterestIcon(item.icon, item.id);
            return (
              <StaggerItem key={item.id} yOffset={24}>
                <div
                  className="h-full p-6 rounded-2xl bg-[#FAFAFA] dark:bg-[#121524] border border-neutral-200/80 dark:border-neutral-800 hover:border-accent/40 dark:hover:border-accent-dark/40 transition-all duration-300 flex flex-col justify-between group shadow-xs hover:shadow-md"
                >
                  <div>
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-white dark:bg-[#181c2f] border border-neutral-200/80 dark:border-neutral-700 shadow-xs flex items-center justify-center text-accent dark:text-accent-dark group-hover:scale-110 group-hover:bg-accent dark:group-hover:bg-accent-dark group-hover:text-white dark:group-hover:text-white transition-all duration-200 mb-5">
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-bold text-lg text-neutral-900 dark:text-white mb-2 group-hover:text-accent dark:group-hover:text-accent-dark transition-colors">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  {/* Tagline / Highlights tag list */}
                  <div className="pt-4 border-t border-neutral-200/60 dark:border-neutral-800">
                    {item.tagline && (
                      <span className="inline-block text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-accent/10 dark:bg-accent-dark/25 text-accent dark:text-accent-dark-light border border-accent/20 dark:border-accent-dark/40">
                        {item.tagline}
                      </span>
                    )}
                    {Array.isArray(item.highlights) && item.highlights.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {item.highlights.map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-white dark:bg-[#181c2f] border border-neutral-200/70 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

      </div>
    </section>
  );
}