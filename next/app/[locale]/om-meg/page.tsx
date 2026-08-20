import {getTranslations, setRequestLocale} from "next-intl/server";
import AboutBlock from "@/components/AboutBlock";
import Reveal from "@/components/Reveal";
import {buildMetadata} from "@/lib/seo";
import type {Locale} from "@/i18n/routing";
import styles from "./page.module.css";

const STARS = "★★★★★";

export async function generateMetadata({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  return buildMetadata(locale, "/om-meg", "about");
}

export default async function AboutPage({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const r = await getTranslations({locale, namespace: "Reviews"});

  return (
    <main className={styles.wrap}>
      <Reveal effect="fadeInUp">
        {/* h1 na "O mojej pasji", tak jak w oryginalnym About.js */}
        <AboutBlock headingLevel="h1" />
      </Reveal>

      <Reveal effect="fadeInUp">
        <section className={styles.reviews}>
          <h2 className={styles.subheading}>{r("title")}</h2>
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
