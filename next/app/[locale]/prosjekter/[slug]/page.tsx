import {notFound} from "next/navigation";
import {setRequestLocale} from "next-intl/server";
import {PROJECTS, projectBySlug} from "@/lib/content";
import {buildMetadata} from "@/lib/seo";
import {routing, type Locale} from "@/i18n/routing";

type Params = Promise<{locale: Locale; slug: string}>;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    PROJECTS.map((p) => ({locale, slug: p.slug}))
  );
}

export async function generateMetadata({params}: {params: Params}) {
  const {locale, slug} = await params;
  const project = projectBySlug(slug);
  if (!project) return {};
  return buildMetadata(locale, `/prosjekter/${project.slug}`, project.seoKey);
}

export default async function ProjectPage({params}: {params: Params}) {
  const {locale, slug} = await params;
  const project = projectBySlug(slug);
  if (!project) notFound();
  setRequestLocale(locale);
  return <main data-route={`/prosjekter/${project.slug}`} />;
}
