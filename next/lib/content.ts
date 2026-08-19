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
  {name: "Drammen", type: "City"},
  {name: "Mjøndalen", type: "City"},
  {name: "Sandvika", type: "City"},
  {name: "Bærum", type: "City"},
  {name: "Oslo", type: "City"},
];
