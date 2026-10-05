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
    locations: "Locations",
    contact: "Contact Us",
  },

  home: {
    hero: {
      // Doc: Hero eyebrow
      eyebrow: "ONTARIO LEGION HEALTH",
      // Doc: Hero headline
      headline: "A trusted place. A simple first step. A human path to care.",
      headlinePrefix: "A trusted place. A simple first step.",
      headlineAccent: "A human path to care.",
      // Doc: Hero body
      subheadline:
        "Ontario Legion Health combines a walk-in health kiosk, a private app and follow-up from an OLH Nurse Navigator—inside familiar community locations.",
      // Doc: Hero body, second line
      subheadline2:
        "Open to everyone. No appointment or health card required at participating locations.",
      // Doc: Primary actions ("SEE HOW OLH WORKS | FIND A KIOSK")
      // Implementation note: Keep "Download the App" as a secondary action.
      ctaPrimary: "See How OLH Works",
      ctaSecondary: "Find a Kiosk",
      // Floating badge over hero image — keeping current concept for now
      badgeTitle: "Free community screening",
      badgeSubtitle: "Heart + mental health",
    },

    // Feature cards: titles are section labels; descriptions closely paraphrase
    // the step/kiosk copy in the doc — no new medical claims added.
    features: [
      {
        icon: "heart",
        title: "Biometric health screening",
        description:
          "Use an OLH kiosk to measure indicators such as blood pressure, weight and BMI in a guided, walk-in session.",
      },
      {
        icon: "brain",
        title: "Mental-health check-ins",
        description:
          "Complete standardized assessments from the privacy of the OLH app and decide what information you want to share.",
      },
      {
        icon: "nurse",
        title: "Human follow-up",
        description:
          "With your consent, an OLH Nurse Navigator reviews the information you authorized and calls to help clarify the next step.",
      },
      {
        icon: "navigator",
        title: "Connections to service",
        description:
          "When additional support is appropriate, the Nurse Navigator can help connect you with a growing network of healthcare and community-service partners.",
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

    // Doc: "Why the Legion matters" (trust section)
    // PLACEHOLDER — pending client confirmation of the Legion history claim (see review list, item 2).
    // The doc's "For more than a century..." line is deliberately omitted until approved.
    trust: {
      heading: "Why the Legion matters",
      body1:
        "Royal Canadian Legion branches are familiar gathering places in communities across Ontario. They are recognizable, accessible and often less intimidating than a clinical setting.",
      body2:
        "By placing the OLH kiosk inside participating branches, residents can begin without scheduling an appointment or entering a waiting room. The branch supplies trust before the technology asks for action.",
    },

    // Doc: Partner preview section
    // PLACEHOLDER — partner names withheld pending client confirmation of the roster (see review list, item 1).
    partnerPreview: {
      heading: "Screening is only useful when it leads somewhere.",
      body1:
        "OLH is building a fulfillment network that helps turn authorized health information into practical next steps.",
      body2:
        "[Partner names pending confirmation — see partner roster review]. Together, they provide pathways into specialized services spanning veterans' health, cardiovascular care, smoking cessation, mental health, memory and cognitive assessment.",
      body3:
        "These organizations are the beginning. As the pilot reveals what communities need most, OLH expects to add new care and service partners. A larger network creates more possible pathways and gives Nurse Navigators more appropriate options when helping clients move forward.",
      link: "Meet Our Service Partners →",
    },

    // Doc: App promotion (section 8)
    cta: {
      heading: "Your health. Your information. Your next step.",
      subheading:
        "Use the OLH app to complete optional assessments, pair with a participating kiosk, manage your permissions and stay connected to the OLH pathway.",
      iosButton: "Download for iOS", // UI label — TODO: replace href="#" with App Store link
      androidButton: "Download for Android", // UI label — TODO: replace href="#" with Google Play link
    },

  },

  howItWorks: {
    hero: {
      // Doc: Page headline
      heading: "One simple pathway—from concern to connection.",
      headingPrefix: "One simple pathway—",
      headingAccent: "from concern to connection.",
      // Doc: subhead line under page headline
      subheading:
        "The kiosk, app and Nurse Navigator each have one clear job. Together, they help make the next step easier to understand.",
    },

    steps: [
      {
        number: "01",
        // Doc: "Start with the OLH app"
        title: "Start with the OLH app",
        body: "Create your private account and complete optional mental-health assessments from your phone. The app keeps your OLH information and permissions together in one place.",
        imageAlt: "OLH mobile app welcome screen on a smartphone",
      },
      {
        number: "02",
        // Doc: "Visit an OLH kiosk"
        title: "Visit an OLH kiosk",
        body: "Go to a participating location—no appointment required—and complete a guided biometric screening. The kiosk may measure indicators including blood pressure, weight and BMI.",
        imageAlt: "OLH health screening kiosk at a Legion branch",
      },
      {
        number: "03",
        // Doc: "Choose what to share"
        title: "Choose what to share",
        body: "You decide what information may be sent to the OLH Nurse Navigator and whether you want to be contacted. Nothing moves to the navigator without the permissions required for that follow-up.",
        imageAlt: "OLH app consent and sharing preferences screen",
      },
      {
        number: "04",
        // Doc: "Receive a call from the Nurse Navigator"
        title: "Receive a call from the Nurse Navigator",
        body: "The kiosk visit and the call happen at different times. The Nurse Navigator reviews the information you authorized, calls you privately and helps make sense of the available options.",
        imageAlt: "Person taking a private phone call from an OLH Nurse Navigator",
      },
      {
        number: "05",
        // Doc: "Connect with an appropriate service"
        title: "Connect with an appropriate service",
        body: "When further support is appropriate, the Nurse Navigator can help connect you with an OLH care or service partner based on your needs, eligibility and the services available.",
        imageAlt: "Person connecting with a healthcare service partner",
      },
    ],

    // Doc: "IMPORTANT" callout
    callout:
      "Complete the screening at the branch. Receive the Nurse Navigator call later—at home or wherever you feel comfortable.",

    // Doc: "What the technology does"
    technology: {
      heading: "What the technology does",
      body: "Authorized assessment information may be organized with AI-assisted review before the Nurse Navigator calls. This can help surface patterns and priority signals that deserve attention. The Nurse Navigator reviews the source information, adds context and retains responsibility for the human conversation and next-step decision.",
      // Doc: "Plain-language safety line"
      safetyLine:
        "AI supports preparation and prioritization. It does not diagnose, prescribe treatment or replace the Nurse Navigator's judgment.",
    },

    // Doc: "What happens next"
    support: {
      heading: "What happens next",
      subheading:
        "Depending on the information you choose to share and what is discussed during the call, the Nurse Navigator may:",
      bullets: [
        "explain what the screening information may mean and what it does not mean;",
        "help you prepare questions for a healthcare provider;",
        "share appropriate education or self-management resources;",
        "help identify a suitable OLH service partner; or",
        "recommend a more immediate level of care when the information indicates urgency.",
      ],
      note: "A screening result does not automatically create a referral. Every next step depends on consent, assessed need, service availability and partner eligibility.",
    },

    // CTA — removed invented subheading; heading is a UI label only
    // Doc: App promotion (section 8)
    cta: {
      heading: "Your health. Your information. Your next step.",
      subheading:
        "Use the OLH app to complete optional assessments, pair with a participating kiosk, manage your permissions and stay connected to the OLH pathway.",
      iosButton: "Download for iOS",
      androidButton: "Download for Android",
    },
  },

  whoWeServe: {
    hero: {
      // Doc: Page headline
      heading: "Everyone is welcome.",
      headingPrefix: "Everyone is",
      headingAccent: "welcome.",
      // Doc: subhead line under page headline
      subheading:
        "OLH is designed for anyone who wants a simple, private first step—but it may be especially valuable when care feels distant, confusing, uncomfortable or difficult to access.",
    },

    audiences: [
      {
        icon: "doctor",
        // Doc: "People without primary care"
        title: "People without primary care",
        body: "A practical way to monitor selected health indicators and discuss an appropriate next step while waiting to be connected with a primary-care provider.",
      },
      {
        icon: "veteran",
        // Doc: "Veterans and their families"
        title: "Veterans and their families",
        body: "A familiar community setting with possible pathways to specialized veteran and hospital services when appropriate.",
      },
      {
        icon: "senior",
        // Doc: "Seniors"
        title: "Seniors",
        body: "Close-to-home access to guided screening, with human support available to help explain options and reduce confusion.",
      },
      {
        icon: "rural",
        // Doc: "Rural and small-town residents"
        title: "Rural and small-town residents",
        body: "A local entry point for people facing long travel, limited appointment availability or extended waits for care.",
      },
      {
        icon: "community",
        // Doc: "Indigenous people"
        title: "Indigenous people",
        body: "Culturally respectful, low-barrier access supported by trained staff, clear consent and an arm's-length option for exploring a health concern.",
      },
      {
        icon: "people",
        // Doc: "People who feel hesitant"
        title: "People who feel hesitant",
        body: "A private first step for anyone who feels scared, angry, embarrassed, uncertain or worried about others learning about a health concern.",
      },
      {
        icon: "wellness",
        // Doc: "People monitoring their wellbeing"
        title: "People monitoring their wellbeing",
        body: "A simple way to repeat selected screenings, observe changes over time and decide whether a conversation with a healthcare professional may be useful.",
      },
    ],

    // Doc: "INCLUSIVE POSITIONING" callout
    inclusiveNote:
      "OLH is not exclusively for Legion members, veterans, seniors or Indigenous people. It is designed to serve everyone in the community.",

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
          logo: "/assets/olh/partners/OLH Master Logo.png",
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
    // Doc: App promotion (section 8)
    cta: {
      heading: "Your health. Your information. Your next step.",
      subheading:
        "Use the OLH app to complete optional assessments, pair with a participating kiosk, manage your permissions and stay connected to the OLH pathway.",
      iosButton: "Download for iOS",
      androidButton: "Download for Android",
    },
  },

  locations: {
    hero: {
      // Doc: Page headline
      heading: "Find an OLH kiosk near you.",
      headingPrefix: "Find an OLH kiosk",
      headingAccent: "near you.",
      // Doc: body + "No appointment is required..." line
      subheading:
        "OLH kiosks are available at participating Royal Canadian Legion branches and community locations across Ontario. No appointment is required. Check the location details and confirm public opening hours before visiting.",
    },
    // UI label — approximate disclaimer for map pins
    mapNote:
      "Pin locations are approximate. Confirm opening hours with your local branch before visiting.",
    getDirections: "Get Directions",
    rcl: "Royal Canadian Legion",
    // Doc: App promotion (section 8)
    cta: {
      heading: "Your health. Your information. Your next step.",
      subheading:
        "Use the OLH app to complete optional assessments, pair with a participating kiosk, manage your permissions and stay connected to the OLH pathway.",
      iosButton: "Download for iOS",
      androidButton: "Download for Android",
    },
  },

  footer: {
    // Doc: Clinical and crisis disclaimer (section 8)
    // Exact wording from the doc — PENDING client confirmation before this goes live (see review list, item 4).
    disclaimer:
      "OLH screening tools do not provide a diagnosis and are not a substitute for medical care. If you are experiencing a medical emergency, call 911 or go to the nearest emergency department. If you or someone you know is thinking about suicide, call or text 9-8-8 for support available 24 hours a day, seven days a week.",
    // Doc: Footer
    tagline: "Ontario Legion Health — A trusted place. A simple first step. A human path to care.",
    // Contact Us is intentionally absent — it opens the slide-out drawer,
    // handled via the onContactClick prop in Footer and SiteShell.
    links: [
      { label: "Home", href: "/" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Who We Serve", href: "/who-we-serve" },
      { label: "Partners", href: "/who-we-serve#partners" },
      { label: "Locations", href: "/locations" },
      { label: "Privacy", href: "/privacy" },
    ],
    copyright: "© 2025 Ontario Legion Health. All rights reserved.",
  },

  // Placeholder page — full content (section 6 of the doc) is on hold pending
  // privacy/clinical counsel review. Do not publish real copy here without sign-off.
  privacy: {
    heading: "Privacy, Consent and Human Oversight",
    headingPrefix: "Privacy, Consent",
    headingAccent: "and Human Oversight",
    comingSoon: "Text coming soon.",
  },
};

export type SiteContent = typeof en;
