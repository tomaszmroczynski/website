import {notFound} from "next/navigation";
import {getTranslations, setRequestLocale} from "next-intl/server";
import HeroSlider from "@/components/HeroSlider";
import Reveal from "@/components/Reveal";
import ShareLinks from "@/components/ShareLinks";
import {Link} from "@/i18n/navigation";
import {PROJECTS, projectBySlug} from "@/lib/content";
import {PROJECT_IMAGES} from "@/lib/images";
import {buildProjectJsonLd} from "@/lib/jsonld";
import {buildMetadata, localeUrl} from "@/lib/seo";
import {routing, type Locale} from "@/i18n/routing";
import styles from "./page.module.css";

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

  const t = await getTranslations({locale, namespace: "Project"});
  const p = await getTranslations({locale, namespace: `Projects.${slug}`});
  const images = PROJECT_IMAGES[slug] ?? [];

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

  const url = localeUrl(locale, `/prosjekter/${slug}`);

  const jsonLd = buildProjectJsonLd({
    slug,
    name: p("title"),
    description: body.find((b) => b.type === "text")?.value ?? p("title"),
    city: project.city,
    images: images.map((i) => i.src),
    url,
  });

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
            <Link href="/prosjekter" className={styles.back} aria-label={t("back")}>
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
        </section>
      </Reveal>
    </main>
  );
}
