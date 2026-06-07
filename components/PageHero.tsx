interface PageHeroProps {
  prefix?: string;
  accent: string;
  subheading?: string | null;
}

export function PageHero({ prefix, accent, subheading }: PageHeroProps) {
  return (
    <section
      className="relative overflow-hidden py-20 md:py-28 px-6 lg:px-8 text-center"
      style={{ background: "linear-gradient(135deg, #0f0f0f 0%, #1a0507 60%, #2a080b 100%)" }}
    >
      {/* Radial glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 80%, rgba(207,31,42,0.22) 0%, transparent 60%)" }}
      />
      {/* Bottom edge fade to white */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 inset-x-0 h-12 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(15,15,15,0.6))" }}
      />

      <div className="relative max-w-container mx-auto">
        {prefix && (
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/40 mb-4">
            {prefix}
          </p>
        )}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-olh-red leading-none tracking-tight">
          {accent}
        </h1>
        {subheading && (
          <p className="mt-6 text-base md:text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
            {subheading}
          </p>
        )}
      </div>
    </section>
  );
}
