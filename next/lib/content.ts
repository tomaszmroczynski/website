/**
 * Innholdsmodell. seoKey peker inn i Seo-namespace i messages/*.json,
 * msgKey peker på det gamle CRA-namespacet med selve teksten,
 * imgDir peker på bildemappen som skal flyttes inn i /public.
 */
export type Project = {
  slug: string;
  seoKey: string;
  msgKey: string;
  imgDir: string;
  /** null = lokalitet ikke bekreftet; da utelates den fra alt-tekst og geo */
  city: string | null;
};

export type Service = {
  slug: string;
  seoKey: string;
  msgKey: string;
};

export const PROJECTS: Project[] = [
  {slug: "enebolig-eidsberg",   seoKey: "houseEidsberg",  msgKey: "houseEidsberg",        imgDir: "houseEidsberg",       city: "Eidsberg"},
  {slug: "bad-moss",            seoKey: "lazMoss",        msgKey: "lazMoss",              imgDir: "lazMoss",             city: "Moss"},
  {slug: "enebolig-drammen",    seoKey: "domDrammen",     msgKey: "domDrammen",           imgDir: "domDrammen",          city: "Drammen"},
  {slug: "leilighet-mjondalen", seoKey: "mjondalen",      msgKey: "mjondalen",            imgDir: "mjondalen",           city: "Mjøndalen"},
  {slug: "stue-sandvika",       seoKey: "salonSandvika",  msgKey: "salonSandvika",        imgDir: "salonSandvika",       city: "Sandvika"},
  {slug: "stue-glamour",        seoKey: "salonGlm",       msgKey: "salonGlm",             imgDir: "salonGlm",            city: "Kongsberg"},
  {slug: "leilighet-gdynia",    seoKey: "studioGdynia",   msgKey: "studioGdynia",         imgDir: "studioGdynia",        city: "Gdynia"},
  {slug: "leilighet-gorlice",   seoKey: "gorlice",        msgKey: "flat-gorlice-poland",  imgDir: "flat-gorlice-poland", city: "Gorlice"},
];

export const SERVICES: Service[] = [
  {slug: "interiorarkitekt",    seoKey: "interiorArchitecture", msgKey: "interiorArchitecture"},
  {slug: "boligstyling",        seoKey: "homeStaging",          msgKey: "home-staging"},
  {slug: "interiordekorasjon",  seoKey: "decoration",           msgKey: "decoration"},
  {slug: "eventdekorasjon",     seoKey: "eventDecoration",      msgKey: "dekorasjon-av-arrangementer"},
];

export const projectBySlug = (slug: string) => PROJECTS.find((p) => p.slug === slug);
export const serviceBySlug = (slug: string) => SERVICES.find((s) => s.slug === slug);

/**
 * Dekningsomrade. Ett sted, brukt bade i footeren og i areaServed i
 * strukturerte data — de to listene dreiv fra hverandre for.
 * Holdes identisk med Google Business Profile, Gule Sider og 1881:
 * bare steder der det finnes reelle prosjekter.
 */
export type Area = {name: string; type: "AdministrativeArea" | "City"};

export const AREAS: Area[] = [
  {name: "Indre Østfold", type: "AdministrativeArea"},
  {name: "Mysen", type: "City"},
  {name: "Askim", type: "City"},
  {name: "Eidsberg", type: "City"},
  {name: "Moss", type: "City"},
  {name: "Sarpsborg", type: "City"},
  {name: "Halden", type: "City"},
  {name: "Drammen", type: "City"},
  {name: "Mjøndalen", type: "City"},
  {name: "Sandvika", type: "City"},
  {name: "Bærum", type: "City"},
  {name: "Oslo", type: "City"},
];

/**
 * Strony geo. Kazdy projekt lezy dokladnie pod jedna z nich — to jest
 * jego adres kanoniczny, zeby ta sama tresc nie byla osiagalna dwoma
 * sciezkami. /prosjekter zostaje indeksem portfolio i linkuje tam,
 * gdzie projekt faktycznie mieszka.
 *
 * Kongsberg, Drammen i Mjondalen sa w Buskerud, wiec dziela jedna
 * strone — trzy realizacje zamiast trzech stron po jednej.
 */
export type GeoPage = {
  slug: string;
  /** miejscowosci opisywane przez ta strone, w kolejnosci waznosci */
  places: string[];
  projects: string[];
  /** usluga wiodaca — decyduje o tresci i o Service w danych strukturalnych */
  service: "interiorarkitekt" | "boligstyling";
};

export const GEO_PAGES: GeoPage[] = [
  {
    slug: "interiorarkitekt-indre-ostfold",
    places: ["Mysen", "Askim", "Eidsberg"],
    projects: ["enebolig-eidsberg"],
    service: "interiorarkitekt",
  },
  {
    slug: "interiorarkitekt-moss",
    places: ["Moss"],
    projects: ["bad-moss"],
    service: "interiorarkitekt",
  },
  {
    slug: "interiorarkitekt-buskerud",
    places: ["Drammen", "Mjøndalen", "Kongsberg"],
    projects: ["enebolig-drammen", "leilighet-mjondalen", "stue-glamour"],
    service: "interiorarkitekt",
  },
  {
    slug: "boligstyling-baerum-sandvika",
    places: ["Sandvika", "Bærum"],
    projects: ["stue-sandvika"],
    service: "boligstyling",
  },
  {
    slug: "interiorarkitekt-polen",
    places: ["Gdynia", "Gorlice"],
    projects: ["leilighet-gdynia", "leilighet-gorlice"],
    service: "interiorarkitekt",
  },
];

export const geoBySlug = (slug: string) => GEO_PAGES.find((g) => g.slug === slug);

/** Strona geo, pod ktora lezy dany projekt. */
export const geoForProject = (projectSlug: string) =>
  GEO_PAGES.find((g) => g.projects.includes(projectSlug));

/** Kanoniczna sciezka projektu. */
export const projectPath = (projectSlug: string) => {
  const geo = geoForProject(projectSlug);
  return geo ? `/${geo.slug}/${projectSlug}` : `/prosjekter/${projectSlug}`;
};
