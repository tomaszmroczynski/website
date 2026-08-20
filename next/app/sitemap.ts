import type {MetadataRoute} from "next";
import {routing} from "@/i18n/routing";
import {PROJECTS, projectPath} from "@/lib/content";
import {PROJECT_IMAGES} from "@/lib/images";
import {ALL_PATHS, languageAlternates, localeUrl} from "@/lib/seo";
import {SITE_URL} from "@/lib/site";

/**
 * Bildene legges inn som <image:image> i sitemapen. Det er det eneste
 * eksplisitte signalet man kan gi Google om at bildene skal indekseres —
 * resten (alt-tekst, at de star i HTML-en) er implisitt.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return ALL_PATHS.map((path) => {
    const slug = PROJECTS.find((p) => projectPath(p.slug) === path)?.slug ?? null;
    const images = slug ? (PROJECT_IMAGES[slug] ?? []).map((i) => `${SITE_URL}${i.src}`) : undefined;

    return {
      url: localeUrl(routing.defaultLocale, path),
      alternates: {languages: languageAlternates(path)},
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.8,
      ...(images?.length ? {images} : {}),
    };
  });
}
