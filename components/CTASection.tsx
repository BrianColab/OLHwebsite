"use client";

interface CTASectionProps {
  heading: string;
  subheading?: string | null;
  iosLabel: string;
  androidLabel: string;
}

export function CTASection({ heading, subheading, iosLabel, androidLabel }: CTASectionProps) {
  return (
    <section
      className="relative overflow-hidden py-16 md:py-24 px-4"
      style={{ background: "linear-gradient(135deg, #111111 0%, #7A1018 45%, #CF1F2A 100%)" }}
    >
      {/* Radial glow — adds warmth and depth to the gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 18% 65%, rgba(207,31,42,0.38) 0%, transparent 55%)" }}
        aria-hidden="true"
      />

      <div className="relative max-w-container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left: copy + platform buttons */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight">
              {heading}
            </h2>
            {subheading && (
              <p className="mt-4 text-lg text-white/75 max-w-md mx-auto lg:mx-0 leading-relaxed">
                {subheading}
              </p>
            )}

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start flex-wrap">
              {/* TODO: Replace href="#" with the real App Store link when the iOS app is published */}
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="inline-flex items-center justify-center gap-2.5 min-h-[48px] px-7 py-3 rounded-full bg-white text-[#111111] font-semibold text-sm hover:bg-white/90 active:bg-white/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#CF1F2A] shadow-lg shadow-black/30"
              >
                {/* Apple logo */}
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701z" />
                </svg>
                {iosLabel}
              </a>

              {/* TODO: Replace href="#" with the real Google Play link when the Android app is published */}
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="inline-flex items-center justify-center gap-2.5 min-h-[48px] px-7 py-3 rounded-full border-2 border-white/35 text-white font-semibold text-sm hover:bg-white/10 active:bg-white/15 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#CF1F2A]"
              >
                {/* Google Play logo */}
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.002a1.004 1.004 0 010 1.734l-2.232 1.292L13.1 12l2.368-2.731 2.23 1.436zM5.864 2.658L16.8 8.99l-2.302 2.302-8.635-8.635z" />
                </svg>
                {androidLabel}
              </a>
            </div>
          </div>

          {/* Right: CSS phone mockup — decorative only, hidden on mobile */}
          <div className="hidden lg:flex flex-shrink-0 items-end justify-center" aria-hidden="true">
            <div
              className="relative w-44 h-[340px] rounded-[40px] shadow-[0_24px_64px_rgba(0,0,0,0.55)]"
              style={{ background: "#0c0c0c", border: "2.5px solid rgba(255,255,255,0.15)" }}
            >
              {/* Dynamic island */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 rounded-full bg-black z-10" />

              {/* Screen */}
              <div
                className="absolute inset-[3px] rounded-[34px] overflow-hidden flex flex-col"
                style={{ background: "#161616" }}
              >
                <div className="flex-1 px-3 pt-9 pb-3 flex flex-col gap-3">

                  {/* App brand row */}
                  <div className="flex items-center justify-between">
                    <span className="text-[8px] font-bold tracking-[0.18em] text-white/50">OLH</span>
                    <div className="w-5 h-5 rounded-full border border-white/15 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white/20" />
                    </div>
                  </div>

                  {/* Health card */}
                  <div
                    className="rounded-xl p-3 flex items-center gap-2.5"
                    style={{ background: "rgba(207,31,42,0.2)", border: "1px solid rgba(207,31,42,0.3)" }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(207,31,42,0.45)" }}
                    >
                      <svg className="w-4 h-4 text-white/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    </div>
                    <div className="flex-1 space-y-1.5">
                      <div className="h-1.5 rounded-full bg-white/25 w-full" />
                      <div className="h-1 rounded-full bg-white/15 w-2/3" />
                    </div>
                  </div>

                  {/* Stats grid */}
                  <div className="grid grid-cols-2 gap-1.5">
                    <div className="rounded-lg p-2 border border-white/10 bg-white/5 space-y-1.5">
                      <div className="h-1 rounded-full bg-white/20 w-10" />
                      <div className="h-2 rounded-full bg-white/15 w-14" />
                    </div>
                    <div className="rounded-lg p-2 border border-white/10 bg-white/5 space-y-1.5">
                      <div className="h-1 rounded-full bg-white/20 w-8" />
                      <div className="h-2 rounded-full bg-white/15 w-10" />
                    </div>
                  </div>

                  {/* Progress bars */}
                  <div className="space-y-2 flex-1">
                    <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full w-3/4 rounded-full" style={{ background: "rgba(207,31,42,0.65)" }} />
                    </div>
                    <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full w-1/2 rounded-full bg-white/28" />
                    </div>
                    <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full w-2/3 rounded-full bg-white/22" />
                    </div>
                  </div>

                  {/* Action strip */}
                  <div
                    className="h-7 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(207,31,42,0.3)" }}
                  >
                    <div className="h-1.5 w-14 rounded-full bg-white/25" />
                  </div>
                </div>

                {/* Home indicator */}
                <div className="py-2 flex items-center justify-center">
                  <div className="h-1 w-10 rounded-full bg-white/15" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
