import {useTranslations} from "next-intl";
import styles from "./Faq.module.css";

/**
 * Pytania i odpowiedzi na <details>/<summary> — rozwijanie dziala bez
 * JavaScriptu, a caly tekst jest w serwerowym HTML, wiec da sie go
 * zaindeksowac niezaleznie od tego, czy ktos rozwinie pozycje.
 *
 * Bez znacznikow FAQPage w danych strukturalnych. Google od 2023
 * pokazuje wyniki rozszerzone dla FAQ praktycznie tylko witrynom
 * rzadowym i medycznym, wiec dla tej strony nie daloby to nic —
 * a wartosc tej sekcji lezy w samej tresci z intencja lokalna.
 */
export default function Faq({headingLevel = "h2"}: {headingLevel?: "h1" | "h2"}) {
  const t = useTranslations("Faq");
  const H = headingLevel;

  const items = [1, 2, 3, 4, 5]
    .filter((i) => t.has(`q${i}`) && t.has(`a${i}`))
    .map((i) => ({q: t(`q${i}`), a: t(`a${i}`)}));

  if (!items.length) return null;

  return (
    <section className={styles.wrap}>
      <H className="heading">{t("title")}</H>
      <div className={styles.list}>
        {items.map((item, i) => (
          <details key={i} className={styles.item} name="faq">
            <summary className={styles.question}>{item.q}</summary>
            <p className={styles.answer}>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
