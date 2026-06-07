import { Button } from "./Button";

interface CTASectionProps {
  heading: string;
  subheading?: string | null;
  buttonLabel: string;
  buttonHref?: string;
}

export function CTASection({
  heading,
  subheading,
  buttonLabel,
  buttonHref = "#",
}: CTASectionProps) {
  return (
    <section className="bg-olh-red py-16 px-4">
      <div className="max-w-container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
          {heading}
        </h2>
        {subheading && (
          <p className="mt-3 text-lg text-white/90 max-w-xl mx-auto">
            {subheading}
          </p>
        )}
        <div className="mt-8">
          {/* White button on red — sufficient contrast (white on #CF1F2A ≈ 4.6:1) */}
          <Button
            href={buttonHref}
            variant="secondary"
            className="bg-white text-olh-red border-white hover:bg-white/90 min-h-[48px] text-base font-semibold"
          >
            {buttonLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
