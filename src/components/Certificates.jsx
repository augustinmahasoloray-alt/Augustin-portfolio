import React from "react";
import { Award, CheckCircle2 } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "./AnimatedReveal.jsx";

export default function Certificates({ certificates = [] }) {
  return (
    <section id="certifications" className="py-20 md:py-28 bg-[#FAFAFA] dark:bg-[#0b0d14] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        <Reveal yOffset={20}>
          <div className="flex flex-col items-start mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-accent dark:bg-accent-dark rounded-full"></span>

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent dark:text-accent-dark">
                Reconnaissance & Formation
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-neutral-900 dark:text-white tracking-tight">
              Certifications & Distinctions<span className="text-accent dark:text-accent-dark">.</span>
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm sm:text-base mt-2 max-w-2xl">
              Attestations officielles et parcours d'excellence validant mon engagement et mes compétences techniques.
            </p>
          </div>
        </Reveal>

        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <StaggerItem key={cert.id} yOffset={24}>
              <div className="h-full p-6 rounded-2xl bg-white dark:bg-[#121524] border border-neutral-200/80 dark:border-neutral-800 shadow-xs hover:shadow-md hover:border-accent/40 dark:hover:border-accent-dark/40 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 dark:bg-accent-dark/20 border border-accent/20 dark:border-accent-dark/40 flex items-center justify-center text-accent dark:text-accent-dark group-hover:scale-105 transition-transform">
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300">
                      {cert.year || cert.date}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base text-neutral-900 dark:text-white mb-1 group-hover:text-accent dark:group-hover:text-accent-dark transition-colors">
                    {cert.title}
                  </h3>

                  {/* Issuer avec logo */}
                  <div className="flex items-center gap-2 text-xs font-medium text-accent dark:text-accent-dark mb-3">
                    {cert.issuerLogo ? (
                      <img
                        src={cert.issuerLogo}
                        alt={`Logo ${cert.issuer}`}
                        className="w-30 h-30 rounded-full object-contain bg-white dark:bg-[#181c2f] shrink-0"
                        onError={(e) => { e.target.style.display = "none"; }}
                      />
                    ) : (
                      <div className="w-30 h-30 rounded-full bg-accent/10 dark:bg-accent-dark/20 shrink-0" />
                    )}
                    <span>{cert.issuer}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800 flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{cert.status === "Validé" ? "Attestation Validée" : cert.status}</span>
                </div>

              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
}