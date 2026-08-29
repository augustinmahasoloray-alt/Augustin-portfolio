import { createContext, useContext, useMemo, useState } from "react";
import { translations } from "../i18n/translations.js";

const LanguageContext = createContext(undefined);

export function LanguageProvider({ children, defaultLanguage = "fr" }) {
  const [language, setLanguage] = useState(defaultLanguage);

  const toggleLanguage = () =>
    setLanguage((prev) => (prev === "fr" ? "en" : "fr"));

  const t = useMemo(() => translations[language] ?? translations.fr, [language]);

  const value = useMemo(
    () => ({ language, setLanguage, toggleLanguage, t }),
    [language, t]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

