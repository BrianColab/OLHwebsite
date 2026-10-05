"use client";

import { useLang } from "../LangProvider";
import { content } from "@/content";
import { PageHero } from "@/components/PageHero";

export default function PrivacyPage() {
  const { lang } = useLang();
  const c = content[lang].privacy;

  return (
    <>
      <PageHero prefix={c.headingPrefix || undefined} accent={c.headingAccent} />

      <section className="bg-white py-24 px-6 lg:px-8">
        <div className="max-w-container mx-auto text-center">
          <p className="text-lg text-olh-text-secondary">{c.comingSoon}</p>
        </div>
      </section>
    </>
  );
}
