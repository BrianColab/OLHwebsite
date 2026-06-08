"use client";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import type { OLHLocation } from "@/data/locations";

const PIN_ICON = L.divIcon({
  html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 36" width="28" height="42">
    <path d="M12 0C5.4 0 0 5.4 0 12c0 7.2 12 24 12 24s12-16.8 12-24C24 5.4 18.6 0 12 0z"
      fill="#CF1F2A" stroke="white" stroke-width="1.5"/>
    <circle cx="12" cy="12" r="4.5" fill="white"/>
  </svg>`,
  className: "",
  iconSize: [28, 42],
  iconAnchor: [14, 42],
});

interface LocationMiniMapProps {
  location: OLHLocation;
}

export function LocationMiniMap({ location }: LocationMiniMapProps) {
  return (
    // key on location.id forces MapContainer to remount when location changes
    // (MapContainer ignores center/zoom prop changes after initial render)
    <MapContainer
      key={location.id}
      center={[location.lat, location.lng]}
      zoom={14}
      className="h-full w-full"
      scrollWheelZoom={false}
      zoomControl={false}
      attributionControl={false}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        subdomains="abcd"
        maxZoom={19}
      />
      <Marker position={[location.lat, location.lng]} icon={PIN_ICON} />
    </MapContainer>
  );
}
