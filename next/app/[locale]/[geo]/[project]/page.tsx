import {notFound} from "next/navigation";
import {getTranslations, setRequestLocale} from "next-intl/server";
import HeroSlider from "@/components/HeroSlider";
import Reveal from "@/components/Reveal";
import ShareLinks from "@/components/ShareLinks";
import {Link} from "@/i18n/navigation";
import {GEO_PAGES, geoBySlug, projectBySlug} from "@/lib/content";
import {PROJECT_IMAGES} from "@/lib/images";
import {buildBreadcrumbs, buildProjectJsonLd} from "@/lib/jsonld";
import {buildMetadata, localeUrl} from "@/lib/seo";
import {routing, type Locale} from "@/i18n/routing";
import styles from "./page.module.css";

type Params = Promise<{locale: Locale; geo: string; project: string}>;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    GEO_PAGES.flatMap((g) => g.projects.map((project) => ({locale, geo: g.slug, project})))
  );
}

/** Projekt jest wazny tylko pod swoja wlasna strona geo — jeden adres kanoniczny. */
function resolve(geoSlug: string, projectSlug: string) {
  const geo = geoBySlug(geoSlug);
  const project = projectBySlug(projectSlug);
  if (!geo || !project || !geo.projects.includes(projectSlug)) return null;
  return {geo, project};
}

export async function generateMetadata({params}: {params: Params}) {
  const {locale, geo, project} = await params;
  const found = resolve(geo, project);
  if (!found) return {};
  return buildMetadata(locale, `/${geo}/${project}`, found.project.seoKey);
}

export default async function ProjectPage({params}: {params: Params}) {
  const {locale, geo: geoSlug, project: projectSlug} = await params;
  const found = resolve(geoSlug, projectSlug);
  if (!found) notFound();
  const {geo, project} = found;
  setRequestLocale(locale);

  const t = await getTranslations({locale, namespace: "Project"});
  const g = await getTranslations({locale, namespace: `Geo.${geo.slug}`});
  const p = await getTranslations({locale, namespace: `Projects.${projectSlug}`});
  const images = PROJECT_IMAGES[projectSlug] ?? [];

  /** p.raw kaster pa manglende nokler; ikke alle prosjekter har alle feltene. */
  const opt = <T,>(key: string) => (p.has(key) ? (p.raw(key) as T) : undefined);

  const room = p("room");
  const alt = project.city
    ? t("altWithCity", {room, city: project.city})
    : t("alt", {room});

  const body = opt<Array<{type: "heading" | "text"; value: string}>>("body") ?? [];
  const tags = opt<string[]>("tags") ?? [];
  const dateKind = opt<"completed" | "concept">("dateKind");

  const rows: Array<[string, string]> = [];
  const category = opt<string>("category");
  const client = opt<string>("client");
  const projectType = opt<string>("projectType");
  const date = opt<string>("date");
  if (category) rows.push([t("categories"), category]);
  if (client) rows.push([t("client"), client]);
  if (projectType) rows.push([t("projectType"), projectType]);
  if (date && dateKind) rows.push([t(dateKind), date]);

  const url = localeUrl(locale, `/${geo.slug}/${projectSlug}`);

  const jsonLd = [
    buildProjectJsonLd({
      slug: projectSlug,
      name: p("title"),
      description: body.find((b) => b.type === "text")?.value ?? p("title"),
      city: project.city,
      images: images.map((i) => i.src),
      url,
    }),
    buildBreadcrumbs([
      {name: g("h1"), url: localeUrl(locale, `/${geo.slug}`)},
      {name: p("title"), url},
    ]),
  ];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
      />

      <Reveal effect="fadeIn">
        <section className={styles.hero}>
          <HeroSlider images={images} alt={alt} />

          <div className={styles.caption}>
            <Link href={`/${geo.slug}`} className={styles.back} aria-label={g("h1")}>
              <span className={styles.backArrow} aria-hidden="true">
                ←
              </span>
            </Link>
            <p className="eyebrow">{p.has("eyebrow") ? p("eyebrow") : room}</p>
            <h1 className={styles.title}>{p("title")}</h1>
          </div>
        </section>
      </Reveal>

      <Reveal effect="fadeInUp">
        <section className={styles.detail} id="detailproject">
          <div className={styles.grid}>
            <div className={styles.body}>
              {body.map((block, i) =>
                block.type === "heading" ? (
                  <p key={i}>
                    <span className={styles.color}>{block.value}</span>
                  </p>
                ) : (
                  <p key={i}>{block.value}</p>
                )
              )}
            </div>

            <div className={styles.sticky}>
              <ul className={styles.metaList}>
                {rows.map(([label, value]) => (
                  <li key={label}>
                    <span className={styles.tile}>{label}</span>
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.tags}>
            <span className={styles.tagsHeading}>{t("tags")}</span>
            {tags.map((tag) => (
              <span key={tag} className="li-chip">
                {tag}
              </span>
            ))}
          </div>

          <div className={styles.share}>
            <span className={styles.shareHeading}>{t("share")}</span>
            <ShareLinks
              url={url}
              title={p("title")}
              image={images[0]?.src}
              className="li-btn li-btn--text"
            />
          </div>

          <p>
            <Link href={`/${geo.slug}`} className="li-btn li-btn--text">
              {g("h1")}
            </Link>
          </p>
        </section>
      </Reveal>
    </main>
  );
}
