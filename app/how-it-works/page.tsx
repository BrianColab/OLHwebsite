"use client";

import { useEffect, useState } from "react";
import { useLang } from "../LangProvider";
import { content } from "@/content";
import { StepCard } from "@/components/StepCard";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn } from "@/components/FadeIn";

const STEP1_IMAGES = [
  "/assets/olh/hero/image1a.png?v=0c4184f4d707",
  "/assets/olh/hero/image1b.png?v=1668c60f002a",
  "/assets/olh/hero/image1c.png?v=35675027043c",
  "/assets/olh/hero/image1d.png?v=0e9ac24dff34",
  "/assets/olh/hero/image1e.png?v=3001bf826f2f",
  "/assets/olh/hero/image1f.png?v=9535f3533baa",
  "/assets/olh/hero/image1g.png?v=c0d672586357",
];

const STEP2_IMAGES = [
  "/assets/olh/hero/image2a.png",
  "/assets/olh/hero/image2b.png",
  "/assets/olh/hero/image2c.png",
  "/assets/olh/hero/image2d.png",
];

const STEP3_IMAGES = [
  "/assets/olh/hero/image3.png?v=ac383c19f9d7",
  "/assets/olh/hero/image3x.png?v=12ab64096ca5",
  "/assets/olh/hero/image3y.png?v=ae20ba0e509e",
  "/assets/olh/hero/image3z.png?v=d312898764cc",
];

export default function HowItWorksPage() {
  const { lang } = useLang();
  const c = content[lang].howItWorks;

  const [step1Image, setStep1Image] = useState(STEP1_IMAGES[0]);
  const [step2Image, setStep2Image] = useState(STEP2_IMAGES[0]);
  const [step3Image, setStep3Image] = useState(STEP3_IMAGES[0]);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setStep1Image(STEP1_IMAGES[Math.floor(Math.random() * STEP1_IMAGES.length)]);
    setStep2Image(STEP2_IMAGES[Math.floor(Math.random() * STEP2_IMAGES.length)]);
    setStep3Image(STEP3_IMAGES[Math.floor(Math.random() * STEP3_IMAGES.length)]);
  }, []);

  return (
    <>
      {/* ── Page hero ──────────────────────────────────────────────────────── */}
      <PageHero prefix={c.hero.headingPrefix || undefined} accent={c.hero.headingAccent} subheading={c.hero.subheading} />

      {/* ── Steps ──────────────────────────────────────────────────────────── */}
      <section className="bg-white py-20 px-6 lg:px-8">
        <div className="max-w-container mx-auto flex flex-col gap-20 lg:gap-28">
          {c.steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 80}>
            <StepCard
              number={step.number}
              title={step.title}
              body={step.body}
              imageAlt={step.imageAlt}
              imageSrc={i === 0 ? step1Image : i === 1 ? step2Image : i === 2 ? step3Image : undefined}
              reversed={i % 2 === 1}
            />
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── Callout ────────────────────────────────────────────────────────── */}
      <section className="bg-white px-6 lg:px-8">
        <div className="max-w-container mx-auto">
          <FadeIn>
          <div className="rounded-2xl bg-olh-bg-light border border-olh-border px-6 py-5 md:px-8 md:py-6">
            <p className="text-base text-olh-text-primary leading-relaxed">
              <span className="font-bold uppercase tracking-wide text-olh-red mr-2">Important</span>
              {c.callout}
            </p>
          </div>
          </FadeIn>
        </div>
      </section>

      {/* ── What the technology does ─────────────────────────────────────────── */}
      <section className="bg-white py-20 px-6 lg:px-8">
        <div className="max-w-container mx-auto max-w-3xl">
          <FadeIn>
          <h2 className="text-2xl md:text-3xl font-black text-olh-text-primary tracking-tight mb-4">
            {c.technology.heading}
          </h2>
          <p className="text-base md:text-lg text-olh-text-secondary leading-relaxed">
            {c.technology.body}
          </p>
          <p className="mt-4 text-base font-semibold text-olh-text-primary leading-relaxed">
            {c.technology.safetyLine}
          </p>
          </FadeIn>
        </div>
      </section>

      {/* ── What happens next ────────────────────────────────────────────────── */}
      <section className="bg-olh-bg-light border-y border-olh-border py-20 px-6 lg:px-8">
        <div className="max-w-container mx-auto">
          <FadeIn>
          <SectionHeading
            heading={c.support.heading}
            subheading={c.support.subheading}
            align="center"
            className="mb-10"
          />
          </FadeIn>
          <FadeIn delay={80}>
          <ul className="max-w-2xl mx-auto flex flex-col gap-3">
            {c.support.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3 text-base text-olh-text-secondary leading-relaxed">
                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-olh-red flex-shrink-0" aria-hidden="true" />
                {bullet}
              </li>
            ))}
          </ul>
          </FadeIn>
          <FadeIn delay={140}>
          <p className="max-w-2xl mx-auto mt-8 text-sm text-olh-text-secondary/80 leading-relaxed italic">
            {c.support.note}
          </p>
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
