"use client";

import { useLang } from "../LangProvider";
import { content } from "@/content";
import { AudienceCard } from "@/components/AudienceCard";
import { PartnerCard } from "@/components/PartnerCard";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";

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
      <section className="bg-olh-bg-light py-20 px-4">
        <div className="max-w-container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {c.audiences.map((audience) => (
              <AudienceCard
                key={audience.title}
                icon={audience.icon}
                title={audience.title}
                body={audience.body}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Partners ───────────────────────────────────────────────────────── */}
      {/* TODO: Replace text-placeholder cards with official partner logos
          once supplied. Required: PNG or SVG at ≥ 2× resolution on white bg.
          Do not invent or approximate official logos. */}
      <section id="partners" className="bg-olh-bg-light border-y border-olh-border py-20 px-4">
        <div className="max-w-container mx-auto">
          <SectionHeading
            heading={c.partners.heading}
            subheading={c.partners.subheading}
            align="center"
            className="mb-12"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {c.partners.list.map((partner) => (
              <PartnerCard
                key={partner.name}
                name={partner.name}
                description={partner.description}
                logo={partner.logo}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────────── */}
      <CTASection
        heading={c.cta.heading}
        iosLabel={c.cta.iosButton}
        androidLabel={c.cta.androidButton}
      />
    </>
  );
}
