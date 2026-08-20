import Image from "next/image";
import {useTranslations} from "next-intl";
import {PORTRAIT_IMAGE} from "@/lib/images";
import styles from "./AboutBlock.module.css";

/**
 * Odwzorowanie Abouthome.js: najpierw "O mojej pasji" (naglowek w waskiej
 * kolumnie, tekst w szerokiej), potem portret w przesunietej ramce obok
 * "Kilka slow o mnie" i listy specjalizacji.
 *
 * Zdjecie to /img/home.webp — imgabout.webp, ktorego uzylem wczesniej,
 * to render wnetrza sluzacy za baner, nie portret.
 */
export default function AboutBlock({headingLevel = "h2"}: {headingLevel?: "h1" | "h2"}) {
  const a = useTranslations("About");
  const H = headingLevel;

  return (
    <>
      <section className={styles.section}>
        <div className={styles.passion}>
          <H className="heading">{a("passionHeading")}</H>
          <p className="lead">{a("passion")}</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.words}>
          <div className={styles.thumb}>
            <Image
              src={PORTRAIT_IMAGE.src}
              alt="Anna Rasinska — interiørarkitekt, Limes Interiør"
              width={PORTRAIT_IMAGE.width}
              height={PORTRAIT_IMAGE.height}
              sizes="(max-width: 860px) 80vw, 32vw"
              priority
            />
          </div>

          <div>
            <h2 className="heading">{a("introHeading")}</h2>
            <p className="lead">{a("intro")}</p>
            <ul className={styles.list}>
              {(["s1", "s2", "s3", "s4"] as const).map((key) => (
                <li key={key}>{a(key)}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
