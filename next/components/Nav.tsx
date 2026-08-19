"use client";

import {useState} from "react";
import Image from "next/image";
import {useTranslations} from "next-intl";
import {Link, usePathname} from "@/i18n/navigation";
import {CONTACT} from "@/lib/site";
import LanguageSwitcher from "./LanguageSwitcher";
import styles from "./Nav.module.css";

const ITEMS = [
  {href: "/", key: "home"},
  {href: "/om-meg", key: "about"},
  {href: "/prosjekter", key: "projects"},
  {href: "/kontakt", key: "contact"},
] as const;

export default function Nav() {
  const t = useTranslations("Nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.brand} aria-label={t("home")}>
        <Image
          src="/img/logowhite3.webp"
          alt="Limes Interiør Anna Rasinska"
          width={220}
          height={34}
          className={styles.signature}
          priority
        />
      </Link>

      <nav className={`${styles.nav} ${open ? "" : styles.navClosed}`}>
        {ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`${styles.link} ${pathname === item.href ? styles.active : ""}`}
            aria-current={pathname === item.href ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            {t(item.key)}
          </Link>
        ))}
        <LanguageSwitcher />
      </nav>

      <div className={styles.contact}>
        <a href={`tel:${CONTACT.phone}`}>{t("phoneLabel")}: (+47) 947 12 654</a>
        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
      </div>

      <button
        type="button"
        className={styles.toggle}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {t("menu")}
      </button>
    </header>
  );
}
