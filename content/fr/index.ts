// French content — NOT YET AVAILABLE.
// Do not display this content publicly until approved French copy is provided.
// All values below are structural placeholders only.
// When French copy is ready, replace each value with the approved translation.
// Do not use machine translation.

import type { SiteContent } from "../en";

export const fr: SiteContent = {
  nav: {
    home: "Accueil",
    howItWorks: "Comment ça marche",
    whoWeServe: "Qui nous servons",
    partners: "Partenaires",
    contact: "Contactez-nous",
  },

  home: {
    hero: {
      headline: "TODO: French copy",
      subheadline: "TODO: French copy",
      ctaPrimary: "TODO: French copy",
      ctaSecondary: "TODO: French copy",
    },
    features: [
      { icon: "heart", title: "TODO", description: "TODO: French copy" },
      { icon: "brain", title: "TODO", description: "TODO: French copy" },
      { icon: "pin", title: "TODO", description: "TODO: French copy" },
      { icon: "people", title: "TODO", description: "TODO: French copy" },
    ],
    bridging: {
      heading: "TODO: French copy",
      body1: "TODO: French copy",
      body2: "TODO: French copy",
    },
    cta: {
      heading: "TODO: French copy",
      subheading: null,
      button: "TODO: French copy",
    },
  },

  howItWorks: {
    hero: {
      heading: "TODO: French copy",
    },
    steps: [
      {
        number: "01",
        title: "TODO: French copy",
        body: "TODO: French copy",
        imageAlt: "TODO: French copy",
      },
      {
        number: "02",
        title: "TODO: French copy",
        body: "TODO: French copy",
        imageAlt: "TODO: French copy",
      },
      {
        number: "03",
        title: "TODO: French copy",
        body: "TODO: French copy",
        imageAlt: "TODO: French copy",
      },
    ],
    support: {
      heading: "TODO: French copy",
      subheading: "TODO: French copy",
      cards: [
        { icon: "book", title: "TODO", body: "TODO: French copy" },
        { icon: "chart", title: "TODO", body: "TODO: French copy" },
        { icon: "nurse", title: "TODO", body: "TODO: French copy" },
        { icon: "navigator", title: "TODO", body: "TODO: French copy" },
      ],
    },
    cta: {
      heading: "TODO: French copy",
      subheading: null,
      button: "TODO: French copy",
    },
  },

  whoWeServe: {
    hero: {
      heading: "TODO: French copy",
      subheading: "TODO: French copy",
    },
    audiences: [
      { icon: "veteran", title: "TODO", body: "TODO: French copy" },
      { icon: "doctor", title: "TODO", body: "TODO: French copy" },
      { icon: "senior", title: "TODO", body: "TODO: French copy" },
      { icon: "rural", title: "TODO", body: "TODO: French copy" },
      { icon: "community", title: "TODO", body: "TODO: French copy" },
      { icon: "wellness", title: "TODO", body: "TODO: French copy" },
    ],
    partners: {
      heading: "TODO: French copy",
      subheading: "TODO: French copy",
      list: [
        { name: "The Royal Canadian Legion – Ontario Command", description: "TODO: French copy", logo: "/assets/olh/partners/rcl-ontario-command.webp" },
        { name: "Sunnybrook Health Sciences Centre", description: "TODO: French copy", logo: "/assets/olh/partners/sunnybrook.webp" },
        { name: "TryCycle Data Systems", description: "TODO: French copy", logo: "/assets/olh/partners/trycycle.png" },
        { name: "PharmaSmart", description: "TODO: French copy", logo: "/assets/olh/partners/pharmasmart.png" },
      ],
    },
    cta: {
      heading: "TODO: French copy",
      subheading: null,
      button: "TODO: French copy",
    },
  },

  footer: {
    tagline: "TODO: French copy",
    // Contact Us is intentionally absent — handled via the drawer (see SiteShell)
    links: [
      { label: "Accueil", href: "/" },
      { label: "Comment ça marche", href: "/how-it-works" },
      { label: "Qui nous servons", href: "/who-we-serve" },
      { label: "Partenaires", href: "/who-we-serve#partners" },
    ],
    copyright: "© 2025 Ontario Legion Health. Tous droits réservés.",
  },
};
