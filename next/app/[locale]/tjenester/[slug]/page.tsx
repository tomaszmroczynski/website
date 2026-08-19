import {notFound} from "next/navigation";
import {setRequestLocale} from "next-intl/server";
import {SERVICES, serviceBySlug} from "@/lib/content";
import {buildMetadata} from "@/lib/seo";
import {routing, type Locale} from "@/i18n/routing";

type Params = Promise<{locale: Locale; slug: string}>;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    SERVICES.map((s) => ({locale, slug: s.slug}))
  );
}

export async function generateMetadata({params}: {params: Params}) {
  const {locale, slug} = await params;
  const service = serviceBySlug(slug);
  if (!service) return {};
  return buildMetadata(locale, `/tjenester/${service.slug}`, service.seoKey);
}

export default async function ServicePage({params}: {params: Params}) {
  const {locale, slug} = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();
  setRequestLocale(locale);
  return <main data-route={`/tjenester/${service.slug}`} />;
}
