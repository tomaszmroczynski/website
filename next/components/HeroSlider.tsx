"use client";

import {useCallback, useEffect, useRef, useState} from "react";
import Image from "next/image";
import type {ProjectImage} from "@/lib/images";
import styles from "./HeroSlider.module.css";

type Props = {
  images: ProjectImage[];
  alt: string;
  interval?: number;
  /** "x" = przesuw poziomy (swipe na dotyku), "y" = pionowy jak w CRA */
  direction?: "x" | "y";
};

/**
 * Slider na CSS scroll-snap zamiast biblioteki karuzelowej.
 *
 * Dla indeksacji istotne jest, ze wszystkie zdjecia sa w serwerowym HTML
 * od pierwszego bajtu. JavaScript przesuwa tylko pozycje scrolla; bez
 * niego zostaje dzialajaca, przesuwalna palcem tasma.
 */
export default function HeroSlider({images, alt, interval = 2000, direction = "x"}: Props) {
  const vertical = direction === "y";
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const [active, setActive] = useState(0);

  const scrollToIndex = useCallback(
    (i: number, behavior: ScrollBehavior) => {
      const el = trackRef.current;
      if (!el) return;
      const size = vertical ? el.clientHeight : el.clientWidth;
      el.scrollTo(
        vertical ? {top: size * i, behavior} : {left: size * i, behavior}
      );
    },
    [vertical]
  );

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => {
      const size = vertical ? el.clientHeight : el.clientWidth;
      const pos = vertical ? el.scrollTop : el.scrollLeft;
      if (size) setActive(Math.round(pos / size));
    };
    el.addEventListener("scroll", onScroll, {passive: true});
    return () => el.removeEventListener("scroll", onScroll);
  }, [vertical]);

  useEffect(() => {
    if (images.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(() => {
      const el = trackRef.current;
      // Karta w tle nie renderuje; przesuwanie jej wtedy nic nie daje
      if (!el || pausedRef.current || document.hidden) return;

      const size = vertical ? el.clientHeight : el.clientWidth;
      if (!size) return;
      const before = vertical ? el.scrollTop : el.scrollLeft;
      const next = (Math.round(before / size) + 1) % images.length;

      scrollToIndex(next, "smooth");

      // Plynne przewijanie prowadzi kompozytor i bywa zignorowane —
      // np. przy ograniczonych zasobach albo w nieaktywnym kontekscie.
      // Jesli po 400 ms pozycja nie drgnela, przeskakujemy bez animacji,
      // zeby zdjecie zmienilo sie tak czy inaczej.
      window.setTimeout(() => {
        const el2 = trackRef.current;
        if (!el2) return;
        const now = vertical ? el2.scrollTop : el2.scrollLeft;
        if (Math.abs(now - before) < 2) scrollToIndex(next, "instant");
      }, 400);
    }, interval);

    return () => window.clearInterval(id);
  }, [images.length, interval, vertical, scrollToIndex]);

  return (
    <div
      className={styles.wrapper}
      /*
        Bez pauzy na hover. Hero zajmuje caly ekran, wiec kursor lezy na nim
        niemal zawsze i autoplay by nigdy nie ruszyl. Pauzujemy tylko, gdy
        ktos wejdzie w kropki klawiatura.
      */
      onFocusCapture={() => {
        pausedRef.current = true;
      }}
      onBlurCapture={() => {
        pausedRef.current = false;
      }}
    >
      <div className={`${styles.track} ${vertical ? styles.trackY : ""}`} ref={trackRef}>
        {images.map((img, i) => (
          <div className={styles.slide} key={img.src}>
            <Image
              src={img.src}
              alt={`${alt} (${i + 1}/${images.length})`}
              fill
              className={styles.bg}
              sizes="100vw"
              priority={i === 0}
              quality={80}
            />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <div className={`${styles.dots} ${vertical ? styles.dotsY : ""}`}>
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
              aria-label={`${i + 1} / ${images.length}`}
              aria-current={i === active}
              onClick={() => scrollToIndex(i, "smooth")}
            />
          ))}
        </div>
      )}
    </div>
  );
}
