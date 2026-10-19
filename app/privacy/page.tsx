"use client";

import { useLang } from "../LangProvider";
import { PageHero } from "@/components/PageHero";

// Content to come.
export default function PrivacyPolicyPage() {
  const { lang } = useLang();
  return <PageHero accent={lang === "fr" ? "Politique de confidentialité" : "Privacy Policy"} />;
}
