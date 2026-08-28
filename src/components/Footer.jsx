import React from "react";
import { ArrowUp, Github, Linkedin, Facebook, Instagram, Mail, Heart } from "lucide-react";
import { SiReact, SiTailwindcss, SiNodedotjs } from "react-icons/si";

export default function Footer({ personal, isDark }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const currentYear = new Date().getFullYear();
  const repoLink = personal?.socialLinks?.github || "https://github.com/";

  const techStack = [
    { name: "React", Icon: SiReact, color: "var(--color-accent)" },
    { name: "Tailwind CSS", Icon: SiTailwindcss, color: "var(--color-accent)" },
    { name: "Node.js", Icon: SiNodedotjs, color: "var(--color-accent)" }
  ];

  return (
    <footer id="portfolio-footer" className="bg-white dark:bg-[#07090f] border-t border-neutral-200/80 dark:border-neutral-800/80 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        {/* Top footer row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-neutral-100 dark:border-neutral-800/60">

          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-accent dark:bg-accent-dark text-white flex items-center justify-center font-display font-bold text-lg shadow-sm">
              {personal.initials}
            </div>
            <div>
              <div className="font-display font-bold text-neutral-900 dark:text-white text-base">
                {personal.fullName}
              </div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400">
                {personal.title} • {personal.location}
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${personal.email}`}
              aria-label="Email"
              className="w-10 h-10 rounded-xl bg-neutral-50 dark:bg-[#121524] border border-neutral-200/80 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-accent dark:hover:text-accent-dark hover:border-accent/40 dark:hover:border-accent-dark/40 flex items-center justify-center transition-all hover:scale-105"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={personal?.socialLinks?.github || "https://github.com"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-xl bg-neutral-50 dark:bg-[#121524] border border-neutral-200/80 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-accent dark:hover:text-accent-dark hover:border-accent/40 dark:hover:border-accent-dark/40 flex items-center justify-center transition-all hover:scale-105"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personal?.socialLinks?.linkedin || "https://linkedin.com"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-xl bg-neutral-50 dark:bg-[#121524] border border-neutral-200/80 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-accent dark:hover:text-accent-dark hover:border-accent/40 dark:hover:border-accent-dark/40 flex items-center justify-center transition-all hover:scale-105"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={personal?.socialLinks?.facebook || "https://facebook.com"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 rounded-xl bg-neutral-50 dark:bg-[#121524] border border-neutral-200/80 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-accent dark:hover:text-accent-dark hover:border-accent/40 dark:hover:border-accent-dark/40 flex items-center justify-center transition-all hover:scale-105"
            >
              <Facebook className="w-4 h-4" />
            </a>

            <a
              href={personal?.socialLinks?.instagram || "https://instagram.com"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-xl bg-neutral-50 dark:bg-[#121524] border border-neutral-200/80 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-accent dark:hover:text-accent-dark hover:border-accent/40 dark:hover:border-accent-dark/40 flex items-center justify-center transition-all hover:scale-105"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Stack technique row — logos cliquables vers le dépôt du code */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 border-b border-neutral-100 dark:border-neutral-800/60">
          <span className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
            Réalisé avec
          </span>
          <div className="flex items-center gap-3">
            {techStack.map(({ name, Icon, color }) => (
              <a
                key={name}
                href={repoLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Voir le code — ${name}`}
                title={`Voir le code (${name})`}
                className="w-10 h-10 rounded-xl bg-neutral-50 dark:bg-white border border-neutral-200/80 dark:border-neutral-200 flex items-center justify-center transition-all hover:scale-105 hover:shadow-sm"
              >
                <Icon className="w-5 h-5" style={{ color }} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom footer row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 dark:text-neutral-400">
          <div className="flex items-center gap-1.5">
            <span>© {currentYear} {personal.fullName}</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-50 dark:bg-[#121524] border border-neutral-200/80 dark:border-neutral-800 hover:bg-accent/10 hover:text-accent dark:hover:text-accent-dark-light dark:hover:bg-accent-dark/20 text-neutral-600 dark:text-neutral-400 transition-all cursor-pointer"
          >
            <span>Haut de page</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}