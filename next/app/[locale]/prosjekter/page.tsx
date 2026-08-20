import {getTranslations, setRequestLocale} from "next-intl/server";
import CardGrid from "@/components/CardGrid.module.css";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import {PROJECTS, projectPath} from "@/lib/content";
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
      <div className={`li-section-heading ${styles.head}`}>
        <p className="eyebrow">{t("categories").replace(":", "")}</p>
        <h1 className="heading">{w("heading")}</h1>
      </div>

      <Reveal effect="fadeInUp">
        <div className={CardGrid.grid}>
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.slug}
              href={projectPath(project.slug)}
              src={p(`${project.slug}.cover`)}
              alt={p(`${project.slug}.cardAlt`)}
              tag={p(`${project.slug}.cardLocation`)}
              name={p(`${project.slug}.cardName`)}
              cta={t("seeProject")}
              priority={i < 2}
            />
          ))}
        </div>
      </Reveal>
    </main>
  );
}
