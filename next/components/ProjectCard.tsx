import Image from "next/image";
import {Link} from "@/i18n/navigation";

/**
 * Karta z design systemu. Znaczniki dokladnie wedlug przepisu
 * z references/components.md: __tag i __name to <div>, __scrim i __cta
 * to <span>. Uzycie <span> dla wszystkiego sklejalo tag z nazwa w jedna
 * linie, bo elementy inline nie lamia sie na osobne wiersze.
 *
 * Podkreslenie CTA rozsuwa sie z 40 do 110 px na hover — to zachowanie
 * jest w limes.css, nie tutaj.
 */
export default function ProjectCard({
  href,
  src,
  alt,
  tag,
  name,
  cta,
  width = 1920,
  height = 1080,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
}: {
  href: string;
  src: string;
  alt: string;
  tag?: string | null;
  name: string;
  cta: string;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <Link href={href} className="li-project-card">
      <Image src={src} alt={alt} width={width} height={height} sizes={sizes} priority={priority} />
      <span className="li-project-card__scrim" />
      <div className="li-project-card__body">
        {tag ? <div className="li-project-card__tag">{tag}</div> : null}
        <div className="li-project-card__name">{name}</div>
        <span className="li-project-card__cta">{cta}</span>
      </div>
    </Link>
  );
}
