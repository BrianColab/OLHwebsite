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
    branch: "Venue details to be confirmed",
    branchNumber: null,
    address: "Dunnville, ON — approximate community location",
    isRCL: false,
    lat: 42.9036,
    lng: -79.6175,
    detailsPending: true,
  },
  {
    id: "eganville",
    community: "Eganville",
    branch: "Venue details to be confirmed",
    branchNumber: null,
    address: "Eganville, ON — approximate community location",
    isRCL: false,
    lat: 45.5397,
    lng: -77.1019,
    detailsPending: true,
  },
  {
    id: "norwood",
    community: "Norwood",
    branch: "Venue details to be confirmed",
    branchNumber: null,
    address: "Norwood, ON — approximate community location",
    isRCL: false,
    lat: 44.3828,
    lng: -77.9789,
    detailsPending: true,
  },
  // The remaining Toronto entry uses an approximate downtown position until
  // its venue address is supplied.
  {
    id: "downtown-toronto-2",
    community: "Downtown Toronto (2)",
    branch: "Venue details to be confirmed",
    branchNumber: null,
    address: "Downtown Toronto, ON — approximate community location",
    isRCL: false,
    lat: 43.6532,
    lng: -79.3832,
    detailsPending: true,
  },
  {
    id: "beaverton",
    community: "Beaverton",
    branch: "Venue details to be confirmed",
    branchNumber: null,
    address: "Beaverton, ON — approximate community location",
    isRCL: false,
    lat: 44.4297,
    lng: -79.1547,
    detailsPending: true,
  },
  {
    id: "ingersoll",
    community: "Ingersoll",
    branch: "Venue details to be confirmed",
    branchNumber: null,
    address: "Ingersoll, ON — approximate community location",
    isRCL: false,
    lat: 43.0392,
    lng: -80.8836,
    detailsPending: true,
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
