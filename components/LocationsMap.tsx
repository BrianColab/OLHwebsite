"use client";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LOCATIONS } from "@/data/locations";
import type { OLHLocation } from "@/data/locations";
import { useLang } from "@/app/LangProvider";

// OLH red teardrop pin — inline SVG, bypasses Leaflet's default PNG icon issue in Next.js
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

const LABELS = {
  en: { getDirections: "Get Directions" },
  fr: { getDirections: "Obtenir l'itinéraire" },
} as const;

interface LocationsMapProps {
  onDirectionsClick: (location: OLHLocation) => void;
}

export function LocationsMap({ onDirectionsClick }: LocationsMapProps) {
  const { lang } = useLang();
  const t = LABELS[lang];

  return (
    <MapContainer
      center={[44.8, -77.5]}
      zoom={7}
      className="h-full w-full"
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        subdomains="abcd"
        maxZoom={19}
      />
      {LOCATIONS.map((loc) => (
        <Marker key={loc.id} position={[loc.lat, loc.lng]} icon={PIN_ICON}>
          <Popup>
            <div className="olh-map-popup">
              <p className="font-bold text-[13px] leading-snug text-gray-900">{loc.community}</p>
              <p className="text-[12px] text-gray-500 mt-0.5 leading-snug">{loc.branch}</p>
              <p className="text-[11px] text-gray-400 mt-1 leading-snug">{loc.address}</p>
              <button
                type="button"
                onClick={() => onDirectionsClick(loc)}
                className="mt-2 inline-block text-[12px] font-semibold text-[#CF1F2A] hover:underline cursor-pointer"
              >
                {t.getDirections} →
              </button>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
