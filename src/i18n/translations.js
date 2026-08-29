// src/i18n/translations.js
export const translations = {
    fr: {
        // ─── Clés partagées ───────────────────────────────
        role: "Développeur Web Full Stack",
        cta: "Me contacter",

        // ─── Navbar ──────────────────────────────────────
        nav: {
            accueil: "Accueil",
            about: "À propos",
            formation: "Formation",
            competences: "Compétences",
            projets: "Projets",
            certifications: "Certifications",
            interets: "Passions",
            contact: "Contact",
        },

        // ─── Hero ────────────────────────────────────────
        hero: {
            greeting: "Bonjour, je suis",
            location: "Madagascar",
            roleHighlight: "Développeur Full-Stack Junior",
            description: "passionné par la création d'applications web modernes, performantes et intuitives. Je conçois des solutions élégantes et centrées sur l'utilisateur.",
            downloadCv: "Télécharger mon cv",
            workTogether: "Travaillons ensemble",
            photoLocation: "Antananarivo, MG",
            stats: {
                projects: "Projets phares",
                stn: "STN",
                dedicated: "Dédié & Passionné",
            },
            badges: {
                focusLabel: "Focus",
                focusValue: "Full Stack Web",
                backendLabel: "Backend",
                backendValue: "Node & Prisma",
            },
        },

        // ─── À propos ────────────────────────────────────
        about: {
            tag: "À propos de moi",
            title: "À propos de Moi",
            bio: "Curieux, méthodique et rigoureux, j'aime transformer des besoins concrets en applications web fluides et robustes, en accordant un soin méticuleux à l'architecture de la base de données, à la sécurité des flux (JWT, Prisma) et à la réactivité de l'interface (React, Tailwind CSS).",
            statusLabel: "Statut",
            statusValue: "Actif",
            journeyLabel: "Parcours",
            journeyValue: "Passerelles Numériques",
            cards: {
                location: "Localisation",
                email: "Courriel direct",
                availability: "Disponibilité",
                specialization: "Spécialisation",
            },
            availabilityValue: "Immédiate (Stage & Projets)",
            specializationValue: "Full Stack (React, Node, DB)",
        },

        // ─── Formation ───────────────────────────────────
        formation: {
            tag: "Parcours académique",
            title: "Formation & Diplômes",
            subtitle: "Un apprentissage continu alliant rigueur académique, projets d'ingénierie web concrets et méthodes agiles.",
        },

        // ─── Compétences ─────────────────────────────────
        competences: {
            tag: "Compétences maîtrisées",
            title: "Stack Technique & Savoir-Faire",
            subtitle: "Technologies et outils que j'utilise au quotidien pour développer des architectures web stables et performantes.",
            categories: {
                all: "Toutes les compétences",
                backend: "Backend & API",
                database: "Bases de Données & ORM",
                frontend: "Frontend",
                deployment: "Déploiement",
                tools: "Outils & Services",
            },
            categoryLabels: {
                backend: "Architecture & API",
                database: "Gestion des Données",
                frontend: "Interface & Client",
                deployment: "Hébergement & CI/CD",
                tools: "Productivité & Médias",
            },
            proficiency: "Niveau d'aisance",
        },

        // ─── Projets ─────────────────────────────────────
        projets: {
            tag: "Réalisations phares",
            title: "Projets & Développements",
            subtitle: "Une sélection d'applications complètes illustrant la maîtrise de l'écosystème web moderne, de la base de données à l'interface client.",
            cardAlt: "Aperçu du site {title}",
            visitAria: "Visiter le site {title}",
            details: "Détails",
            modal: {
                closeAria: "Fermer la boîte de dialogue",
                previewAlt: "Aperçu du site {title}",
                watermark: "Augustin • Projets",
                descriptionTitle: "Description du Projet",
                highlightsTitle: "Points Clés & Fonctionnalités",
                stackTitle: "Stack Technologique",
                close: "Fermer",
                visitSite: "Visiter le site",
                discussProject: "Discuter de ce projet",
            },
        },

        // ─── Certifications ──────────────────────────────
        certifications: {
            tag: "Reconnaissance & Formation",
            title: "Certifications & Distinctions",
            subtitle: "Attestations officielles et parcours d'excellence validant mon engagement et mes compétences techniques.",
            validated: "Attestation Validée",
        },

        // ─── Passions ────────────────────────────────────
        interets: {
            tag: "Centres d'intérêt & Valeurs",
            title: "Ce Qui M'Anime au Quotidien",
            subtitle: "Au-delà des lignes de code, mes passions forgent ma discipline, mon esprit d'équipe et ma soif d'apprendre.",
        },

        // ─── Contact ─────────────────────────────────────
        contact: {
            tag: "Engageons le dialogue",
            title: "Travaillons Ensemble",
            subtitle: "Vous avez un projet web ambitieux, une opportunité de stage ou une proposition de collaboration ? Envoyez-moi un message !",
            cardTitle: "Contactez-moi",
            cardSubtitle: "Je réponds rapidement à chaque message.",
            labels: {
                email: "Email",
                phone: "Téléphone",
                location: "Localisation",
            },
            availability: {
                before: "Actuellement à la recherche d'un",
                intern: "stage conventionné",
                mid: "ou de",
                freelance: "missions freelance",
            },
            formTitle: "Envoyer un message",
            formSubtitle: "Remplissez ce formulaire et je vous répondrai dans les plus brefs délais.",
            successTitle: "Message envoyé avec succès !",
            successMessage: "Merci pour votre prise de contact.",
            sendAnother: "Envoyer un autre message",
            errorGeneric: "Une erreur est survenue. Réessayez ou contactez-moi directement par email.",
            errorNetwork: "Impossible d'envoyer le message. Vérifiez votre connexion et réessayez.",
            fields: {
                name: "Votre Nom *",
                email: "Votre Email *",
                subject: "Objet du message *",
                message: "Votre Message *",
            },
            placeholders: {
                name: "ex. Jean Dupont",
                email: "ex. jean.dupont@entreprise.com",
                subject: "ex. Opportunité de stage / Projet Web",
                message: "Présentez brièvement vos besoins ou votre proposition...",
            },
            submit: "Envoyer mon message",
            sending: "Envoi en cours...",
            fromNamePrefix: "Portfolio",
        },

        // ─── Footer ──────────────────────────────────────
        footer: {
            builtWith: "Réalisé avec",
            backToTop: "Haut de page",
            viewCodeAria: "Voir le code — {name}",
            viewCodeTitle: "Voir le code ({name})",
            aria: {
                email: "Email",
                github: "GitHub",
                linkedin: "LinkedIn",
                facebook: "Facebook",
                instagram: "Instagram",
            },
        },
    },

    en: {
        // ─── Shared keys ─────────────────────────────────
        role: "Full Stack Web Developer",
        cta: "Contact me",

        // ─── Navbar ──────────────────────────────────────
        nav: {
            accueil: "Home",
            about: "About",
            formation: "Education",
            competences: "Skills",
            projets: "Projects",
            certifications: "Certifications",
            interets: "Passions",
            contact: "Contact",
        },

        // ─── Hero ────────────────────────────────────────
        hero: {
            greeting: "Hello, I'm",
            location: "Madagascar",
            roleHighlight: "Junior Full-Stack Developer",
            description: "passionate about building modern, performant and intuitive web applications. I craft elegant solutions centered on the user.",
            downloadCv: "Download my CV",
            workTogether: "Let's work together",
            photoLocation: "Antananarivo, MG",
            stats: {
                projects: "Key projects",
                stn: "STN",
                dedicated: "Dedicated & Passionate",
            },
            badges: {
                focusLabel: "Focus",
                focusValue: "Full Stack Web",
                backendLabel: "Backend",
                backendValue: "Node & Prisma",
            },
        },

        // ─── About ───────────────────────────────────────
        about: {
            tag: "About me",
            title: "About Me",
            bio: "Curious, methodical and rigorous, I enjoy turning concrete needs into fluid and robust web applications, paying meticulous attention to database architecture, flow security (JWT, Prisma) and interface responsiveness (React, Tailwind CSS).",
            statusLabel: "Status",
            statusValue: "Active",
            journeyLabel: "Journey",
            journeyValue: "Passerelles Numériques",
            cards: {
                location: "Location",
                email: "Direct email",
                availability: "Availability",
                specialization: "Specialization",
            },
            availabilityValue: "Immediate (Internship & Projects)",
            specializationValue: "Full Stack (React, Node, DB)",
        },

        // ─── Education ───────────────────────────────────
        formation: {
            tag: "Academic background",
            title: "Education & Degrees",
            subtitle: "Continuous learning combining academic rigor, concrete web engineering projects and agile methods.",
        },

        // ─── Skills ──────────────────────────────────────
        competences: {
            tag: "Mastered skills",
            title: "Tech Stack & Expertise",
            subtitle: "Technologies and tools I use daily to build stable and performant web architectures.",
            categories: {
                all: "All skills",
                backend: "Backend & API",
                database: "Databases & ORM",
                frontend: "Frontend",
                deployment: "Deployment",
                tools: "Tools & Services",
            },
            categoryLabels: {
                backend: "Architecture & API",
                database: "Data Management",
                frontend: "Interface & Client",
                deployment: "Hosting & CI/CD",
                tools: "Productivity & Media",
            },
            proficiency: "Proficiency level",
        },

        // ─── Projects ────────────────────────────────────
        projets: {
            tag: "Featured work",
            title: "Projects & Developments",
            subtitle: "A selection of complete applications showcasing mastery of the modern web ecosystem, from database to client interface.",
            cardAlt: "Preview of {title} website",
            visitAria: "Visit {title} website",
            details: "Details",
            modal: {
                closeAria: "Close dialog",
                previewAlt: "Preview of {title} website",
                watermark: "Augustin • Projects",
                descriptionTitle: "Project Description",
                highlightsTitle: "Key Points & Features",
                stackTitle: "Tech Stack",
                close: "Close",
                visitSite: "Visit website",
                discussProject: "Discuss this project",
            },
        },

        // ─── Certifications ──────────────────────────────
        certifications: {
            tag: "Recognition & Training",
            title: "Certifications & Awards",
            subtitle: "Official certificates and excellence pathways validating my commitment and technical skills.",
            validated: "Validated Certificate",
        },

        // ─── Passions ────────────────────────────────────
        interets: {
            tag: "Interests & Values",
            title: "What Drives Me Daily",
            subtitle: "Beyond the lines of code, my passions shape my discipline, team spirit and thirst for learning.",
        },

        // ─── Contact ─────────────────────────────────────
        contact: {
            tag: "Let's talk",
            title: "Let's Work Together",
            subtitle: "Have an ambitious web project, an internship opportunity or a collaboration proposal? Send me a message!",
            cardTitle: "Contact me",
            cardSubtitle: "I respond quickly to every message.",
            labels: {
                email: "Email",
                phone: "Phone",
                location: "Location",
            },
            availability: {
                before: "Currently looking for a",
                intern: "conventioned internship",
                mid: "or",
                freelance: "freelance missions",
            },
            formTitle: "Send a message",
            formSubtitle: "Fill out this form and I'll get back to you as soon as possible.",
            successTitle: "Message sent successfully!",
            successMessage: "Thank you for reaching out.",
            sendAnother: "Send another message",
            errorGeneric: "An error occurred. Try again or contact me directly by email.",
            errorNetwork: "Unable to send the message. Check your connection and try again.",
            fields: {
                name: "Your Name *",
                email: "Your Email *",
                subject: "Subject *",
                message: "Your Message *",
            },
            placeholders: {
                name: "e.g. John Doe",
                email: "e.g. john.doe@company.com",
                subject: "e.g. Internship opportunity / Web Project",
                message: "Briefly describe your needs or proposal...",
            },
            submit: "Send my message",
            sending: "Sending...",
            fromNamePrefix: "Portfolio",
        },

        // ─── Footer ──────────────────────────────────────
        footer: {
            builtWith: "Built with",
            backToTop: "Back to top",
            viewCodeAria: "View code — {name}",
            viewCodeTitle: "View code ({name})",
            aria: {
                email: "Email",
                github: "GitHub",
                linkedin: "LinkedIn",
                facebook: "Facebook",
                instagram: "Instagram",
            },
        },
    },
};