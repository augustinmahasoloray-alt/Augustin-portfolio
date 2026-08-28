import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { AnimatedThemeToggler } from "./AnimatedThemeToggler.jsx";

export default function Navbar({ personal, isDark, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Accueil", href: "#hero" },
    { label: "À propos", href: "#about" },
    { label: "Formation", href: "#formation" },
    { label: "Compétences", href: "#competences" },
    { label: "Projets", href: "#projets" },
    { label: "Certifications", href: "#certifications" },
    { label: "Passions", href: "#interets" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    const navbarHeight = document.getElementById("main-navbar")?.offsetHeight || 80;
    const targetPosition = el.getBoundingClientRect().top + window.scrollY - navbarHeight - 12;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });

    window.history.pushState(null, "", href);
  };

  const handleLinkClick = (e, href) => {
    scrollToSection(e, href);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 $
        {isScrolled
          ? "bg-white/90 dark:bg-[#0b0d14]/90 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_25px_-4px_rgba(0,0,0,0.5)] border-b border-neutral-100 dark:border-neutral-800/80 py-3"
          : "bg-[#FAFAFA]/80 dark:bg-[#0b0d14]/80 backdrop-blur-sm py-4 sm:py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo Badge */}
        <a
          id="nav-logo-link"
          href="#hero"
          onClick={(e) => scrollToSection(e, "#hero")}
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-xl"
        >
          <div className="w-10 h-10 rounded-xl bg-accent dark:bg-accent-dark text-white flex items-center justify-center font-display font-bold text-lg shadow-sm shadow-accent/30 group-hover:scale-105 transition-transform duration-200">
            {personal.initials}
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-neutral-900 dark:text-white text-base leading-tight group-hover:text-accent dark:group-hover:text-accent-dark transition-colors">
              {personal.firstName}
            </span>
            <span className="text-[11px] text-neutral-500 dark:text-neutral-400 font-medium tracking-wide uppercase">
              Full Stack Dev
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="px-3.5 py-2 text-[14px] font-medium text-neutral-600 dark:text-neutral-300 hover:text-accent dark:hover:text-accent-dark hover:bg-accent/5 dark:hover:bg-accent-dark/15 rounded-lg transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Theme Toggle + Contact Action Button */}
        <div className="flex items-center gap-2.5">
          <AnimatedThemeToggler isDark={isDark} toggleTheme={toggleTheme} />

          <div className="hidden sm:flex items-center">
            <a
              id="nav-contact-cta"
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-accent hover:bg-accent-hover dark:bg-accent-dark dark:hover:bg-accent-dark-hover rounded-xl shadow-sm shadow-accent/25 dark:shadow-sm dark:shadow-accent-dark/25 hover:shadow-md hover:shadow-accent/35 dark:hover:shadow-md dark:hover:shadow-accent-dark/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <span>Me contacter</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <button
            id="mobile-menu-toggle"
            type="button"
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl text-neutral-700 dark:text-neutral-300 hover:text-accent dark:hover:text-accent-dark hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden border-b border-neutral-200 dark:border-neutral-800 bg-white/98 dark:bg-[#0f121d]/98 backdrop-blur-xl px-6 py-5 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="flex flex-col gap-1.5 pb-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-4 py-2.5 text-base font-medium text-neutral-700 dark:text-neutral-200 hover:text-accent dark:hover:text-accent-dark hover:bg-accent/5 dark:hover:bg-accent-dark/10 rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-accent hover:bg-accent-hover dark:bg-accent-dark dark:hover:bg-accent-dark-hover rounded-xl shadow-sm transition-all"
            >
              <span>Me contacter</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}