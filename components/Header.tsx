"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "./Button";
import { LanguageToggle } from "./LanguageToggle";
import type { Lang } from "@/content";

interface HeaderProps {
  lang: Lang;
  onLangChange: (lang: Lang) => void;
  onContactClick: () => void;
  navLabels: {
    home: string;
    howItWorks: string;
    whoWeServe: string;
    partners: string;
    locations: string;
    contact: string;
  };
}

export function Header({ lang, onLangChange, onContactClick, navLabels }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: navLabels.home, href: "/" },
    { label: navLabels.howItWorks, href: "/how-it-works" },
    { label: navLabels.whoWeServe, href: "/who-we-serve" },
    { label: navLabels.partners, href: "/who-we-serve#partners" },
    { label: navLabels.locations, href: "/locations" },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.split("#")[0]);

  function handleContactClick() {
    setMenuOpen(false);
    onContactClick();
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-olh-border shadow-sm">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-olh-red rounded"
          >
            <Image
              src="/assets/olh/partners/OLH Master Logo.png"
              alt="Ontario Legion Health"
              width={180}
              height={52}
              className="h-10 lg:h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-olh-red rounded ${
                  isActive(link.href)
                    ? "text-olh-red"
                    : "text-olh-text-secondary hover:text-olh-text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side: lang toggle + Contact Us */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageToggle lang={lang} onToggle={onLangChange} />
            <Button
              onClick={handleContactClick}
              variant="primary"
              className="text-sm px-5 py-2.5"
            >
              {navLabels.contact}
            </Button>
          </div>

          {/* Mobile: lang toggle + hamburger */}
          <div className="flex lg:hidden items-center gap-3">
            <LanguageToggle lang={lang} onToggle={onLangChange} />
            <button
              type="button"
              className="w-11 h-11 flex items-center justify-center rounded text-olh-text-secondary hover:text-olh-text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-olh-red"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav
            id="mobile-nav"
            className="lg:hidden border-t border-olh-border py-3 flex flex-col gap-1"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 min-h-[44px] flex items-center rounded text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-olh-red bg-olh-red-tint"
                    : "text-olh-text-secondary hover:text-olh-text-primary hover:bg-olh-bg-light"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 px-3 pb-1">
              <Button
                onClick={handleContactClick}
                variant="primary"
                className="w-full justify-center"
              >
                {navLabels.contact}
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
