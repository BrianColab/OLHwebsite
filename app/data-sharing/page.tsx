"use client";

import { useLang } from "../LangProvider";
import { PageHero } from "@/components/PageHero";

// Content to come.
export default function DataSharingPage() {
  const { lang } = useLang();
  return <PageHero accent={lang === "fr" ? "Partage des données" : "Data Sharing"} />;
}
