"use client";

import { useLang } from "../LangProvider";
import { PageHero } from "@/components/PageHero";
import { PRIVACY_NOTICE_HTML } from "@/content/legal/privacy";

export default function PrivacyPolicyPage() {
  const { lang } = useLang();
  return (
    <>
      <PageHero accent={lang === "fr" ? "Avis de confidentialité" : "Privacy Notice"} />
      <section className="bg-white py-16 px-6 lg:px-8">
        {/* Legal text is supplied in English only. */}
        <div className="legal-content max-w-3xl mx-auto" lang="en" dangerouslySetInnerHTML={{ __html: PRIVACY_NOTICE_HTML }} />
      </section>
    </>
  );
}
