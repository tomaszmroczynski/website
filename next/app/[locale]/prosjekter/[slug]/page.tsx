import {notFound} from "next/navigation";
import {getTranslations, setRequestLocale} from "next-intl/server";
import Gallery from "@/components/Gallery";
import {Link} from "@/i18n/navigation";
import {PROJECTS, projectBySlug} from "@/lib/content";
import {PROJECT_IMAGES} from "@/lib/images";
import {buildMetadata} from "@/lib/seo";
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

  const room = p("room");
  const alt = project.city
    ? t("altWithCity", {room, city: project.city})
    : t("alt", {room});

  /** p.raw kaster pa manglende nokler; ikke alle prosjekter har alle feltene. */
  const opt = <T,>(key: string) => (p.has(key) ? (p.raw(key) as T) : undefined);

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

  return (
    <main className={styles.wrap}>
      <Link href="/prosjekter" className={styles.back}>
        ← {t("back")}
      </Link>

      <p className={styles.eyebrow}>{p.has("eyebrow") ? p("eyebrow") : room}</p>
      <h1 className={styles.title}>{p("title")}</h1>

      <div className={styles.layout}>
        <div className={styles.body}>
          {body.map((block, i) =>
            block.type === "heading" ? (
              <h2 key={i}>{block.value}</h2>
            ) : (
              <p key={i}>{block.value}</p>
            )
          )}
        </div>

        <aside className={styles.meta}>
          {rows.map(([label, value]) => (
            <div key={label} className={styles.metaRow}>
              <span className={styles.metaLabel}>{label}</span>
              <span>{value}</span>
            </div>
          ))}
          <div className={styles.tags}>
            {tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </aside>
      </div>

      <div className={styles.gallery}>
        <Gallery images={images} alt={alt} closeLabel={t("close")} />
      </div>
    </main>
  );
}
