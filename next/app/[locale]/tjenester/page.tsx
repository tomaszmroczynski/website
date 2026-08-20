import {getTranslations, setRequestLocale} from "next-intl/server";
import CardGrid from "@/components/CardGrid.module.css";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import {SERVICES} from "@/lib/content";
import {SERVICE_IMAGES} from "@/lib/images";
import {buildMetadata} from "@/lib/seo";
import type {Locale} from "@/i18n/routing";
import styles from "./page.module.css";

export async function generateMetadata({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  return buildMetadata(locale, "/tjenester", "expertness");
}

export default async function ServicesPage({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  setRequestLocale(locale);

  const s = await getTranslations({locale, namespace: "Services"});
  const a = await getTranslations({locale, namespace: "About"});
  const nav = await getTranslations({locale, namespace: "Nav"});

  return (
    <main className={styles.wrap}>
      <div className={`li-section-heading ${styles.head}`}>
        <p className="eyebrow">{nav("cta")}</p>
        <h1 className="heading">{a("offerHeading")}</h1>
      </div>

      <Reveal effect="fadeInUp">
        <div className={CardGrid.grid}>
          {SERVICES.map((service, i) => {
            const cover = SERVICE_IMAGES[service.slug]?.[0];
            if (!cover) return null;
            return (
              <div key={service.slug}>
                <ProjectCard
                  href={`/tjenester/${service.slug}`}
                  src={cover.src}
                  alt={s(`${service.slug}.title`)}
                  name={s(`${service.slug}.cardTitle`)}
                  cta={nav("cta")}
                  width={cover.width}
                  height={cover.height}
                  priority={i < 2}
                />
                <p className={styles.summary}>{s(`${service.slug}.summary`)}</p>
              </div>
            );
          })}
        </div>
      </Reveal>
    </main>
  );
}
