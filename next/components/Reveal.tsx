"use client";

import {useEffect, useRef, useState} from "react";

/**
 * Zastepuje react-reveal (porzucony w 2020, peer React 16).
 *
 * Tresc nie jest ukrywana w HTML — robi to dopiero klasa .js na <html>,
 * dodawana skryptem w <head>. Bez JS wszystko jest widoczne.
 *
 * Do tego siatka bezpieczenstwa: IntersectionObserver zalezy od potoku
 * renderowania i nie odpala w karcie, ktora nie kompozytuje klatek —
 * np. otwartej w tle. Bez limitu czasu sekcja zostalaby przezroczysta
 * na zawsze, takze po powrocie do karty.
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

    let done = false;
    const reveal = () => {
      if (done) return;
      done = true;
      setShown(true);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          io.disconnect();
        }
      },
      {rootMargin: "0px 0px -10% 0px"}
    );
    io.observe(el);

    const timer = window.setTimeout(reveal, 1000);
    return () => {
      io.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={[
        "reveal",
        effect === "fadeInUp" ? "reveal--up" : "",
        shown ? "is-visible" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
