import React from "react";
import { MapPin, Mail, Calendar, Terminal, CheckCircle2 } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "./AnimatedReveal.jsx";

export default function About({ personal }) {
  const infoCards = [
    {
      id: "info-loc",
      label: "Localisation",
      value: personal.location,
      icon: MapPin,
      color: "bg-accent/10 dark:bg-accent-dark/20 border border-accent/20 dark:border-accent-dark/40 text-accent dark:text-accent-dark"
    },
    {
      id: "info-email",
      label: "Courriel direct",
      value: personal.email,
      icon: Mail,
      color: "bg-accent/10 dark:bg-accent-dark/20 border border-accent/20 dark:border-accent-dark/40 text-accent dark:text-accent-dark",
      isEmail: true
    },
    {
      id: "info-avail",
      label: "Disponibilité",
      value: "Immédiate (Stage & Projets)",
      icon: Calendar,
      color: "bg-accent/10 dark:bg-accent-dark/20 border border-accent/20 dark:border-accent-dark/40 text-accent dark:text-accent-dark"
    },
    {
      id: "info-role",
      label: "Spécialisation",
      value: "Full Stack (React, Node, DB)",
      icon: Terminal,
      color: "bg-accent/10 dark:bg-accent-dark/20 border border-accent/20 dark:border-accent-dark/40 text-accent dark:text-accent-dark"
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#FAFAFA] dark:bg-[#0b0d14] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        {/* Section Header Tag */}
        <Reveal yOffset={20}>
          <div className="flex flex-col items-start mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-accent dark:bg-accent-dark rounded-full"></span>

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent dark:text-accent-dark">
                À propos de moi
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-neutral-900 dark:text-white tracking-tight">
              À propos de Moi<span className="text-accent dark:text-accent-dark">.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Left Block: Photo */}
          <div className="lg:col-span-5">
            <Reveal delay={0.1} yOffset={28}>
              <div className="relative mx-auto max-w-md lg:max-w-none">

                {/* Card photo */}
                <div className="w-full h-[420px] sm:h-[480px] rounded-3xl overflow-hidden relative">

                  {/* Photo */}
                  <img
                    src="/images/augustin5.png"
                    alt="Augustin M."
                    className="w-full h-full object-cover object-top"
                  />

                  {/* Overlay dégradé bas */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/10 via-black/10 to-transparent pointer-events-none" />
                </div>

                {/* Badge Actif */}
                <div className="absolute -top-4 -left-4 sm:-left-8 bg-white dark:bg-[#151928] border border-neutral-200/80 dark:border-neutral-800 rounded-2xl px-4 py-2.5 shadow-lg flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-neutral-400 dark:text-neutral-500 tracking-wider">Statut</div>
                    <div className="text-xs font-bold text-neutral-800 dark:text-neutral-200">Actif</div>
                  </div>
                </div>

                {/* Badge Parcours */}
                <div className="absolute -bottom-4 -right-4 sm:-right-8 bg-white dark:bg-[#151928] border border-neutral-200/80 dark:border-neutral-800 rounded-2xl px-4 py-2.5 shadow-lg flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-accent/10 dark:bg-accent-dark/20 text-accent dark:text-accent-dark flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-neutral-400 dark:text-neutral-500 tracking-wider">Parcours</div>
                    <div className="text-xs font-bold text-neutral-800 dark:text-neutral-200">Passerelles Numériques</div>
                  </div>
                </div>

              </div>
            </Reveal>
          </div>

          {/* Right Block: Content and Info Cards */}
          <div className="lg:col-span-7 flex flex-col">

            <Reveal delay={0.15} yOffset={24}>
              <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-200 leading-relaxed mb-6 font-normal">
                {personal.bioFull}
              </p>

              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed mb-8">
                Curieux, méthodique et rigoureux, j'aime transformer des besoins concrets en applications web fluides et robustes, en accordant un soin méticuleux à l'architecture de la base de données, à la sécurité des flux (JWT, Prisma) et à la réactivité de l'interface (React, Tailwind CSS).
              </p>
            </Reveal>

            {/* Info Cards Stagger Grid */}
            <StaggerContainer staggerDelay={0.08} delayChildren={0.2} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {infoCards.map((item) => {
                const Icon = item.icon;
                return (
                  <StaggerItem key={item.id} yOffset={20}>
                    <div
                      className="p-4 rounded-2xl bg-white dark:bg-[#121524] border border-neutral-200/70 dark:border-neutral-800 shadow-xs hover:shadow-md hover:border-accent/40 dark:hover:border-accent-dark/40 transition-all duration-200 flex items-start gap-3.5"
                    >
                      <div
                        className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${item.color}`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
                          {item.label}
                        </span>
                        {item.isEmail ? (
                          <a
                            href={`mailto:${item.value}`}
                            className="text-sm font-bold text-neutral-800 dark:text-neutral-100 hover:text-accent dark:hover:text-accent-dark transition-colors truncate"
                            title={item.value}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-sm font-bold text-neutral-800 dark:text-neutral-100 truncate">
                            {item.value}
                          </span>
                        )}
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>

          </div>

        </div>
      </div>
    </section>
  );
}