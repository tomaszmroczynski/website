import Image from "next/image";
import {getTranslations, setRequestLocale} from "next-intl/server";
import Reveal from "@/components/Reveal";
import {Link} from "@/i18n/navigation";
import {PROJECTS} from "@/lib/content";
import {buildMetadata} from "@/lib/seo";
import type {Locale} from "@/i18n/routing";
import styles from "./page.module.css";

export async function generateMetadata({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  return buildMetadata(locale, "/prosjekter", "work");
}

export default async function ProjectsPage({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  setRequestLocale(locale);

  const w = await getTranslations({locale, namespace: "Work"});
  const p = await getTranslations({locale, namespace: "Projects"});
  const t = await getTranslations({locale, namespace: "Project"});

  return (
    <main className={styles.wrap}>
      <h1 className={styles.heading}>{w("heading")}</h1>

      <Reveal effect="fadeInUp">
        <div className={styles.grid}>
          {PROJECTS.map((project, i) => (
            <Link
              key={project.slug}
              href={`/prosjekter/${project.slug}`}
              className={styles.itm}
            >
              <div className={styles.bg}>
                <Image
                  src={p(`${project.slug}.cover`)}
                  alt={p(`${project.slug}.cardAlt`)}
                  width={1920}
                  height={1080}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={i < 2}
                />
              </div>
              <div className={styles.desc}>
                <div className={styles.tag}>{p(`${project.slug}.cardTag`)}</div>
                <div className={styles.location}>{p(`${project.slug}.cardLocation`)}</div>
                <div className={styles.name}>{p(`${project.slug}.cardName`)}</div>
                <span className={styles.cta}>{t("seeProject")}</span>
              </div>
            </Link>
          ))}
        </div>
      </Reveal>
    </main>
  );
}
