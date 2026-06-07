// TODO: When official partner logos are supplied, set the `logo` prop to the
// asset path (e.g. "/logos/royal-canadian-legion.png"). Recommended format:
// PNG or SVG on white background, 2× resolution, max 320px wide.
// Do not invent or approximate official logos.

interface PartnerCardProps {
  name: string;
  description: string;
  logo?: string | null;
}

export function PartnerCard({ name, description, logo }: PartnerCardProps) {
  return (
    <div className="bg-white border border-olh-border rounded-xl p-6 flex flex-col gap-5">
      {/* Logo area — shows real logo when supplied, otherwise a clean text treatment */}
      <div className="h-12 flex items-center" aria-hidden={!logo}>
        {logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={logo}
            alt={`${name} logo`}
            className="max-h-10 max-w-[180px] w-auto object-contain"
          />
        ) : (
          <span className="text-xs font-semibold text-olh-text-secondary uppercase tracking-wider leading-snug">
            {name}
          </span>
        )}
      </div>

      {/* Divider */}
      <div className="border-t border-olh-border" aria-hidden="true" />

      <p className="text-sm text-olh-text-secondary leading-relaxed">{description}</p>
    </div>
  );
}
