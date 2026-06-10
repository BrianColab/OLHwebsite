"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useLang } from "./LangProvider";
import { content } from "@/content";
import Image from "next/image";
import { Button } from "@/components/Button";
import { FeatureCard } from "@/components/FeatureCard";
import { CTASection } from "@/components/CTASection";
import { Icon } from "@/components/icons";
import { LOCATIONS } from "@/data/locations";
import { FadeIn } from "@/components/FadeIn";

const LocationsPreviewMap = dynamic(
  () => import("@/components/LocationsPreviewMap").then((m) => m.LocationsPreviewMap),
  { ssr: false, loading: () => <div className="h-full w-full bg-[#1a1a1a]" /> }
);

const HERO_IMAGES = [
  "/assets/olh/hero/image2a.png",
  "/assets/olh/hero/image2b.png",
  "/assets/olh/hero/image2c.png",
  "/assets/olh/hero/image2d.png",
];

export default function HomePage() {
  const { lang } = useLang();
  const c = content[lang].home;

  // Stable initial value (index 0) matches the static pre-render; randomised
  // after hydration so there is no server/client mismatch warning.
  const [heroImage, setHeroImage] = useState(HERO_IMAGES[0]);
  useEffect(() => {
    // One-time client-side pick — stable initial value (index 0) satisfies
    // static pre-render; random swap happens after hydration, avoiding mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHeroImage(HERO_IMAGES[Math.floor(Math.random() * HERO_IMAGES.length)]);
  }, []);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-24 px-6 lg:px-8 overflow-hidden">
        <div className="max-w-container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Copy */}
            <FadeIn>
            <div>
              <p className="text-olh-red text-sm font-semibold uppercase tracking-widest mb-4">
                Ontario Legion Health
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight">
                <span className="text-olh-text-primary">{c.hero.headlinePrefix} </span>
                <span className="text-olh-red">{c.hero.headlineAccent}</span>
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
            </FadeIn>

            {/* Hero image */}
            <FadeIn delay={150}>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src={heroImage}
                  alt="Community member using Ontario Legion Health screening services at a local Legion branch"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              {/* Floating badge — outside overflow-hidden so it won't be clipped */}
              <div className="absolute bottom-5 left-5 bg-white rounded-2xl shadow-lg px-6 lg:px-8 py-3 hidden md:flex items-center gap-3 border border-olh-border">
                <div className="w-9 h-9 rounded-xl bg-olh-red flex items-center justify-center flex-shrink-0">
                  <Icon name="heart" className="w-4 h-4 text-white" />
                </div>
                <div className="leading-none">
                  <p className="text-xs font-bold text-olh-text-primary">{c.hero.badgeTitle}</p>
                  <p className="text-[11px] text-olh-text-secondary mt-0.5">{c.hero.badgeSubtitle}</p>
                </div>
              </div>
            </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ── Feature cards ──────────────────────────────────────────────────── */}
      <section className="bg-[#111111] py-14 px-6 lg:px-8">
        <div className="max-w-container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {c.features.map((feature, i) => (
              <FadeIn key={feature.title} delay={i * 80}>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bridging the Gap ───────────────────────────────────────────────── */}
      <section className="bg-white py-20 px-6 lg:px-8">
        <div className="max-w-container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Keyword-split heading: prefix small/gray, accent large/red */}
            <FadeIn>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-olh-text-secondary mb-2">
                {c.bridging.headingPrefix}
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-olh-red leading-tight tracking-tight">
                {c.bridging.headingAccent}
              </h2>
            </div>
            </FadeIn>
            <FadeIn delay={120}>
            <div className="flex flex-col gap-5">
              <p className="text-base md:text-lg text-olh-text-secondary leading-relaxed">
                {c.bridging.body1}
              </p>
              <p className="text-base md:text-lg text-olh-text-secondary leading-relaxed">
                {c.bridging.body2}
              </p>
              <div className="mt-2">
                <Button href="/how-it-works" variant="ghost" className="pl-0 text-base font-semibold">
                  {c.bridging.ctaLink}
                </Button>
              </div>
            </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Stat ───────────────────────────────────────────────────────────────
          Only the "Over 2.5 million Ontarians" figure is cited in the source
          document. All other invented stat labels have been removed.
      ──────────────────────────────────────────────────────────────────────── */}
      <section className="bg-olh-bg-light border-y border-olh-border py-12 px-6 lg:px-8">
        <div className="max-w-container mx-auto">
          <FadeIn>
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-12">
            <div className="flex-shrink-0 text-center sm:text-left">
              <span className="text-4xl md:text-5xl font-bold text-olh-red block">2.5M+</span>
              <span className="text-sm text-olh-text-secondary mt-1 block max-w-[200px]">
                {c.bridging.statLabel}
              </span>
            </div>
            <div className="w-px self-stretch bg-olh-border hidden sm:block" aria-hidden="true" />
            <p className="text-base md:text-lg text-olh-text-secondary leading-relaxed max-w-xl">
              {c.bridging.body1}
            </p>
          </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Locations teaser ───────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0c0c0c 0%, #141414 100%)" }}
      >
        {/* Live map — right side, bleeds to section edge on desktop */}
        <div className="hidden lg:block absolute inset-y-0 right-0 w-[55%]" aria-hidden="true">
          <div className="relative h-full w-full" style={{ isolation: "isolate" }}>
            <LocationsPreviewMap />
            {/* Wide left-edge fade — covers full transition into dark background */}
            <div
              className="absolute inset-y-0 left-0 w-[60%] pointer-events-none"
              style={{ background: "linear-gradient(to right, #111111 0%, #111111 20%, transparent 100%)" }}
            />
            {/* Top/bottom vignette */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "linear-gradient(to bottom, rgba(12,12,12,0.4) 0%, transparent 15%, transparent 85%, rgba(12,12,12,0.4) 100%)" }}
            />
          </div>
        </div>

        {/* Content — capped at 42% on desktop so it never reaches the map */}
        <div className="relative max-w-container mx-auto px-6 lg:px-8">
          <FadeIn>
          <div className="py-20 lg:py-28 lg:max-w-[42%]">

            {/* Eyebrow */}
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-olh-red mb-5">
              OLH Kiosk Locations
            </p>

            {/* Heading — explicit lines to prevent long strings overflowing */}
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-black text-white leading-tight tracking-tight">
              Now in
              <br />
              <span className="text-olh-red">{LOCATIONS.length} communities</span>
              <br />
              across Ontario
            </h2>

            <p className="mt-4 text-base text-white/55 leading-relaxed">
              Find a free OLH health screening kiosk at a Royal Canadian Legion branch near you.
            </p>

            {/* Location chips */}
            <div className="mt-6 flex flex-wrap gap-2">
              {LOCATIONS.map((loc) => (
                <span
                  key={loc.id}
                  className="inline-flex items-center gap-1.5 bg-white/10 border border-white/10 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full"
                >
                  <svg className="w-3 h-3 text-olh-red flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  {loc.community}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Button href="/locations" variant="primary" className="text-base px-7 py-4">
                Find a Location Near You →
              </Button>
            </div>

          </div>
          </FadeIn>
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
