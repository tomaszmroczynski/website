import {defineRouting} from "next-intl/routing";

export const locales = ["no", "pl", "en"] as const;
export type Locale = (typeof locales)[number];

/**
 * localePrefix "as-needed": / = norsk, /pl/... , /en/...
 * localeDetection false — bevisst valg. Med automatisk deteksjon ville en
 * crawler med Accept-Language: en-US blitt sendt fra / til /en, og den
 * norske forsiden ville aldri blitt indeksert som forside.
 */
export const routing = defineRouting({
  locales,
  defaultLocale: "no",
  localePrefix: "as-needed",
  localeDetection: false,
});
