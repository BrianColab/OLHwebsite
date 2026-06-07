import Image from "next/image";

interface StepCardProps {
  number: string;
  title: string;
  body: string;
  imageAlt: string;
  imageSrc?: string;
  reversed?: boolean;
}

export function StepCard({ number, title, body, imageAlt, imageSrc, reversed = false }: StepCardProps) {
  return (
    <div
      className={`flex flex-col ${
        reversed ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center gap-10 lg:gap-16`}
    >
      {/* ── Image ─────────────────────────────────────────────────────────── */}
      <div className="w-full lg:w-1/2 flex-shrink-0">
        {imageSrc ? (
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        ) : (
          <div
            className="rounded-2xl bg-olh-bg-light border border-olh-border flex items-center justify-center aspect-[4/3]"
            role="img"
            aria-label={imageAlt}
          >
            <div className="text-center p-8 pointer-events-none select-none">
              <div className="w-16 h-16 rounded-full bg-olh-red/10 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-olh-red/60" aria-hidden="true">{number}</span>
              </div>
              <p className="text-xs text-olh-text-secondary/60 italic leading-relaxed">{imageAlt}</p>
            </div>
          </div>
        )}
      </div>

      {/* ── Copy ─────────────────────────────────────────────────────────── */}
      <div className="w-full lg:w-1/2">
        <div className="flex items-start gap-4 mb-4">
          <div
            className="w-12 h-12 min-w-[3rem] rounded-full bg-olh-red flex items-center justify-center flex-shrink-0"
            aria-hidden="true"
          >
            <span className="text-base font-bold text-white">{number}</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-olh-text-primary leading-snug pt-2">
            {title}
          </h3>
        </div>
        <p className="text-base text-olh-text-secondary leading-relaxed pl-16">{body}</p>
      </div>
    </div>
  );
}
