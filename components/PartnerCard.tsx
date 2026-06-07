interface PartnerCardProps {
  name: string;
  description: string;
  logo?: string | null;
}

export function PartnerCard({ name, description, logo }: PartnerCardProps) {
  return (
    <div className="bg-white border border-olh-border rounded-xl p-6 flex flex-col gap-5">
      {/* Logo area — shows real logo when supplied, otherwise a clean text treatment */}
      <div className="h-20 flex items-center">
        {logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={logo}
            alt={`${name} logo`}
            className="max-h-14 max-w-full w-auto object-contain"
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
