import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {Gruppo, Poppins} from "next/font/google";
import {NextIntlClientProvider, hasLocale} from "next-intl";
import {setRequestLocale} from "next-intl/server";
import {routing, type Locale} from "@/i18n/routing";
import {buildJsonLd} from "@/lib/jsonld";
import {SITE_URL} from "@/lib/site";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "../globals.css";

/**
 * Self-hostet via next/font. Design system linker Google Fonts direkte;
 * her serveres de fra eget domene — ingen render-blokkerende request,
 * og ingen IP-lekkasje til Google for besokeren.
 */
const gruppo = Gruppo({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-gruppo",
});

const poppins = Poppins({
  weight: ["400", "500"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-poppins",
});

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
    /*
      suppressHydrationWarning dotyczy wylacznie atrybutow tego jednego
      elementu. Skrypt ponizej dokłada klase "js" do <html> przed
      hydratacja, wiec React widzi inny className niz wyrenderowal serwer
      i zglasza niezgodnosc. Roznica jest zamierzona, a hydratacja dzieci
      przebiega normalnie.
    */
    <html
      lang={HTML_LANG[locale as Locale]}
      className={`${gruppo.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/*
          Znacznik, ze JavaScript dziala. Ustawiany przed pierwszym malowaniem,
          wiec animacje wejscia moga startowac od opacity 0 bez migniecia —
          a gdy skryptu nie ma, tresc pozostaje po prostu widoczna.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: 'document.documentElement.classList.add("js")',
          }}
        />
      </head>
      <body>
        <NextIntlClientProvider>
          <Nav />
          {children}
          <Footer />
        </NextIntlClientProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(buildJsonLd())}}
        />
      </body>
    </html>
  );
}
