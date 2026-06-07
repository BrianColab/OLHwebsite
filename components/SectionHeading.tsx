interface SectionHeadingProps {
  eyebrow?: string | null;
  heading: string;
  subheading?: string | null;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  heading,
  subheading,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const textAlign = align === "center" ? "text-center" : "text-left";
  const maxWidth = align === "center" ? "mx-auto max-w-2xl" : "";

  return (
    <div className={`${textAlign} ${maxWidth} ${className}`}>
      {eyebrow && (
        <p className="text-olh-red text-sm font-semibold uppercase tracking-widest mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-olh-text-primary leading-tight">
        {heading}
      </h2>
      {subheading && (
        <p className="mt-4 text-lg text-olh-text-secondary leading-relaxed">
          {subheading}
        </p>
      )}
    </div>
  );
}
