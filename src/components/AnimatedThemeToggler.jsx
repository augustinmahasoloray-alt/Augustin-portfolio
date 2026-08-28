import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

export function AnimatedThemeToggler({ isDark, toggleTheme }) {
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Évite le flash au chargement (hydratation)
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = () => {
    setIsAnimating(true);
    toggleTheme();
    // Réinitialise l'animation après 300ms
    setTimeout(() => setIsAnimating(false), 300);
  };

  if (!mounted) {
    return (
      <button
        type="button"
        className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 dark:bg-neutral-800"
        disabled
      />
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={isDark ? "Activer le mode clair" : "Activer le mode sombre"}
      className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-white dark:bg-[#151928] border border-neutral-200/80 dark:border-neutral-800 shadow-xs hover:shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer overflow-hidden"
    >
      {/* Animation de fond (cercle qui tourne) */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
          isAnimating ? "rotate-180" : "rotate-0"
        }`}
      >
        <div className="absolute h-5 w-5 rounded-full bg-accent dark:bg-accent-dark opacity-10" />
      </div>

      {/* Icônes (Sun/Moon) */}
      <div className="relative z-10">
        {isDark ? (
          <Sun className="h-5 w-5 text-amber-400 transition-all duration-300" />
        ) : (
          <Moon className="h-5 w-5 text-neutral-700 transition-all duration-300" />
        )}
      </div>
    </button>
  );
}