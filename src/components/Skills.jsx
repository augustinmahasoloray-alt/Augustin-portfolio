import {
  SiPrisma,
  SiNodedotjs,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiCloudinary,
  SiJsonwebtokens,
  SiReact,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiKotlin,
  SiVercel,
  SiNetlify,
  SiRailway,
  SiGithub,
  SiFlydotio
} from "react-icons/si";
import { KeyRound } from "lucide-react";
import { useState } from "react";
import { Reveal } from "./AnimatedReveal.jsx";
import { motion, AnimatePresence } from "motion/react";

export default function Skills({ skills = [] }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "Toutes les compétences" },
    { id: "backend", label: "Backend & API" },
    { id: "database", label: "Bases de Données & ORM" },
    { id: "frontend", label: "Frontend" },
    { id: "deployment", label: "Déploiement" },
    { id: "tools", label: "Outils & Services" }
  ];

  const getSkillIcon = (id) => {
    switch (id) {
      case "prisma":
        return { Icon: SiPrisma, color: "var(--color-accent)" };
      case "nodejs":
        return { Icon: SiNodedotjs, color: "var(--color-accent)" };
      case "postgres":
        return { Icon: SiPostgresql, color: "var(--color-accent)" };
      case "mysql":
        return { Icon: SiMysql, color: "var(--color-accent)" };
      case "git":
        return { Icon: SiGit, color: "var(--color-accent)" };
      case "cloudinary":
        return { Icon: SiCloudinary, color: "var(--color-accent)" };
      case "jwt":
        return { Icon: SiJsonwebtokens, color: "var(--color-accent)" };
      case "react":
        return { Icon: SiReact, color: "var(--color-accent)" };
      case "html":
      case "html5":
        return { Icon: SiHtml5, color: "var(--color-accent)" };
      case "css":
        return { Icon: SiCss, color: "var(--color-accent)" };
      case "javascript":
      case "js":
        return { Icon: SiJavascript, color: "var(--color-accent)" };
      case "kotlin":
        return { Icon: SiKotlin, color: "var(--color-accent)" };
      case "bcrypt":
        return { Icon: KeyRound, color: "var(--color-accent)" };
      case "vercel":
        return { Icon: SiVercel, color: "var(--color-accent)" };
      case "netlify":
        return { Icon: SiNetlify, color: "var(--color-accent)" };
      case "railway":
        return { Icon: SiRailway, color: "var(--color-accent)" };
      case "github":
        return { Icon: SiGithub, color: "var(--color-accent)" };
      case "flyio":
        return { Icon: SiFlydotio, color: "var(--color-accent)" };
      default:
        return { Icon: SiReact, color: "var(--color-accent)" };
    }
  };

  const getBadgeStyle = (skill) => {
    return "bg-accent/10 dark:bg-accent-dark/25 text-accent dark:text-accent-dark-light border border-accent/20 dark:border-accent-dark/40";
  };

  const filteredSkills = activeCategory === "all"
    ? skills
    : skills.filter(s => s.category === activeCategory);

  return (
    <section id="competences" className="py-20 md:py-28 bg-[#FAFAFA] dark:bg-[#0b0d14] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        <Reveal yOffset={20}>
          <div className="flex flex-col items-start mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-accent dark:bg-accent-dark rounded-full"></span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent dark:text-accent-dark">
                Compétences maîtrisées
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-neutral-900 dark:text-white tracking-tight">
              Stack Technique & Savoir-Faire<span className="text-accent dark:text-accent-dark">.</span>
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm sm:text-base mt-2 max-w-2xl">
              Technologies et outils que j'utilise au quotidien pour développer des architectures web stables et performantes.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} yOffset={16}>
          <div className="flex flex-wrap items-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-accent text-white shadow-sm shadow-accent/25 dark:bg-accent-dark dark:text-white dark:shadow-sm dark:shadow-accent-dark/25"
                    : "bg-white dark:bg-[#121524] text-neutral-600 dark:text-neutral-300 border border-neutral-200/80 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-[#181c2f]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => {
              const { Icon, color } = getSkillIcon(skill.id);
              return (
                <motion.div
                  key={skill.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                    ease: [0.21, 0.47, 0.32, 0.98]
                  }}
                >
                  <div className="h-full p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#121524] border border-neutral-200/80 dark:border-neutral-800 shadow-xs hover:shadow-md hover:border-accent/40 dark:hover:border-accent-dark/40 transition-all duration-200 flex flex-col justify-between group">
                    <div>
                      <div className="flex items-center justify-between gap-4 mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-white dark:bg-neutral-100 border border-neutral-100 dark:border-neutral-200 flex items-center justify-center group-hover:scale-105 transition-transform shadow-xs">
                            <Icon className="w-5 h-5" style={{ color }} />
                          </div>
                          <div>
                            <h3 className="font-display font-bold text-base text-neutral-900 dark:text-white group-hover:text-accent dark:group-hover:text-accent-dark transition-colors">
                              {skill.name}
                            </h3>
                            <span className="text-[11px] text-neutral-400 dark:text-neutral-500 font-medium">
                              {skill.category === "backend" && "Architecture & API"}
                              {skill.category === "database" && "Gestion des Données"}
                              {skill.category === "frontend" && "Interface & Client"}
                              {skill.category === "deployment" && "Hébergement & CI/CD"}
                              {skill.category === "tools" && "Productivité & Médias"}
                            </span>
                          </div>
                        </div>

                        <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${getBadgeStyle(skill)}`}>
                          {skill.level}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
                        {skill.description}
                      </p>
                    </div>

                    <div className="pt-2">
                      <div className="flex items-center justify-between text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-1.5">
                        <span>Niveau d'aisance</span>
                        <span className="font-bold text-accent dark:text-accent-dark">{skill.percentage}%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-neutral-100 dark:bg-neutral-800 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.percentage}%` }}
                          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 + index * 0.05 }}
                          className="h-full rounded-full bg-gradient-to-r from-accent to-accent-hover dark:from-accent-dark dark:to-accent-dark-hover"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}