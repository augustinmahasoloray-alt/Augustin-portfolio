export const portfolioContent = {
  fr: {
    personal: {
      role: "Développeur Web Full Stack",
      bioShort: "Développeur Full-Stack Junior passionné par la création d'applications web modernes et performantes, basé à Antananarivo, Madagascar.",
      bioFull: "Développeur Full-Stack Junior passionné par la conception et le développement d'applications web modernes. Je travaille sur l'ensemble de la chaîne de développement, du back-end à l'interface utilisateur, avec une attention particulière portée à la qualité du code, aux performances et à l'expérience utilisateur.",
      availability: "Disponible (Stage & Projets)",
      experienceLevel: "Développeur Full-Stack Junior / En développement professionnel"
    },

    education: {
      "edu-1": {
        title: "Sciences et Technologies du Numérique (STN)",
        institution: "Passerelles Numériques Madagasikara (PNM)",
        location: "Antananarivo, Madagascar",
        status: "Formation en cours",
        description: "Formation intensive d'excellence préparant aux métiers du numérique. Développement web full stack moderne, algorithmique avancée, modélisation de bases de données, architectures REST, gestion de projets agiles (Scrum) et bonnes pratiques logicielles.",
        tags: ["Full Stack", "Algorithmique", "Bases de Données", "Méthodologie Agile", "Soft Skills"]
      },
      "edu-2": {
        title: "Baccalauréat Scientifique",
        institution: "Lycée d'Enseignement Général",
        location: "Madagascar",
        status: "Diplôme obtenu",
        description: "Parcours académique orienté sciences exactes, mathématiques appliquées, physique et logique formelle, posant les bases du raisonnement algorithmique.",
        tags: ["Mathématiques", "Sciences", "Logique & Raisonnement"]
      }
    },

    skills: {
      prisma: { level: "Intermédiaire", description: "ORM type-safe moderne, modélisation de schémas, migrations automatisées et requêtes optimisées." },
      nodejs: { level: "Intermédiaire", description: "Développement d'APIs RESTful structurées, gestion des middlewares, routage et logique métier serveur." },
      postgres: { level: "Intermédiaire", description: "Conception de bases de données relationnelles, intégrité référentielle, indexation et requêtes SQL." },
      git: { level: "Intermédiaire", description: "Contrôle de version collaboratif, gestion des branches (GitFlow), pull requests et résolution de conflits." },
      cloudinary: { level: "Intermédiaire", description: "Gestion des médias dans le cloud, upload sécurisé d'images, transformations et optimisation CDN." },
      jwt: { level: "Débutant", description: "Sécurisation des routes d'API, génération et vérification de tokens JSON Web Tokens, gestion des sessions stateless." },
      react: { level: "Débutant", description: "Architecture en composants modulaires, hooks (useState, useEffect), cycle de vie et consommation d'APIs." },
      html: { level: "Avancé", description: "Structuration sémantique des pages web, accessibilité et bonnes pratiques de balisage." },
      css: { level: "Avancé", description: "Mise en forme responsive, animations, Flexbox/Grid et frameworks utilitaires comme Tailwind CSS." },
      javascript: { level: "Avancé", description: "Logique côté client, manipulation du DOM, programmation asynchrone et ES6+." },
      kotlin: { level: "Débutant", description: "Développement backend et exploration du développement mobile natif Android." },
      bcrypt: { level: "Intermédiaire", description: "Hachage sécurisé des mots de passe, gestion du salage et vérification des identifiants." },
      mysql: { level: "Intermédiaire", description: "Conception de schémas relationnels, requêtes SQL et administration de bases de données." },
      vercel: { level: "Intermédiaire", description: "Déploiement continu d'applications frontend, prévisualisations automatiques par branche." },
      netlify: { level: "Intermédiaire", description: "Hébergement de sites statiques et JAMstack, gestion des formulaires et fonctions serverless." },
      railway: { level: "Intermédiaire", description: "Déploiement d'applications full-stack et bases de données, gestion simplifiée de l'infrastructure." },
      github: { level: "Avancé", description: "Hébergement de dépôts, GitHub Actions pour l'intégration continue, gestion des workflows." },
      flyio: { level: "Débutant", description: "Déploiement d'applications conteneurisées au plus proche des utilisateurs, gestion multi-région." }
    },

    projects: {
      tsiafakara: {
        subtitle: "Site Culturel du Rituel Sacré Antakarana",
        category: "Culture & Patrimoine",
        featured: true,
        type: "Projet Culturel & Éducatif",
        description: "Plateforme culturelle consacrée à la découverte, à la préservation et à la transmission du rituel sacré Tsiafakara, pilier de l'identité du peuple Antakarana à Madagascar. Une expérience immersive permettant d'explorer l'histoire, les cérémonies, les symboles, les récits ancestraux et les valeurs spirituelles qui façonnent ce patrimoine unique.",
        highlights: [
          "Présentation immersive du rituel Tsiafakara",
          "Exploration de l'histoire et des origines du peuple Antakarana",
          "Galerie multimédia des cérémonies et lieux emblématiques",
          "Navigation intuitive adaptée aux appareils mobiles",
          "Valorisation des traditions orales et du patrimoine culturel",
          "Expérience éducative accessible à tous les publics"
        ]
      },
      "horizone-journal": {
        subtitle: "Blog & Journal de Voyage et Randonnée",
        category: "Full Stack / SPA",
        featured: true,
        type: "SPA & API REST",
        description: "Application monopage fluide pensée pour les passionnés d'aventure, de trekking et de randonnée. Permet de publier des récits d'expéditions, des conseils d'itinéraires et de partager des galeries de photos géolocalisées.",
        highlights: [
          "Architecture SPA légère et rapide en JavaScript pur",
          "API REST Express personnalisée pour la publication d'articles",
          "Système de catégorisation par région et niveau de difficulté",
          "Interface épurée invitant à la lecture"
        ]
      },
      "space-alien-landing": {
        subtitle: "Landing Page pour Jeu Mobile Sci-Fi",
        category: "Frontend & UI",
        featured: false,
        type: "Landing Page Événementielle",
        description: "Page de destination promotionnelle moderne pour un jeu d'arcade mobile de style Space Alien. Intègre des animations visuelles dynamiques, une présentation des mécaniques de jeu et un appel à l'action pour les préinscriptions.",
        highlights: [
          "Univers graphique futuriste et immersif",
          "Sections de présentation des vaisseaux et ennemis",
          "Formulaire de précommande / newsletter interactif",
          "Performances de rendu optimales"
        ]
      }
    },

    certificates: {
      "cert-1": { title: "Certificat de Formation STN — Cycle Web Full Stack", status: "En cours de validation", description: "Validation des compétences clés en développement frontend moderne (React, Vite), backend API (Node/Express, JWT), architectures de données relationnelles et travail collaboratif Agile." },
      "cert-2": { title: "Art Oratoire & Prise de Parole en Public", status: "Validé", description: "Techniques de communication orale, structuration du discours, gestion du stress et de la voix, argumentation persuasive devant un public." },
      "cert-3": { title: "Sensibilisation à la Lutte Contre la Corruption", status: "Validé", description: "Compréhension des mécanismes de la corruption, principes d'intégrité, de transparence et de redevabilité dans les pratiques professionnelles." },
      "cert-4": { title: "Certification en Langue Française", status: "B2", description: "Maîtrise de l'expression écrite et orale en français, communication professionnelle et rédaction de documents structurés." },
      "cert-5": { title: "Certification en Langue Anglaise", status: "B1", description: "Compétences en compréhension et expression écrite et orale en anglais, communication professionnelle dans un contexte international." }
    },

    interests: {
      design: { title: "Design", tagline: "Créativité visuelle & expérience", description: "Passionné par le design et la création visuelle, j'aime concevoir des interfaces modernes, harmonieuses et intuitives. Cette sensibilité nourrit ma manière de penser les couleurs, les formes, la typographie et l'expérience utilisateur dans mes projets web." },
      photographie: { title: "Photographie", tagline: "Lumière, composition & cadrage", description: "Capture de paysages, de portraits et de détails du quotidien à Madagascar. Affine mon souci du détail et de la perspective spatiale." },
      astronomie: { title: "Astronomie", tagline: "Exploration cosmique & physique céleste", description: "Fascination pour les sciences spatiales, les missions d'exploration et la modélisation de l'univers, stimulant une curiosité scientifique sans fin." },
      sciences: { title: "Documentaires scientifiques", tagline: "Curiosité intellectuelle & technologies", description: "Veille constante sur les découvertes technologiques, l'intelligence artificielle, l'écologie et l'évolution des sciences appliquées." }
    }
  },

  en: {
    personal: {
      role: "Full Stack Web Developer",
      bioShort: "Junior Full-Stack Developer passionate about building modern, performant web applications, based in Antananarivo, Madagascar.",
      bioFull: "Junior Full-Stack Developer passionate about designing and building modern web applications. I work across the full development chain, from back-end to user interface, with particular attention to code quality, performance and user experience.",
      availability: "Available (Internship & Projects)",
      experienceLevel: "Junior Full-Stack Developer / Professionally growing"
    },

    education: {
      "edu-1": {
        title: "Digital Science and Technology (STN)",
        institution: "Passerelles Numériques Madagasikara (PNM)",
        location: "Antananarivo, Madagascar",
        status: "Ongoing training",
        description: "Intensive excellence program preparing for digital careers. Modern full-stack web development, advanced algorithmics, database modeling, REST architectures, agile project management (Scrum) and software best practices.",
        tags: ["Full Stack", "Algorithms", "Databases", "Agile Methodology", "Soft Skills"]
      },
      "edu-2": {
        title: "Scientific Baccalaureate",
        institution: "General Education High School",
        location: "Madagascar",
        status: "Degree obtained",
        description: "Academic path focused on exact sciences, applied mathematics, physics and formal logic, laying the foundations of algorithmic reasoning.",
        tags: ["Mathematics", "Sciences", "Logic & Reasoning"]
      }
    },

    skills: {
      prisma: { level: "Intermediate", description: "Modern type-safe ORM, schema modeling, automated migrations and optimized queries." },
      nodejs: { level: "Intermediate", description: "Building structured RESTful APIs, middleware management, routing and server-side business logic." },
      postgres: { level: "Intermediate", description: "Relational database design, referential integrity, indexing and SQL queries." },
      git: { level: "Intermediate", description: "Collaborative version control, branch management (GitFlow), pull requests and conflict resolution." },
      cloudinary: { level: "Intermediate", description: "Cloud media management, secure image upload, transformations and CDN optimization." },
      jwt: { level: "Beginner", description: "Securing API routes, generating and verifying JSON Web Tokens, managing stateless sessions." },
      react: { level: "Beginner", description: "Modular component architecture, hooks (useState, useEffect), lifecycle and API consumption." },
      html: { level: "Advanced", description: "Semantic page structuring, accessibility and markup best practices." },
      css: { level: "Advanced", description: "Responsive styling, animations, Flexbox/Grid and utility frameworks like Tailwind CSS." },
      javascript: { level: "Advanced", description: "Client-side logic, DOM manipulation, asynchronous programming and ES6+." },
      kotlin: { level: "Beginner", description: "Backend development and exploration of native Android mobile development." },
      bcrypt: { level: "Intermediate", description: "Secure password hashing, salt management and credential verification." },
      mysql: { level: "Intermediate", description: "Relational schema design, SQL queries and database administration." },
      vercel: { level: "Intermediate", description: "Continuous deployment of frontend applications, automatic branch previews." },
      netlify: { level: "Intermediate", description: "Hosting static and JAMstack sites, form handling and serverless functions." },
      railway: { level: "Intermediate", description: "Deploying full-stack applications and databases, simplified infrastructure management." },
      github: { level: "Advanced", description: "Repository hosting, GitHub Actions for continuous integration, workflow management." },
      flyio: { level: "Beginner", description: "Deploying containerized applications close to users, multi-region management." }
    },

    projects: {
      tsiafakara: {
        subtitle: "Cultural Site of the Sacred Antakarana Ritual",
        category: "Culture & Heritage",
        featured: true,
        type: "Cultural & Educational Project",
        description: "Cultural platform dedicated to discovering, preserving and passing on the sacred Tsiafakara ritual, a pillar of the Antakarana people's identity in Madagascar. An immersive experience exploring the history, ceremonies, symbols, ancestral stories and spiritual values that shape this unique heritage.",
        highlights: [
          "Immersive presentation of the Tsiafakara ritual",
          "Exploring the history and origins of the Antakarana people",
          "Multimedia gallery of ceremonies and emblematic sites",
          "Intuitive navigation adapted to mobile devices",
          "Showcasing oral traditions and cultural heritage",
          "Educational experience accessible to all audiences"
        ]
      },
      "horizone-journal": {
        subtitle: "Travel & Hiking Blog / Journal",
        category: "Full Stack / SPA",
        featured: true,
        type: "SPA & REST API",
        description: "A smooth single-page application designed for adventure, trekking and hiking enthusiasts. Lets users publish expedition stories, route tips, and share geotagged photo galleries.",
        highlights: [
          "Lightweight, fast SPA architecture in pure JavaScript",
          "Custom Express REST API for publishing articles",
          "Categorization system by region and difficulty level",
          "Clean interface inviting reading"
        ]
      },
      "space-alien-landing": {
        subtitle: "Landing Page for a Sci-Fi Mobile Game",
        category: "Frontend & UI",
        featured: false,
        type: "Promotional Landing Page",
        description: "Modern promotional landing page for a Space Alien-style mobile arcade game. Features dynamic visual animations, a gameplay mechanics showcase and a call-to-action for pre-registration.",
        highlights: [
          "Futuristic, immersive graphic universe",
          "Sections showcasing ships and enemies",
          "Interactive pre-order / newsletter form",
          "Optimal rendering performance"
        ]
      }
    },

    certificates: {
      "cert-1": { title: "STN Training Certificate — Full Stack Web Track", status: "Validation in progress", description: "Validating key skills in modern frontend development (React, Vite), backend APIs (Node/Express, JWT), relational data architectures and Agile collaborative work." },
      "cert-2": { title: "Public Speaking & Oratory Art", status: "Validated", description: "Oral communication techniques, speech structuring, stress and voice management, persuasive argumentation in front of an audience." },
      "cert-3": { title: "Anti-Corruption Awareness", status: "Validated", description: "Understanding corruption mechanisms, principles of integrity, transparency and accountability in professional practices." },
      "cert-4": { title: "French Language Certification", status: "B2", description: "Mastery of written and spoken French expression, professional communication and structured document writing." },
      "cert-5": { title: "English Language Certification", status: "B1", description: "Written and spoken comprehension and expression skills in English, professional communication in an international context." }
    },

    interests: {
      design: { title: "Design", tagline: "Visual creativity & experience", description: "Passionate about design and visual creation, I enjoy crafting modern, harmonious and intuitive interfaces. This sensitivity shapes how I think about colors, shapes, typography and user experience in my web projects." },
      photographie: { title: "Photography", tagline: "Light, composition & framing", description: "Capturing landscapes, portraits and everyday details in Madagascar. Sharpens my attention to detail and spatial perspective." },
      astronomie: { title: "Astronomy", tagline: "Cosmic exploration & celestial physics", description: "Fascination with space sciences, exploration missions and modeling the universe, fueling endless scientific curiosity." },
      sciences: { title: "Science Documentaries", tagline: "Intellectual curiosity & technology", description: "Constant watch on technological discoveries, artificial intelligence, ecology and the evolution of applied sciences." }
    }
  }
};