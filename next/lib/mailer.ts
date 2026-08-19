import nodemailer from "nodemailer";

/**
 * Zwykly SMTP, bez SDK dostawcy. Zmiana uslugi to podmiana zmiennych
 * srodowiskowych, nie przepisywanie kodu — nazwa dostawcy nie wystepuje
 * nigdzie w repozytorium.
 *
 * SMTP_HOST      np. mail-eu2.smtp2go.com (endpoint wylacznie unijny)
 * SMTP_PORT      587 (STARTTLS) albo 465 (TLS)
 * SMTP_USER      / SMTP_PASS
 * MAIL_FROM      adres na zweryfikowanej domenie, np. skjema@limes-interior.no
 * MAIL_TO        skrzynka odbiorcza zgloszen
 */
export function getTransport() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) return null;

  const port = Number(process.env.SMTP_PORT ?? 587);
  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {user, pass},
  });
}

export const MAIL_FROM = process.env.MAIL_FROM ?? "";
export const MAIL_TO = process.env.MAIL_TO ?? "";
