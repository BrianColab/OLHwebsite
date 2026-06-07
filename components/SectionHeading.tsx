interface SectionHeadingProps {
  eyebrow?: string | null;
  heading: string;
  subheading?: string | null;
  align?: "left" | "center";
  className?: string;
  level?: 1 | 2;
}

export function SectionHeading({
  eyebrow,
  heading,
  subheading,
  align = "left",
  className = "",
  level = 2,
}: SectionHeadingProps) {
  const textAlign = align === "center" ? "text-center" : "text-left";
  const maxWidth = align === "center" ? "mx-auto max-w-2xl" : "";
  const HeadingTag = level === 1 ? "h1" : "h2";

  return (
    <div className={`${textAlign} ${maxWidth} ${className}`}>
      {eyebrow && (
        <p className="text-olh-red text-sm font-semibold uppercase tracking-widest mb-3">
          {eyebrow}
        </p>
      )}
      <HeadingTag className="text-3xl md:text-4xl font-bold text-olh-text-primary leading-tight">
        {heading}
      </HeadingTag>
      {subheading && (
        <p className="mt-4 text-lg text-olh-text-secondary leading-relaxed">
          {subheading}
        </p>
      )}
    </div>
  );
}
