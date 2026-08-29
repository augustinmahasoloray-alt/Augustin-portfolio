import { useMemo } from "react";
import { useLanguage } from "../context/LanguageContext.jsx";
import { portfolioShared } from "../data/portfolioShared.js";
import { portfolioContent } from "../data/portfolioContent.js";

export function usePortfolioData() {
  const { language } = useLanguage();

  return useMemo(() => {
    const content = portfolioContent[language];

    return {
      personal: {
        ...portfolioShared.personal,
        ...content.personal
      },
      education: portfolioShared.education.map((item) => ({
        ...item,
        ...content.education[item.id]
      })),
      skills: portfolioShared.skills.map((item) => ({
        ...item,
        ...content.skills[item.id]
      })),
      projects: portfolioShared.projects.map((item) => ({
        ...item,
        ...content.projects[item.id]
      })),
      certificates: portfolioShared.certificates.map((item) => ({
        ...item,
        ...content.certificates[item.id]
      })),
      interests: portfolioShared.interests.map((item) => ({
        ...item,
        ...content.interests[item.id]
      }))
    };
  }, [language]);
}