import {setRequestLocale} from "next-intl/server";
import {buildMetadata} from "@/lib/seo";
import type {Locale} from "@/i18n/routing";

const PATH = "/personvern";
const SEO_KEY = "personvern";

export async function generateMetadata({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  return buildMetadata(locale, PATH, SEO_KEY);
}

export default async function Page({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  return <main data-route={PATH} />;
}
