"use client";

import { useState, useEffect } from "react";

interface LanguageToggleProps {
  lang: "en" | "fr";
  onToggle: (lang: "en" | "fr") => void;
}

export function LanguageToggle({ lang, onToggle }: LanguageToggleProps) {
  const [showFrBanner, setShowFrBanner] = useState(false);

  useEffect(() => {
    if (!showFrBanner) return;
    const t = setTimeout(() => setShowFrBanner(false), 3000);
    return () => clearTimeout(t);
  }, [showFrBanner]);

  function handleFrClick() {
    // French copy not yet available — show notice, keep EN active
    setShowFrBanner(true);
  }

  return (
    <div className="relative flex flex-col items-end">
      <div
        className="flex items-center gap-0.5 text-sm font-medium"
        role="group"
        aria-label="Language selection"
      >
        <button
          onClick={() => onToggle("en")}
          aria-pressed={lang === "en"}
          className={`px-2 py-1 rounded transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-olh-red ${
            lang === "en"
              ? "text-olh-red font-semibold"
              : "text-olh-text-secondary hover:text-olh-text-primary"
          }`}
        >
          EN
        </button>

        <span className="text-olh-border select-none" aria-hidden="true">|</span>

        {/* FR is structurally present but content is not yet available */}
        <button
          onClick={handleFrClick}
          aria-disabled="true"
          aria-label="French version coming soon"
          className="px-2 py-1 rounded transition-colors duration-150 text-olh-text-secondary/50 cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-olh-red"
        >
          FR
        </button>
      </div>

      {/* Inline "coming soon" notice — appears briefly when FR is clicked */}
      {showFrBanner && (
        <span
          role="status"
          aria-live="polite"
          className="absolute top-full mt-1.5 right-0 whitespace-nowrap rounded bg-olh-text-primary text-white text-xs font-medium px-2.5 py-1.5 shadow-md z-10"
        >
          French version coming soon
        </span>
      )}
    </div>
  );
}
