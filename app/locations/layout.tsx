import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Locations | Ontario Legion Health",
  description:
    "Find an OLH health screening kiosk near you. Kiosks are located at Royal Canadian Legion branches and community locations across Ontario.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
