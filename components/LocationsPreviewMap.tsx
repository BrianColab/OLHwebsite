"use client";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import { LOCATIONS } from "@/data/locations";

const PIN_ICON = L.divIcon({
  html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 36" width="28" height="42">
    <path d="M12 0C5.4 0 0 5.4 0 12c0 7.2 12 24 12 24s12-16.8 12-24C24 5.4 18.6 0 12 0z"
      fill="#CF1F2A" stroke="white" stroke-width="1.5"/>
    <circle cx="12" cy="12" r="4.5" fill="white"/>
  </svg>`,
  className: "",
  iconSize: [28, 42],
  iconAnchor: [14, 42],
  popupAnchor: [0, -46],
});

export function LocationsPreviewMap() {
  return (
    <MapContainer
      center={[44.8, -77.5]}
      zoom={7}
      className="h-full w-full"
      scrollWheelZoom={false}
      zoomControl={false}
      dragging={false}
      touchZoom={false}
      doubleClickZoom={false}
      attributionControl={false}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        subdomains="abcd"
        maxZoom={19}
      />
      {LOCATIONS.map((loc) => (
        <Marker key={loc.id} position={[loc.lat, loc.lng]} icon={PIN_ICON}>
          <Tooltip direction="top" offset={[0, -46]} opacity={1}>
            <span className="text-[12px] font-bold text-gray-900">{loc.community}</span>
          </Tooltip>
        </Marker>
      ))}
    </MapContainer>
  );
}
