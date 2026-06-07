import Image from "next/image";
import Link from "next/link";

interface FooterProps {
  tagline: string;
  links: { label: string; href: string }[];
  contactLabel: string;
  onContactClick: () => void;
  copyright: string;
}

export function Footer({ tagline, links, contactLabel, onContactClick, copyright }: FooterProps) {
  return (
    <footer className="bg-olh-text-primary text-white py-12 px-4">
      <div className="max-w-container mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">

          {/* Brand */}
          <div className="flex flex-col gap-3 max-w-xs">
            <Image
              src="/olh-logo.png"
              alt="Ontario Legion Health"
              width={160}
              height={46}
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="text-sm text-white/60 leading-relaxed">{tagline}</p>
          </div>

          {/* Nav links + Contact Us */}
          <nav aria-label="Footer navigation" className="flex flex-col sm:flex-row gap-2 sm:gap-8 sm:items-center">
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

        <div className="mt-10 pt-6 border-t border-white/10 text-sm text-white/40">
          {copyright}
        </div>
      </div>
    </footer>
  );
}
