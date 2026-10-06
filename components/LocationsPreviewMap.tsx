"use client";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import { LOCATIONS, localizeLocation } from "@/data/locations";
import { useLang } from "@/app/LangProvider";
import { MAP_TILE_URL } from "@/data/mapTiles";

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
  const { lang } = useLang();
  return (
    <MapContainer
      bounds={LOCATIONS.map((loc) => [loc.lat, loc.lng] as [number, number])}
      boundsOptions={{ padding: [40, 40] }}
      className="h-full w-full"
      scrollWheelZoom={false}
      zoomControl={false}
      dragging={false}
      touchZoom={false}
      doubleClickZoom={false}
      attributionControl={false}
    >
      <TileLayer
        url={MAP_TILE_URL}
        subdomains="abcd"
        maxZoom={19}
      />
      {LOCATIONS.map((location) => {
        const loc = localizeLocation(location, lang);
        return (
        <Marker key={loc.id} position={[loc.lat, loc.lng]} icon={loc.id.startsWith("downtown-toronto-") ? L.divIcon({ ...PIN_ICON.options, iconAnchor: [loc.id.endsWith("1") ? 30 : -2, 42] }) : PIN_ICON}>
          <Tooltip direction="top" offset={[0, -46]} opacity={1}>
            <span className="text-[12px] font-bold text-gray-900">{loc.community}</span>
            {loc.detailsPending && <p className="text-[11px] text-gray-500">{loc.address}</p>}
          </Tooltip>
        </Marker>
        );
      })}
    </MapContainer>
  );
}
