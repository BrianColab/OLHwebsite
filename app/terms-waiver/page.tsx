"use client";

import { useLang } from "../LangProvider";
import { PageHero } from "@/components/PageHero";

// Content to come.
export default function TermsWaiverPage() {
  const { lang } = useLang();
  return <PageHero accent={lang === "fr" ? "Conditions et renonciation" : "Terms & Waiver"} />;
}
