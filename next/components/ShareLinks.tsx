import {SITE_URL} from "@/lib/site";

/**
 * Vanlige lenker, ikke onClick + window.open — de fungerer uten JS og
 * kan server-rendres. Pinterest-knappen i CRA sendte literalen
 * "https://yourwebsite.com/path-to-image.jpg" som bilde; her sendes
 * prosjektets eget forstebilde.
 */
export default function ShareLinks({
  url,
  title,
  image,
  className,
}: {
  url: string;
  title: string;
  image?: string;
  className?: string;
}) {
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);
  const media = image ? encodeURIComponent(`${SITE_URL}${image}`) : "";

  const links = [
    {label: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${u}`},
    {label: "X", href: `https://x.com/intent/tweet?url=${u}&text=${t}`},
    {
      label: "Pinterest",
      href: `https://pinterest.com/pin/create/button/?url=${u}&media=${media}&description=${t}`,
    },
  ];

  return (
    <>
      {links.map((l) => (
        <a
          key={l.label}
          className={className}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          {l.label}
        </a>
      ))}
    </>
  );
}
