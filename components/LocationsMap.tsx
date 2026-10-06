"use client";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup, Tooltip, ZoomControl } from "react-leaflet";
import { LOCATIONS, localizeLocation } from "@/data/locations";
import { MAP_TILE_URL, MAP_TILE_ATTRIBUTION } from "@/data/mapTiles";
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
  en: { getDirections: "Directions" },
  fr: { getDirections: "Itinéraire" },
} as const;

interface LocationsMapProps {
  onDirectionsClick: (location: OLHLocation) => void;
}

export function LocationsMap({ onDirectionsClick }: LocationsMapProps) {
  const { lang } = useLang();
  const t = LABELS[lang];

  return (
    <MapContainer
      bounds={LOCATIONS.map((loc) => [loc.lat, loc.lng] as [number, number])}
      boundsOptions={{ padding: [40, 40] }}
      className="h-full w-full"
      scrollWheelZoom={false}
      zoomControl={false}
    >
      <ZoomControl key={lang} position="topleft" zoomInTitle={lang === "fr" ? "Zoom avant" : "Zoom in"} zoomOutTitle={lang === "fr" ? "Zoom arrière" : "Zoom out"} />
      <TileLayer
        attribution={MAP_TILE_ATTRIBUTION}
        url={MAP_TILE_URL}
        subdomains="abcd"
        maxZoom={19}
      />
      {LOCATIONS.map((location) => {
        const loc = localizeLocation(location, lang);
        return (
        <Marker key={loc.id} title={loc.community} position={[loc.lat, loc.lng]} icon={loc.id.startsWith("downtown-toronto-") ? L.divIcon({ ...PIN_ICON.options, iconAnchor: [loc.id.endsWith("1") ? 30 : -2, 42] }) : PIN_ICON}>
          <Tooltip direction="top" offset={[0, -46]} opacity={1}>
            <div className="olh-map-tooltip">
              <p className="font-bold text-[12px] leading-snug text-gray-900">{loc.community}</p>
              <p className="text-[11px] text-gray-400 mt-0.5 leading-snug">{loc.address}</p>
            </div>
          </Tooltip>
          <Popup>
            <div className="olh-map-popup">
              <p className="font-bold text-[13px] leading-snug text-gray-900">{loc.community}</p>
              <p className="text-[12px] text-gray-500 mt-0.5 leading-snug">{loc.branch}</p>
              <p className="text-[11px] text-gray-400 mt-1 leading-snug">{loc.address}</p>
              {!loc.detailsPending && <button
                type="button"
                onClick={() => onDirectionsClick(location)}
                className="mt-2 inline-block text-[12px] font-semibold text-[#CF1F2A] hover:underline cursor-pointer"
              >
                {t.getDirections} →
              </button>}
            </div>
          </Popup>
        </Marker>
        );
      })}
    </MapContainer>
  );
}
