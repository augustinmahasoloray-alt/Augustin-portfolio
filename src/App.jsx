import React, { useState, useEffect } from "react";
import { portfolioData } from "./data/portfolioData.js";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Education from "./components/Education.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Certificates from "./components/Certificates.jsx";
import Interests from "./components/Interests.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import CustomCursor from "./components/CustomCursor.jsx";

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("portfolio-theme");
      if (saved) return saved === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("portfolio-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("portfolio-theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#0b0d14] text-neutral-800 dark:text-neutral-100 flex flex-col font-sans selection:bg-accent/20 selection:text-accent transition-colors duration-300">
      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* Sticky Header Navbar */}
      <Navbar
        personal={portfolioData.personal}
        isDark={isDark}
        toggleTheme={toggleTheme}
      />

      {/* Main Single-Page Sections with Framer Motion and GSAP */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero personal={portfolioData.personal} isDark={isDark} />

        {/* 2. À propos Section */}
        <About personal={portfolioData.personal} />

        {/* 3. Mon Parcours (Formation) Section */}
        <Education education={portfolioData.education} />

        {/* 4. Compétences Maîtrisées Section */}
        <Skills skills={portfolioData.skills} />

        {/* 5. Projets Récents Section */}
        <Projects projects={portfolioData.projects} />

        {/* 6. Certifications & Distinctions Section */}
        <Certificates certificates={portfolioData.certificates} />

        {/* 7. Centres d'intérêt Section */}
        <Interests interests={portfolioData.interests} />

        {/* 8. Contact Section */}
        <Contact personal={portfolioData.personal} />
      </main>

      {/* Footer Section */}
      <Footer personal={portfolioData.personal} isDark={isDark} />
    </div>
  );
}
