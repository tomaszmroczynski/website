import {useTranslations} from "next-intl";
import Credit from "./Credit";
import {Link} from "@/i18n/navigation";
import {AREAS} from "@/lib/content";
import {CONTACT} from "@/lib/site";
import styles from "./Footer.module.css";

const SOCIAL = [
  {label: "Facebook", href: "https://www.facebook.com/limesinterior.annarasinska/"},
  {label: "LinkedIn", href: "https://www.linkedin.com/in/anna-rasi%C5%84ska-81083413b/"},
];

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div>
          <h2 className={styles.title}>{t("thanksTitle")}</h2>
          <p>{t("intro")}</p>
          <div className={styles.contactList}>
            <a href={`tel:${CONTACT.phone}`}>(+47) 947 12 654</a>
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            <span>
              {CONTACT.street}, {CONTACT.postalCode} {CONTACT.locality}
            </span>
          </div>
        </div>

        <div>
          <div className={styles.heading}>{t("areasHeading")}</div>
          <ul className={styles.areas}>
            {AREAS.map((area) => (
              <li key={area.name}>{area.name}</li>
            ))}
          </ul>
        </div>

        <div>
          <div className={styles.heading}>{t("socialHeading")}</div>
          <p>{t("socialText")}</p>
          <div className={styles.social}>
            {SOCIAL.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>
          {CONTACT.name} · Org.nr {CONTACT.orgnr}
        </span>
        <Link href="/personvern">{t("privacy")}</Link>
        <Credit />
      </div>
    </footer>
  );
}
