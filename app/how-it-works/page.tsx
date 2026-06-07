"use client";

import { useLang } from "../LangProvider";
import { content } from "@/content";
import { StepCard } from "@/components/StepCard";
import { SupportCard } from "@/components/SupportCard";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";

export default function HowItWorksPage() {
  const { lang } = useLang();
  const c = content[lang].howItWorks;

  return (
    <>
      {/* ── Page hero ──────────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-olh-border py-16 md:py-20 px-4">
        <div className="max-w-container mx-auto">
          <SectionHeading
            heading={c.hero.heading}
            align="center"
          />
        </div>
      </section>

      {/* ── Steps ──────────────────────────────────────────────────────────── */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-container mx-auto flex flex-col gap-20 lg:gap-28">
          {c.steps.map((step, i) => (
            <StepCard
              key={step.number}
              number={step.number}
              title={step.title}
              body={step.body}
              imageAlt={step.imageAlt}
              reversed={i % 2 === 1}
            />
          ))}
        </div>
      </section>

      {/* ── Support cards ──────────────────────────────────────────────────── */}
      <section className="bg-olh-bg-light border-y border-olh-border py-20 px-4">
        <div className="max-w-container mx-auto">
          <SectionHeading
            heading={c.support.heading}
            subheading={c.support.subheading}
            align="center"
            className="mb-12"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {c.support.cards.map((card) => (
              <SupportCard
                key={card.title}
                icon={card.icon}
                title={card.title}
                body={card.body}
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
