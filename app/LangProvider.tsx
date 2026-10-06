"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import type { Lang } from "@/content";

const LangContext = createContext<{
  lang: Lang;
  setLang: (lang: Lang) => void;
}>({ lang: "en", setLang: () => {} });

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, updateLang] = useState<Lang>("en");
  const pathname = usePathname();

  useEffect(() => {
    try {
      const saved = localStorage.getItem("olh-language");
      if (saved === "en" || saved === "fr") {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        updateLang(saved);
      }
    } catch { /* Language selection still works when storage is unavailable. */ }
  }, []);

  function setLang(next: Lang) {
    updateLang(next);
    try { localStorage.setItem("olh-language", next); } catch { /* Storage is optional. */ }
  }

  useEffect(() => {
    document.documentElement.lang = lang;
    const pages = {
      "/": {
        en: ["Ontario Legion Health — Care in Your Community", "Free, accessible screening for your heart and mental health, located in the trusted spaces of your local Royal Canadian Legion."],
        fr: ["Ontario Legion Health — Des soins dans votre communauté", "Un dépistage gratuit et accessible pour votre santé cardiaque et mentale, dans les lieux familiers de votre succursale locale de la Légion royale canadienne."],
      },
      "/how-it-works": {
        en: ["How It Works | Ontario Legion Health", "Learn how the OLH app, community kiosk and Nurse Navigator help you understand your options and connect with appropriate services."],
        fr: ["Fonctionnement | Ontario Legion Health", "Découvrez comment l’application OLH, la borne communautaire et l’infirmier-navigateur vous aident à comprendre vos options et à accéder aux services appropriés."],
      },
      "/who-we-serve": {
        en: ["Who We Serve | Ontario Legion Health", "OLH is a free, inclusive program open to the public — serving veterans, seniors, rural residents, and anyone without a family doctor."],
        fr: ["Publics servis | Ontario Legion Health", "OLH est un programme gratuit et inclusif, ouvert à tous : anciens combattants, aînés, résidents des régions rurales et personnes sans médecin de famille."],
      },
      "/locations": {
        en: ["Locations | Ontario Legion Health", "Find an OLH health screening kiosk near you. Kiosks are located at Royal Canadian Legion branches and community locations across Ontario."],
        fr: ["Emplacements | Ontario Legion Health", "Trouvez une borne de dépistage OLH près de chez vous, dans les succursales de la Légion royale canadienne et les lieux communautaires de l’Ontario."],
      },
      "/privacy": {
        en: ["Privacy | Ontario Legion Health", "Understand how you control your OLH information, permissions and connections to service partners."],
        fr: ["Confidentialité | Ontario Legion Health", "Découvrez comment vous contrôlez vos renseignements OLH, vos autorisations et vos mises en relation avec les partenaires de services."],
      },
    };
    const page = pages[pathname as keyof typeof pages];
    if (!page) return;
    // Next can finish inserting route metadata after hydration. Keep it in
    // the selected language when those delayed head updates arrive.
    function syncMetadata() {
      if (document.title !== page[lang][0]) document.title = page[lang][0];
      const description = document.querySelector('meta[name="description"]');
      if (description?.getAttribute("content") !== page[lang][1]) {
        description?.setAttribute("content", page[lang][1]);
      }
    }
    syncMetadata();
    const observer = new MutationObserver(syncMetadata);
    observer.observe(document.head, { childList: true, subtree: true, attributes: true, characterData: true });
    return () => observer.disconnect();
  }, [lang, pathname]);
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
