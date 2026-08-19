import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {NextIntlClientProvider, hasLocale} from "next-intl";
import {setRequestLocale} from "next-intl/server";
import {routing, type Locale} from "@/i18n/routing";
import {buildJsonLd} from "@/lib/jsonld";
import {SITE_URL} from "@/lib/site";
import "../globals.css";

const HTML_LANG: Record<Locale, string> = {no: "nb-NO", pl: "pl", en: "en"};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return (
    <html lang={HTML_LANG[locale as Locale]}>
      <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(buildJsonLd())}}
        />
      </body>
    </html>
  );
}
