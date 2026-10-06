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
      eyebrow: "ONTARIO LEGION HEALTH",
      headline: "Un lieu de confiance. Un premier pas simple. Un chemin humain vers les soins.",
      headlinePrefix: "Un lieu de confiance. Un premier pas simple.",
      headlineAccent: "Un chemin humain vers les soins.",
      subheadline:
        "Ontario Legion Health combine une borne de santé sans rendez-vous, une application privée et un suivi par un infirmier-navigateur OLH — dans des lieux communautaires familiers.",
      subheadline2:
        "Ouvert à tous. Aucun rendez-vous ni carte santé requis dans les emplacements participants.",
      ctaPrimary: "Découvrir le fonctionnement d'OLH",
      ctaSecondary: "Trouver une borne",
      // [DRAFT FR] — requires client review
      badgeTitle: "Dépistage communautaire gratuit",
      badgeSubtitle: "Santé cardiaque + santé mentale",
    },

    features: [
      {
        icon: "heart",
        title: "Dépistage biométrique de la santé",
        description:
          "Utilisez une borne OLH pour mesurer des indicateurs comme la tension artérielle, le poids et l'IMC lors d'une séance guidée, sans rendez-vous.",
      },
      {
        icon: "brain",
        title: "Suivis de santé mentale",
        description:
          "Effectuez des évaluations normalisées en toute confidentialité depuis l'application OLH et choisissez les renseignements que vous souhaitez partager.",
      },
      {
        icon: "nurse",
        title: "Suivi humain",
        description:
          "Avec votre consentement, un infirmier-navigateur OLH examine les renseignements que vous avez autorisés et vous appelle pour clarifier la prochaine étape.",
      },
      {
        icon: "navigator",
        title: "Accès aux services",
        description:
          "Lorsqu'un soutien supplémentaire est approprié, l'infirmier-navigateur peut vous aider à entrer en contact avec un réseau grandissant de partenaires en santé et en services communautaires.",
      },
    ],

    bridging: {
      // [FR TODO] — structure updated to the new copy; French text pending translation
      heading: "Les soins peuvent exister et rester difficiles d'accès.",
      headingPrefix: "Les soins peuvent exister et rester",
      headingAccent: "difficiles d'accès.",
      statLabel: "Ontariens actuellement sans médecin de famille", // [DRAFT FR]
      statBody: "Plus de 2,5 millions d'Ontariens naviguent actuellement dans le système de santé sans médecin de famille.",
      barriers: ["Accès", "Hésitation", "Confusion", "Confidentialité"],
      ctaLink: "Fonctionnement →",
      body1:
        "La distance, les longues attentes, les préoccupations de confidentialité, l'incertitude et le manque de soins primaires peuvent empêcher les gens d'avoir une première conversation utile.",
      body2:
        "OLH creates an additional front door to health support. It does not replace family doctors, emergency departments or existing community services. It gives people a simple, private way to begin, understand their options and move toward an appropriate next step.",
    },

    // [DRAFT FR] — PLACEHOLDER, pending Legion history claim confirmation.
    trust: {
      heading: "Pourquoi la Légion est importante",
      body1:
        "Les succursales de la Légion royale canadienne sont des lieux de rassemblement familiers dans les communautés à travers l'Ontario. Elles sont reconnaissables, accessibles et souvent moins intimidantes qu'un environnement clinique.",
      body2:
        "En installant la borne OLH dans les succursales participantes, les résidents peuvent commencer sans prendre rendez-vous ni entrer dans une salle d'attente. La succursale offre la confiance avant que la technologie ne demande une action.",
    },

    // [DRAFT FR] — PLACEHOLDER, partner names withheld pending roster confirmation.
    partnerPreview: {
      heading: "Le dépistage n'est utile que s'il mène quelque part.",
      body1:
        "OLH bâtit un réseau de services qui aide à transformer les renseignements de santé autorisés en prochaines étapes concrètes.",
      body2:
        "[Noms des partenaires en attente de confirmation]. Ensemble, ils offrent des passerelles vers des services spécialisés couvrant la santé des anciens combattants, les soins cardiovasculaires, l'abandon du tabac, la santé mentale, la mémoire et l'évaluation cognitive.",
      body3:
        "Ces organisations ne sont qu'un début. À mesure que le projet pilote révèle les besoins des communautés, OLH prévoit ajouter de nouveaux partenaires en soins et en services.",
      link: "Découvrir nos partenaires de services →",
    },

    // [BRIEF - DRAFT FR] — heading came from the client build brief (not Word doc) and
    // has been translated as draft only. Requires client review before launch.
    // [DRAFT FR]
    cta: {
      heading: "Votre santé. Vos renseignements. Votre prochaine étape.",
      subheading:
        "Utilisez l'application OLH pour compléter des évaluations optionnelles, jumeler une borne participante, gérer vos autorisations et rester connecté au parcours OLH.",
      iosButton: "Télécharger la version iOS",
      androidButton: "Télécharger la version Android",
    },
  },

  howItWorks: {
    hero: {
      // [DRAFT FR]
      heading: "Un seul parcours simple—d'une préoccupation à une connexion.",
      headingPrefix: "Un seul parcours simple—",
      headingAccent: "d'une préoccupation à une connexion.",
      subheading:
        "La borne, l'application et l'infirmier-navigateur ont chacun un rôle clair. Ensemble, ils rendent la prochaine étape plus facile à comprendre.",
    },

    steps: [
      {
        number: "01",
        // [DRAFT FR]
        title: "Commencez avec l'application OLH",
        body: "Créez votre compte privé et complétez des évaluations de santé mentale optionnelles depuis votre téléphone. L'application regroupe vos renseignements et vos autorisations OLH en un seul endroit.",
        imageAlt: "Écran d'accueil de l'application mobile OLH sur un téléphone intelligent",
      },
      {
        number: "02",
        // [DRAFT FR]
        title: "Visitez une borne OLH",
        body: "Rendez-vous dans un emplacement participant—aucun rendez-vous requis—et complétez un dépistage biométrique guidé. La borne peut mesurer des indicateurs comme la tension artérielle, le poids et l'IMC.",
        imageAlt: "Kiosque de dépistage OLH dans une succursale de la Légion",
      },
      {
        number: "03",
        // [DRAFT FR]
        title: "Choisissez de partager",
        body: "Vous décidez quels renseignements peuvent être transmis à l'infirmier-navigateur OLH et si vous souhaitez être contacté. Rien n'est transmis au navigateur sans les autorisations requises pour ce suivi.",
        imageAlt: "Écran de préférences de consentement et de partage de l'application OLH",
      },
      {
        number: "04",
        // [DRAFT FR]
        title: "Recevez un appel de l'infirmier-navigateur",
        body: "La visite à la borne et l'appel ont lieu à des moments différents. L'infirmier-navigateur examine les renseignements que vous avez autorisés, vous appelle en toute confidentialité et vous aide à comprendre les options possibles.",
        imageAlt: "Femme parlant au téléphone mobile à l'intérieur",
      },
      {
        number: "05",
        // [DRAFT FR]
        title: "Connectez-vous avec un service approprié",
        body: "Lorsqu'un soutien supplémentaire est approprié, l'infirmier-navigateur peut vous aider à entrer en contact avec un partenaire de soins ou de services OLH selon vos besoins, votre admissibilité et les services offerts.",
        imageAlt: "Personne âgée discutant de ses soins avec une professionnelle de la santé",
      },
    ],

    // [DRAFT FR]
    callout:
      "Complétez le dépistage à la succursale. Recevez l'appel de l'infirmier-navigateur plus tard—à la maison ou où vous vous sentez à l'aise.",

    technology: {
      heading: "Ce que fait la technologie",
      body: "Les renseignements d'évaluation autorisés peuvent être organisés grâce à une révision assistée par IA avant l'appel de l'infirmier-navigateur. Cela peut aider à faire ressortir des tendances et des signaux prioritaires qui méritent attention. L'infirmier-navigateur examine les renseignements source, y ajoute du contexte et demeure responsable de la conversation humaine et de la décision quant à la prochaine étape.",
      safetyLine:
        "L'IA soutient la préparation et la priorisation. Elle ne pose pas de diagnostic, ne prescrit pas de traitement et ne remplace pas le jugement de l'infirmier-navigateur.",
    },

    support: {
      heading: "Et ensuite", // UI label
      // [DRAFT FR]
      subheading: "Selon les renseignements que vous choisissez de partager et ce qui est discuté pendant l'appel, l'infirmier-navigateur peut :",
      bullets: [
        "expliquer ce que les renseignements de dépistage peuvent signifier et ce qu'ils ne signifient pas;",
        "vous aider à préparer des questions pour un professionnel de la santé;",
        "partager des ressources d'éducation ou d'autogestion appropriées;",
        "aider à identifier un partenaire de services OLH approprié; ou",
        "recommander un niveau de soins plus immédiat lorsque les renseignements indiquent une urgence.",
      ],
      note: "Un résultat de dépistage ne crée pas automatiquement une référence. Chaque prochaine étape dépend du consentement, du besoin évalué, de la disponibilité des services et de l'admissibilité du partenaire.",
    },

    // [DRAFT FR]
    cta: {
      heading: "Votre santé. Vos renseignements. Votre prochaine étape.",
      subheading:
        "Utilisez l'application OLH pour compléter des évaluations optionnelles, jumeler une borne participante, gérer vos autorisations et rester connecté au parcours OLH.",
      iosButton: "Télécharger la version iOS",
      androidButton: "Télécharger la version Android",
    },
  },

  whoWeServe: {
    hero: {
      // [DRAFT FR]
      heading: "Tout le monde est le bienvenu.",
      headingPrefix: "Tout le monde est",
      headingAccent: "le bienvenu.",
      subheading:
        "OLH est conçu pour quiconque souhaite un premier pas simple et privé—mais il peut être particulièrement utile lorsque les soins semblent distants, déroutants, inconfortables ou difficiles d'accès.",
    },

    audiences: [
      {
        icon: "doctor",
        title: "Personnes sans soins primaires",
        body: "Un moyen pratique de surveiller certains indicateurs de santé et de discuter d'une prochaine étape appropriée en attendant d'être jumelé à un prestataire de soins primaires.",
      },
      {
        icon: "veteran",
        title: "Anciens combattants et leurs familles",
        body: "Un cadre communautaire familier offrant des passerelles possibles vers des services hospitaliers et spécialisés pour anciens combattants, lorsque approprié.",
      },
      {
        icon: "senior",
        title: "Aînés",
        body: "Un accès proche de chez soi à un dépistage guidé, avec un soutien humain disponible pour expliquer les options et réduire la confusion.",
      },
      {
        icon: "rural",
        title: "Résidents des régions rurales et des petites municipalités",
        body: "Un point d'accès local pour les personnes confrontées à de longs déplacements, à une disponibilité limitée des rendez-vous ou à de longues attentes pour les soins.",
      },
      {
        icon: "community",
        title: "Peuples autochtones",
        body: "Un accès culturellement respectueux et à faible seuil, soutenu par du personnel formé, un consentement clair et une option indépendante pour explorer une préoccupation de santé.",
      },
      {
        icon: "people",
        title: "Personnes hésitantes",
        body: "Un premier pas privé pour quiconque se sent effrayé, en colère, gêné, incertain ou inquiet que d'autres apprennent une préoccupation de santé.",
      },
      {
        icon: "wellness",
        title: "Personnes qui surveillent leur bien-être",
        body: "Un moyen simple de répéter certains dépistages, d'observer les changements dans le temps et de décider si une conversation avec un professionnel de la santé pourrait être utile.",
      },
    ],

    // [DRAFT FR]
    inclusiveNote:
      "OLH ne s'adresse pas exclusivement aux membres de la Légion, aux anciens combattants, aux aînés ou aux peuples autochtones. Le programme est conçu pour servir tout le monde dans la communauté.",

    // [FR TODO] — structure updated to the new partner copy; French text pending translation
    partners: {
      heading: "Navigation only matters if it ends in service.",
      subheading:
        "Our fulfillment network gives the OLH Nurse Navigator practical options when a client needs more than an explanation.",
      intro:
        "OLH is beginning with respected organizations that bring specialized expertise and established service pathways. As the pilot continues, we expect to add multiple new healthcare and community-service organizations based on the needs we observe.",
      list: [
        {
          name: "Sunnybrook Health Sciences Centre",
          tagline: "Specialized hospital pathways for veterans and cardiovascular care.",
          description:
            "Sunnybrook brings nationally recognized clinical expertise and access pathways that may support eligible OLH clients through the Veterans Program and the Schulich Heart Program. The OLH Nurse Navigator can help an appropriate client understand the available pathway and what information or next steps may be required.",
          logo: "/assets/olh/partners/sunnybrook.svg",
        },
        {
          name: "CAMH",
          tagline: "Specialized mental-health, smoking, memory and related service pathways.",
          description:
            "CAMH expands the range of services that may be available to eligible OLH clients. Current pathways may include STOP smoking services, memory services, lung-cancer access and Indigenous services. The Nurse Navigator helps determine which pathway may fit the client's needs and supports a clearer handoff.",
          logo: "/assets/olh/partners/camh.png",
        },
        {
          name: "MoCA Cognition",
          tagline: "Recognized cognitive-assessment expertise.",
          description:
            "MoCA Cognition provides a pathway related to cognitive assessment and memory concerns. When appropriate, the OLH Nurse Navigator can help an eligible client understand the next step and prepare for a more informed connection.",
          logo: "/assets/olh/partners/mocacognition.png",
          logoClassName: "max-h-24",
        },
      ],
      growTitle: "A network designed to grow",
      growTagline: "These partners are the beginning—not the limit.",
      growBody1:
        "The pilot will help OLH learn which services communities need most. We expect to add new fulfillment partners over time, expanding the range of possible connections available to clients and giving Nurse Navigators more appropriate options.",
      growBody2:
        "More partners can mean more service pathways and more opportunities for useful referrals. It does not mean every screening results in a referral. The right measure is a successful, consented connection to an appropriate service—not referral volume alone.",
      ctaText:
        "Interested in becoming an OLH care or service partner? Let's discuss how your organization could strengthen the community pathway.",
      ctaButton: "Become a Service Partner",
    },

    // [DRAFT FR]
    cta: {
      heading: "Votre santé. Vos renseignements. Votre prochaine étape.",
      subheading:
        "Utilisez l'application OLH pour compléter des évaluations optionnelles, jumeler une borne participante, gérer vos autorisations et rester connecté au parcours OLH.",
      iosButton: "Télécharger la version iOS",
      androidButton: "Télécharger la version Android",
    },
  },

  locations: {
    hero: {
      // [DRAFT FR]
      heading: "Trouvez une borne OLH près de chez vous.",
      headingPrefix: "Trouvez une borne OLH",
      headingAccent: "près de chez vous.",
      subheading:
        "Les bornes OLH sont disponibles dans des succursales participantes de la Légion royale canadienne et dans des lieux communautaires à travers l'Ontario. Aucun rendez-vous n'est requis. Vérifiez les détails de l'emplacement et confirmez les heures d'ouverture publiques avant de vous y rendre.",
    },
    // [DRAFT FR]
    mapNote:
      "Les emplacements des épingles sont approximatifs. Confirmez les heures d'ouverture publiques auprès de l'emplacement participant avant de vous y rendre.",
    participatingLocation: "Emplacement participant", // [DRAFT FR]
    communityLocation: "Emplacement communautaire", // [DRAFT FR]
    getDirections: "Itinéraire", // [DRAFT FR]
    rcl: "Légion royale canadienne", // [DRAFT FR]
    // [DRAFT FR]
    cta: {
      heading: "Votre santé. Vos renseignements. Votre prochaine étape.",
      subheading:
        "Utilisez l'application OLH pour compléter des évaluations optionnelles, jumeler une borne participante, gérer vos autorisations et rester connecté au parcours OLH.",
      iosButton: "Télécharger la version iOS",
      androidButton: "Télécharger la version Android",
    },
  },

  footer: {
    // [DRAFT FR] — PENDING confirmation, same as EN (see review list, item 4).
    disclaimer:
      "Les outils de dépistage OLH ne fournissent pas de diagnostic et ne remplacent pas les soins médicaux. Si vous vivez une urgence médicale, composez le 911 ou rendez-vous au service d'urgence le plus proche. Si vous ou une personne que vous connaissez pensez au suicide, composez ou textez le 9-8-8 pour obtenir du soutien, disponible 24 heures sur 24, 7 jours sur 7.",
    // [BRIEF - DRAFT FR] — tagline came from client build brief; translated as draft only.
    // [DRAFT FR]
    tagline: "Ontario Legion Health — Un lieu de confiance. Un premier pas simple. Un chemin humain vers les soins.",
    links: [
      { label: "Accueil", href: "/" },
      { label: "Fonctionnement", href: "/how-it-works" },
      { label: "Publics servis", href: "/who-we-serve" },
      { label: "Partenaires", href: "/who-we-serve#partners" },
      { label: "Emplacements", href: "/locations" }, // [DRAFT FR]
      { label: "Confidentialité", href: "/privacy" },
    ],
    copyright: "© 2026 Ontario Legion Health. Tous droits réservés.",
  },

  // [DRAFT FR] — translation of retained English privacy copy, pending language review.
  privacy: {
    headingPrefix: "Vos renseignements",
    headingAccent: "ne sont transmis qu’avec votre autorisation.",
    subheading:
      "OLH est conçu pour vous laisser le contrôle tout en donnant à l’infirmier-navigateur suffisamment de renseignements autorisés pour préparer une conversation utile.",
    controlTitle: "Ce que vous contrôlez",
    controlItems: [
      "si vous souhaitez remplir une évaluation;",
      "quels renseignements vous autorisez OLH à partager;",
      "si un infirmier-navigateur OLH peut vous contacter; et",
      "si vos renseignements peuvent être utilisés pour faciliter une mise en relation avec un partenaire de services.",
    ],
    useTitle: "Comment vos renseignements autorisés sont utilisés",
    useBody:
      "Lorsque vous donnez le consentement requis, certaines évaluations de l’application et certains renseignements de dépistage de la borne peuvent être transmis à l’infirmier-navigateur OLH. Une révision assistée par IA peut aider à organiser les renseignements et à repérer des combinaisons qui méritent attention. L’infirmier-navigateur examine les renseignements source et exerce son jugement humain pendant l’appel.",
    notTitle: "Ce qu’OLH ne fait pas",
    notItems: [
      "La borne et l’application ne fournissent pas de diagnostic médical.",
      "L’IA ne prend pas la décision finale concernant vos soins.",
      "Vos renseignements ne sont pas transmis à un partenaire de services sans les autorisations requises pour cette mise en relation.",
      "OLH ne remplace pas les services d’urgence, un médecin de famille ou les autres membres de votre équipe de soins.",
    ],
  },
};
