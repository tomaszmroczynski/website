import {getTranslations, setRequestLocale} from "next-intl/server";
import {buildMetadata} from "@/lib/seo";
import type {Locale} from "@/i18n/routing";
import styles from "./page.module.css";

const SECTIONS = ["data", "cookies", "rights", "contact"] as const;

export async function generateMetadata({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  return buildMetadata(locale, "/personvern", "personvern");
}

export default async function PrivacyPage({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations({locale, namespace: "Personvern"});

  return (
    <main className={styles.wrap}>
      <h1 className={styles.heading}>{t("title")}</h1>
      <p>{t("intro")}</p>
      {SECTIONS.map((s) => (
        <section key={s} className={styles.section}>
          <h2>{t(`${s}_title`)}</h2>
          <p>{t(`${s}_text`)}</p>
        </section>
      ))}
    </main>
  );
}
