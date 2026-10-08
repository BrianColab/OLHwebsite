"use client";

import { useLang } from "../LangProvider";
import { content } from "@/content";
import { AudienceCard } from "@/components/AudienceCard";
import { PartnerCard } from "@/components/PartnerCard";
import { Button } from "@/components/Button";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn } from "@/components/FadeIn";

export default function WhoWeServePage() {
  const { lang } = useLang();
  const c = content[lang].whoWeServe;

  return (
    <>
      {/* ── Page hero ──────────────────────────────────────────────────────── */}
      <PageHero
        prefix={c.hero.headingPrefix || undefined}
        accent={c.hero.headingAccent}
        subheading={c.hero.subheading}
      />

      {/* ── Audience cards ─────────────────────────────────────────────────── */}
      <section className="bg-olh-bg-light py-20 px-6 lg:px-8">
        <div className="max-w-container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {c.audiences.map((audience, i) => (
              <FadeIn key={audience.title} delay={i * 80}>
              <AudienceCard
                icon={audience.icon}
                title={audience.title}
                body={audience.body}
              />
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={c.audiences.length * 80}>
          <div className="mt-8 rounded-2xl bg-white border border-olh-border px-6 py-5 md:px-8 md:py-6 max-w-3xl mx-auto text-center">
            <p className="text-base text-olh-text-secondary leading-relaxed">
              {c.inclusiveNote}
            </p>
          </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Partners ───────────────────────────────────────────────────────── */}
      {/* Partner logos supplied and approved for use by the respective partners. */}
      <section id="partners" className="bg-olh-bg-light border-y border-olh-border py-20 px-6 lg:px-8">
        <div className="max-w-container mx-auto">
          <FadeIn>
          <SectionHeading
            heading={c.partners.heading}
            subheading={c.partners.subheading}
            align="center"
            className="mb-6"
          />
          <p className="max-w-3xl mx-auto text-center text-base text-olh-text-secondary leading-relaxed mb-12">
            {c.partners.intro}
          </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {c.partners.list.map((partner, i) => (
              <FadeIn key={partner.name} delay={i * 80} className="h-full">
              <PartnerCard
                lang={lang}
                name={partner.name}
                tagline={partner.tagline}
                description={partner.description}
                logo={partner.logo}
                logoClassName={partner.logoClassName}
              />
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={160}>
          <div className="mt-16 max-w-3xl mx-auto text-center flex flex-col items-center gap-4">
            <h3 className="text-2xl font-black text-olh-text-primary tracking-tight">{c.partners.growTitle}</h3>
            <p className="text-base font-semibold text-olh-text-primary">{c.partners.growTagline}</p>
            <p className="text-base text-olh-text-secondary leading-relaxed">{c.partners.growBody1}</p>
            <p className="text-base text-olh-text-secondary leading-relaxed">{c.partners.growBody2}</p>
            <p className="mt-2 text-base text-olh-text-secondary leading-relaxed">{c.partners.ctaText}</p>
            <Button href="mailto:john@trycycle.ca" variant="primary" className="text-base px-7 py-4">
              {c.partners.ctaButton}
            </Button>
          </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────────── */}
      <CTASection
        heading={c.cta.heading}
        subheading={c.cta.subheading}
        iosLabel={c.cta.iosButton}
        androidLabel={c.cta.androidButton}
      />
    </>
  );
}
