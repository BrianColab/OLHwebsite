"use client";

import Image from "next/image";

interface CTASectionProps {
  heading: string;
  subheading?: string | null;
  iosLabel: string;
  androidLabel: string;
}

export function CTASection({ heading, subheading, iosLabel, androidLabel }: CTASectionProps) {
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
            src="/assets/olh/hero/homepageimage.png"
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
      <div className="relative max-w-container mx-auto px-4">
        <div className="py-20 lg:py-28 lg:max-w-[50%]">

          {/* Eyebrow */}
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50 mb-5">
            Available now · iOS &amp; Android
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

          {/* Store badges */}
          <div className="mt-9 flex flex-col sm:flex-row gap-3">

            {/* App Store badge */}
            {/* TODO: Replace href="#" with the real App Store URL */}
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              aria-label={iosLabel}
              className="inline-flex items-center gap-4 bg-black border border-white/20 text-white rounded-2xl px-5 py-3.5 min-h-[64px] hover:bg-neutral-900 hover:border-white/30 active:scale-[0.97] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#CF1F2A] shadow-lg shadow-black/40"
            >
              {/* Apple logo */}
              <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701z" />
              </svg>
              <div className="text-left leading-none">
                <div className="text-[10px] text-white/55 mb-1 tracking-wide">Download on the</div>
                <div className="text-[15px] font-semibold tracking-tight">App Store</div>
              </div>
            </a>

            {/* Google Play badge */}
            {/* TODO: Replace href="#" with the real Google Play URL */}
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              aria-label={androidLabel}
              className="inline-flex items-center gap-4 bg-black border border-white/20 text-white rounded-2xl px-5 py-3.5 min-h-[64px] hover:bg-neutral-900 hover:border-white/30 active:scale-[0.97] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#CF1F2A] shadow-lg shadow-black/40"
            >
              {/* Google Play logo — 4-colour */}
              <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="#34A853" d="M2 0a2 2 0 0 0-2 2v.28l11.36 11.36 2.83-2.83L2.24.07A2 2 0 0 0 2 0z"/>
                <path fill="#4285F4" d="M0 2.28V21.7A2 2 0 0 0 2 23.7l.24-.07 10.5-10.5L0 2.28z"/>
                <path fill="#EA4335" d="M2.24 23.63l.24.07A2 2 0 0 0 4 23.4L14.19 14l-2.83-2.36z"/>
                <path fill="#FBBC04" d="M22 10.13l-3.81-2.31-3.5 3.49 3.5 3.5 3.81-2.3A1.6 1.6 0 0 0 22 10.13z"/>
              </svg>
              <div className="text-left leading-none">
                <div className="text-[10px] text-white/55 mb-1 tracking-wide">Get it on</div>
                <div className="text-[15px] font-semibold tracking-tight">Google Play</div>
              </div>
            </a>

          </div>

          {/* Trust note */}
          <p className="mt-6 text-xs text-white/35 tracking-wide">
            Free · No health card required
          </p>

        </div>
      </div>
    </section>
  );
}
