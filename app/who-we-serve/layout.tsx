import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Who We Serve | Ontario Legion Health",
  description:
    "OLH is a free, inclusive program open to the public — serving veterans, seniors, rural residents, and anyone without a family doctor.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
