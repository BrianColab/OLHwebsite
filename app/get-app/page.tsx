"use client";

import { useLang } from "../LangProvider";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import Image from "next/image";

function StoreIcon({ android }: { android: boolean }) {
  return android ? (
    <svg viewBox="0 0 24 26" className="h-6 w-6 shrink-0" aria-hidden="true">
      <path fill="#31D3F5" d="M1 1 14 13 1 25Z" />
      <path fill="#00D66F" d="M1 1c.4-.4 1-.4 1.6 0L18 10.2 14 13Z" />
      <path fill="#FFCE00" d="m14 13 4-2.8 4.4 2.1c.9.5.9 1 0 1.5L18 16Z" />
      <path fill="#FF5367" d="m1 25 13-12 4 3L2.6 25c-.6.4-1.2.4-1.6 0Z" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" fill="currentColor" aria-hidden="true">
      <path d="M17.05 12.54c.03 3.29 2.89 4.38 2.92 4.4-.02.08-.46 1.56-1.51 3.09-.91 1.32-1.85 2.64-3.34 2.67-1.46.04-1.93-.86-3.6-.86-1.66 0-2.18.83-3.56.9-1.44.05-2.53-1.44-3.45-2.76C2.63 17.27 1.2 12.32 3.13 8.98c.96-1.66 2.67-2.71 4.53-2.74 1.41-.03 2.75.95 3.61.95.87 0 2.49-1.17 4.2-1 .71.03 2.71.29 4 2.18-.1.06-2.45 1.43-2.42 4.17ZM14.3 4.4c.76-.92 1.28-2.2 1.14-3.47-1.1.05-2.44.73-3.23 1.65-.71.81-1.34 2.11-1.17 3.35 1.23.1 2.48-.62 3.26-1.53Z" />
    </svg>
  );
}

const stores = [
  {
    platform: "iOS",
    device: "iPhone",
    store: "App Store",
    href: "https://apps.apple.com/ca/app/talking-stick-indigenous/id1611790835",
  },
  {
    platform: "Android",
    device: "Android",
    store: "Google Play",
    href: "https://play.google.com/store/apps/details?id=app.talkingstick&hl=en_GB",
  },
];

export default function GetAppPage() {
  const { lang } = useLang();
  const french = lang === "fr";

  return (
    <>
      <PageHero
        accent={french ? "Pour commencer" : "Get started"}
        subheading={
          french
            ? "Téléchargez l’application Ontario Legion Health sur votre appareil mobile."
            : "Download the Ontario Legion Health app on your mobile device."
        }
      />
      <section
        aria-label={french ? "Télécharger l’application" : "Download the app"}
        className="bg-olh-bg-light px-6 py-16 md:py-20 lg:px-8"
      >
        <div className="mx-auto mb-10 flex max-w-3xl flex-col items-center justify-center gap-5 sm:flex-row sm:gap-7">
          <Image src="/assets/talking-stick/app-icon.png" alt="Talking Stick" width={160} height={160} className="rounded-2xl shadow-sm" />
          <div className="text-center sm:text-left">
            <p className="text-3xl font-bold tracking-tight text-olh-text-primary">talking stick</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-olh-text-secondary">Every voice matters</p>
          </div>
        </div>
        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
          {stores.map(({ platform, device, store, href }) => (
            <article
              key={platform}
              className="relative flex min-w-0 flex-col rounded-2xl border border-olh-border bg-white p-7 text-left shadow-sm md:p-8">
              <div className="mb-4 flex h-4 items-center justify-between gap-4">
                <span className="h-1 w-8 rounded-full bg-olh-red" aria-hidden="true" />
                <p className="text-xs font-medium text-olh-text-secondary">{platform}</p>
              </div>
              <h2 className="text-2xl font-black tracking-tight text-olh-text-primary">
                {device}
              </h2>
              <p className="mb-7 mt-3 text-sm leading-relaxed text-olh-text-secondary">
                {french ? `Téléchargez depuis ${store}.` : `Download from ${platform === "iOS" ? "the " : ""}${store}.`}
              </p>
              <Button href={href} className="mt-auto w-full !justify-start gap-3 !px-5 text-base motion-reduce:transition-none">
                <StoreIcon android={platform === "Android"} />
                <span className="sr-only">{french ? `Télécharger l’application Ontario Legion Health pour ${device} depuis ` : `Download Ontario Legion Health for ${device} from `}</span>
                {store}
                <svg className="ml-auto h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M6 18 18 6M6 6h12v12" />
                </svg>
              </Button>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
