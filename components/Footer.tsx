import Link from "next/link";
import Image from "next/image";
import type { Lang } from "@/content";

interface FooterProps {
  lang: Lang;
  tagline: string;
  links: { label: string; href: string }[];
  contactLabel: string;
  onContactClick: () => void;
  copyright: string;
  disclaimer: string;
}

export function Footer({ lang, tagline, links, contactLabel, onContactClick, copyright, disclaimer }: FooterProps) {
  return (
    <footer className="bg-olh-text-primary text-white py-12 px-6 lg:px-8">
      <div className="max-w-container mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">

          {/* Brand */}
          <div className="flex flex-col gap-3 max-w-xs">
            <Image
              src="/assets/olh/olh-logo.png"
              alt="Ontario Legion Health"
              width={1889}
              height={832}
              className="h-7 w-auto self-start object-contain"
              style={{ filter: "invert(1) hue-rotate(180deg)", mixBlendMode: "screen" }}
            />
            <p className="text-sm text-white/50 leading-relaxed">{tagline}</p>
          </div>

          {/* Nav links + Contact Us */}
          <nav aria-label={lang === "fr" ? "Navigation du pied de page" : "Footer navigation"} className="flex flex-col sm:flex-row gap-2 sm:gap-8 sm:items-center">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="min-h-[44px] flex items-center text-sm text-white/70 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
              >
                {link.label}
              </Link>
            ))}

            {/* Contact Us opens the drawer — rendered as a button, not a link */}
            <button
              type="button"
              onClick={onContactClick}
              className="min-h-[44px] flex items-center text-sm text-white/70 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded text-left"
            >
              {contactLabel}
            </button>
          </nav>
        </div>

        {/* PLACEHOLDER — exact wording pending client confirmation before launch. */}
        <p className="mt-10 pt-6 border-t border-white/10 text-xs text-white/40 leading-relaxed max-w-3xl">
          {disclaimer}
        </p>

        <div className="mt-6 text-sm text-white/40">
          {copyright}
        </div>
      </div>
    </footer>
  );
}
