"use client";

import { useLang } from "../LangProvider";
import { content } from "@/content";
import { AudienceCard } from "@/components/AudienceCard";
import { PartnerCard } from "@/components/PartnerCard";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";

export default function WhoWeServePage() {
  const { lang } = useLang();
  const c = content[lang].whoWeServe;

  return (
    <>
      {/* ── Page hero ──────────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-olh-border py-16 md:py-20 px-4">
        <div className="max-w-container mx-auto">
          <SectionHeading
            heading={c.hero.heading}
            subheading={c.hero.subheading}
            align="center"
            level={1}
          />
        </div>
      </section>

      {/* ── Audience cards ─────────────────────────────────────────────────── */}
      <section className="bg-white py-20 px-4">
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
        buttonLabel={c.cta.button}
      />
    </>
  );
}
