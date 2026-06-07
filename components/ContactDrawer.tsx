"use client";

import { useEffect, useId, useRef, useState } from "react";

interface ContactDrawerProps {
  open: boolean;
  onClose: () => void;
}

type FormData = {
  name: string;
  email: string;
  organization: string;
  message: string;
};

const EMPTY_FORM: FormData = { name: "", email: "", organization: "", message: "" };

export function ContactDrawer({ open, onClose }: ContactDrawerProps) {
  const headingId = useId();
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const [form, setForm] = useState<FormData>(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);

  // ── Body scroll lock ────────────────────────────────────────────────────
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // ── Inert attribute — removes drawer from tab order when closed ─────────
  useEffect(() => {
    const el = drawerRef.current;
    if (!el) return;
    if (open) {
      el.removeAttribute("inert");
    } else {
      el.setAttribute("inert", "");
    }
  }, [open]);

  // ── Focus close button when drawer opens ────────────────────────────────
  useEffect(() => {
    if (open) {
      // Defer to let CSS transition start first
      const t = setTimeout(() => closeBtnRef.current?.focus(), 50);
      return () => clearTimeout(t);
    }
  }, [open]);

  // ── Escape key ──────────────────────────────────────────────────────────
  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  // ── Focus trap — Tab cycles within the drawer ───────────────────────────
  useEffect(() => {
    if (!open || !drawerRef.current) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key !== "Tab" || !drawerRef.current) return;
      const focusable = Array.from(
        drawerRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // ── Reset form when drawer closes ───────────────────────────────────────
  useEffect(() => {
    if (!open) {
      const t = setTimeout(() => {
        setForm(EMPTY_FORM);
        setSubmitted(false);
      }, 300); // after close animation completes
      return () => clearTimeout(t);
    }
  }, [open]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: Replace this handler with the real form endpoint or email handler.
    // Options: POST to an API route, send via a form service (e.g. Formspree,
    // EmailJS, or a Next.js API route), or integrate a CRM/help desk.
    // Do not hard-code an email address or fake endpoint here.
    setSubmitted(true);
  }

  return (
    <>
      {/* ── Overlay ──────────────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* ── Drawer ───────────────────────────────────────────────────────── */}
      {/*
        Always in the DOM so the close slide-out animation plays.
        Made non-interactive via the `inert` attribute when closed.
        Width: full on mobile, 480px on sm+.
      */}
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={headingId}
        aria-hidden={!open}
        className={`fixed top-0 right-0 z-50 h-full w-full sm:w-[480px] flex flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out sm:rounded-l-2xl ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Red accent stripe at top */}
        <div className="h-1 w-full bg-olh-red flex-shrink-0 sm:rounded-tl-2xl" aria-hidden="true" />

        {/* ── Drawer header ─────────────────────────────────────────────── */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-olh-border flex-shrink-0">
          <h2
            id={headingId}
            className="text-xl font-bold text-olh-text-primary"
          >
            Contact Us
          </h2>
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            aria-label="Close contact drawer"
            className="w-11 h-11 rounded-full flex items-center justify-center text-olh-text-secondary hover:text-olh-text-primary hover:bg-olh-bg-light transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-olh-red"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* ── Drawer body ───────────────────────────────────────────────── */}
        <div className="flex-1 overflow-y-auto px-6 py-7">
          <p className="text-sm text-olh-text-secondary mb-7 leading-relaxed">
            Contact details to be added.
          </p>

          {submitted ? (
            // ── Submission acknowledgement ─────────────────────────────
            // TODO: Replace this message with a real success/error response
            // once the form endpoint is wired.
            <div
              role="status"
              aria-live="polite"
              className="rounded-xl border border-olh-border bg-olh-bg-light px-6 py-5 text-sm text-olh-text-secondary leading-relaxed"
            >
              Contact form endpoint to be added.
            </div>
          ) : (
            // ── Contact form ────────────────────────────────────────────
            <form
              onSubmit={handleSubmit}
              noValidate
              aria-label="Contact form"
              className="flex flex-col gap-5"
            >
              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-name"
                  className="text-sm font-medium text-olh-text-primary"
                >
                  Name <span className="text-olh-red" aria-hidden="true">*</span>
                  <span className="sr-only">(required)</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full rounded-lg border border-olh-border bg-white px-4 py-3 text-sm text-olh-text-primary placeholder:text-olh-text-secondary/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-olh-red focus-visible:border-olh-red"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-email"
                  className="text-sm font-medium text-olh-text-primary"
                >
                  Email <span className="text-olh-red" aria-hidden="true">*</span>
                  <span className="sr-only">(required)</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full rounded-lg border border-olh-border bg-white px-4 py-3 text-sm text-olh-text-primary placeholder:text-olh-text-secondary/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-olh-red focus-visible:border-olh-red"
                />
              </div>

              {/* Organization */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-org"
                  className="text-sm font-medium text-olh-text-primary"
                >
                  Organization{" "}
                  <span className="text-olh-text-secondary font-normal">(optional)</span>
                </label>
                <input
                  id="contact-org"
                  name="organization"
                  type="text"
                  autoComplete="organization"
                  value={form.organization}
                  onChange={handleChange}
                  placeholder="Your organization"
                  className="w-full rounded-lg border border-olh-border bg-white px-4 py-3 text-sm text-olh-text-primary placeholder:text-olh-text-secondary/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-olh-red focus-visible:border-olh-red"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-message"
                  className="text-sm font-medium text-olh-text-primary"
                >
                  Message <span className="text-olh-red" aria-hidden="true">*</span>
                  <span className="sr-only">(required)</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className="w-full rounded-lg border border-olh-border bg-white px-4 py-3 text-sm text-olh-text-primary placeholder:text-olh-text-secondary/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-olh-red focus-visible:border-olh-red resize-none leading-relaxed"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="mt-1 w-full min-h-[48px] rounded-lg bg-olh-red px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-olh-red-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-olh-red"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
