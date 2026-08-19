/**
 * Sprawdza, ze kazda sciezka do obrazu wskazuje na istniejacy plik,
 * z dokladnoscia do wielkosci liter. Windows tego nie wylapie sam —
 * jego system plikow jest case-insensitive, a Vercel serwuje z Linuksa,
 * gdzie /img/lazMoss/front.webp i .../Front.webp to dwa rozne adresy.
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const problems = [];

function check(p, where) {
  const rel = p.replace(/^\//, "");
  const abs = path.join(ROOT, "public", rel);
  const dir = path.dirname(abs);
  const name = path.basename(abs);
  if (!fs.existsSync(dir)) return problems.push(`${where}: brak katalogu — ${p}`);
  const real = fs.readdirSync(dir).find((f) => f.toLowerCase() === name.toLowerCase());
  if (!real) problems.push(`${where}: brak pliku — ${p}`);
  else if (real !== name) problems.push(`${where}: wielkosc liter — ${p} (jest ${real})`);
}

const images = fs.readFileSync(path.join(ROOT, "lib", "images.ts"), "utf8");
for (const m of images.matchAll(/src: "([^"]+)"/g)) check(m[1], "images.ts");

for (const loc of ["no", "pl", "en"]) {
  const msgs = JSON.parse(fs.readFileSync(path.join(ROOT, "messages", `${loc}.json`), "utf8"));
  for (const [slug, e] of Object.entries(msgs.Projects ?? {})) {
    if (e.cover) check(e.cover, `messages/${loc} ${slug}.cover`);
  }
}

if (problems.length) {
  console.error("Problemy ze sciezkami obrazow:\n" + problems.map((p) => "  " + p).join("\n"));
  process.exit(1);
}
console.log("Wszystkie sciezki obrazow OK (z uwzglednieniem wielkosci liter)");
