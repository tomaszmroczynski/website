"use client";

import {Children, useCallback, useEffect, useRef} from "react";
import styles from "./CardSlider.module.css";

/**
 * Karuzela kafelkow z autoplayem, na CSS scroll-snap.
 *
 * Dwie decyzje warte odnotowania:
 * - brak duplikowania kafelkow dla petli nieskonczonej. Duplikaty
 *   oznaczalyby te same linki i te same zdjecia dwa razy w HTML, czyli
 *   dokladnie ten rodzaj powtorzenia, ktorego przy SEO unikamy. Zamiast
 *   tego przewijanie chodzi tam i z powrotem — bez widocznego przewiniecia
 *   od konca na poczatek.
 * - brak pauzy na hover, tak jak pauseOnHover: false w oryginale.
 */
export default function CardSlider({
  children,
  interval = 2000,
}: {
  children: React.ReactNode;
  interval?: number;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const dirRef = useRef<1 | -1>(1);
  const items = Children.toArray(children);

  const step = useCallback((behavior: ScrollBehavior) => {
    const el = trackRef.current;
    if (!el) return 0;
    const slide = el.firstElementChild as HTMLElement | null;
    if (!slide) return 0;
    const delta = slide.getBoundingClientRect().width + parseFloat(getComputedStyle(el).gap || "0");
    const max = el.scrollWidth - el.clientWidth;
    let target = el.scrollLeft + delta * dirRef.current;
    if (target > max - 1) {
      target = max;
      dirRef.current = -1;
    } else if (target < 1) {
      target = 0;
      dirRef.current = 1;
    }
    el.scrollTo({left: target, behavior});
    return target;
  }, []);

  useEffect(() => {
    if (items.length < 3) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(() => {
      const el = trackRef.current;
      if (!el || document.hidden) return;
      const before = el.scrollLeft;
      const target = step("smooth");
      // Plynne przewijanie bywa ignorowane; wtedy przeskakujemy bez animacji
      window.setTimeout(() => {
        const el2 = trackRef.current;
        if (el2 && Math.abs(el2.scrollLeft - before) < 2 && Math.abs(target - before) > 2) {
          el2.scrollTo({left: target, behavior: "instant"});
        }
      }, 400);
    }, interval);

    return () => window.clearInterval(id);
  }, [items.length, interval, step]);

  return (
    <div className={styles.track} ref={trackRef}>
      {items.map((child, i) => (
        <div className={styles.slide} key={i}>
          {child}
        </div>
      ))}
    </div>
  );
}
