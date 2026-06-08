"use client";

import { useEffect, useId, useRef } from "react";
import type { OLHLocation } from "@/data/locations";
import { useLang } from "@/app/LangProvider";

const LABELS = {
  en: {
    closeAriaLabel: "Close location drawer",
    addressLabel: "Address",
    openGoogleMaps: "Open in Google Maps",
    openAppleMaps: "Open in Apple Maps",
    copyAddress: "Copy address",
    copied: "Copied!",
    approximate: "Pin location is approximate. Confirm opening hours with your local branch before visiting.",
    rcl: "Royal Canadian Legion",
  },
  fr: {
    closeAriaLabel: "Fermer le panneau d'emplacement",
    addressLabel: "Adresse",
    openGoogleMaps: "Ouvrir dans Google Maps",
    openAppleMaps: "Ouvrir dans Plans",
    copyAddress: "Copier l'adresse",
    copied: "Copié !",
    approximate: "L'emplacement de l'épingle est approximatif. Confirmez les heures d'ouverture avec votre succursale locale avant de vous y rendre.",
    rcl: "Légion royale canadienne",
  },
} as const;

interface LocationDrawerProps {
  location: OLHLocation | null;
  open: boolean;
  onClose: () => void;
}

export function LocationDrawer({ location, open, onClose }: LocationDrawerProps) {
  const { lang } = useLang();
  const t = LABELS[lang];
  const headingId = useId();
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Inert when closed
  useEffect(() => {
    const el = drawerRef.current;
    if (!el) return;
    open ? el.removeAttribute("inert") : el.setAttribute("inert", "");
  }, [open]);

  // Focus close button on open
  useEffect(() => {
    if (open) {
      const id = setTimeout(() => closeBtnRef.current?.focus(), 50);
      return () => clearTimeout(id);
    }
  }, [open]);

  // Escape key
  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) { if (e.key === "Escape") onClose(); }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  // Focus trap
  useEffect(() => {
    if (!open || !drawerRef.current) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key !== "Tab" || !drawerRef.current) return;
      const focusable = Array.from(
        drawerRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault(); last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault(); first.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  async function handleCopyAddress() {
    if (!location) return;
    try {
      await navigator.clipboard.writeText(location.address);
    } catch {
      /* clipboard not available in all contexts */
    }
  }

  const googleMapsUrl = location
    ? `https://maps.google.com/?q=${encodeURIComponent(location.address)}`
    : "#";
  const appleMapsUrl = location
    ? `https://maps.apple.com/?q=${encodeURIComponent(location.address)}`
    : "#";

  return (
    <>
      {/* Overlay */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={headingId}
        aria-hidden={!open}
        className={`fixed top-0 right-0 z-50 h-full w-full sm:w-[420px] flex flex-col shadow-2xl transition-transform duration-300 ease-in-out sm:rounded-l-3xl overflow-hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Dark branded header */}
        <div
          className="relative flex-shrink-0 px-7 pt-5 pb-6 overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0f0f0f 0%, #2a0508 60%, #3d0b0e 100%)" }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 10% 80%, rgba(207,31,42,0.3) 0%, transparent 60%)" }}
          />
          <div className="relative flex items-start justify-between gap-4">
            <div className="flex items-start gap-3 flex-1 min-w-0">
              {/* Pin icon */}
              <div className="w-10 h-10 rounded-xl bg-olh-red flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div className="min-w-0">
                <h2 id={headingId} className="text-xl font-bold text-white leading-tight truncate">
                  {location?.community ?? ""}
                </h2>
                <p className="mt-0.5 text-sm text-white/50 leading-snug">
                  {location?.isRCL && location.branchNumber
                    ? `${t.rcl} · Branch ${location.branchNumber}`
                    : location?.branch ?? ""}
                </p>
              </div>
            </div>
            <button
              ref={closeBtnRef}
              type="button"
              onClick={onClose}
              aria-label={t.closeAriaLabel}
              className="w-8 h-8 mt-0.5 rounded-full flex-shrink-0 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto bg-white px-7 py-6 flex flex-col gap-6">

          {/* Address block */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-olh-text-secondary mb-2">
              {t.addressLabel}
            </p>
            <div className="flex items-start justify-between gap-3 bg-olh-bg-light rounded-xl border border-olh-border px-4 py-3">
              <p className="text-sm text-olh-text-primary leading-relaxed">{location?.address}</p>
              <button
                type="button"
                onClick={handleCopyAddress}
                title={t.copyAddress}
                aria-label={t.copyAddress}
                className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg text-olh-text-secondary hover:text-olh-red hover:bg-olh-red-tint transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
              </button>
            </div>
          </div>

          {/* Directions buttons */}
          <div className="flex flex-col gap-3">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[52px] rounded-xl bg-olh-red text-white font-semibold text-sm flex items-center justify-center gap-2.5 hover:bg-olh-red-hover active:scale-[0.98] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-olh-red shadow-lg shadow-olh-red/25"
            >
              {/* Google Maps G icon */}
              <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm6.36-1.68C17.44 5.93 14.95 4 12 4s-5.44 1.93-6.36 4.82C4.39 9.67 4 10.79 4 12c0 4.42 8 12 8 12s8-7.58 8-12c0-1.21-.39-2.33-1.64-3.18zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
              </svg>
              {t.openGoogleMaps}
            </a>

            <a
              href={appleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[52px] rounded-xl bg-white border border-olh-border text-olh-text-primary font-semibold text-sm flex items-center justify-center gap-2.5 hover:bg-olh-bg-light hover:border-olh-text-secondary/30 active:scale-[0.98] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-olh-red"
            >
              {/* Apple Maps icon */}
              <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              {t.openAppleMaps}
            </a>
          </div>

          {/* Approximate note */}
          <p className="text-xs text-olh-text-secondary/55 leading-relaxed border-l-2 border-olh-border pl-3">
            {t.approximate}
          </p>

        </div>
      </div>
    </>
  );
}
