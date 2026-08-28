export const portfolioData = {
  personal: {
    firstName: "Augustin",
    lastName: "R.",
    fullName: "Augustin M.",
    initials: "AM",
    role: "Développeur Web Full Stack",
    bioShort: "Développeur Full-Stack Junior passionné par la création d'applications web modernes et performantes, basé à Antananarivo, Madagascar.",
    bioFull: "Développeur Full-Stack Junior passionné par la conception et le développement d'applications web modernes. Je travaille sur l'ensemble de la chaîne de développement, du back-end à l'interface utilisateur, avec une attention particulière portée à la qualité du code, aux performances et à l'expérience utilisateur.", location: "Antananarivo, Madagascar",
    email: "augustinmahasoloray@gmail.com",
    phone: "+261 34 00 000 00",
    availability: "Disponible (Stage & Projets)",
    experienceLevel: "Développeur Full-Stack Junior / En développement professionnel",
    brandName: "Augment",
    socialLinks: {
      github: "https://github.com/",
      linkedin: "https://linkedin.com/",
      email: "mailto:augustinmahasoloray@gmail.com"
    }
  },

  education: [
    {
      id: "edu-1",
      period: "2026 — En cours",
      title: "Sciences et Technologies du Numérique (STN)",
      institution: "Passerelles Numériques Madagasikara (PNM)",
      location: "Antananarivo, Madagascar",
      status: "Formation en cours",
      current: true,
      description: "Formation intensive d'excellence préparant aux métiers du numérique. Développement web full stack moderne, algorithmique avancée, modélisation de bases de données, architectures REST, gestion de projets agiles (Scrum) et bonnes pratiques logicielles.",
      tags: ["Full Stack", "Algorithmique", "Bases de Données", "Méthodologie Agile", "Soft Skills"]
    },
    {
      id: "edu-2",
      period: "2022 — 2023",
      title: "Baccalauréat Scientifique",
      institution: "Lycée d'Enseignement Général",
      location: "Madagascar",
      status: "Diplôme obtenu",
      current: false,
      description: "Parcours académique orienté sciences exactes, mathématiques appliquées, physique et logique formelle, posant les bases du raisonnement algorithmique.",
      tags: ["Mathématiques", "Sciences", "Logique & Raisonnement"]
    }
  ],

  skills: [
    {
      id: "prisma",
      name: "Prisma",
      category: "database",
      level: "Intermédiaire",
      percentage: 40,
      description: "ORM type-safe moderne, modélisation de schémas, migrations automatisées et requêtes optimisées.",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200"
    },
    {
      id: "nodejs",
      name: "Node.js / Express",
      category: "backend",
      level: "Intermédiaire",
      percentage: 55,
      description: "Développement d'APIs RESTful structurées, gestion des middlewares, routage et logique métier serveur.",
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200"
    },
    {
      id: "postgres",
      name: "PostgreSQL / MySQL",
      category: "database",
      level: "Intermédiaire",
      percentage: 50,
      description: "Conception de bases de données relationnelles, intégrité référentielle, indexation et requêtes SQL.",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200"
    },
    {
      id: "git",
      name: "Git & GitHub",
      category: "tools",
      level: "Intermédiaire",
      percentage: 60,
      description: "Contrôle de version collaboratif, gestion des branches (GitFlow), pull requests et résolution de conflits.",
      badgeColor: "bg-orange-50 text-orange-700 border-orange-200"
    },
    {
      id: "cloudinary",
      name: "Cloudinary",
      category: "tools",
      level: "Intermédiaire",
      percentage: 70,
      description: "Gestion des médias dans le cloud, upload sécurisé d'images, transformations et optimisation CDN.",
      badgeColor: "bg-cyan-50 text-cyan-700 border-cyan-200"
    },
    {
      id: "jwt",
      name: "JWT (Authentification)",
      category: "backend",
      level: "Débutant",
      percentage: 50,
      description: "Sécurisation des routes d'API, génération et vérification de tokens JSON Web Tokens, gestion des sessions stateless.",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200"
    },
    {
      id: "react",
      name: "React",
      category: "frontend",
      level: "Débutant",
      percentage: 38,
      description: "Architecture en composants modulaires, hooks (useState, useEffect), cycle de vie et consommation d'APIs.",
      badgeColor: "bg-violet-50 text-violet-700 border-violet-200"
    },
    {
      id: "html",
      name: "HTML5",
      category: "frontend",
      level: "Avancé",
      percentage: 90,
      description: "Structuration sémantique des pages web, accessibilité et bonnes pratiques de balisage.",
      badgeColor: "bg-orange-50 text-orange-700 border-orange-200"
    },
    {
      id: "css",
      name: "CSS3",
      category: "frontend",
      level: "Avancé",
      percentage: 90,
      description: "Mise en forme responsive, animations, Flexbox/Grid et frameworks utilitaires comme Tailwind CSS.",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200"
    },
    {
      id: "javascript",
      name: "JavaScript",
      category: "frontend",
      level: "Avancé",
      percentage: 80,
      description: "Logique côté client, manipulation du DOM, programmation asynchrone et ES6+.",
      badgeColor: "bg-yellow-50 text-yellow-700 border-yellow-200"
    },
    {
      id: "kotlin",
      name: "Kotlin",
      category: "backend",
      level: "Débutant",
      percentage: 45,
      description: "Développement backend et exploration du développement mobile natif Android.",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200"
    },
    {
      id: "bcrypt",
      name: "Bcrypt",
      category: "backend",
      level: "Intermédiaire",
      percentage: 70,
      description: "Hachage sécurisé des mots de passe, gestion du salage et vérification des identifiants.",
      badgeColor: "bg-slate-50 text-slate-700 border-slate-200"
    },
    {
      id: "mysql",
      name: "MySQL",
      category: "database",
      level: "Intermédiaire",
      percentage: 70,
      description: "Conception de schémas relationnels, requêtes SQL et administration de bases de données.",
      badgeColor: "bg-cyan-50 text-cyan-700 border-cyan-200"
    },
    {
      id: "vercel",
      name: "Vercel",
      category: "deployment",
      level: "Intermédiaire",
      percentage: 75,
      description: "Déploiement continu d'applications frontend, prévisualisations automatiques par branche.",
      badgeColor: "bg-teal-50 text-teal-700 border-teal-200"
    },
    {
      id: "netlify",
      name: "Netlify",
      category: "deployment",
      level: "Intermédiaire",
      percentage: 70,
      description: "Hébergement de sites statiques et JAMstack, gestion des formulaires et fonctions serverless.",
      badgeColor: "bg-teal-50 text-teal-700 border-teal-200"
    },
    {
      id: "railway",
      name: "Railway",
      category: "deployment",
      level: "Intermédiaire",
      percentage: 65,
      description: "Déploiement d'applications full-stack et bases de données, gestion simplifiée de l'infrastructure.",
      badgeColor: "bg-teal-50 text-teal-700 border-teal-200"
    },
    {
      id: "github",
      name: "GitHub",
      category: "deployment",
      level: "Avancé",
      percentage: 80,
      description: "Hébergement de dépôts, GitHub Actions pour l'intégration continue, gestion des workflows.",
      badgeColor: "bg-teal-50 text-teal-700 border-teal-200"
    },
    {
      id: "flyio",
      name: "Fly.io",
      category: "deployment",
      level: "Débutant",
      percentage: 50,
      description: "Déploiement d'applications conteneurisées au plus proche des utilisateurs, gestion multi-région.",
      badgeColor: "bg-teal-50 text-teal-700 border-teal-200"
    }
  ],

  projects: [
    {
      id: "tsiafakara",
      title: "Tsiafakara",
      subtitle: "Site Culturel du Rituel Sacré Antakarana",
      category: "Culture & Patrimoine",
      featured: true,
      description:
        "Plateforme culturelle consacrée à la découverte, à la préservation et à la transmission du rituel sacré Tsiafakara, pilier de l'identité du peuple Antakarana à Madagascar. Une expérience immersive permettant d'explorer l'histoire, les cérémonies, les symboles, les récits ancestraux et les valeurs spirituelles qui façonnent ce patrimoine unique.",
      technologies: [
        "React",
        "Tailwind CSS",
        "JavaScript",
        "Responsive UI"
      ],
      highlights: [
        "Présentation immersive du rituel Tsiafakara",
        "Exploration de l'histoire et des origines du peuple Antakarana",
        "Galerie multimédia des cérémonies et lieux emblématiques",
        "Navigation intuitive adaptée aux appareils mobiles",
        "Valorisation des traditions orales et du patrimoine culturel",
        "Expérience éducative accessible à tous les publics"
      ],
      themeColor: "from-amber-600 to-orange-700",
      accentColor: "var(--color-accent)",
      type: "Projet Culturel & Éducatif",
      image: "/images/tsiakafara.png",
      link: "https://tsiakafara.netlify.app"
    },
    {
      id: "horizone-journal",
      title: "Horizone Journal",
      subtitle: "Blog & Journal de Voyage et Randonnée",
      category: "Full Stack / SPA",
      featured: true,
      description: "Application monopage fluide pensée pour les passionnés d'aventure, de trekking et de randonnée. Permet de publier des récits d'expéditions, des conseils d'itinéraires et de partager des galeries de photos géolocalisées.",
      technologies: ["Vanilla JS (SPA)", "API Express", "Node.js", "Tailwind CSS"],
      highlights: [
        "Architecture SPA légère et rapide en JavaScript pur",
        "API REST Express personnalisée pour la publication d'articles",
        "Système de catégorisation par région et niveau de difficulté",
        "Interface épurée invitant à la lecture"
      ],
      themeColor: "from-emerald-600 to-teal-700",
      accentColor: "var(--color-accent)",
      type: "SPA & API REST",
      image: "/images/journal.png",
      link: "https://horizone-journal.vercel.app"
    },
    {
      id: "space-alien-landing",
      title: "Space Alien Landing",
      subtitle: "Landing Page pour Jeu Mobile Sci-Fi",
      category: "Frontend & UI",
      featured: false,
      description: "Page de destination promotionnelle moderne pour un jeu d'arcade mobile de style Space Alien. Intègre des animations visuelles dynamiques, une présentation des mécaniques de jeu et un appel à l'action pour les préinscriptions.",
      technologies: ["React", "Vite", "Tailwind CSS", "Animations CSS"],
      highlights: [
        "Univers graphique futuriste et immersif",
        "Sections de présentation des vaisseaux et ennemis",
        "Formulaire de précommande / newsletter interactif",
        "Performances de rendu optimales"
      ],
      themeColor: "from-fuchsia-600 to-purple-800",
      accentColor: "var(--color-accent)",
      type: "Landing Page Événementielle",
      image: "/images/tapeo.png",
      link: "https://tapeo-v4de.onrender.com"
    }
  ],

  certificates: [
    {
      id: "cert-1",
      title: "Certificat de Formation STN — Cycle Web Full Stack",
      issuer: "Passerelles Numériques Madagasikara",
      issuerLogo: "/images/logos/pnm.png",
      date: "2026 — en cours",
      status: "En cours de validation",
      description: "Validation des compétences clés en développement frontend moderne (React, Vite), backend API (Node/Express, JWT), architectures de données relationnelles et travail collaboratif Agile."
    },
    {
      id: "cert-2",
      title: "Art Oratoire & Prise de Parole en Public",
      issuer: "HappyYou",
      issuerLogo: "/images/logos/happyYou.jpg",
      date: "2026",
      status: "Validé",
      description: "Techniques de communication orale, structuration du discours, gestion du stress et de la voix, argumentation persuasive devant un public."
    },
    {
      id: "cert-3",
      title: "Sensibilisation à la Lutte Contre la Corruption",
      issuer: "Club Fongotra",
      issuerLogo: "/images/logos/fongotra.jfif",
      date: "2024",
      status: "Validé",
      description: "Compréhension des mécanismes de la corruption, principes d'intégrité, de transparence et de redevabilité dans les pratiques professionnelles."
    },
    {
      id: "cert-4",
      title: "Certification en Langue Française",
      issuer: "Frantastique",
      issuerLogo: "/images/logos/gymglish.jpg",
      date: "2026",
      status: "B2",
      description: "Maîtrise de l'expression écrite et orale en français, communication professionnelle et rédaction de documents structurés."
    },
    {
      id: "cert-5",
      title: "Certification en Langue Anglaise",
      issuer: "Gymglish",
      issuerLogo: "/images/logos/gymglish.jpg",
      date: "2026",
      status: "B1",
      description: "Compétences en compréhension et expression écrite et orale en anglais, communication professionnelle dans un contexte international."
    }
  ],

  interests: [
    {
      id: "design",
      title: "Design",
      tagline: "Créativité visuelle & expérience",
      description: "Passionné par le design et la création visuelle, j’aime concevoir des interfaces modernes, harmonieuses et intuitives. Cette sensibilité nourrit ma manière de penser les couleurs, les formes, la typographie et l’expérience utilisateur dans mes projets web.",
      icon: "Palette",
      color: "bg-violet-50 text-violet-600 border-violet-100"
    },
    {
      id: "photographie",
      title: "Photographie",
      tagline: "Lumière, composition & cadrage",
      description: "Capture de paysages, de portraits et de détails du quotidien à Madagascar. Affine mon souci du détail et de la perspective spatiale.",
      icon: "Camera",
      color: "bg-indigo-50 text-indigo-600 border-indigo-100"
    },
    {
      id: "astronomie",
      title: "Astronomie",
      tagline: "Exploration cosmique & physique céleste",
      description: "Fascination pour les sciences spatiales, les missions d'exploration et la modélisation de l'univers, stimulant une curiosité scientifique sans fin.",
      color: "bg-violet-50 text-violet-600 border-violet-100"
    },
    {
      id: "sciences",
      title: "Documentaires scientifiques",
      tagline: "Curiosité intellectuelle & technologies",
      description: "Veille constante sur les découvertes technologiques, l'intelligence artificielle, l'écologie et l'évolution des sciences appliquées.",
      icon: "Atom",
      color: "bg-emerald-50 text-emerald-600 border-emerald-100"
    }
  ]
};
