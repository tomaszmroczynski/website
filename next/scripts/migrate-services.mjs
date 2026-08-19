/**
 * Migracja tresci uslug z numerycznych kluczy CRA do nazwanych.
 * Ta sama zasada co przy projektach: numery sa identyczne we wszystkich
 * jezykach, wiec role wyznaczamy raz na pliku norweskim.
 *
 * Metadane (Klient / Fullfort / Prosjekttype) sa na stronach uslug
 * pozostaloscia po skopiowaniu szablonu strony projektu — "Klient: Projekt",
 * "Fullfort: 30.09.2020" na stronie oferty nic nie znaczy. Pomijane.
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const LOCALES = ["no", "pl", "en"];
const WRITE = process.argv.includes("--write");

const NS_TO_SLUG = {
  interiorArchitecture: "interiorarkitekt",
  "home-staging": "boligstyling",
  decoration: "interiordekorasjon",
  "dekorasjon-av-arrangementer": "eventdekorasjon",
};

/** expertness: pary tytul + opis, w kolejnosci jak na stronie /tjenester */
const OVERVIEW = {
  interiorarkitekt: ["1800", "1801"],
  interiordekorasjon: ["1803", "1804"],
  boligstyling: ["1806", "1807"],
  eventdekorasjon: ["1809", "1810"],
};

const META_LABELS = [
  "Kategorier:", "Klient:", "Kunde:", "Fullført:", "Konsept:",
  "Prosjekttype:", "Etiketter:", "Tagger:", "Tags:", "Del:",
];

/**
 * Uslugi to listy pakietow, nie proza. Naglowek rozpoznajemy po dwukropku
 * na koncu ("GRUNNLEGGENDE PAKKE:", "Dette prosjektet vil inkludere:"),
 * a nie po dlugosci — pozycje listy bywaja krotkie i wpadaly w heurystyke
 * dlugosciowa uzyta przy projektach.
 */
const asBlock = (v) =>
  /:\s*$/.test(v)
    ? {type: "heading", value: v.replace(/:\s*$/, "")}
    : {type: "text", value: v};

const load = (l) =>
  JSON.parse(fs.readFileSync(path.join(ROOT, "..", "public", "locales", l, "translation.json"), "utf8"));

const src = Object.fromEntries(LOCALES.map((l) => [l, load(l)]));
const out = Object.fromEntries(LOCALES.map((l) => [l, {}]));
const report = [];

for (const [ns, slug] of Object.entries(NS_TO_SLUG)) {
  const noNs = src.no[ns];
  if (!noNs) { report.push(`BRAK ${ns}`); continue; }

  const keys = Object.keys(noNs)
    .filter((k) => /^\d+$/.test(k) && String(noNs[k]).trim())
    .sort((a, b) => Number(a) - Number(b));

  let metaStart = keys.findIndex((k) => META_LABELS.includes(String(noNs[k]).trim()));
  // Gdy brakuje etykiety "Kategorier:", jej wartosc ("Interiør") zostaje
  // osierocona tuz przed pierwsza znaleziona etykieta — tez nalezy do metadanych.
  if (metaStart > 0 && String(noNs[keys[metaStart]]).trim() !== "Kategorier:") metaStart -= 1;
  const head = metaStart < 0 ? keys : keys.slice(0, metaStart);

  const [, titleKey, introKey, ...bodyKeys] = head; // [0] = "Tilbake"

  for (const l of LOCALES) {
    const nsL = src[l][ns] ?? {};
    const ov = src[l].expertness ?? {};
    const pick = (k) => (k && String(nsL[k] ?? "").trim()) || null;
    out[l][slug] = {
      title: pick(titleKey),
      intro: pick(introKey),
      body: bodyKeys.map(pick).filter(Boolean).map(asBlock),
      summary: String(ov[OVERVIEW[slug][1]] ?? "").trim() || null,
      cardTitle: String(ov[OVERVIEW[slug][0]] ?? "").trim() || null,
    };
  }

  const e = out.no[slug];
  const heads = e.body.filter((b) => b.type === "heading").map((b) => b.value);
  report.push(`${slug.padEnd(20)} body:${e.body.length} naglowki:[${heads.join(" | ")}]`);
  for (const l of ["pl", "en"]) {
    const b = out[l][slug];
    if (b.body.length !== e.body.length) report.push(`   ! ${l}: body ${b.body.length} vs ${e.body.length}`);
    if (!b.title || !b.summary) report.push(`   ! ${l}: brak title/summary`);
  }
}

console.log(report.join("\n"));

if (WRITE) {
  for (const l of LOCALES) {
    const f = path.join(ROOT, "messages", `${l}.json`);
    const m = JSON.parse(fs.readFileSync(f, "utf8"));
    m.Services = out[l];
    for (const ns of [...Object.keys(NS_TO_SLUG), "expertness"]) delete m[ns];
    fs.writeFileSync(f, JSON.stringify(m, null, 2) + "\n");
  }
  console.log("\nZapisano Services.* i usunieto stare namespace'y");
}
