import {AREAS} from "./content";
import {CONTACT, MAP_URL, SITE_URL} from "./site";

/**
 * Strukturerte data. Videreført fra public/index.html i CRA-versjonen,
 * med rettelsene fra fase 0: Østfold som addressRegion, organisasjonsnummer
 * fra Enhetsregisteret og oppdatert Facebook-profil.
 */
export function buildJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["ProfessionalService", "InteriorDesigner"],
        "@id": `${SITE_URL}/#business`,
        name: CONTACT.name,
        legalName: CONTACT.legalName,
        identifier: {
          "@type": "PropertyValue",
          name: "Organisasjonsnummer",
          value: CONTACT.orgnr,
        },
        url: SITE_URL,
        telephone: CONTACT.phone,
        email: CONTACT.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: CONTACT.street,
          postalCode: CONTACT.postalCode,
          addressLocality: CONTACT.locality,
          addressRegion: CONTACT.region,
          addressCountry: CONTACT.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: CONTACT.lat,
          longitude: CONTACT.lon,
        },
        hasMap: MAP_URL,
        areaServed: AREAS.map((a) => ({"@type": a.type, name: a.name})),
        sameAs: [
          "https://www.facebook.com/limesinterior.annarasinska/",
          "https://www.linkedin.com/in/anna-rasi%C5%84ska-81083413b/",
        ],
        priceRange: "$$",
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "17:00",
          description: "Etter avtale",
        },
        founder: {"@id": `${SITE_URL}/#anna-rasinska`},
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#anna-rasinska`,
        name: "Anna Rasinska",
        jobTitle: "Interiørarkitekt",
        url: `${SITE_URL}/om-meg`,
        email: CONTACT.email,
        telephone: CONTACT.phone,
        worksFor: {"@id": `${SITE_URL}/#business`},
        sameAs: [
          "https://www.facebook.com/limesinterior.annarasinska/",
          "https://www.linkedin.com/in/anna-rasi%C5%84ska-81083413b/",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: CONTACT.name,
        inLanguage: ["nb-NO", "pl", "en"],
        publisher: {"@id": `${SITE_URL}/#business`},
      },
    ],
  };
}

/**
 * Per prosjekt. Gir Google bildelisten strukturert, i tillegg til
 * <img> i HTML-en og <image:image> i sitemapen, og knytter prosjektet
 * til et sted via contentLocation.
 */
export function buildProjectJsonLd(opts: {
  slug: string;
  name: string;
  description: string;
  city: string | null;
  images: string[];
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${opts.url}#project`,
    name: opts.name,
    description: opts.description,
    url: opts.url,
    image: opts.images.map((src) => `${SITE_URL}${src}`),
    creator: {"@id": `${SITE_URL}/#business`},
    ...(opts.city
      ? {contentLocation: {"@type": "Place", name: opts.city, address: {"@type": "PostalAddress", addressLocality: opts.city, addressCountry: "NO"}}}
      : {}),
  };
}

/**
 * Sciezka nawigacyjna. Strona glowna jest zawsze pierwsza, reszta
 * przekazywana w kolejnosci zagniezdzenia.
 */
export function buildBreadcrumbs(items: Array<{name: string; url: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{name: "Limes Interiør", url: SITE_URL}, ...items].map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}
