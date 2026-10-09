"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useLang } from "@/app/LangProvider";

const CTA_IMAGES = [
  "/assets/olh/hero/image2a.png?v=c20ff2c3fcdb",
  "/assets/olh/hero/image2b.png?v=bf8243b1c2b3",
  "/assets/olh/hero/image2c.png?v=793b5cbd832a",
  "/assets/olh/hero/image2d.png?v=7464d1f8a9a4",
];

const CTA_LABELS = {
  en: {
    eyebrow: "OLH app coming soon for iOS and Android",
    trustNote: "App downloads will be available at launch.",
  },
  fr: {
    eyebrow: "Application OLH bientôt disponible pour iOS et Android",
    trustNote: "Le téléchargement de l’application sera disponible au lancement.",
  },
} as const;

interface CTASectionProps {
  heading: string;
  subheading?: string | null;
  iosLabel: string;
  androidLabel: string;
}

export function CTASection({ heading, subheading }: CTASectionProps) {
  const { lang } = useLang();
  const t = CTA_LABELS[lang];

  const [ctaImage, setCtaImage] = useState(CTA_IMAGES[0]);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCtaImage(CTA_IMAGES[Math.floor(Math.random() * CTA_IMAGES.length)]);
  }, []);
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(to right, #0f0f0f 0%, #6B0D12 50%, #CF1F2A 100%)" }}
    >
      {/* Radial warmth glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 18% 65%, rgba(207,31,42,0.45) 0%, transparent 55%)" }}
      />

      {/* Photo — right side, full bleed to section edge (desktop only) */}
      <div className="hidden lg:block absolute inset-y-0 right-0 w-[52%]" aria-hidden="true">
        <div className="relative h-full w-full">
          <Image
            src={ctaImage}
            alt=""
            fill
            className="object-cover object-[22%_center]"
            sizes="52vw"
          />
          {/* Left-edge fade blends photo into gradient */}
          <div
            className="absolute inset-y-0 left-0 w-[60%] pointer-events-none"
            style={{ background: "linear-gradient(to right, #6B0D12 0%, #6B0D12 5%, transparent 100%)" }}
          />
          {/* Subtle top/bottom vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "linear-gradient(to bottom, rgba(15,15,15,0.35) 0%, transparent 20%, transparent 80%, rgba(15,15,15,0.35) 100%)" }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-container mx-auto px-6 lg:px-8">
        <div className="py-20 lg:py-28 lg:max-w-[50%]">

          {/* Eyebrow */}
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50 mb-5">
            {t.eyebrow}
          </p>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-white leading-tight tracking-tight">
            {heading}
          </h2>

          {/* Subheading */}
          {subheading && (
            <p className="mt-4 text-lg text-white/65 leading-relaxed max-w-sm">
              {subheading}
            </p>
          )}

          {/* App-store links will be added once the app is available. */}

          {/* Trust note */}
          <p className="mt-6 text-xs text-white/35 tracking-wide">
            {t.trustNote}
          </p>

        </div>
      </div>
    </section>
  );
}
