import {notFound} from "next/navigation";
import {getTranslations, setRequestLocale} from "next-intl/server";
import CardGrid from "@/components/CardGrid.module.css";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import {Link} from "@/i18n/navigation";
import {AREAS, GEO_PAGES, geoBySlug} from "@/lib/content";
import {buildBreadcrumbs} from "@/lib/jsonld";
import {localeUrl, languageAlternates} from "@/lib/seo";
import {SITE_URL} from "@/lib/site";
import {routing, type Locale} from "@/i18n/routing";
import styles from "./page.module.css";

type Params = Promise<{locale: Locale; geo: string}>;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    GEO_PAGES.map((g) => ({locale, geo: g.slug}))
  );
}

export async function generateMetadata({params}: {params: Params}) {
  const {locale, geo: slug} = await params;
  const geo = geoBySlug(slug);
  if (!geo) return {};
  const g = await getTranslations({locale, namespace: `Geo.${slug}`});
  const canonical = localeUrl(locale, `/${slug}`);
  return {
    title: g("metaTitle"),
    description: g("metaDescription"),
    alternates: {canonical, languages: languageAlternates(`/${slug}`)},
    openGraph: {
      type: "website",
      url: canonical,
      siteName: "Limes Interiør – Anna Rasinska",
      title: g("metaTitle"),
      description: g("metaDescription"),
    },
  };
}

export default async function GeoPage({params}: {params: Params}) {
  const {locale, geo: slug} = await params;
  const geo = geoBySlug(slug);
  if (!geo) notFound();
  setRequestLocale(locale);

  const g = await getTranslations({locale, namespace: `Geo.${slug}`});
  const p = await getTranslations({locale, namespace: "Projects"});
  const s = await getTranslations({locale, namespace: "Services"});
  const t = await getTranslations({locale, namespace: "Project"});
  const nav = await getTranslations({locale, namespace: "Nav"});

  const url = localeUrl(locale, `/${slug}`);

  /**
   * Service z areaServed zawezonym do miejscowosci tej strony — inaczej
   * kazda strona geo nioslaby ten sam, ogolny sygnal co pozostale.
   */
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${url}#service`,
      name: g("h1"),
      description: g("metaDescription"),
      serviceType: s(`${geo.service}.title`),
      url,
      provider: {"@id": `${SITE_URL}/#business`},
      areaServed: geo.places.map((name) => ({
        "@type": AREAS.find((a) => a.name === name)?.type ?? "City",
        name,
      })),
    },
    buildBreadcrumbs([{name: g("h1"), url}]),
  ];

  return (
    <main className={styles.wrap}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
      />

      <div className={`li-section-heading ${styles.head}`}>
        <p className="eyebrow">{geo.places.join(" · ")}</p>
        <h1 className="heading">{g("h1")}</h1>
      </div>

      <Reveal effect="fadeInUp">
        <div className={styles.body}>
          <p className="lead">{g("intro")}</p>
          <p>{g("p1")}</p>
          <p>{g("p2")}</p>
          <Link href="/kontakt" className="li-btn li-btn--ghost">
            {nav("cta")}
          </Link>
        </div>
      </Reveal>

      <Reveal effect="fadeInUp">
        <section className={styles.projects}>
          <h2 className="heading">{t("seeProject")}</h2>
          <div className={CardGrid.grid}>
            {geo.projects.map((projectSlug, i) => (
              <ProjectCard
                key={projectSlug}
                href={`/${slug}/${projectSlug}`}
                src={p(`${projectSlug}.cover`)}
                alt={p(`${projectSlug}.cardAlt`)}
                tag={p(`${projectSlug}.cardLocation`)}
                name={p(`${projectSlug}.cardName`)}
                cta={t("seeProject")}
                priority={i < 2}
              />
            ))}
          </div>
        </section>
      </Reveal>
    </main>
  );
}
