interface PageHeroProps {
  prefix?: string;
  accent: string;
  subheading?: string | null;
}

export function PageHero({ prefix, accent, subheading }: PageHeroProps) {
  return (
    <section
      className="relative overflow-hidden py-[52px] md:py-[73px] px-6 lg:px-8 text-center"
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
        <h1 className="leading-none tracking-tight">
          {prefix && (
            <span className="block text-5xl md:text-6xl lg:text-7xl font-black text-white">
              {prefix}
            </span>
          )}
          <span className="block text-5xl md:text-6xl lg:text-7xl font-black text-olh-red">
            {accent}
          </span>
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
