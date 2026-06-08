import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works | Ontario Legion Health",
  description:
    "Three simple steps: download the app, visit a community kiosk, and review your results. Free heart and mental health screening at your local Legion.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
