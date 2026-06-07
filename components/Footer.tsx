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
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-olh-red flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <span className="text-white font-bold text-base tracking-tight leading-none">Ontario Legion Health</span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed">{tagline}</p>
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
