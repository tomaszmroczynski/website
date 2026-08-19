"use client";

import {useEffect, useRef, useState} from "react";
import styles from "./Reveal.module.css";

/**
 * Erstatter react-reveal, som er forlatt siden 2020 og har React 16 som
 * peer dependency — den ville ikke kjort med React 19. Samme effekt med
 * IntersectionObserver og CSS, uten bibliotek.
 *
 * Innholdet ligger alltid i HTML-en; bare opasiteten animeres, sa en
 * crawler ser teksten uansett om observeren aldri kjorer.
 */
export default function Reveal({
  children,
  effect = "fadeIn",
}: {
  children: React.ReactNode;
  effect?: "fadeIn" | "fadeInUp";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      {rootMargin: "0px 0px -10% 0px"}
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${styles[effect]} ${shown ? styles.visible : ""}`}
    >
      {children}
    </div>
  );
}
