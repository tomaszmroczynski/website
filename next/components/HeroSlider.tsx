"use client";

import {useCallback, useEffect, useRef, useState} from "react";
import Image from "next/image";
import type {ProjectImage} from "@/lib/images";
import styles from "./HeroSlider.module.css";

type Props = {images: ProjectImage[]; alt: string; interval?: number};

/**
 * Slider bygget pa CSS scroll-snap i stedet for react-animated-slider.
 *
 * Poenget for indeksering: alle bildene ligger i den serverrendrede
 * HTML-en fra forste byte. Et JS-drevet karusellbibliotek monterer bare
 * noen av slidene, og resten finnes ikke for klienten har kjort.
 * Her gjor JavaScript kun en ting — flytter scrollposisjonen. Uten JS
 * er dette fortsatt en fungerende, swipe-bar bildestripe.
 */
export default function HeroSlider({images, alt, interval = 2000}: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((i: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({left: el.clientWidth * i, behavior: "smooth"});
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => setActive(Math.round(el.scrollLeft / el.clientWidth));
    el.addEventListener("scroll", onScroll, {passive: true});
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (paused || images.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      const el = trackRef.current;
      if (!el) return;
      const next = (Math.round(el.scrollLeft / el.clientWidth) + 1) % images.length;
      el.scrollTo({left: el.clientWidth * next, behavior: "smooth"});
    }, interval);
    return () => window.clearInterval(id);
  }, [paused, images.length, interval]);

  return (
    <div
      className={styles.wrapper}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className={styles.track} ref={trackRef}>
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
        <div className={styles.dots}>
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
              aria-label={`${i + 1} / ${images.length}`}
              aria-current={i === active}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
