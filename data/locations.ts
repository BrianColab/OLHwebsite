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
};

export const LOCATIONS: OLHLocation[] = [
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
    id: "deseronto",
    community: "Deseronto",
    branch: "Royal Canadian Legion Branch 280",
    branchNumber: 280,
    address: "340 Main St, Deseronto, ON K0K 1X0",
    isRCL: true,
    lat: 44.1974,
    lng: -77.0517,
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
  {
    id: "manotick",
    community: "Manotick",
    branch: "Royal Canadian Legion Branch 314",
    branchNumber: 314,
    address: "5550 Ann St, Manotick, ON K4M 1A3",
    isRCL: true,
    lat: 45.2218,
    lng: -75.6863,
  },
  {
    id: "woodbridge",
    community: "Woodbridge",
    branch: "Royal Canadian Legion Branch 414",
    branchNumber: 414,
    address: "60 Legion Court Road, Woodbridge, ON L4L 5T7",
    isRCL: true,
    lat: 43.7889,
    lng: -79.5927,
  },
  {
    id: "north-york",
    community: "North York",
    branch: "Finchurst Veterans Homes",
    branchNumber: null,
    address: "4715 Bathurst St, North York, ON",
    isRCL: false,
    lat: 43.7806,
    lng: -79.4419,
  },
];
