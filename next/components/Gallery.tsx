"use client";

import {useCallback, useEffect, useState} from "react";
import Image from "next/image";
import type {ProjectImage} from "@/lib/images";
import styles from "./Gallery.module.css";

type Props = {
  images: ProjectImage[];
  /** Ferdig oversatt alt-tekst for prosjektet; indeks legges til per bilde. */
  alt: string;
  closeLabel: string;
};

/**
 * Rutenett, ikke karusell. Alle bildene ligger i HTML-en og lastes lazy,
 * slik at de faktisk kan indekseres — en karusell viser ett om gangen og
 * lar resten vente pa JavaScript.
 */
export default function Gallery({images, alt, closeLabel}: Props) {
  const [open, setOpen] = useState<number | null>(null);

  const move = useCallback(
    (step: number) =>
      setOpen((i) => (i === null ? i : (i + step + images.length) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, move]);

  return (
    <>
      <div className={styles.grid}>
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            className={styles.cell}
            onClick={() => setOpen(i)}
            aria-label={`${alt} (${i + 1}/${images.length})`}
          >
            <Image
              src={img.src}
              width={img.width}
              height={img.height}
              alt={`${alt} (${i + 1}/${images.length})`}
              className={styles.img}
              sizes="(max-width: 700px) 100vw, (max-width: 1240px) 50vw, 33vw"
              priority={i === 0}
            />
          </button>
        ))}
      </div>

      {open !== null && (
        <div className={styles.lightbox} role="dialog" aria-modal="true" onClick={() => setOpen(null)}>
          <button type="button" className={styles.close} onClick={() => setOpen(null)}>
            {closeLabel}
          </button>
          <button
            type="button"
            className={`${styles.nav} ${styles.prev}`}
            aria-label="←"
            onClick={(e) => { e.stopPropagation(); move(-1); }}
          >
            ‹
          </button>
          <Image
            src={images[open].src}
            width={images[open].width}
            height={images[open].height}
            alt={`${alt} (${open + 1}/${images.length})`}
            sizes="100vw"
          />
          <button
            type="button"
            className={`${styles.nav} ${styles.next}`}
            aria-label="→"
            onClick={(e) => { e.stopPropagation(); move(1); }}
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
