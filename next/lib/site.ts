export const SITE_URL = "https://www.limes-interior.no";

export const CONTACT = {
  legalName: "LIMES INTERIØR ANNA RASINSKA",
  name: "Limes Interiør – Anna Rasinska",
  orgnr: "925621102",
  street: "Finnestadveien 371",
  postalCode: "1880",
  locality: "Eidsberg",
  region: "Østfold",
  country: "NO",
  phone: "+4794712654",
  email: "studio@limes-interior.no",
  /**
   * Wspolrzedne z Kartverket (ws.geonorge.no, EPSG:4258 — dla tego
   * zastosowania tozsame z WGS84). Nie szacowane z mapy.
   */
  lat: 59.511765,
  lon: 11.310458,
} as const;

/** Link do map z dokladnym punktem, bez osadzania czegokolwiek obcego. */
export const MAP_URL =
  `https://www.google.com/maps/search/?api=1&query=${CONTACT.lat},${CONTACT.lon}`;
