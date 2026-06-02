/**
 * Generates llms.txt and Markdown files from translation.json (original texts, unchanged).
 * Run before build: npm run generate:llm
 */
const fs = require("fs");
const path = require("path");

const SITE = "https://limes-interior.no";
const ROOT = path.join(__dirname, "..");
const LOCALES_DIR = path.join(ROOT, "public", "locales");
const AI_DIR = path.join(ROOT, "public", "ai");

const SKIP_VALUES = new Set([
  "return",
  "tilbake",
  "del:",
  "kategorier:",
  "klient:",
  "kunde:",
  "fullført:",
  "konsept:",
  "etiketter:",
  "tags:",
  "tagger:",
  "interiør",
  "projekt ",
  "prosjekttype:",
  "privat",
  "privatperson",
  "inspirasjon",
  "dekorasjon",
  "interiørarkitektur",
  "interiørdesign",
  "arrangementer",
  "minimum",
  "full",
  "eksklusiv",
  "minimalistisk",
  "eventdekorasjon",
  "husdekorasjon",
  "hjemmedekorasjon",
]);

const PROJECT_NAMESPACES = [
  { ns: "studioGdynia", slug: "studioGdynia", titleKeys: ["2544", "2551"] },
  { ns: "houseEidsberg", slug: "houseEidsberg", titleKeys: ["2260", "2551"] },
  { ns: "salonGlm", slug: "salonGlm", titleKeys: ["2551", "2260"] },
  { ns: "lazMoss", slug: "lazMoss", titleKeys: ["2551", "2260"] },
  { ns: "mjondalen", slug: "mjondalen", titleKeys: ["2551", "2260"] },
  { ns: "domDrammen", slug: "domDrammen", titleKeys: ["2551", "2260"] },
  { ns: "flat-gorlice-poland", slug: "flat-gorlice-poland", titleKeys: ["2260", "2551"] },
  { ns: "salonSandvika", slug: "salonSandvika", titleKeys: ["2256", "2551"] },
];

const SERVICE_NAMESPACES = [
  { ns: "interiorArchitecture", slug: "interiorArchitecture" },
  { ns: "decoration", slug: "decoration" },
  { ns: "home-staging", slug: "home-staging" },
  { ns: "dekorasjon-av-arrangementer", slug: "dekorasjon-av-arrangementer" },
];

function loadLocale(lang) {
  const file = path.join(LOCALES_DIR, lang, "translation.json");
  const raw = fs.readFileSync(file, "utf8").replace(/^\uFEFF/, "");
  return JSON.parse(raw);
}

function shouldSkip(text) {
  const t = text.trim();
  if (t.length < 4) return true;
  const lower = t.toLowerCase();
  if (SKIP_VALUES.has(lower)) return true;
  if (/^\d/.test(t) && t.length < 12) return false;
  if (/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember|january|march|september)/i.test(t) && t.length < 30) return true;
  if (/^\d{1,2}\.\s*(januar|september|desember)/i.test(t)) return true;
  return false;
}

function pickTitle(section, titleKeys) {
  for (const key of titleKeys || []) {
    if (section[key] && section[key].trim()) return section[key].trim();
  }
  for (const key of ["2256", "2260", "2551", "2544", "2313", "2317"]) {
    if (section[key] && section[key].trim()) return section[key].trim();
  }
  return null;
}

function sectionParagraphs(section) {
  const seen = new Set();
  const out = [];
  for (const value of Object.values(section)) {
    if (typeof value !== "string") continue;
    const text = value.trim();
    if (!text || shouldSkip(text) || seen.has(text)) continue;
    seen.add(text);
    out.push(text);
  }
  return out;
}

function mdSection(title, paragraphs) {
  if (!paragraphs.length) return "";
  let md = `## ${title}\n\n`;
  for (const p of paragraphs) {
    if (p.endsWith(":") && p.length < 40) {
      md += `### ${p.replace(/:$/, "")}\n\n`;
    } else {
      md += `${p}\n\n`;
    }
  }
  return md;
}

function generateOmMeg(t, lang) {
  const labels = {
    no: {
      file: "om-meg-no.md",
      h1: "Anna Rasinska – Limes Interiør",
      intro: "Originaltekster fra nettsiden (norsk). Interiørarkitekt i Eidsberg, Akershus og Oslo.",
      about: "Om meg",
      passion: "Min lidenskap",
      areas: "Områder",
      faq: "Ofte stilte spørsmål",
      contact: "Kontakt",
      footer: "Avslutning",
    },
    en: {
      file: "om-meg-en.md",
      h1: "Anna Rasinska – Limes Interior",
      intro: "Original website texts (English). Interior architect in Eidsberg, Akershus and Oslo.",
      about: "About me",
      passion: "My passion",
      areas: "Areas",
      faq: "FAQ",
      contact: "Contact",
      footer: "Closing",
    },
    pl: {
      file: "om-meg-pl.md",
      h1: "Anna Rasinska – Limes Interior",
      intro: "Oryginalne teksty ze strony (polski). Architekt wnętrz w Eidsberg, Akershus i Oslo.",
      about: "O mnie",
      passion: "Pasja",
      areas: "Obszary",
      faq: "FAQ",
      contact: "Kontakt",
      footer: "Zakończenie",
    },
  }[lang];

  let md = `# ${labels.h1}\n\n> ${labels.intro}\n\n`;
  md += `Nettside: ${SITE}/about\n\n`;

  if (t.Abouthome) {
    md += `## ${labels.about}\n\n`;
    md += sectionParagraphs(t.Abouthome).join("\n\n") + "\n\n";
  }
  if (t.About) {
    md += `## ${labels.passion}\n\n`;
    md += sectionParagraphs(t.About).join("\n\n") + "\n\n";
  }
  if (t.Omrader) {
    md += `## ${labels.areas}\n\n`;
    md += sectionParagraphs(t.Omrader).join("\n\n") + "\n\n";
  }
  if (t.Faq) {
    md += `## ${labels.faq}\n\n`;
    const faq = t.Faq;
    for (let i = 1; i <= 5; i++) {
      const q = faq[`q${i}`];
      const a = faq[`a${i}`];
      if (q && a) md += `**${q}**\n\n${a}\n\n`;
    }
  }
  if (t.Contact) {
    md += `## ${labels.contact}\n\n`;
    md += sectionParagraphs(t.Contact)
      .filter((p) => !p.startsWith("form_"))
      .join("\n\n") + "\n\n";
  }
  if (t.Footer) {
    md += `## ${labels.footer}\n\n`;
    md += sectionParagraphs(t.Footer)
      .filter((p) => !["Eidsberg", "Askim", "Moss", "Fredrikstad", "Sarpsborg", "Halden", "Ski", "Lillestrøm", "Oslo", "Akershus", "Personvern"].includes(p))
      .join("\n\n") + "\n\n";
  }

  return { file: labels.file, content: md };
}

function generateTjenester(t, lang) {
  const labels = {
    no: { file: "tjenester-no.md", h1: "Tjenester – Anna Rasinska, Limes Interiør", intro: "Originaltekster om tjenester (norsk)." },
    en: { file: "tjenester-en.md", h1: "Services – Anna Rasinska, Limes Interior", intro: "Original service texts (English)." },
    pl: { file: "tjenester-pl.md", h1: "Usługi – Anna Rasinska, Limes Interior", intro: "Oryginalne opisy usług (polski)." },
  }[lang];

  let md = `# ${labels.h1}\n\n> ${labels.intro}\n\n`;
  md += `Nettside: ${SITE}/expertness\n\n`;

  if (t.expertness) {
    md += mdSection("Oversikt", sectionParagraphs(t.expertness));
  }
  for (const { ns, slug } of SERVICE_NAMESPACES) {
    if (!t[ns]) continue;
    const title = pickTitle(t[ns]) || ns;
    md += mdSection(title, sectionParagraphs(t[ns]));
    md += `Side: ${SITE}/${slug}\n\n`;
  }

  return { file: labels.file, content: md };
}

function generateProsjekter(t, lang) {
  const labels = {
    no: { file: "prosjekter-no.md", h1: "Prosjekter – Anna Rasinska, Limes Interiør", intro: "Originaltekster fra porteføljen (norsk)." },
    en: { file: "prosjekter-en.md", h1: "Projects – Anna Rasinska, Limes Interior", intro: "Original portfolio texts (English)." },
    pl: { file: "prosjekter-pl.md", h1: "Projekty – Anna Rasinska, Limes Interior", intro: "Oryginalne opisy projektów (polski)." },
  }[lang];

  let md = `# ${labels.h1}\n\n> ${labels.intro}\n\n`;
  md += `Nettside: ${SITE}/work\n\n`;

  for (const { ns, slug, titleKeys } of PROJECT_NAMESPACES) {
    if (!t[ns]) continue;
    const title = pickTitle(t[ns], titleKeys) || ns;
    md += mdSection(title, sectionParagraphs(t[ns]));
    md += `Side: ${SITE}/${slug}\n\n`;
  }

  return { file: labels.file, content: md };
}

function generateLlmsTxt() {
  return `# Limes Interiør – Anna Rasinska

> Anna Rasinska er utdannet sivilarkitekt og interiørarkitekt. Limes Interiør holder til i Eidsberg, Akershus, og tar oppdrag i Askim, Moss, Fredrikstad, Sarpsborg, Halden, Ski, Lillestrøm og Oslo.

Anna Rasinska spesialiserer seg på interiørarkitektur, interiørdekorasjon, home staging (boligstyling) og dekorasjon av arrangementer for private hjem og næringslokaler.

## Kontakt

- Navn: Anna Rasinska
- Firma: Limes Interiør Anna Rasinska
- Adresse: Finnestadveien 371, 1880 Eidsberg, Norge
- Telefon: +47 947 12 654
- E-post: studio@limes-interior.no
- Org.nr: 925 621 102
- Nettside: ${SITE}

## Tjenester

- Interiørarkitektur – ${SITE}/interiorArchitecture
- Interiørdekorasjon – ${SITE}/decoration
- Home staging / boligstyling – ${SITE}/home-staging
- Dekorasjon av arrangementer – ${SITE}/dekorasjon-av-arrangementer

## Hovedsider

- ${SITE}/
- ${SITE}/about
- ${SITE}/work
- ${SITE}/contact
- ${SITE}/expertness

## Full tekst for AI (Markdown – originaltekster, uendret)

Norsk (originalspråk):
- ${SITE}/ai/om-meg-no.md
- ${SITE}/ai/tjenester-no.md
- ${SITE}/ai/prosjekter-no.md

English:
- ${SITE}/ai/om-meg-en.md
- ${SITE}/ai/tjenester-en.md
- ${SITE}/ai/prosjekter-en.md

Polski:
- ${SITE}/ai/om-meg-pl.md
- ${SITE}/ai/tjenester-pl.md
- ${SITE}/ai/prosjekter-pl.md

## Full tekst (JSON-kilde)

- ${SITE}/locales/no/translation.json
- ${SITE}/locales/en/translation.json
- ${SITE}/locales/pl/translation.json

## Søkeord

interiørarkitekt Eidsberg, interiørarkitekt Askim, interiørarkitekt Akershus, interiørarkitekt Oslo, Anna Rasinska, Limes Interiør, boligstyling, home staging, interiørdesign, interiørdekorasjon
`;
}

function main() {
  if (!fs.existsSync(AI_DIR)) fs.mkdirSync(AI_DIR, { recursive: true });

  const langs = ["no", "en", "pl"];
  for (const lang of langs) {
    const t = loadLocale(lang);
    for (const gen of [generateOmMeg, generateTjenester, generateProsjekter]) {
      const { file, content } = gen(t, lang);
      fs.writeFileSync(path.join(AI_DIR, file), content, "utf8");
      console.log(`Wrote public/ai/${file}`);
    }
  }

  fs.writeFileSync(path.join(ROOT, "public", "llms.txt"), generateLlmsTxt(), "utf8");
  console.log("Wrote public/llms.txt");
}

main();
