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
  city: string;
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
  {slug: "stue-glamour",        seoKey: "salonGlm",       msgKey: "salonGlm",             imgDir: "salonGlm",            city: "Eidsberg"},
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
 * Obszary w stopce. Identyczne we wszystkich jezykach (nazwy wlasne),
 * wiec dane, nie tlumaczenie. Trzymane obok areaServed w jsonld.ts —
 * jedno zrodlo dla stopki i dla danych strukturalnych.
 */

export const AREAS: string[] = [
  "Eidsberg",
  "Askim",
  "Moss",
  "Fredrikstad",
  "Sarpsborg",
  "Halden",
  "Ski",
  "Lillestrøm",
  "Oslo",
  "Akershus",
];
