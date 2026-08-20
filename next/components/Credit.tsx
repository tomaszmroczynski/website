import styles from "./Credit.module.css";

/**
 * Kredyt wykonawcy. Znak Ripperdoc jest wersja mono na currentColor,
 * wiec dziedziczy kolor stopki i nie wprowadza obcego odcienia poza
 * samym slowem "doc", ktore jest czescia znaku slownego.
 */
export default function Credit() {
  return (
    <a
      className={styles.credit}
      href="https://ripperdoc.ai"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Ripperdoc.ai — Tomasz Mroczyński"
    >
      <svg className={styles.mark} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
        <path d="M29 47.39 A 12 12 0 0 0 31.34 28.37" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" fill="none" opacity="0.5" />
        <path d="M32.5 53.45 A 19 19 0 0 0 36.2 23.33" stroke="currentColor" strokeWidth="1.85" strokeLinecap="round" fill="none" opacity="0.75" />
        <path d="M35.5 58.65 A 25 25 0 0 0 40.37 19.02" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" opacity="1" />
        <circle cx="31.34" cy="28.37" r="2" fill="currentColor" />
        <circle cx="36.2" cy="23.33" r="2" fill="currentColor" />
        <circle cx="40.37" cy="19.02" r="2" fill="currentColor" />
        <circle cx="23" cy="37" r="5" fill="currentColor" />
      </svg>
      <span className={styles.words}>
        <span className={styles.brand}>
          Ripper<span className={styles.ember}>doc</span>.ai
        </span>
        <span className={styles.person}>Tomasz Mroczyński</span>
      </span>
    </a>
  );
}
