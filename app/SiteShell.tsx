"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useLang } from "./LangProvider";
import { content } from "@/content";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactDrawer } from "@/components/ContactDrawer";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const { lang, setLang } = useLang();
  const c = content[lang];
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Tracks which element triggered the drawer so focus can return on close
  const triggerRef = useRef<HTMLElement | null>(null);

  // Keep <html lang="..."> in sync with the active language
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const openDrawer = useCallback(() => {
    triggerRef.current = document.activeElement as HTMLElement;
    setDrawerOpen(true);
  }, []);

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false);
    // Return focus to the element that opened the drawer after the slide-out
    // transition completes (300ms matches the CSS duration-300 on the drawer)
    setTimeout(() => {
      triggerRef.current?.focus();
      triggerRef.current = null;
    }, 310);
  }, []);

  return (
    <>
      {/* Skip-to-main link for keyboard/screen-reader users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-white focus:text-olh-red focus:px-4 focus:py-2 focus:rounded focus:font-semibold focus:shadow-md"
      >
        Skip to main content
      </a>

      <Header
        lang={lang}
        onLangChange={setLang}
        onContactClick={openDrawer}
        navLabels={{
          home: c.nav.home,
          howItWorks: c.nav.howItWorks,
          whoWeServe: c.nav.whoWeServe,
          partners: c.nav.partners,
          contact: c.nav.contact,
        }}
      />

      <main id="main-content" tabIndex={-1}>
        {children}
      </main>

      <Footer
        tagline={c.footer.tagline}
        links={c.footer.links}
        contactLabel={c.nav.contact}
        onContactClick={openDrawer}
        copyright={c.footer.copyright}
      />

      <ContactDrawer open={drawerOpen} onClose={closeDrawer} />
    </>
  );
}
