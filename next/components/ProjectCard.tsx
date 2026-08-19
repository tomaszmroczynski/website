import Image from "next/image";
import {Link} from "@/i18n/navigation";

/**
 * Karta z design systemu: .li-project-card wraz z __scrim, __body, __tag,
 * __name i __cta. Podkreslenie CTA rozsuwa sie na hover z 40 do 110 px —
 * to zachowanie jest w limes.css, nie tutaj.
 *
 * Uzywana na /prosjekter, /tjenester i na stronie glownej, zeby te trzy
 * miejsca nie rozjechaly sie stylistycznie.
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
      <span className="li-project-card__body">
        {tag ? <span className="li-project-card__tag">{tag}</span> : null}
        <span className="li-project-card__name">{name}</span>
        <span className="li-project-card__cta">{cta}</span>
      </span>
    </Link>
  );
}
