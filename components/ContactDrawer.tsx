"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { useLang } from "@/app/LangProvider";

const LABELS = {
  en: {
    heading: "Contact Us",
    subheading: "We'd love to hear from you.",
    closeAriaLabel: "Close contact drawer",
    intro: "Contact details to be added.",
    nameLabel: "Full Name",
    namePlaceholder: "Your full name",
    emailLabel: "Email Address",
    emailPlaceholder: "your@email.com",
    orgLabel: "Organization",
    orgOptional: "Optional",
    orgPlaceholder: "Your organization",
    messageLabel: "Message",
    messagePlaceholder: "How can we help?",
    required: "(required)",
    submit: "Send Message",
    successTitle: "Message received",
    successMessage: "Contact form endpoint to be added.",
  },
  fr: {
    heading: "Nous joindre",
    subheading: "Nous serions ravis de vous entendre.",
    closeAriaLabel: "Fermer le panneau de contact",
    intro: "Les coordonnées seront ajoutées sous peu.",
    nameLabel: "Nom complet",
    namePlaceholder: "Votre nom complet",
    emailLabel: "Adresse courriel",
    emailPlaceholder: "votre@courriel.com",
    orgLabel: "Organisation",
    orgOptional: "Facultatif",
    orgPlaceholder: "Votre organisation",
    messageLabel: "Message",
    messagePlaceholder: "Comment pouvons-nous vous aider ?",
    required: "(obligatoire)",
    submit: "Envoyer",
    successTitle: "Message reçu",
    successMessage: "Le point de traitement du formulaire sera ajouté sous peu.",
  },
} as const;

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

const inputClass =
  "w-full rounded-xl border border-[#E8E8E8] bg-[#FAFAFA] px-4 py-3 text-sm text-olh-text-primary placeholder:text-[#BDBDBD] transition-all focus:outline-none focus:bg-white focus:border-olh-red focus:ring-2 focus:ring-olh-red/15";

export function ContactDrawer({ open, onClose }: ContactDrawerProps) {
  const { lang } = useLang();
  const t = LABELS[lang];
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
      const id = setTimeout(() => closeBtnRef.current?.focus(), 50);
      return () => clearTimeout(id);
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

  // ── Focus trap ──────────────────────────────────────────────────────────
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
      const id = setTimeout(() => {
        setForm(EMPTY_FORM);
        setSubmitted(false);
      }, 300);
      return () => clearTimeout(id);
    }
  }, [open]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: Replace with real endpoint (Formspree, EmailJS, Next.js API route, or CRM).
    // Do not hard-code an email address or fake endpoint here.
    setSubmitted(true);
  }

  return (
    <>
      {/* ── Overlay ──────────────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* ── Drawer ───────────────────────────────────────────────────────── */}
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={headingId}
        aria-hidden={!open}
        className={`fixed top-0 right-0 z-50 h-full w-full sm:w-[460px] flex flex-col shadow-2xl transition-transform duration-300 ease-in-out sm:rounded-l-3xl overflow-hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* ── Dark branded header ────────────────────────────────────────── */}
        <div
          className="relative flex-shrink-0 px-7 pt-5 pb-5 overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0f0f0f 0%, #2a0508 60%, #3d0b0e 100%)" }}
        >
          {/* Radial glow */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 10% 80%, rgba(207,31,42,0.3) 0%, transparent 60%)" }}
          />

          <div className="relative flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 flex-wrap">
                <h2 id={headingId} className="text-xl font-bold text-white leading-tight">
                  {t.heading}
                </h2>
                {/* Logo: invert(1) turns black text white; hue-rotate(180deg) brings
                    the red icon back to red; mix-blend-mode:screen makes the black
                    background vanish against the dark header gradient. */}
                <Image
                  src="/olh-logo.png"
                  alt="Ontario Legion Health"
                  width={120}
                  height={35}
                  className="h-7 w-auto"
                  style={{ filter: "invert(1) hue-rotate(180deg)", mixBlendMode: "screen" }}
                />
              </div>
              <p className="mt-0.5 text-sm text-white/45">{t.subheading}</p>
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

        {/* ── Form area ─────────────────────────────────────────────────── */}
        <div className="flex-1 overflow-y-auto bg-white px-7 py-6">
          <p className="text-xs text-olh-text-secondary/70 mb-6 leading-relaxed border-l-2 border-olh-red/30 pl-3 italic">
            {t.intro}
          </p>

          {submitted ? (
            // ── Success state ──────────────────────────────────────────────
            // TODO: Replace with real success/error response once endpoint is wired
            <div role="status" aria-live="polite" className="flex flex-col items-center text-center py-10">
              <div className="w-16 h-16 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center mb-5">
                <svg className="w-8 h-8 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <p className="text-base font-bold text-olh-text-primary mb-2">{t.successTitle}</p>
              <p className="text-sm text-olh-text-secondary leading-relaxed max-w-xs">
                {t.successMessage}
              </p>
            </div>
          ) : (
            // ── Contact form ───────────────────────────────────────────────
            <form onSubmit={handleSubmit} noValidate aria-label="Contact form" className="flex flex-col gap-4">

              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-name" className="text-xs font-semibold uppercase tracking-wider text-olh-text-secondary">
                  {t.nameLabel} <span className="text-olh-red" aria-hidden="true">*</span>
                  <span className="sr-only">{t.required}</span>
                </label>
                <input id="contact-name" name="name" type="text" autoComplete="name" required
                  value={form.name} onChange={handleChange} placeholder={t.namePlaceholder}
                  className={inputClass} />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-email" className="text-xs font-semibold uppercase tracking-wider text-olh-text-secondary">
                  {t.emailLabel} <span className="text-olh-red" aria-hidden="true">*</span>
                  <span className="sr-only">{t.required}</span>
                </label>
                <input id="contact-email" name="email" type="email" autoComplete="email" required
                  value={form.email} onChange={handleChange} placeholder={t.emailPlaceholder}
                  className={inputClass} />
              </div>

              {/* Organization */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-org" className="text-xs font-semibold uppercase tracking-wider text-olh-text-secondary flex items-center gap-2">
                  {t.orgLabel}
                  <span className="text-[10px] font-medium normal-case tracking-normal bg-[#F0F0F0] text-olh-text-secondary/70 px-2 py-0.5 rounded-full">{t.orgOptional}</span>
                </label>
                <input id="contact-org" name="organization" type="text" autoComplete="organization"
                  value={form.organization} onChange={handleChange} placeholder={t.orgPlaceholder}
                  className={inputClass} />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-message" className="text-xs font-semibold uppercase tracking-wider text-olh-text-secondary">
                  {t.messageLabel} <span className="text-olh-red" aria-hidden="true">*</span>
                  <span className="sr-only">{t.required}</span>
                </label>
                <textarea id="contact-message" name="message" required rows={5}
                  value={form.message} onChange={handleChange} placeholder={t.messagePlaceholder}
                  className={`${inputClass} resize-none leading-relaxed`} />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="mt-2 w-full min-h-[52px] rounded-xl bg-olh-red text-white font-semibold text-sm flex items-center justify-center gap-2 hover:bg-olh-red-hover active:scale-[0.98] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-olh-red shadow-lg shadow-olh-red/25"
              >
                {t.submit}
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>

            </form>
          )}
        </div>
      </div>
    </>
  );
}
