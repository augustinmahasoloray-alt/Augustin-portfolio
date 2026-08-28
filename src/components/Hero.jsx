import React, { useEffect, useRef } from "react";
import { ArrowRight, FolderKanban, Code2, Database } from "lucide-react";
import {
  SiReact,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiNodedotjs,
  SiTailwindcss,
  SiPostgresql,
  SiGithub,
  SiKotlin,
  SiMysql,
  SiLinux,
  SiJsonwebtokens,
  SiPrisma
} from "react-icons/si";
import { Reveal } from "./AnimatedReveal.jsx";
import { OrbitingCircles } from "./ui/Orbiting-circles.jsx";
import { useGsapMagnetic, useGsapFloating } from "../hooks/useGsapEffects.js";
import gsap from "gsap";

export default function Hero({ personal, isDark }) {
  const primaryCtaRef = useGsapMagnetic(0.25);
  const secondaryCtaRef = useGsapMagnetic(0.2);
  const badgeFloating1 = useGsapFloating(8, 2.8);
  const badgeFloating2 = useGsapFloating(6, 3.4);
  const statsContainerRef = useRef(null);


  useEffect(() => {
    if (!statsContainerRef.current) return;
    const targets = statsContainerRef.current.querySelectorAll(".stat-counter");

    gsap.fromTo(
      targets,
      { y: 15, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        delay: 0.4
      }
    );
  }, []);

  const TechIcon = ({ Icon, color }) => (
    <div className="w-full h-full rounded-full bg-white dark:bg-neutral-100 shadow-md border border-neutral-200/60 flex items-center justify-center">
      <Icon className="w-1/2 h-1/2" style={{ color }} />
    </div>
  );

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden transition-colors duration-300"
    >
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-accent/10 dark:bg-accent-dark/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-48 left-10 w-72 h-72 bg-accent/10 dark:bg-accent-dark/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Presentation */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <Reveal delay={0.2} yOffset={24}>
              <h1
                id="hero-headline"
                className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-neutral-900 dark:text-white tracking-tight leading-[1.1] mb-4"
              >
                Bonjour, je suis{" "}
                <span className="text-accent dark:text-accent-dark relative inline-block">
                  {personal.firstName} !
                  <svg
                    className="absolute -bottom-1 left-0 w-full h-2 text-accent/30 dark:text-accent-dark/30"
                    viewBox="0 0 100 12"
                    preserveAspectRatio="none"
                  >
                    <path d="M0,8 Q50,0 100,8" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.3} yOffset={20}>
              <h2
                id="hero-subtitle"
                className="font-display font-semibold text-xl sm:text-2xl text-neutral-600 dark:text-neutral-300 mb-6 flex items-center gap-2"
              >
                <span>{personal.role}</span>
                <span className="w-2 h-2 rounded-full bg-accent dark:bg-accent-dark"></span>
                <span className="text-sm font-normal text-neutral-400 dark:text-neutral-500">Madagascar</span>
              </h2>
            </Reveal>

            <Reveal delay={0.4} yOffset={20}>
              <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mb-8 max-w-xl">
                <span className="font-semibold text-neutral-900 dark:text-white">
                  Développeur Full-Stack Junior
                </span>{" "}
                passionné par la création d'applications web modernes, performantes et intuitives. Je conçois des solutions élégantes et centrées sur l'utilisateur.
              </p>
            </Reveal>

            <Reveal delay={0.5} yOffset={20}>
              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                <div ref={primaryCtaRef} className="w-full sm:w-auto inline-block">
                  <a
                    id="hero-cta-work"
                    href="#contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-white bg-accent hover:bg-accent-hover dark:bg-accent-dark dark:hover:bg-accent-dark-hover shadow-sm shadow-accent/25 hover:shadow-md hover:shadow-accent/35 dark:shadow-sm dark:shadow-accent-dark/25 dark:hover:shadow-md dark:hover:shadow-accent-dark/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-base"
                  >
                    <span>Travaillons ensemble</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                <div ref={secondaryCtaRef} className="w-full sm:w-auto inline-block">
                  <a
                    id="hero-cta-projects"
                    href="#projets"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-neutral-700 dark:text-neutral-200 bg-white dark:bg-[#151928] hover:bg-neutral-50 dark:hover:bg-[#1c2237] border border-neutral-200/90 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 shadow-xs hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-base"
                  >
                    <FolderKanban className="w-4 h-4 text-accent dark:text-accent-dark" />
                    <span>Voir mes projets</span>
                  </a>
                </div>
              </div>
            </Reveal>

            <div
              ref={statsContainerRef}
              className="mt-10 pt-8 border-t border-neutral-200/60 dark:border-neutral-800/80 grid grid-cols-3 gap-6 w-full max-w-lg"
            >
              <div className="stat-counter">
                <div className="font-display font-bold text-2xl text-neutral-900 dark:text-white">4+</div>
                <div className="text-xs font-medium text-neutral-500 dark:text-neutral-400">Projets phares</div>
              </div>
              <div className="stat-counter">
                <div className="font-display font-bold text-2xl text-neutral-900 dark:text-white">PNM</div>
                <div className="text-xs font-medium text-neutral-500 dark:text-neutral-400">STN Scholar</div>
              </div>
              <div className="stat-counter">
                <div className="font-display font-bold text-2xl text-accent dark:text-accent-dark">100%</div>
                <div className="text-xs font-medium text-neutral-500 dark:text-neutral-400">Dédié & Passionné</div>
              </div>
            </div>
          </div>

          {/* Right Column: Photo + Orbite de technos */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <Reveal delay={0.3} yOffset={30} scale={0.96}>
              <div className="relative">

                {/* Card photo */}
                <div className="w-80 sm:w-96 md:w-[420px] h-[480px] sm:h-[560px] md:h-[600px] rounded-3xl overflow-hidden relative">
                  <img
                    src="/images/augustin.png"
                    alt="Augustin R."
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/20 via-black/10 to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-[11px] font-semibold text-white">
                    <span>Antananarivo, MG</span>
                  </div>
                </div>

                {/* Orbite de logos technos */}
                <div className="absolute left-1/2 -translate-x-1/2 top-[62%] w-[320px] h-[320px] pointer-events-none z-10">
                  {/* Cercle intérieur (rayon 90px) */}
                  <OrbitingCircles iconSize={36} radius={90} path={false} duration={18}>
                    <TechIcon Icon={SiReact} color="#61DAFB" />
                    <TechIcon Icon={SiNodedotjs} color="#5FA04E" />
                    <TechIcon Icon={SiTailwindcss} color="#06B6D4" />
                    <TechIcon Icon={SiPostgresql} color="#336791" />
                    <TechIcon Icon={SiPrisma} color="#2D3748" />
                    <TechIcon Icon={SiJsonwebtokens} color="#000000" /> {/* JWT */}
                  </OrbitingCircles>

                  {/* Cercle extérieur (rayon 130px, sens inverse) */}
                  <OrbitingCircles iconSize={28} radius={130} reverse path={false} duration={24}>
                    <TechIcon Icon={SiHtml5} color="#E34F26" />
                    <TechIcon Icon={SiCss} color="#1572B6" />
                    <TechIcon Icon={SiJavascript} color="#F7DF1E" />
                    <TechIcon Icon={SiGithub} color="#181717" />
                    <TechIcon Icon={SiKotlin} color="#7F52FF" />
                    <TechIcon Icon={SiMysql} color="#4479A1" /> {/* SQL */}
                    <TechIcon Icon={SiLinux} color="#FCC624" />
                  </OrbitingCircles>
                </div>

                {/* Floating Badge 1 */}
                <div
                  ref={badgeFloating1}
                  className="absolute -top-4 -left-4 sm:-left-8 bg-white dark:bg-[#151928] border border-neutral-200/80 dark:border-neutral-800 rounded-2xl px-4 py-2.5 shadow-lg flex items-center gap-2.5 z-20"
                >
                  <div className="w-8 h-8 rounded-xl bg-accent/10 dark:bg-accent-dark/20 text-accent dark:text-accent-dark flex items-center justify-center">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-neutral-400 dark:text-neutral-500 tracking-wider">Focus</div>
                    <div className="text-xs font-bold text-neutral-800 dark:text-neutral-200">Full Stack Web</div>
                  </div>
                </div>

                {/* Floating Badge 2 */}
                <div
                  ref={badgeFloating2}
                  className="absolute -bottom-4 -right-4 sm:-right-8 bg-white dark:bg-[#151928] border border-neutral-200/80 dark:border-neutral-800 rounded-2xl px-4 py-2.5 shadow-lg flex items-center gap-2.5 z-20"
                >
                  <div className="w-8 h-8 rounded-xl bg-accent-light dark:bg-accent-dark-light/30 text-accent dark:text-accent-dark flex items-center justify-center">
                    <Database className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-neutral-400 dark:text-neutral-500 tracking-wider">Backend</div>
                    <div className="text-xs font-bold text-neutral-800 dark:text-neutral-200">Node & Prisma</div>
                  </div>
                </div>

              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}