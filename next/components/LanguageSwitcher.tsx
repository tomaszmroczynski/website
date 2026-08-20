"use client";

import NextLink from "next/link";
import {useLocale, useTranslations} from "next-intl";
import {usePathname} from "@/i18n/navigation";
import {routing, type Locale} from "@/i18n/routing";
import styles from "./LanguageSwitcher.module.css";

const SHORT: Record<Locale, string> = {no: "NO", pl: "PL", en: "EN"};

/**
 * Hrefs bygges direkte, ikke via next-intl sin Link. Med en eksplisitt
 * locale-prop legger den alltid pa prefikset — ogsa for standardspraket —
 * slik at /no/om-meg blir en 307 til /om-meg. Vi trenger ikke den omveien
 * fordi localeDetection er av, og interne lenker bor peke pa sluttadressen.
 */
function hrefFor(locale: Locale, pathname: string): string {
  const clean = pathname === "/" ? "" : pathname;
  return locale === routing.defaultLocale ? clean || "/" : `/${locale}${clean}`;
}

export default function LanguageSwitcher() {
  const t = useTranslations("Lang");
  const pathname = usePathname();
  const active = useLocale() as Locale;

  return (
    <div className={styles.wrap} role="group" aria-label={t("switcher_label")}>
      {routing.locales.map((locale, i) => (
        <span key={locale}>
          {i > 0 && <span className={styles.sep} aria-hidden="true">/ </span>}
          {locale === active ? (
            <span className={`${styles.item} ${styles.current}`} aria-current="true">
              {SHORT[locale]}
            </span>
          ) : (
            <NextLink
              href={hrefFor(locale, pathname)}
              aria-label={t(locale)}
              className={styles.item}
            >
              {SHORT[locale]}
            </NextLink>
          )}
        </span>
      ))}
    </div>
  );
}
