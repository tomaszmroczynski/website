import type {Metadata} from "next";
import {getTranslations} from "next-intl/server";
import {routing, type Locale} from "@/i18n/routing";
import {GEO_PAGES, PROJECTS, SERVICES, projectPath} from "./content";
import {SITE_URL} from "./site";

/** Alle statiske ruter -> nøkkel i Seo-namespace */
export const STATIC_ROUTES: Record<string, string> = {
  "/": "home",
  "/om-meg": "about",
  "/prosjekter": "work",
  "/kontakt": "contact",
  "/tjenester": "expertness",
  "/personvern": "personvern",
};

export const ALL_PATHS: string[] = [
  ...Object.keys(STATIC_ROUTES),
  ...SERVICES.map((s) => `/tjenester/${s.slug}`),
  ...GEO_PAGES.map((g) => `/${g.slug}`),
  ...PROJECTS.map((p) => projectPath(p.slug)),
];

const HREFLANG: Record<Locale, string> = {no: "nb-NO", pl: "pl-PL", en: "en"};
const OG_LOCALE: Record<Locale, string> = {no: "nb_NO", pl: "pl_PL", en: "en_US"};

/** Bygger absolutt URL. Standardspråket ligger på rot, uten prefiks. */
export function localeUrl(locale: Locale, path: string): string {
  const clean = path === "/" ? "" : path;
  const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
  return `${SITE_URL}${prefix}${clean}` || SITE_URL;
}

export function languageAlternates(path: string): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const locale of routing.locales) {
    languages[HREFLANG[locale]] = localeUrl(locale, path);
  }
  languages["x-default"] = localeUrl(routing.defaultLocale, path);
  return languages;
}

export async function buildMetadata(
  locale: Locale,
  path: string,
  seoKey: string
): Promise<Metadata> {
  const t = await getTranslations({locale, namespace: "Seo"});
  const title = t(`${seoKey}.title`);
  const description = t(`${seoKey}.description`);
  const canonical = localeUrl(locale, path);

  return {
    title,
    description,
    alternates: {canonical, languages: languageAlternates(path)},
    openGraph: {
      type: "website",
      url: canonical,
      siteName: "Limes Interiør – Anna Rasinska",
      title,
      description,
      locale: OG_LOCALE[locale],
      alternateLocale: routing.locales
        .filter((l) => l !== locale)
        .map((l) => OG_LOCALE[l]),
    },
    twitter: {card: "summary_large_image", title, description},
  };
}
