"use client";

import { useLang } from "../LangProvider";
import { content } from "@/content";
import { PageHero } from "@/components/PageHero";
import { FadeIn } from "@/components/FadeIn";

export default function PrivacyPage() {
  const { lang } = useLang();
  const c = content[lang].privacy;

  return (
    <>
      <PageHero prefix={c.headingPrefix} accent={c.headingAccent} subheading={c.subheading} />

      <section className="bg-white py-20 px-6 lg:px-8">
        <div className="max-w-container mx-auto max-w-3xl flex flex-col gap-12">
          <FadeIn>
          <div>
            <h2 className="text-2xl font-black text-olh-text-primary tracking-tight mb-4">{c.controlTitle}</h2>
            <ul className="flex flex-col gap-3">
              {c.controlItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base text-olh-text-secondary leading-relaxed">
                  <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-olh-red flex-shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          </FadeIn>

          <FadeIn delay={80}>
          <div>
            <h2 className="text-2xl font-black text-olh-text-primary tracking-tight mb-4">{c.useTitle}</h2>
            <p className="text-base md:text-lg text-olh-text-secondary leading-relaxed">{c.useBody}</p>
          </div>
          </FadeIn>

          <FadeIn delay={160}>
          <div>
            <h2 className="text-2xl font-black text-olh-text-primary tracking-tight mb-4">{c.notTitle}</h2>
            <ul className="flex flex-col gap-3">
              {c.notItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base text-olh-text-secondary leading-relaxed">
                  <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-olh-red flex-shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
