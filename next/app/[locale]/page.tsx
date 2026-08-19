import Image from "next/image";
import {getTranslations, setRequestLocale} from "next-intl/server";
import HeroSlider from "@/components/HeroSlider";
import Reveal from "@/components/Reveal";
import {Link} from "@/i18n/navigation";
import {PROJECTS, SERVICES} from "@/lib/content";
import {HOME_IMAGES, SERVICE_IMAGES} from "@/lib/images";
import {buildMetadata} from "@/lib/seo";
import type {Locale} from "@/i18n/routing";
import styles from "./page.module.css";

/** Cztery realizacje na stronie glownej; komplet jest na /prosjekter. */
const FEATURED = PROJECTS.slice(0, 4);
const STARS = "★★★★★";

export async function generateMetadata({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  return buildMetadata(locale, "/", "home");
}

export default async function HomePage({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  setRequestLocale(locale);

  const mp = await getTranslations({locale, namespace: "mainpictures"});
  const a = await getTranslations({locale, namespace: "About"});
  const s = await getTranslations({locale, namespace: "Services"});
  const p = await getTranslations({locale, namespace: "Projects"});
  const w = await getTranslations({locale, namespace: "Work"});
  const r = await getTranslations({locale, namespace: "Reviews"});
  const seo = await getTranslations({locale, namespace: "Seo"});
  const nav = await getTranslations({locale, namespace: "Nav"});

  return (
    <main>
      <section className={styles.hero}>
        <HeroSlider images={HOME_IMAGES} alt={mp("title1")} interval={4000} />
        <div className={styles.heroCaption}>
          <h1 className={styles.heroTitle}>{mp("title1")}</h1>
          <p className={styles.heroDesc}>{mp("desc1")}</p>
        </div>
      </section>

      <Reveal effect="fadeInUp">
        <section className={styles.section}>
          <div className={styles.two}>
            <div>
              <h2 className={styles.sectionHeading}>{a("introHeading")}</h2>
              <p>{a("intro")}</p>
              <Link href="/om-meg" className={styles.more}>{nav("about")}</Link>
            </div>
            <div>
              <h2 className={styles.sectionHeading}>{a("offerHeading")}</h2>
              <div className={styles.cards}>
                {SERVICES.map((service) => {
                  const cover = SERVICE_IMAGES[service.slug]?.[0];
                  return (
                    <Link key={service.slug} href={`/tjenester/${service.slug}`} className={styles.card}>
                      {cover ? (
                        <Image
                          src={cover.src}
                          alt={s(`${service.slug}.title`)}
                          width={cover.width}
                          height={cover.height}
                          sizes="(max-width: 768px) 100vw, 25vw"
                        />
                      ) : null}
                      <div className={styles.cardDesc}>
                        <h3 className={styles.cardName}>{s(`${service.slug}.cardTitle`)}</h3>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal effect="fadeInUp">
        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>{w("heading")}</h2>
          <div className={styles.cards}>
            {FEATURED.map((project) => (
              <Link key={project.slug} href={`/prosjekter/${project.slug}`} className={styles.card}>
                <Image
                  src={p(`${project.slug}.cover`)}
                  alt={p(`${project.slug}.cardAlt`)}
                  width={1920}
                  height={1080}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className={styles.cardDesc}>
                  <h3 className={styles.cardName}>{p(`${project.slug}.cardName`)}</h3>
                  <p className={styles.cardMeta}>{p(`${project.slug}.cardLocation`)}</p>
                </div>
              </Link>
            ))}
          </div>
          <Link href="/prosjekter" className={styles.more}>{nav("projects")}</Link>
        </section>
      </Reveal>

      <Reveal effect="fadeInUp">
        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>{r("title")}</h2>
          <div className={styles.reviewGrid}>
            {([1, 2, 3] as const).map((i) => (
              <blockquote key={i} className={styles.review}>
                <div className={styles.stars} aria-label={r("stars_label")}>{STARS}</div>
                <p>{r(`review${i}_text`)}</p>
                <footer className={styles.author}>{r(`review${i}_author`)}</footer>
              </blockquote>
            ))}
          </div>
        </section>
      </Reveal>
    </main>
  );
}
