import type {MetadataRoute} from "next";
import {routing} from "@/i18n/routing";
import {ALL_PATHS, languageAlternates, localeUrl} from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return ALL_PATHS.map((path) => ({
    url: localeUrl(routing.defaultLocale, path),
    alternates: {languages: languageAlternates(path)},
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.8,
  }));
}
