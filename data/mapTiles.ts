// CARTO light basemap. The key comes from the NEXT_PUBLIC_CARTO_KEY env var (set in Railway).
// If the key is missing, the tiles fall back to unkeyed requests, which show a watermark.
const cartoKey = process.env.NEXT_PUBLIC_CARTO_KEY;

export const CARTO_BASEMAP_URL =
  "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" +
  (cartoKey ? `?key=${cartoKey}` : "");
