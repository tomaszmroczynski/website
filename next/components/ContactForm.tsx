"use client";

import {useState} from "react";
import {useTranslations} from "next-intl";
import styles from "./ContactForm.module.css";

type State = "idle" | "sending" | "sent" | "error";

/**
 * Formularz jest zwyklym <form method="post">, wiec dziala takze bez
 * JavaScriptu — przegladarka wysle go klasycznie do Route Handlera.
 * JS tylko przechwytuje wysylke, zeby nie przeladowywac strony.
 */
export default function ContactForm() {
  const t = useTranslations("ContactForm");
  const [state, setState] = useState<State>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setState("sending");
    try {
      const res = await fetch("/api/kontakt", {
        method: "POST",
        body: new FormData(form),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setState("sent");
    } catch {
      setState("error");
    }
  }

  return (
    <form className={styles.form} method="post" action="/api/kontakt" onSubmit={onSubmit}>
      <div className={styles.field}>
        <label className="eyebrow" htmlFor="cf-name">{t("name")}</label>
        <input className="li-input" id="cf-name" name="name" required maxLength={120} autoComplete="name" />
      </div>

      <div className={styles.field}>
        <label className="eyebrow" htmlFor="cf-email">{t("email")}</label>
        <input className="li-input" id="cf-email" name="email" type="email" required maxLength={200} autoComplete="email" />
      </div>

      <div className={styles.field}>
        <label className="eyebrow" htmlFor="cf-message">{t("message")}</label>
        <textarea className={`li-input ${styles.textarea}`} id="cf-message" name="message" required minLength={10} maxLength={5000} />
      </div>

      <div className={styles.hp} aria-hidden="true">
        <label htmlFor="cf-company">Company</label>
        <input id="cf-company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <button className="li-btn li-btn--ghost" type="submit" disabled={state === "sending"}>
        {state === "sending" ? t("sending") : t("submit")}
      </button>

      {state === "sent" && <p className={`${styles.status} ${styles.ok}`} role="status">{t("sent")}</p>}
      {state === "error" && <p className={`${styles.status} ${styles.err}`} role="alert">{t("error")}</p>}
    </form>
  );
}
