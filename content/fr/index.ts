// French content — DRAFT TRANSLATION
// This file was machine-assisted and requires review by a qualified Canadian French translator
// before public launch. Do not publish without client sign-off.
// Partner names and brand names (Ontario Legion Health, OLH, Legion) are kept as-is.

import type { SiteContent } from "../en";

export const fr: SiteContent = {
  nav: {
    home: "Accueil",
    howItWorks: "Fonctionnement",
    whoWeServe: "Publics servis",
    partners: "Partenaires",
    locations: "Emplacements", // [DRAFT FR]
    contact: "Nous joindre",
  },

  home: {
    hero: {
      // [DRAFT FR] — requires client review
      headline: "Des soins dans votre communauté",
      headlinePrefix: "Des soins dans votre",
      headlineAccent: "communauté",
      subheadline:
        "Dépistage gratuit et accessible pour votre santé cardiovasculaire et mentale, dans les espaces de confiance de votre Légion royale canadienne locale.",
      ctaPrimary: "En savoir plus",
      ctaSecondary: "Télécharger l'application",
      // [DRAFT FR] — requires client review
      badgeTitle: "Dépistage communautaire gratuit",
      badgeSubtitle: "Santé cardiaque + santé mentale",
    },

    features: [
      {
        icon: "heart",
        title: "Santé cardiovasculaire",
        description:
          "Mesurez votre tension artérielle, votre poids et votre IMC grâce à des kiosques de qualité clinique installés dans votre communauté.",
      },
      {
        icon: "brain",
        title: "Santé mentale",
        description:
          "Effectuez des évaluations normalisées de la santé mentale pour l'anxiété, la dépression et le stress, directement depuis votre téléphone.",
      },
      {
        icon: "pin",
        title: "Au cœur de votre communauté",
        description:
          "Les kiosques sont installés dans les succursales de la Légion royale canadienne — dans les centres communautaires urbains et les communautés rurales.",
      },
      {
        icon: "people",
        title: "Gratuit et inclusif",
        description:
          "OLH est un programme gratuit et inclusif, ouvert au public et conçu pour soutenir ceux qui font face aux plus grands obstacles aux soins traditionnels.",
      },
    ],

    bridging: {
      // [DRAFT FR] — requires client review
      heading: "Combler les lacunes en soins de santé",
      headingPrefix: "Combler",
      headingAccent: "les lacunes en soins de santé",
      statLabel: "Ontariens actuellement sans médecin de famille", // [DRAFT FR]
      ctaLink: "Fonctionnement →",
      body1:
        "Plus de 2,5 millions d'Ontariens naviguent actuellement dans le système de santé sans médecin de famille. Ontario Legion Health (OLH) a été conçu pour combler cette lacune. Nous offrons un service de dépistage préventif à faible seuil, axé sur les principaux facteurs de bien-être au quotidien : la santé cardiovasculaire et mentale.",
      body2:
        "Bien qu'OLH ne remplace pas un médecin de famille, il sert de plaque tournante sécuritaire et temporaire. Nous vous aidons à prendre en charge votre bien-être, à détecter les risques pour la santé tôt et à naviguer dans le système de soins de santé pendant que vous attendez d'être jumelé à un prestataire de soins primaires.",
    },

    // [BRIEF - DRAFT FR] — heading came from the client build brief (not Word doc) and
    // has been translated as draft only. Requires client review before launch.
    cta: {
      heading: "Votre santé. Votre communauté. À votre rythme.",
      subheading: null as null,
      iosButton: "Télécharger la version iOS",
      androidButton: "Télécharger la version Android",
    },
  },

  howItWorks: {
    hero: {
      heading: "Fonctionnement",
      headingPrefix: "",
      headingAccent: "Fonctionnement",
    },

    steps: [
      {
        number: "01",
        // [DRAFT FR]
        title: "Télécharger l'application sécurisée",
        body: "Commencez par télécharger l'application mobile OLH gratuite. Depuis votre téléphone, en toute confidentialité, vous pouvez compléter des évaluations normalisées de la santé mentale pour l'anxiété, la dépression et le stress. L'application vous sert également de centre privé et sécurisé pour toutes vos données de dépistage physique.",
        imageAlt: "Écran d'accueil de l'application mobile OLH sur un téléphone intelligent",
      },
      {
        number: "02",
        // [DRAFT FR]
        title: "Visiter un kiosque communautaire",
        body: "Rendez-vous dans une succursale participante de la Légion royale canadienne et jumelez votre application à l'un de nos kiosques de santé de qualité clinique. En quelques minutes, le kiosque mesurera des indicateurs essentiels de santé physique, dont votre tension artérielle, votre poids et votre IMC.",
        imageAlt: "Kiosque de dépistage OLH dans une succursale de la Légion",
      },
      {
        number: "03",
        // [DRAFT FR]
        title: "Consulter vos résultats et passer à l'action",
        body: "Vos résultats vous sont transmis instantanément et en toute sécurité sur votre appareil. Si des indicateurs ou des risques pour la santé sont détectés, l'application vous guidera vers les prochaines étapes.",
        imageAlt: "Application OLH affichant des résultats de santé sur un téléphone intelligent",
      },
    ],

    support: {
      heading: "Et ensuite", // UI label
      // [DRAFT FR]
      subheading: "Selon vos résultats, vous pouvez choisir de :",
      cards: [
        {
          icon: "book",
          title: "Accéder à des ressources éducatives",
          body: "Accéder à des ressources éducatives pour vous aider à maintenir un mode de vie sain.",
        },
        {
          icon: "chart",
          title: "Suivre votre évolution",
          body: "Suivre votre évolution dans le temps et partager vos données avec votre médecin, si vous en avez un.",
        },
        {
          icon: "nurse",
          title: "Consulter une infirmière virtuelle",
          body: "Prendre rendez-vous via l'application pour échanger directement avec une infirmière OLH, qui peut vous aider à interpréter vos résultats et vous offrir des conseils personnalisés.",
        },
        {
          icon: "navigator",
          title: "Travailler avec un navigateur en soins",
          body: "Si vous avez besoin d'un soutien supplémentaire, nos navigateurs peuvent vous aider à trouver des cliniques locales, des ressources en santé mentale et des services communautaires.",
        },
      ],
    },

    cta: {
      heading: "Télécharger l'application", // UI label
      subheading: null as null,
      iosButton: "Télécharger la version iOS",
      androidButton: "Télécharger la version Android",
    },
  },

  whoWeServe: {
    hero: {
      // [DRAFT FR]
      heading: "Publics servis",
      headingPrefix: "Publics",
      headingAccent: "servis",
      subheading:
        "OLH est un programme gratuit et inclusif, ouvert au public. Les kiosques sont stratégiquement placés dans des centres communautaires urbains et des succursales rurales de la Légion pour soutenir ceux qui font face aux plus grands obstacles aux soins traditionnels.",
    },

    audiences: [
      {
        icon: "veteran",
        title: "Anciens combattants et leurs familles",
        body: "Offrir un soutien adapté pour la santé physique et les blessures liées au stress opérationnel.",
      },
      {
        icon: "doctor",
        title: "Sans médecin de famille",
        body: "Fournir un moyen fiable de surveiller votre santé pendant que vous attendez d'être jumelé à un prestataire de soins primaires.",
      },
      {
        icon: "senior",
        title: "Aînés",
        body: "Offrir une surveillance pratique et proche de chez soi pour des affections comme l'hypertension artérielle ou le diabète.",
      },
      {
        icon: "rural",
        title: "Résidents des régions rurales",
        body: "Apporter le dépistage préventif directement aux communautés où l'accès aux soins de santé est limité.",
      },
      {
        icon: "community",
        title: "Peuples autochtones",
        body: "Offrir une surveillance de la santé sécuritaire et sans stigmatisation, assurée par un personnel formé au Code de conduite Cristal Clair.",
      },
      {
        icon: "wellness",
        title: "Les personnes soucieuses de leur santé",
        body: "Toute personne souhaitant un moyen gratuit et simple de suivre de manière proactive son bien-être physique et mental.",
      },
    ],

    partners: {
      // [DRAFT FR]
      heading: "Des partenariats fondés sur la confiance",
      subheading:
        "Le programme pilote OLH est rendu possible grâce à une coalition de leaders communautaires, de la santé et de la technologie :",
      list: [
        {
          name: "The Royal Canadian Legion – Ontario Command",
          description:
            "Accueillir nos kiosques de dépistage dans leurs succursales à travers la province, à titre de partenaire communautaire de confiance.",
          logo: "/assets/olh/partners/OLH Master Logo.png",
        },
        {
          name: "Sunnybrook Health Sciences Centre",
          description:
            "Assurer la supervision clinique, l'expertise en recherche et la navigation spécialisée en soins pour les anciens combattants.",
          logo: "/assets/olh/partners/sunnybrook.svg",
        },
        {
          name: "TryCycle Data Systems",
          description:
            "Alimenter l'application mobile sécurisée et les outils de dépistage en santé mentale.",
          logo: "/assets/olh/partners/trycycle-black-text.svg",
        },
        {
          name: "PharmaSmart",
          description:
            "Fournir les kiosques biométriques validés cliniquement utilisés partout au pays.",
          logo: "/assets/olh/partners/pharmasmart.svg",
        },
      ],
    },

    cta: {
      heading: "Télécharger l'application", // UI label
      subheading: null as null,
      iosButton: "Télécharger la version iOS",
      androidButton: "Télécharger la version Android",
    },
  },

  locations: {
    hero: {
      // [DRAFT FR]
      heading: "Trouver un emplacement",
      headingPrefix: "Trouver un",
      headingAccent: "emplacement",
      subheading:
        "Les kiosques de dépistage OLH sont disponibles dans les succursales suivantes de la Légion royale canadienne et dans les lieux communautaires à travers l'Ontario.",
    },
    // [DRAFT FR]
    mapNote:
      "Les emplacements des épingles sont approximatifs. Confirmez les heures d'ouverture avec votre succursale locale avant de vous y rendre.",
    getDirections: "Obtenir l'itinéraire", // [DRAFT FR]
    rcl: "Légion royale canadienne", // [DRAFT FR]
    cta: {
      heading: "Télécharger l'application", // UI label
      subheading: null as null,
      iosButton: "Télécharger la version iOS",
      androidButton: "Télécharger la version Android",
    },
  },

  footer: {
    // [BRIEF - DRAFT FR] — tagline came from client build brief; translated as draft only.
    tagline: "Ontario Legion Health — Des soins dans votre communauté",
    links: [
      { label: "Accueil", href: "/" },
      { label: "Fonctionnement", href: "/how-it-works" },
      { label: "Publics servis", href: "/who-we-serve" },
      { label: "Partenaires", href: "/who-we-serve#partners" },
      { label: "Emplacements", href: "/locations" }, // [DRAFT FR]
    ],
    copyright: "© 2025 Ontario Legion Health. Tous droits réservés.",
  },
};
