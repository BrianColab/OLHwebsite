"use client";

import { useLang } from "../LangProvider";
import { PageHero } from "@/components/PageHero";
import { DATA_SHARING_HTML } from "@/content/legal/dataSharing";

export default function DataSharingPage() {
  const { lang } = useLang();
  return (
    <>
      <PageHero accent={lang === "fr" ? "Consentement au partage de mes renseignements de santé" : "Consent to Share My Health Information"} />
      <section className="bg-white py-16 px-6 lg:px-8">
        {/* Legal text is supplied in English only. */}
        <div className="legal-content max-w-3xl mx-auto" lang="en" dangerouslySetInnerHTML={{ __html: DATA_SHARING_HTML }} />
      </section>
    </>
  );
}
