"use client";

import { useLang } from "./LangProvider";
import { content } from "@/content";
import { Button } from "@/components/Button";
import { FeatureCard } from "@/components/FeatureCard";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";

export default function HomePage() {
  const { lang } = useLang();
  const c = content[lang].home;

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-24 px-4 overflow-hidden">
        <div className="max-w-container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Copy */}
            <div>
              <p className="text-olh-red text-sm font-semibold uppercase tracking-widest mb-4">
                Ontario Legion Health
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-olh-text-primary leading-[1.08] tracking-tight">
                {c.hero.headline}
              </h1>
              <p className="mt-6 text-lg md:text-xl text-olh-text-secondary leading-relaxed max-w-lg">
                {c.hero.subheadline}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button href="/how-it-works" variant="primary" className="text-base px-7 py-4">
                  {c.hero.ctaPrimary}
                </Button>
                <Button href="#" variant="secondary" className="text-base px-7 py-4">
                  {c.hero.ctaSecondary}
                </Button>
              </div>
            </div>

            {/* ── Hero image placeholder ───────────────────────────────────────
                TODO: Replace with professional photography of a Veteran or
                older adult speaking with a healthcare worker using a tablet.
                Tone: warm, bright, community-based, trustworthy.
                Recommended image size: 800 × 600px (4:3 ratio).
            ─────────────────────────────────────────────────────────────────── */}
            <div className="relative hidden md:block">
              <div
                className="rounded-2xl bg-olh-bg-light border border-olh-border overflow-hidden aspect-[4/3] flex items-center justify-center"
                role="img"
                aria-label="Healthcare professional assisting a community member at an OLH kiosk"
              >
                <div className="text-center p-10 pointer-events-none select-none">
                  <div className="w-20 h-20 rounded-full bg-olh-red/10 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-olh-red/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </div>
                  <p className="text-xs text-olh-text-secondary/60 italic leading-relaxed">
                    Photo: Veteran or older adult<br />with healthcare worker (tablet)
                  </p>
                </div>
                <div className="absolute top-0 right-0 w-28 h-28 bg-olh-red/5 rounded-bl-full pointer-events-none" aria-hidden="true" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Feature cards ──────────────────────────────────────────────────── */}
      <section className="bg-olh-bg-light py-14 px-4 border-y border-olh-border">
        <div className="max-w-container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {c.features.map((feature) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Bridging the Gap ───────────────────────────────────────────────── */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <SectionHeading heading={c.bridging.heading} />
            <div className="flex flex-col gap-5">
              <p className="text-base md:text-lg text-olh-text-secondary leading-relaxed">
                {c.bridging.body1}
              </p>
              <p className="text-base md:text-lg text-olh-text-secondary leading-relaxed">
                {c.bridging.body2}
              </p>
              <div className="mt-2">
                <Button href="/how-it-works" variant="ghost" className="pl-0 text-base font-semibold">
                  How It Works →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stat ───────────────────────────────────────────────────────────────
          Only the "Over 2.5 million Ontarians" figure is cited in the source
          document. All other invented stat labels have been removed.
      ──────────────────────────────────────────────────────────────────────── */}
      <section className="bg-olh-bg-light border-y border-olh-border py-12 px-4">
        <div className="max-w-container mx-auto">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-12">
            <div className="flex-shrink-0 text-center sm:text-left">
              <span className="text-4xl md:text-5xl font-bold text-olh-red block">2.5M+</span>
              <span className="text-sm text-olh-text-secondary mt-1 block max-w-[200px]">
                Ontarians currently without a primary care provider
              </span>
            </div>
            <div className="w-px self-stretch bg-olh-border hidden sm:block" aria-hidden="true" />
            <p className="text-base md:text-lg text-olh-text-secondary leading-relaxed max-w-xl">
              {c.bridging.body2}
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA banner ─────────────────────────────────────────────────────── */}
      {/* [BRIEF] heading came from build brief — pending client confirmation */}
      <CTASection
        heading={c.cta.heading}
        iosLabel={c.cta.iosButton}
        androidLabel={c.cta.androidButton}
      />
    </>
  );
}
