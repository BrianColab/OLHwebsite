// Source of truth: OLH Website Copy.docx
// All copy must be traceable to that document or marked as a UI label.
// Lines marked [BRIEF] came from the client's build brief, not the Word doc
// — they are flagged for client review and should be confirmed or replaced.

export const en = {
  nav: {
    // UI labels
    home: "Home",
    howItWorks: "How It Works",
    whoWeServe: "Who We Serve",
    partners: "Partners",
    contact: "Contact Us",
  },

  home: {
    hero: {
      // Doc: "Ontario Legion Health: Care in Your Community"
      headline: "Care in Your Community",
      headlinePrefix: "Care in Your",
      headlineAccent: "Community",
      // Doc: paragraph 2
      subheadline:
        "Free, accessible screening for your heart and mental health, located in the trusted spaces of your local Royal Canadian Legion.",
      // UI labels
      ctaPrimary: "Learn More",
      ctaSecondary: "Download the App",
      // Floating badge over hero image
      badgeTitle: "Free community screening",
      badgeSubtitle: "Heart + mental health",
      // Trust row under buttons
      trust: [
        { icon: "heart", label: "Free Screening" },
        { icon: "pin", label: "Community-Based" },
        { icon: "shield", label: "Private & Secure" },
      ],
    },

    // Feature cards: titles are section labels; descriptions closely paraphrase
    // the step/kiosk copy in the doc — no new medical claims added.
    features: [
      {
        icon: "heart",
        title: "Heart Health",
        description:
          "Measure blood pressure, weight, and BMI with clinical-grade kiosks right in your community.",
      },
      {
        icon: "brain",
        title: "Mental Health",
        description:
          "Complete standardized mental health screenings for anxiety, depression, and stress from your phone.",
      },
      {
        icon: "pin",
        title: "Right in Your Community",
        description:
          "Kiosks are placed in Royal Canadian Legion branches — in urban community hubs and rural communities alike.",
      },
      {
        icon: "people",
        title: "Free & Inclusive",
        // Doc: "OLH is a free, inclusive program open to the public"
        description:
          "OLH is a free, inclusive program open to the public, supporting those who face the highest barriers to traditional care.",
      },
    ],

    bridging: {
      // Doc: paragraph 3 heading
      heading: "Bridging the Gap in Healthcare",
      headingPrefix: "Bridging the",
      headingAccent: "Gap in Healthcare",
      statLabel: "Ontarians currently without a primary care provider",
      ctaLink: "How It Works →",
      // Doc: paragraph 4
      body1:
        "Over 2.5 million Ontarians are currently navigating the healthcare system without a primary care provider. Ontario Legion Health (OLH) was designed to bridge this gap. We provide a low-barrier, preventative screening service focused on the leading contributors to everyday wellness: cardiovascular and mental health.",
      // Doc: paragraph 5
      body2:
        "While OLH does not replace a family doctor, it serves as a secure, temporary hub. We help you take charge of your wellbeing, interpret health risks early, and navigate the healthcare system while you wait to be connected with a primary care provider.",
    },

    // [BRIEF] — CTA heading and subheading came from the client build brief,
    // not the Word doc. Flagged for client confirmation before launch.
    cta: {
      heading: "Your health. Your community. Your time.",
      subheading: null as null, // removed: "Ontario Legion Health is here for you." — not in doc
      iosButton: "Download for iOS", // UI label — TODO: replace href="#" with App Store link
      androidButton: "Download for Android", // UI label — TODO: replace href="#" with Google Play link
    },

  },

  howItWorks: {
    hero: {
      // [BRIEF] "Simple steps. Powerful insights." removed — not in doc
      // "Better health starts here." removed — not in doc
      heading: "How It Works", // Doc: section heading
      headingPrefix: "How It",
      headingAccent: "Works",
    },

    steps: [
      {
        number: "01",
        // Doc: paragraph 7
        title: "Download the Secure App",
        // Doc: paragraph 8
        body: "Start by downloading the free OLH mobile app. From the privacy of your phone, you can complete standardized mental health screenings to check in on anxiety, depression, and stress. The app also serves as your private, secure hub for all your physical screening data.",
        // Alt text for placeholder image
        imageAlt: "OLH mobile app welcome screen on a smartphone",
      },
      {
        number: "02",
        // Doc: paragraph 9
        title: "Visit a Community Kiosk",
        // Doc: paragraph 10
        body: "Head to a participating Royal Canadian Legion branch and pair your app with one of our clinical-grade health kiosks. In just a few minutes, the kiosk will measure vital physical health indicators, including your blood pressure, weight, and BMI.",
        imageAlt: "OLH health screening kiosk at a Legion branch",
      },
      {
        number: "03",
        // Doc: paragraph 11
        title: "Review and Connect",
        // Doc: paragraph 12
        body: "Your results are delivered instantly and securely to your device. If any health flags or risks are identified, the app will guide you on your next steps.",
        imageAlt: "OLH app showing health results on a smartphone",
      },
    ],

    support: {
      heading: "What Happens Next", // UI label
      // Doc: from paragraph 12 — "Depending on your results, you can choose to:"
      subheading: "Depending on your results, you can choose to:",
      cards: [
        {
          icon: "book",
          // Doc: paragraph 13 label
          title: "Access Educational Resources",
          // Doc: paragraph 13
          body: "Access educational resources to help maintain a healthy lifestyle.",
        },
        {
          icon: "chart",
          // Doc: paragraph 14 label
          title: "Track Your Progress",
          // Doc: paragraph 14
          body: "Track your progress over time and share the data with your doctor, if you have one.",
        },
        {
          icon: "nurse",
          // Doc: paragraph 15 label
          title: "Connect with a Virtual Nurse",
          // Doc: paragraph 15
          body: "Book an appointment through the app to speak directly with an OLH nurse who can help you interpret your results and offer personalized guidance.",
        },
        {
          icon: "navigator",
          // Doc: paragraph 16 label
          title: "Work with a Care Navigator",
          // Doc: paragraph 16
          body: "If further support is needed, our navigators can help you connect with local clinics, mental health resources, and community services.",
        },
      ],
    },

    // CTA — removed invented subheading; heading is a UI label only
    cta: {
      heading: "Download the App", // UI label
      subheading: null as null,
      iosButton: "Download for iOS",
      androidButton: "Download for Android",
    },
  },

  whoWeServe: {
    hero: {
      // Doc: section heading
      heading: "Who We Serve",
      headingPrefix: "Who We",
      headingAccent: "Serve",
      // Doc: paragraph 18
      subheading:
        "OLH is a free, inclusive program open to the public. Kiosks are strategically placed in urban community hubs and rural Legion branches to support those who face the highest barriers to traditional care.",
    },

    audiences: [
      {
        icon: "veteran",
        // Doc: paragraph 19 label
        title: "Veterans and their families",
        // Doc: paragraph 19
        body: "Offering tailored support for physical health and operational stress injuries.",
      },
      {
        icon: "doctor",
        // Doc: paragraph 20 label
        title: "Without a family doctor",
        // Doc: paragraph 20
        body: "Providing a reliable way to monitor your health while you wait for attachment to a primary care provider.",
      },
      {
        icon: "senior",
        // Doc: paragraph 21 label
        title: "Seniors",
        // Doc: paragraph 21
        body: "Offering convenient, close-to-home monitoring for conditions like high blood pressure or diabetes.",
      },
      {
        icon: "rural",
        // Doc: paragraph 22 label
        title: "Rural residents",
        // Doc: paragraph 22
        body: "Bringing preventative screening directly to communities where healthcare access is limited.",
      },
      {
        icon: "community",
        // Doc: paragraph 23 label
        title: "Indigenous peoples",
        // Doc: paragraph 23
        body: "Providing safe, stigma-free health monitoring, backed by staff trained in the Crystal Clear Code of Conduct.",
      },
      {
        icon: "wellness",
        // Doc: paragraph 24 label
        title: "The health-conscious",
        // Doc: paragraph 24
        body: "Anyone looking for a free, simple way to proactively track their physical and mental wellness.",
      },
    ],

    partners: {
      // Doc: paragraph 25
      heading: "Built on Trusted Partnerships",
      // Doc: paragraph 26
      subheading:
        "The OLH pilot program is made possible by a coalition of community, healthcare, and technology leaders:",
      list: [
        {
          // Doc: paragraph 27 label
          name: "The Royal Canadian Legion – Ontario Command",
          // Doc: paragraph 27
          description:
            "Serving as the welcoming, community-based home for our screening kiosks across the province.",
          logo: "/assets/olh/partners/legion-ontario-command.svg",
        },
        {
          // Doc: paragraph 28 label
          name: "Sunnybrook Health Sciences Centre",
          // Doc: paragraph 28
          description:
            "Providing clinical oversight, research expertise, and specialized care navigation for Veterans.",
          logo: "/assets/olh/partners/sunnybrook.svg",
        },
        {
          // Doc: paragraph 29 label
          name: "TryCycle Data Systems",
          // Doc: paragraph 29
          description:
            "Powering the secure mobile application and mental health screening tools.",
          logo: "/assets/olh/partners/trycycle-black-text.svg",
        },
        {
          // Doc: paragraph 30 label
          name: "PharmaSmart",
          // Doc: paragraph 30
          description:
            "Supplying the clinically validated biometric kiosks used across the country.",
          logo: "/assets/olh/partners/pharmasmart.svg",
        },
      ],
    },

    // CTA — removed invented subheadings; heading is a UI label
    cta: {
      heading: "Download the App", // UI label
      subheading: null as null,
      iosButton: "Download for iOS",
      androidButton: "Download for Android",
    },
  },

  footer: {
    // [BRIEF] — tagline came from client build brief, not Word doc. Flagged for review.
    tagline: "Ontario Legion Health — Care in Your Community",
    // Contact Us is intentionally absent — it opens the slide-out drawer,
    // handled via the onContactClick prop in Footer and SiteShell.
    links: [
      { label: "Home", href: "/" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Who We Serve", href: "/who-we-serve" },
      { label: "Partners", href: "/who-we-serve#partners" },
    ],
    copyright: "© 2025 Ontario Legion Health. All rights reserved.",
  },
};

export type SiteContent = typeof en;
