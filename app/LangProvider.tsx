"use client";

import { createContext, useContext, useState } from "react";
import type { Lang } from "@/content";

const LangContext = createContext<{
  lang: Lang;
  setLang: (lang: Lang) => void;
}>({ lang: "en", setLang: () => {} });

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
