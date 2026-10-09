// OLH kiosk location data
// Coordinates are approximate — verify pins on the live map before client launch.

export type OLHLocation = {
  id: string;
  community: string;
  branch: string;
  branchNumber: number | null;
  address: string;
  isRCL: boolean;
  lat: number;
  lng: number;
  detailsPending?: boolean;
};

// Keep street addresses and coordinates unchanged across languages.
export function localizeLocation(location: OLHLocation, lang: "en" | "fr"): OLHLocation {
  if (lang === "en") return location;
  const community = location.community.replace("Downtown Toronto", "Centre-ville de Toronto");
  return {
    ...location,
    community,
    branch: location.detailsPending
      ? "Détails du lieu à confirmer"
      : location.isRCL
        ? `Légion royale canadienne — Filiale ${location.branchNumber}`
        : location.branch,
    address: location.detailsPending
      ? location.address.replace("Downtown Toronto", "Centre-ville de Toronto").replace("approximate community location", "emplacement communautaire approximatif")
      : location.address,
  };
}

export const LOCATIONS: OLHLocation[] = [
  {
    id: "dunnville",
    community: "Dunnville",
    branch: "Royal Canadian Legion Branch 142",
    branchNumber: 142,
    address: "305 Queen St, Dunnville, ON N1A 1J1",
    isRCL: true,
    lat: 42.9023119,
    lng: -79.6146943,
  },
  {
    id: "eganville",
    community: "Eganville",
    branch: "Royal Canadian Legion Branch 353",
    branchNumber: 353,
    address: "57 Veteran's Way, Eganville, ON K0J 1T0",
    isRCL: true,
    lat: 45.5397,
    lng: -77.1019,
  },
  {
    id: "norwood",
    community: "Norwood",
    branch: "Royal Canadian Legion Branch 300",
    branchNumber: 300,
    address: "27 King St, Norwood, ON K0L 2V0",
    isRCL: true,
    lat: 44.3828,
    lng: -77.9789,
  },
  {
    id: "bobcaygeon",
    community: "Bobcaygeon",
    branch: "Royal Canadian Legion Branch 239",
    branchNumber: 239,
    address: "96 King St E, Bobcaygeon, ON K0M 1A0",
    isRCL: true,
    lat: 44.5337,
    lng: -78.5469,
  },
  {
    id: "petawawa",
    community: "Petawawa",
    branch: "Royal Canadian Legion Branch 517",
    branchNumber: 517,
    address: "3583 Petawawa Blvd, Petawawa, ON K8H 2Y1",
    isRCL: true,
    lat: 45.8957,
    lng: -77.2794,
  },
];
