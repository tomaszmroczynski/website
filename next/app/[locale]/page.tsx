import {getTranslations, setRequestLocale} from "next-intl/server";
import AboutBlock from "@/components/AboutBlock";
import CardGrid from "@/components/CardGrid.module.css";
import HeroSlider from "@/components/HeroSlider";
import ProjectCard from "@/components/ProjectCard";
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
  const t = await getTranslations({locale, namespace: "Project"});
  const nav = await getTranslations({locale, namespace: "Nav"});

  return (
    <main>
      <section className={`li-hero ${styles.hero}`}>
        <HeroSlider images={HOME_IMAGES} alt={mp("title1")} interval={4000} />
        <div className={styles.heroCaption}>
          <h1 className={styles.heroTitle}>{mp("title1")}</h1>
          <p className={styles.heroDesc}>{mp("desc1")}</p>
        </div>
      </section>

      <Reveal effect="fadeInUp">
        <AboutBlock />
      </Reveal>

      <Reveal effect="fadeInUp">
        <section className={styles.section}>
          <div>
            <div>
              <div className={`li-section-heading ${styles.head}`}>
                <p className="eyebrow">{nav("cta")}</p>
                <h2 className="heading">{a("offerHeading")}</h2>
              </div>
              <div className={`${CardGrid.grid}`}>
                {SERVICES.map((service) => {
                  const cover = SERVICE_IMAGES[service.slug]?.[0];
                  if (!cover) return null;
                  return (
                    <ProjectCard
                      key={service.slug}
                      href={`/tjenester/${service.slug}`}
                      src={cover.src}
                      alt={s(`${service.slug}.title`)}
                      name={s(`${service.slug}.cardTitle`)}
                      cta={nav("cta")}
                      width={cover.width}
                      height={cover.height}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal effect="fadeInUp">
        <section className={styles.section}>
          <div className={`li-section-heading ${styles.head}`}>
            <p className="eyebrow">{nav("projects")}</p>
            <h2 className="heading">{w("heading")}</h2>
          </div>
          <div className={CardGrid.grid}>
            {FEATURED.map((project) => (
              <ProjectCard
                key={project.slug}
                href={`/prosjekter/${project.slug}`}
                src={p(`${project.slug}.cover`)}
                alt={p(`${project.slug}.cardAlt`)}
                tag={p(`${project.slug}.cardLocation`)}
                name={p(`${project.slug}.cardName`)}
                cta={t("seeProject")}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            ))}
          </div>
          <Link href="/prosjekter" className="li-btn li-btn--text">
            {nav("projects")}
          </Link>
        </section>
      </Reveal>

      <Reveal effect="fadeInUp">
        <section className={styles.section}>
          <div className={`li-section-heading ${styles.head}`}>
            <p className="eyebrow">{r("stars_label")}</p>
            <h2 className="heading">{r("title")}</h2>
          </div>
          <div className={styles.reviewGrid}>
            {([1, 2, 3] as const).map((i) => (
              <blockquote key={i} className="li-card">
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
