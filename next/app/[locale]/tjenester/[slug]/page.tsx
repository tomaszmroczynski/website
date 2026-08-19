import {notFound} from "next/navigation";
import {getTranslations, setRequestLocale} from "next-intl/server";
import HeroSlider from "@/components/HeroSlider";
import Reveal from "@/components/Reveal";
import {Link} from "@/i18n/navigation";
import {AREAS, SERVICES, serviceBySlug} from "@/lib/content";
import {SERVICE_IMAGES} from "@/lib/images";
import {buildMetadata, localeUrl} from "@/lib/seo";
import {SITE_URL} from "@/lib/site";
import {routing, type Locale} from "@/i18n/routing";
import styles from "./page.module.css";

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

  const t = await getTranslations({locale, namespace: "Project"});
  const nav = await getTranslations({locale, namespace: "Nav"});
  const s = await getTranslations({locale, namespace: `Services.${slug}`});
  const images = SERVICE_IMAGES[slug] ?? [];

  const body = s.raw("body") as Array<{type: "heading" | "text"; value: string}>;
  const url = localeUrl(locale, `/tjenester/${slug}`);

  /** Service z areaServed — bez tego strona uslugi nie niesie sygnalu geo. */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: s("title"),
    description: s("summary"),
    serviceType: s("title"),
    url,
    provider: {"@id": `${SITE_URL}/#business`},
    areaServed: AREAS.map((a) => ({"@type": a.type, name: a.name})),
  };

  /** Bloki tekstu nastepujace po naglowku skladaja sie na liste punktowana. */
  const groups: Array<{heading: string | null; items: string[]}> = [];
  for (const block of body) {
    if (block.type === "heading") groups.push({heading: block.value, items: []});
    else {
      if (!groups.length) groups.push({heading: null, items: []});
      groups[groups.length - 1].items.push(block.value);
    }
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
      />

      <Reveal effect="fadeIn">
        <section className={styles.hero}>
          <HeroSlider images={images} alt={s("title")} />
          <div className={styles.caption}>
            <Link href="/tjenester" className={styles.back} aria-label={t("back")}>
              <span aria-hidden="true">←</span>
            </Link>
            <h1 className={styles.title}>{s("title")}</h1>
          </div>
        </section>
      </Reveal>

      <Reveal effect="fadeInUp">
        <section className={styles.detail}>
          <p className={styles.intro}>{s("intro")}</p>
          <div className={styles.body}>
            {groups.map((g, i) => (
              <div key={i}>
                {g.heading && <h2>{g.heading}</h2>}
                <ul className={styles.list}>
                  {g.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Link href="/kontakt" className={styles.cta}>
            {nav("cta")}
          </Link>
        </section>
      </Reveal>
    </main>
  );
}
