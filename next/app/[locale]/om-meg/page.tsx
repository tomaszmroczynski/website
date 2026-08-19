import Image from "next/image";
import {getTranslations, setRequestLocale} from "next-intl/server";
import Reveal from "@/components/Reveal";
import {buildMetadata} from "@/lib/seo";
import type {Locale} from "@/i18n/routing";
import styles from "./page.module.css";

export async function generateMetadata({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  return buildMetadata(locale, "/om-meg", "about");
}

export default async function AboutPage({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  setRequestLocale(locale);

  const a = await getTranslations({locale, namespace: "About"});
  const r = await getTranslations({locale, namespace: "Reviews"});

  /** Kazda specjalizacja ma forme "Nazwa – opis"; nazwa idzie wyroznieniem. */
  const specialties = (["s1", "s2", "s3", "s4"] as const).map((key) => {
    const value = a(key);
    const dash = value.indexOf("–");
    return dash > 0
      ? {term: value.slice(0, dash).trim(), rest: value.slice(dash + 1).trim()}
      : {term: null, rest: value};
  });

  const reviews = ([1, 2, 3] as const).map((i) => ({
    text: r(`review${i}_text`),
    author: r(`review${i}_author`),
  }));

  return (
    <main className={styles.wrap}>
      <h1 className={styles.heading}>{a("introHeading")}</h1>

      <Reveal effect="fadeInUp">
        <div className={styles.intro}>
          <Image
            src="/img/imgabout.webp"
            alt="Anna Rasinska — interiørarkitekt, Limes Interiør"
            width={1200}
            height={1500}
            className={styles.portrait}
            sizes="(max-width: 860px) 100vw, 50vw"
            priority
          />
          <div>
            <p className={styles.lead}>{a("intro")}</p>
            <ul className={styles.specialties}>
              {specialties.map((s, i) => (
                <li key={i}>
                  {s.term && <span className={styles.term}>{s.term} — </span>}
                  {s.rest}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>

      <Reveal effect="fadeInUp">
        <section className={styles.passion}>
          <h2 className={styles.subheading}>{a("passionHeading")}</h2>
          <p>{a("passion")}</p>
        </section>
      </Reveal>

      <Reveal effect="fadeInUp">
        <section className={styles.reviews}>
          <h2 className={styles.subheading}>{r("title")}</h2>
          <div className={styles.reviewGrid}>
            {reviews.map((review, i) => (
              <blockquote key={i} className={styles.review}>
                <div className={styles.stars} aria-label={r("stars_label")}>
                  ★★★★★
                </div>
                <p>{review.text}</p>
                <footer className={styles.author}>{review.author}</footer>
              </blockquote>
            ))}
          </div>
        </section>
      </Reveal>
    </main>
  );
}
