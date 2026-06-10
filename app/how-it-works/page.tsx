"use client";

import { useEffect, useState } from "react";
import { useLang } from "../LangProvider";
import { content } from "@/content";
import { StepCard } from "@/components/StepCard";
import { SupportCard } from "@/components/SupportCard";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn } from "@/components/FadeIn";

const STEP1_IMAGES = [
  "/assets/olh/hero/image1a.png",
  "/assets/olh/hero/image1b.png",
  "/assets/olh/hero/image1c.png",
  "/assets/olh/hero/image1d.png",
  "/assets/olh/hero/image1e.png",
  "/assets/olh/hero/image1f.png",
  "/assets/olh/hero/image1g.png",
];

const STEP2_IMAGES = [
  "/assets/olh/hero/image2a.png",
  "/assets/olh/hero/image2b.png",
  "/assets/olh/hero/image2c.png",
  "/assets/olh/hero/image2d.png",
];

const STEP3_IMAGES = [
  "/assets/olh/hero/image3.png",
  "/assets/olh/hero/image3x.png",
  "/assets/olh/hero/image3y.png",
  "/assets/olh/hero/image3z.png",
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
      <PageHero prefix={c.hero.headingPrefix || undefined} accent={c.hero.headingAccent} />

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
              imageSrc={i === 0 ? step1Image : i === 1 ? step2Image : step3Image}
              reversed={i % 2 === 1}
            />
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── Support cards ──────────────────────────────────────────────────── */}
      <section className="bg-olh-bg-light border-y border-olh-border py-20 px-6 lg:px-8">
        <div className="max-w-container mx-auto">
          <FadeIn>
          <SectionHeading
            heading={c.support.heading}
            subheading={c.support.subheading}
            align="center"
            className="mb-12"
          />
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {c.support.cards.map((card, i) => (
              <FadeIn key={card.title} delay={i * 80}>
              <SupportCard
                icon={card.icon}
                title={card.title}
                body={card.body}
              />
              </FadeIn>
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
