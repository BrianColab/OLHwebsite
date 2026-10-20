"use client";

import { useLang } from "../LangProvider";
import { PageHero } from "@/components/PageHero";
import { TERMS_HTML } from "@/content/legal/terms";

export default function TermsWaiverPage() {
  const { lang } = useLang();
  return (
    <>
      <PageHero accent={lang === "fr" ? "Conditions d’utilisation" : "Terms & Conditions"} />
      <section className="bg-white py-16 px-6 lg:px-8">
        {/* Legal text is supplied in English only. */}
        <div className="legal-content max-w-3xl mx-auto" lang="en" dangerouslySetInnerHTML={{ __html: TERMS_HTML }} />
      </section>
    </>
  );
}
