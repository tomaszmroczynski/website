import Image from "next/image";
import {getTranslations, setRequestLocale} from "next-intl/server";
import Reveal from "@/components/Reveal";
import {Link} from "@/i18n/navigation";
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
  const seo = await getTranslations({locale, namespace: "Seo"});

  return (
    <main className={styles.wrap}>
      <h1 className={styles.heading}>{seo("expertness.title")}</h1>

      <Reveal effect="fadeInUp">
        <div className={styles.grid}>
          {SERVICES.map((service, i) => {
            const cover = SERVICE_IMAGES[service.slug]?.[0];
            return (
              <Link
                key={service.slug}
                href={`/tjenester/${service.slug}`}
                className={styles.card}
              >
                {cover && (
                  <Image
                    src={cover.src}
                    alt={s(`${service.slug}.title`)}
                    width={cover.width}
                    height={cover.height}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={i < 2}
                  />
                )}
                <div className={styles.desc}>
                  <h2 className={styles.name}>{s(`${service.slug}.cardTitle`)}</h2>
                  <p className={styles.summary}>{s(`${service.slug}.summary`)}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </Reveal>
    </main>
  );
}
