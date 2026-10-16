import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get the App | Ontario Legion Health",
  description:
    "Download the Ontario Legion Health app for iPhone or Android.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
