/**
 * Jednorazowa migracja tresci projektow z numerycznych kluczy CRA
 * do nazwanych kluczy next-intl.
 *
 * Numery sa identyczne we wszystkich trzech jezykach, wiec role wyznaczamy
 * raz na pliku norweskim i stosujemy te sama mape do pl/en.
 *
 * Uruchomienie:  node scripts/migrate-content.mjs [--write]
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const LOCALES = ["no", "pl", "en"];
const WRITE = process.argv.includes("--write");

const NS_TO_SLUG = {
  houseEidsberg: "enebolig-eidsberg",
  lazMoss: "bad-moss",
  domDrammen: "enebolig-drammen",
  mjondalen: "leilighet-mjondalen",
  salonSandvika: "stue-sandvika",
  salonGlm: "stue-glamour",
  studioGdynia: "leilighet-gdynia",
  "flat-gorlice-poland": "leilighet-gorlice",
};

// Etykiety rozpoznawane po stronie norweskiej (kolejnosc = rola)
const NO_LABEL = {
  categories: ["Kategorier:"],
  client: ["Klient:", "Kunde:"],
  completed: ["Fullført:"],
  concept: ["Konsept:"],
  projectType: ["Prosjekttype:"],
  tags: ["Etiketter:", "Tagger:", "Tags:"],
  share: ["Del:"],
};

const roleOf = (value) => {
  const v = String(value).trim();
  for (const [role, variants] of Object.entries(NO_LABEL)) {
    if (variants.includes(v)) return role;
  }
  return null;
};

const load = (locale) =>
  JSON.parse(fs.readFileSync(path.join(ROOT, "..", "public", "locales", locale, "translation.json"), "utf8"));

const src = Object.fromEntries(LOCALES.map((l) => [l, load(l)]));
const out = Object.fromEntries(LOCALES.map((l) => [l, {}]));
const report = [];

for (const [ns, slug] of Object.entries(NS_TO_SLUG)) {
  const noNs = src.no[ns];
  if (!noNs) {
    report.push(`BRAK namespace: ${ns}`);
    continue;
  }

  // klucze numeryczne rosnaco = kolejnosc wystapienia w oryginalnym JSX
  const keys = Object.keys(noNs)
    .filter((k) => /^\d+$/.test(k) && String(noNs[k]).trim())
    .sort((a, b) => Number(a) - Number(b));

  const metaStart = keys.findIndex((k) => roleOf(noNs[k]) === "categories");
  if (metaStart < 0) {
    report.push(`${ns}: nie znaleziono "Kategorier:" — pomijam`);
    continue;
  }

  // --- naglowek: [back] [eyebrow?] [title] [body...] ---
  const head = keys.slice(0, metaStart);
  const backKey = head[0];
  let i = 1;
  const isEyebrow = head[i] && String(noNs[head[i]]) === String(noNs[head[i]]).toUpperCase()
    && String(noNs[head[i]]).length < 24;
  const eyebrowKey = isEyebrow ? head[i++] : null;
  const titleKey = head[i++];
  const bodyKeys = head.slice(i);

  // --- metadane: pary etykieta/wartosc, potem tagi az do "Del:" ---
  const meta = {};
  const tagKeys = [];
  let inTags = false;
  for (let j = metaStart; j < keys.length; j++) {
    const k = keys[j];
    const role = roleOf(noNs[k]);
    if (role === "share") break;
    if (role === "tags") { inTags = true; continue; }
    if (inTags) { tagKeys.push(k); continue; }
    if (role) { meta[role] = keys[j + 1]; j++; }
  }

  const HEADING_MAX = 40;
const asBlock = (v) =>
  v.length <= HEADING_MAX && !/[.!?]\s*$|\w{4,}\s+\w{4,}\s+\w{4,}/.test(v)
    ? {type: "heading", value: v.replace(/:$/, "")}
    : {type: "text", value: v};

/** Norske maneder skrives med liten forbokstav; "March" var engelsk i no-filen. */
const NO_MONTH_FIX = {march: "mars", may: "mai", october: "oktober"};
const fixDate = (v, locale) => {
  if (!v) return v;
  let out = v.trim();
  if (locale === "no" || locale === "pl") {
    out = out.replace(/^([A-Za-zÅÆØåæøĄĆĘŁŃÓŚŹŻąćęłńóśźż]+)/, (m) => {
      const low = m.toLowerCase();
      return NO_MONTH_FIX[low] ?? low;
    });
  }
  return out;
};

const dateKind = meta.completed ? "completed" : meta.concept ? "concept" : null;
  const dateKey = meta.completed ?? meta.concept ?? null;

  for (const l of LOCALES) {
    const nsL = src[l][ns] ?? {};
    const pick = (k) => (k && String(nsL[k] ?? "").trim()) || null;
    const entry = {};
    if (eyebrowKey) entry.eyebrow = pick(eyebrowKey);
    entry.title = pick(titleKey);
    entry.body = bodyKeys.map(pick).filter(Boolean).map(asBlock);
    if (meta.categories) entry.category = pick(meta.categories);
    if (meta.client) entry.client = pick(meta.client);
    if (meta.projectType) entry.projectType = pick(meta.projectType);
    if (dateKey) { entry.date = fixDate(pick(dateKey), l); entry.dateKind = dateKind; }
    entry.tags = tagKeys.map(pick).filter(Boolean);
    out[l][slug] = entry;
  }

  const noEntry = out.no[slug];
  report.push(
    `${slug.padEnd(22)} eyebrow:${eyebrowKey ? "tak" : "NIE "} body:${noEntry.body.length} ` +
    `tagi:${noEntry.tags.length} data:${noEntry.dateKind ?? "BRAK"} (${noEntry.date ?? "-"}) ` +
    `back:"${noNs[backKey]}"`
  );
  const heads = noEntry.body.filter((b) => b.type === "heading").map((b) => b.value);
  if (heads.length) report.push(`   naglowki: ${heads.join(" | ")}`);
  if (noEntry.date && noEntry.date !== String(src.no[ns][dateKey]).trim()) {
    report.push(`   data poprawiona: "${String(src.no[ns][dateKey]).trim()}" -> "${noEntry.date}"`);
  }

  // braki w tlumaczeniach
  for (const l of ["pl", "en"]) {
    const a = out.no[slug], b = out[l][slug];
    if (b.body.length !== a.body.length) report.push(`   ! ${l}: body ${b.body.length} vs no ${a.body.length}`);
    if (b.tags.length !== a.tags.length) report.push(`   ! ${l}: tagi ${b.tags.length} vs no ${a.tags.length}`);
    if (!b.title) report.push(`   ! ${l}: brak title`);
  }
}

console.log(report.join("\n"));

if (WRITE) {
  for (const l of LOCALES) {
    const file = path.join(ROOT, "messages", `${l}.json`);
    const msgs = JSON.parse(fs.readFileSync(file, "utf8"));
    msgs.Projects = out[l];
    fs.writeFileSync(file, JSON.stringify(msgs, null, 2) + "\n");
  }
  console.log("\nZapisano Projects.* do messages/{no,pl,en}.json");
} else {
  console.log("\n(tryb raportu — uruchom z --write, zeby zapisac)");
}
