"use client";

import dynamic from "next/dynamic";
import { useCallback, useRef, useState } from "react";
import { useLang } from "../LangProvider";
import { content } from "@/content";
import { LOCATIONS } from "@/data/locations";
import type { OLHLocation } from "@/data/locations";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { LocationDrawer } from "@/components/LocationDrawer";
import { Icon } from "@/components/icons";

// Leaflet accesses `window` at module level — must be loaded client-only
const LocationsMap = dynamic(
  () => import("@/components/LocationsMap").then((m) => m.LocationsMap),
  {
    ssr: false,
    loading: () => (
      <div className="h-full w-full bg-olh-bg-light flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-olh-red border-t-transparent rounded-full animate-spin" />
      </div>
    ),
  }
);

export default function LocationsPage() {
  const { lang } = useLang();
  const c = content[lang].locations;

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<OLHLocation | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const openDrawer = useCallback((loc: OLHLocation) => {
    triggerRef.current = document.activeElement as HTMLElement;
    setSelectedLocation(loc);
    setDrawerOpen(true);
  }, []);

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false);
    setTimeout(() => {
      triggerRef.current?.focus();
      triggerRef.current = null;
    }, 310);
  }, []);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <PageHero prefix={c.hero.headingPrefix || undefined} accent={c.hero.headingAccent} />

      {/* ── Subheading ───────────────────────────────────────────────────── */}
      <div className="bg-white px-6 lg:px-8 pt-8 pb-2">
        <p className="max-w-container mx-auto text-base md:text-lg text-olh-text-secondary leading-relaxed">
          {c.hero.subheading}
        </p>
      </div>

      {/* ── Interactive map ──────────────────────────────────────────────── */}
      <section className="bg-white px-6 lg:px-8 py-10">
        <div className="max-w-container mx-auto">
          <div className="rounded-2xl overflow-hidden border border-olh-border shadow-sm" style={{ height: "480px", isolation: "isolate" }}>
            <LocationsMap onDirectionsClick={openDrawer} />
          </div>
          <p className="mt-3 text-xs text-olh-text-secondary/55 text-center leading-relaxed">
            {c.mapNote}
          </p>
        </div>
      </section>

      {/* ── Location cards ───────────────────────────────────────────────── */}
      <section className="bg-olh-bg-light border-y border-olh-border py-16 px-6 lg:px-8">
        <div className="max-w-container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {LOCATIONS.map((loc) => (
              <div
                key={loc.id}
                className="bg-white rounded-2xl border border-olh-border p-6 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Card header */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-olh-text-primary leading-snug">{loc.community}</p>
                    <p className="text-xs text-olh-text-secondary mt-0.5 leading-snug">
                      {loc.isRCL && loc.branchNumber
                        ? `${c.rcl} · Branch ${loc.branchNumber}`
                        : loc.branch}
                    </p>
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-olh-red flex items-center justify-center flex-shrink-0">
                    <Icon name="pin" className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Address */}
                <p className="text-sm text-olh-text-secondary leading-relaxed">{loc.address}</p>

                {/* Directions button */}
                <button
                  type="button"
                  onClick={() => openDrawer(loc)}
                  className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-olh-red hover:text-olh-red-hover transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-olh-red rounded"
                >
                  {c.getDirections}
                  <svg
                    className="w-3.5 h-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <CTASection
        heading={c.cta.heading}
        iosLabel={c.cta.iosButton}
        androidLabel={c.cta.androidButton}
      />

      {/* ── Location drawer ──────────────────────────────────────────────── */}
      <LocationDrawer
        location={selectedLocation}
        open={drawerOpen}
        onClose={closeDrawer}
      />
    </>
  );
}
