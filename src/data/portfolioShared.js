export const portfolioShared = {
  personal: {
    firstName: "Augustin",
    lastName: "R.",
    fullName: "Augustin M.",
    initials: "AM",
    location: "Antananarivo, Madagascar",
    email: "augustinmahasoloray@gmail.com",
    phone: "+261 34 00 000 00",
    brandName: "Augment",
    socialLinks: {
      github: "https://github.com/",
      linkedin: "https://linkedin.com/",
      email: "mailto:augustinmahasoloray@gmail.com"
    }
  },

  education: [
    { id: "edu-1", period: "2026 — En cours", current: true, tagsIcon: null },
    { id: "edu-2", period: "2022 — 2023", current: false, tagsIcon: null }
  ],

  skills: [
    { id: "prisma", name: "Prisma", category: "database", percentage: 40, badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200" },
    { id: "nodejs", name: "Node.js / Express", category: "backend", percentage: 55, badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200" },
    { id: "postgres", name: "PostgreSQL / MySQL", category: "database", percentage: 50, badgeColor: "bg-blue-50 text-blue-700 border-blue-200" },
    { id: "git", name: "Git & GitHub", category: "tools", percentage: 60, badgeColor: "bg-orange-50 text-orange-700 border-orange-200" },
    { id: "cloudinary", name: "Cloudinary", category: "tools", percentage: 70, badgeColor: "bg-cyan-50 text-cyan-700 border-cyan-200" },
    { id: "jwt", name: "JWT (Authentification)", category: "backend", percentage: 50, badgeColor: "bg-purple-50 text-purple-700 border-purple-200" },
    { id: "react", name: "React", category: "frontend", percentage: 38, badgeColor: "bg-violet-50 text-violet-700 border-violet-200" },
    { id: "html", name: "HTML5", category: "frontend", percentage: 90, badgeColor: "bg-orange-50 text-orange-700 border-orange-200" },
    { id: "css", name: "CSS3", category: "frontend", percentage: 90, badgeColor: "bg-blue-50 text-blue-700 border-blue-200" },
    { id: "javascript", name: "JavaScript", category: "frontend", percentage: 80, badgeColor: "bg-yellow-50 text-yellow-700 border-yellow-200" },
    { id: "kotlin", name: "Kotlin", category: "backend", percentage: 45, badgeColor: "bg-purple-50 text-purple-700 border-purple-200" },
    { id: "bcrypt", name: "Bcrypt", category: "backend", percentage: 70, badgeColor: "bg-slate-50 text-slate-700 border-slate-200" },
    { id: "mysql", name: "MySQL", category: "database", percentage: 70, badgeColor: "bg-cyan-50 text-cyan-700 border-cyan-200" },
    { id: "vercel", name: "Vercel", category: "deployment", percentage: 75, badgeColor: "bg-teal-50 text-teal-700 border-teal-200" },
    { id: "netlify", name: "Netlify", category: "deployment", percentage: 70, badgeColor: "bg-teal-50 text-teal-700 border-teal-200" },
    { id: "railway", name: "Railway", category: "deployment", percentage: 65, badgeColor: "bg-teal-50 text-teal-700 border-teal-200" },
    { id: "github", name: "GitHub", category: "deployment", percentage: 80, badgeColor: "bg-teal-50 text-teal-700 border-teal-200" },
    { id: "flyio", name: "Fly.io", category: "deployment", percentage: 50, badgeColor: "bg-teal-50 text-teal-700 border-teal-200" }
  ],

  projects: [
    {
      id: "tsiafakara",
      title: "Tsiafakara",
      technologies: ["React", "Tailwind CSS", "JavaScript", "Responsive UI"],
      themeColor: "from-amber-600 to-orange-700",
      accentColor: "var(--color-accent)",
      image: "/images/tsiakafara.png",
      link: "https://tsiakafara.netlify.app"
    },
    {
      id: "horizone-journal",
      title: "Horizone Journal",
      technologies: ["Vanilla JS (SPA)", "API Express", "Node.js", "Tailwind CSS"],
      themeColor: "from-emerald-600 to-teal-700",
      accentColor: "var(--color-accent)",
      image: "/images/journal.png",
      link: "https://horizone-journal.vercel.app"
    },
    {
      id: "space-alien-landing",
      title: "Space Alien Landing",
      technologies: ["React", "Vite", "Tailwind CSS", "Animations CSS"],
      themeColor: "from-fuchsia-600 to-purple-800",
      accentColor: "var(--color-accent)",
      image: "/images/tapeo.png",
      link: "https://tapeo-v4de.onrender.com"
    }
  ],

  certificates: [
    { id: "cert-1", issuer: "Passerelles Numériques Madagasikara", issuerLogo: "/images/logos/pnm.png", date: "2026 — en cours" },
    { id: "cert-2", issuer: "HappyYou", issuerLogo: "/images/logos/happyYou.jpg", date: "2026" },
    { id: "cert-3", issuer: "Club Fongotra", issuerLogo: "/images/logos/fongotra.jfif", date: "2024" },
    { id: "cert-4", issuer: "Frantastique", issuerLogo: "/images/logos/gymglish.jpg", date: "2026" },
    { id: "cert-5", issuer: "Gymglish", issuerLogo: "/images/logos/gymglish.jpg", date: "2026" }
  ],

  interests: [
    { id: "design", icon: "Palette", color: "bg-violet-50 text-violet-600 border-violet-100" },
    { id: "photographie", icon: "Camera", color: "bg-indigo-50 text-indigo-600 border-indigo-100" },
    { id: "astronomie", icon: null, color: "bg-violet-50 text-violet-600 border-violet-100" },
    { id: "sciences", icon: "Atom", color: "bg-emerald-50 text-emerald-600 border-emerald-100" }
  ]
};