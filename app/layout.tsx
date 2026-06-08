import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "./LangProvider";
import { SiteShell } from "./SiteShell";

export const metadata: Metadata = {
  title: "Ontario Legion Health — Care in Your Community",
  description:
    "Free, accessible screening for your heart and mental health, located in the trusted spaces of your local Royal Canadian Legion.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LangProvider>
          <SiteShell>{children}</SiteShell>
        </LangProvider>
      </body>
    </html>
  );
}
