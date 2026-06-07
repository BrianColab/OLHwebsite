"use client";

interface LanguageToggleProps {
  lang: "en" | "fr";
  onToggle: (lang: "en" | "fr") => void;
}

export function LanguageToggle({ lang, onToggle }: LanguageToggleProps) {
  return (
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

      <button
        onClick={() => onToggle("fr")}
        aria-pressed={lang === "fr"}
        className={`px-2 py-1 rounded transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-olh-red ${
          lang === "fr"
            ? "text-olh-red font-semibold"
            : "text-olh-text-secondary hover:text-olh-text-primary"
        }`}
      >
        FR
      </button>
    </div>
  );
}
