import {getTranslations, setRequestLocale} from "next-intl/server";
import ContactForm from "@/components/ContactForm";
import Faq from "@/components/Faq";
import Reveal from "@/components/Reveal";
import {AREAS} from "@/lib/content";
import {buildMetadata} from "@/lib/seo";
import {CONTACT, MAP_URL} from "@/lib/site";
import type {Locale} from "@/i18n/routing";
import styles from "./page.module.css";

export async function generateMetadata({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  return buildMetadata(locale, "/kontakt", "contact");
}

export default async function ContactPage({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  setRequestLocale(locale);

  const seo = await getTranslations({locale, namespace: "Seo"});
  const o = await getTranslations({locale, namespace: "Omrader"});
  const f = await getTranslations({locale, namespace: "Footer"});

  return (
    <main className={styles.wrap}>
      <h1 className={styles.heading}>{seo("contact.title")}</h1>

      <Reveal effect="fadeInUp">
        <div className={styles.grid}>
          <div>
            <ContactForm />
          </div>

          <aside>
            <div className={styles.blockHeading}>{CONTACT.name}</div>
            <div className={styles.details}>
              <a href={`tel:${CONTACT.phone}`}>(+47) 947 12 654</a>
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              <span>
                {CONTACT.street}, {CONTACT.postalCode} {CONTACT.locality}
              </span>
              <span>Org.nr {CONTACT.orgnr}</span>
            </div>

            <div className={styles.blockHeading}>{o("directionsHeading")}</div>
            <p className={styles.details}>
              {/*
                Link zamiast osadzonej mapy. Iframe Google Maps laduje skrypty
                obcego hosta i ustawia ciasteczka, zanim ktokolwiek go dotknie —
                zbedne obciazenie CWV i zbedny problem z RODO na stronie, ktora
                pokazuje jeden punkt.
              */}
              <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="li-btn li-btn--text">
                {o("directions")}
              </a>
            </p>

            <div className={styles.blockHeading}>{f("areasHeading")}</div>
            <p>{o("body")}</p>
            <ul className={styles.areas}>
              {AREAS.map((a) => (
                <li key={a.name}>{a.name}</li>
              ))}
            </ul>
          </aside>
        </div>
      </Reveal>

      <Reveal effect="fadeInUp">
        <Faq />
      </Reveal>
    </main>
  );
}
